import React from "react";
import { useDispatch } from "react-redux";
import Web3 from "web3";

//IMPORTING STYLESHEETS

import "../../styles/patterns/modal.scss";

//IMPORTING COMPONENTS

import Button from "../../components/button";
import * as actionType from "../../redux/constants/actionsTypes";

//IMPORTING MEDIA ASSETS

// import warning from "../../assets/icons/warning.svg";
import wrongNetworkIcon from "../../assets/icons/wrong_network.svg";
import closeIcon from "../../assets/icons/close.svg";
import paymentConfirmedIcon from "../../assets/icons/paymentConfirmed.svg";
import paymentProcessingIcon from "../../assets/icons/paymentProcessing.svg";
import clockIcon from "../../assets/icons/clock.svg";
import metamask from "../../assets/icons/metamask.svg";
import mathWallet from "../../assets/icons/mathWallet.svg";
import tokenPocket from "../../assets/icons/tokenPocket.svg";
import trustWallet from "../../assets/icons/trustWallet.svg";
import vector from "../../assets/icons/vector.svg";
import walletConnect from "../../assets/icons/walletConnect.svg";
import binanceChain from "../../assets/icons/binanceChain.svg";
import settings from "../../assets/icons/settings.svg";
import help_circle from "../../assets/icons/help_circle.svg";

//GET USER BALANCE

export const balance = async (address) => {
  const balance1 = await window.web3.eth.getBalance(address);
  const balance2 = Web3.utils.fromWei(balance1, "ether");

  return balance2;
};

const Modal = ({ variant, setIsOpenModal }) => {
  const dispatch = useDispatch();

  const connect = async () => {
    dispatch({
      type: actionType.START_LOADING,
    });
    // CONNECTING METAMASK WALLET
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        // await window.ethereum.enable()

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const res = await balance(window.ethereum.selectedAddress);
        localStorage.setItem(
          "user_id",
          JSON.stringify(window.ethereum.selectedAddress)
        );

        dispatch({
          type: actionType.CONNECT,
          payload: {
            address: Web3.utils.toChecksumAddress(accounts[0]),
            balance: res,
          },
        });
        dispatch({
          type: actionType.STOP_LOADING,
        });
        setIsOpenModal(false);
      }
      if (window.ethereum === undefined) {
        dispatch({
          type: actionType.STOP_LOADING,
        });
        alert("Install metamask");
      }
    } catch (err) {
      dispatch({
        type: actionType.STOP_LOADING,
      });
      console.log(err);
    }
  };
  //RENDER WRONG NETWORK

  const renderWrongNetwork = (
    <div className="modal">
      <div className="flex">
        <img src={wrongNetworkIcon} alt="wrongNetwork" />
        <p className="text_regular_24_w600">Wrong network</p>
      </div>
      <div>
        <p className="text_regular_16_w500">
          Oops! Seems like you’re in a wrong network
        </p>
      </div>
      <div>
        <p className="text_regular_14_o7">
          It seems you’re connected to a wrong network. Change network to
          Mainnet
        </p>
      </div>

      <div>
        <Button className="btn-primary">Change Network</Button>
      </div>
    </div>
  );

  //RENDER RECENT

  const renderRecent = (
    <div className="recentModal">
      <div>
        <p>
          <img
            src={clockIcon}
            alt="x"
            style={{ width: "32px", height: "32px" }}
          />
          <span className="text_regular_24_w600">Recent transactions</span>
        </p>
        <img
          src={closeIcon}
          alt="x"
          className="cursor"
          style={{ width: "24px", height: "24px" }}
          onClick={() => setIsOpenModal(false)}
        />
      </div>
      <p className="text_regular_14_o7">
        Please connect your crypto wallet to view your recent transactions
      </p>
      <Button className="btn-primary" onClick={() => setIsOpenModal(false)}>
        Close
      </Button>
    </div>
  );

  //RENDER WARNING

  const renderWarning = (
    <div className="modal">
      <div className="flex">
        <img src={wrongNetworkIcon} alt="wrongNetwork" />
        <p className="text_regular_24_w600">Warning</p>
      </div>
      <div>
        <p className="text_regular_14_o7">
          Lottery ticket purchases are final. Your RUBY will not be returned to
          you after you spend it to buy tickets. Tickets are only valid for one
          lottery draw, and will be burned after the draw. Buying tickets does
          not guarantee you will win anything. Please only participate once you
          understand the risks.
        </p>
      </div>
      <div>
        <Button className="btn-primary" onClick={() => setIsOpenModal(false)}>
          I understand
        </Button>
      </div>
    </div>
  );

  const renderPaymentProcessing = (
    <div className="modal paymentModal">
      <div className="flex">
        <img src={paymentProcessingIcon} alt="paymentProcessing" />
        <p className="text_regular_24_w600">Payment processing</p>
      </div>
      <div>
        <p className="text_regular_16_w500">
          Hold tight! Your payment is being processed
        </p>
      </div>
      <div>
        <p className="text_regular_14_o7">
          Please be patient while your payment is be being processed. This
          ususally takes few seconds to complete.
        </p>
      </div>

      <div className="modalFooter">
        <div className="modalFooterIcon">
          <img src="" alt="u" />
        </div>
        <div>
          <p className="text_regular_12 modalFooterText">
            Authenticating with Metamask Wallet
          </p>
        </div>
      </div>
    </div>
  );

  const renderPaymentConfirmed = (
    <div className="modal paymentModal">
      <div className="flex">
        <img src={paymentConfirmedIcon} alt="paymentconfirmed " />
        <p className="text_regular_24_w600">Payment confirmed</p>
      </div>
      <div>
        <p className="text_regular_16_w500">Your payment is Confirmed!</p>
      </div>
      <div>
        <p className="text_regular_14_o7">
          Congratulations! Your payment for Harvest is confirmed and the RUBY
          will now be reflected in your wallet.
        </p>
      </div>

      <div className="modalFooter">
        <div className="modalFooterIcon">
          <img src="" alt="u" />
        </div>
      </div>
    </div>
  );

  const renderConnectWallet = (
    <div className="modal connectWalletModal">
      <div className="modal_header">
        <div>
          <img src={vector} alt="vector" style={{ width: "28px" }} />
          <p className="text_regular_24_w600">Connect to a wallet</p>
        </div>
        <img
          src={closeIcon}
          alt="x"
          style={{ width: "24px", height: "24px" }}
          className="cursor"
          onClick={() => setIsOpenModal(false)}
        />
      </div>
      <div className="walletbox">
        <div className="wallet_card" onClick={() => connect()}>
          <div>
            <img src={metamask} alt="metamask" />
          </div>
          <p>Metamask</p>
        </div>
        <div className="wallet_card">
          <div>
            <img src={trustWallet} alt="trustWallet" />
          </div>
          <p>TrustWallet</p>
        </div>
        <div className="wallet_card">
          <div>
            <img src={mathWallet} alt="mathWallet" />
          </div>
          <p>MathWallet</p>
        </div>
        <div className="wallet_card">
          <div>
            <img src={tokenPocket} alt="tokenPocket" />
          </div>
          <p>TokenPocket</p>
        </div>
        <div className="wallet_card">
          <div>
            <img src={walletConnect} alt="walletConnect" />
          </div>
          <p>WalletConnect</p>
        </div>
        <div className="wallet_card">
          <div>
            <img src={binanceChain} alt="binanceChain" />
          </div>
          <p>Binance Chain</p>
        </div>
      </div>
      <div>
        <p className="text_regular_14_o7 modalFooterText">
          By connecting your wallet, you agree to our{" "}
          <span className="text_regular_14">Terms of Service</span> and our
          <span className="text_regular_14"> Privacy Policy</span>.
        </p>
      </div>
    </div>
  );

  const renderSettings = (
    <div className="modal settingModal ">
      <div className="modal_header">
        <div>
          <img
            src={settings}
            alt="setting"
            style={{ width: "30px", height: "30px" }}
          />
          <p className="text_regular_24_w600">Settings</p>
        </div>
        <img
          src={closeIcon}
          alt="x"
          className="cursor"
          onClick={() => setIsOpenModal(false)}
        />
      </div>
      <p>
        <span className="text_regular_14">Slippage tolerance</span>
        <img src={help_circle} alt="help" />
      </p>
      <div className="slippage_input">
        <input type="text" readOnly value="0.0%" />
        <input type="text" readOnly value="0.0%" />
        <input type="text" readOnly value="0.0%" />
        <div>
          <input type="text" readOnly value="0.0%" />
          <span className="text_regular_14_o7">%</span>
        </div>
      </div>
      <p>
        <span className="text_regular_14">Transaction deadline </span>
        <img src={help_circle} alt="help" />
      </p>
      <div className="transaction">
        <input type="number" value="02" readOnly />
        <span className="text_regular_14_o7">Minutes</span>
      </div>
      <p className="text_regular_14">Audio</p>
    </div>
  );

  const renderSwitchToDesktop = (
    <div className="modal switchToDesktopModal">
      <div className="aboutSwitch">
        <div className="aboutSwitchText">
          <div id="aboutText1">
            <p className="text_regular_14">
              Experience the best in desktop version
            </p>
          </div>
          <div className="aboutText2">
            <p className="text_regular_14_o7">
              This website optimized the best in desktop version. Kindly switch
              your device from mobile to desktop for the best experience
            </p>
          </div>
        </div>
      </div>
      <div className="switchButton">
        <Button className="btn-primary">Request Desktop Site</Button>
      </div>
    </div>
  );

  const renderTokenModal = (
    <div className="modal tokenModal">
      <div className="flex">
        <img src={wrongNetworkIcon} alt="token" />
        <p className="text_regular_24_w600">Select a Token</p>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">
            <img src={closeIcon} alt="x" />
          </div>
        </div>
      </div>

      <form>
        <input
          class="searchToken"
          type="text"
          placeholder="Search token name or paste address"
        />
        <button>
          <img src="" alt="Magnify" />
        </button>
      </form>

      <div className="tokenHead">
        <p className="text_regular_14">Token Name</p>
        <div className="modalDownArrowBox">
          <div className="modalDownArrowIcon">
            <img src={closeIcon} alt="x" />
          </div>
        </div>
      </div>

      <div className="tokenName">
        <div className="tokenBox text_regular_14">
          <img src="" alt="1" />
          <div className="token-name">
            <p>Binance</p>
          </div>
          <div className="smallName">
            <p>bnb</p>
          </div>
        </div>
        <div className="tokenBox text_regular_14">
          <img src="" alt="1" />
          <div className="token-name">
            <p>Etherium</p>
          </div>
          <div className="smallName">
            <p>eth</p>
          </div>
        </div>
        <div className="tokenBox text_regular_14">
          <img src="" alt="1" />
          <div className="token-name">
            <p>Alpaca</p>
          </div>
          <div className="smallName">
            <p>ALP</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReturnOfInvest = (
    <div className="modal investModal">
      <div className="flex">
        <img src={wrongNetworkIcon} alt="invest" />
        <p className="text_regular_24_w600">Return of Invest</p>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">
            <img src={closeIcon} alt="x" />
          </div>
        </div>
      </div>

      <table className="investData text_regular_14">
        <tr>
          <th>TimeFrame</th>
          <th>ROI</th>
          <th>RUBY per $1000</th>
        </tr>
        <tr>
          <td>1 Day</td>
          <td>0.17%</td>
          <td>0.09</td>
        </tr>
        <tr>
          <td>1 Day</td>
          <td>0.17%</td>
          <td>0.09</td>
        </tr>
        <tr>
          <td>30 Day</td>
          <td>5.18%</td>
          <td>2.71</td>
        </tr>
        <tr>
          <td>365 Day (APY)</td>
          <td>84.83%</td>
          <td>44.41</td>
        </tr>
      </table>

      <div className="investAbout">
        <p className="text_regular_12_o7">
          Calculated based on current rates. Compounding 1x daily. Rates are
          estimates provided for your convenience only, and by no means
          represent guaranteed returns.
        </p>
      </div>

      <div className="investLink">
        <p className="text_regular_14_o7">Get RUBY-BNB LP</p>
        <img src={wrongNetworkIcon} alt="w" />
      </div>
    </div>
  );

  const renderLiquidityModal = (
    <div className="modal liquidityModal">
      <div className="flex">
        <img src={wrongNetworkIcon} alt="liquidity" />
        <p className="text_regular_24_w600">Add liquidity</p>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">
            <img src={closeIcon} alt="x" />
          </div>
        </div>
      </div>

      <div className="liquidBox" id="boxL1">
        <div className="boxHead text_regular_14_o7">
          <input placeholder="Input" />

          <div className="boxData">
            <p>Balance: 0</p>
          </div>
        </div>

        <div className="boxFooter">
          <div className="boxData">
            <p>0.0</p>
            <div className="liquidDropDown">
              <img src="" alt="p" />
              <p className="text_regular_12_o7">Binance</p>
              <img src="" alt="p" />
            </div>
          </div>
        </div>
      </div>

      <div className="liquidAdd">
        <img src="" alt="p" />
      </div>

      <div className="liquidBox" id="boxL2">
        <div className="boxHead text_regular_14_o7">
          <input placeholder="Input" />

          <div className="boxData">
            <p>_</p>
          </div>
        </div>

        <div className="boxFooter">
          <div className="boxData">
            <p>0.0</p>
            <div className="liquidDropDown" id="boxL2Drop">
              <p className="text_regular_12_o7">Select Currency</p>
              <img src="" alt="p" />
            </div>
          </div>
        </div>
      </div>

      <Button className="btn-secondary modalButton">Invalid Pair</Button>
    </div>
  );

  switch (variant) {
    case "wrongNetwork":
      return renderWrongNetwork;
    case "recent":
      return renderRecent;
    case "warning":
      return renderWarning;
    case "paymentProcessing":
      return renderPaymentProcessing;
    case "paymentConfirmed":
      return renderPaymentConfirmed;
    case "connectWallet":
      return renderConnectWallet;
    case "settings":
      return renderSettings;
    case "switchToDesktop":
      return renderSwitchToDesktop;
    case "token":
      return renderTokenModal;
    case "returnOfInvestment":
      return renderReturnOfInvest;
    case "liquidity":
      return renderLiquidityModal;
    default:
      return null;
  }
};

export default Modal;
