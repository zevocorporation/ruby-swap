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
import clock from "../../assets/icons/clock.svg";
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
import binance from "../../assets/icons/binance.svg";
import processOn from "../../assets/icons/processOn.svg";
import processDone from "../../assets/icons/processDone.svg";
import questionMark from "../../assets/icons/questionMark.svg";
import settingModal from "../../assets/icons/settingModal.svg";
import tokenModal from "../../assets/icons/tokenModal.svg";
import etherium from "../../assets/icons/etherium.svg";
import alpaca from "../../assets/icons/alpaca.svg";
import bar_chart from "../../assets/icons/bar_chart.svg";
import learn_more from "../../assets/icons/learn_more.svg";
import downarrow_white from "../../assets/icons/downarrow_white.svg";
import liquidity from "../../assets/icons/liquidity.svg";

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
      <div className="modalHead">
        <div className="modalLogo">
          <div id="icon">
            <img src={clock} alt="clock" />
          </div>
        </div>
        <div className="modalText">
          <p>Recent transactions</p>
        </div>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">
            <img src={closeIcon} alt="x" />
          </div>
        </div>
      </div>

      <div className="modalAbout" id="recentAbout">
        <p className="text_regular_14_o7">
          Please connect your crypto wallet to view your recent transactions
        </p>
        <Button className="btn-primary" onClick={() => setIsOpenModal(false)}>
          Close
        </Button>
      </div>
    </div>
  );

  //RENDER WARNING

  // const renderWarning = (
  //   <div className="modal">
  //     <div className="flex">
  //       <img src={wrongNetworkIcon} alt="wrongNetwork" />
  //       <p className="text_regular_24_w600">Warning</p>
  //     </div>
  //     <div>
  //       <p className="text_regular_14_o7">
  //         Lottery ticket purchases are final. Your RUBY will not be returned to
  //         you after you spend it to buy tickets. Tickets are only valid for one
  //         lottery draw, and will be burned after the draw. Buying tickets does
  //         not guarantee you will win anything. Please only participate once you
  //         understand the risks.
  //       </p>
  //     </div>
  //     <div>
  //       <Button className="btn-primary" onClick={() => setIsOpenModal(false)}>
  //         I understand
  //       </Button>
  //     </div>
  //   </div>
  // );

  const renderWarning = <div className="card"></div>;

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
          <img src={processOn} alt="u" />
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
          <img src={processDone} alt="u" />
        </div>
      </div>
    </div>
  );

  const renderConnectWallet = (
    <div className="modal connectWalletModal">
      <div className="flex">
        <img src={vector} alt="wallet" />
        <p className="text_regular_24_w600">Connect to a wallet</p>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">
            <img
              src={closeIcon}
              alt="x"
              className="cursor"
              onClick={() => setIsOpenModal(false)}
            />
          </div>
        </div>
      </div>
      <div className="walletBoxes">
        <div className="walletBox" onClick={() => connect()}>
          <div className="wallentcontain">
            <div className="walletBoxImg">
              <img src={metamask} alt="metamask" />
            </div>
            <div className="walletBoxText text_regular_14">
              <p>Metamask</p>
            </div>
          </div>
        </div>
        <div className="walletBox">
          <div className="wallentcontain">
            <div className="walletBoxImg">
              <img src={trustWallet} alt="trustwallet" />
            </div>
            <div className="walletBoxText text_regular_14">
              <p>TrustWallet</p>
            </div>
          </div>
        </div>
        <div className="walletBox">
          <div className="wallentcontain">
            <div className="walletBoxImg">
              <img src={mathWallet} alt="mathwallet" />
            </div>
            <div className="walletBoxText text_regular_14">
              <p>MathWallet</p>
            </div>
          </div>
        </div>
        <div className="walletBox">
          <div className="wallentcontain">
            <div className="walletBoxImg">
              <img src={tokenPocket} alt="tokenpocket" />
            </div>
            <div className="walletBoxText text_regular_14">
              <p>TokenPocket</p>
            </div>
          </div>
        </div>
        <div className="walletBox">
          <div className="wallentcontain">
            <div className="walletBoxImg">
              <img src={walletConnect} alt="walletconnect" />
            </div>
            <div className="walletBoxText text_regular_14">
              <p>WalletConnect</p>
            </div>
          </div>
        </div>
        <div className="walletBox">
          <div className="wallentcontain">
            <div className="walletBoxImg">
              <img src={binanceChain} alt="binance" />
            </div>
            <div className="walletBoxText text_regular_14">
              <p>Binance Chain</p>
            </div>
          </div>
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
      <div className="flex">
        <img src={settingModal} alt="setting" />
        <p className="text_regular_24_w600">Settings</p>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">
            <img
              src={closeIcon}
              alt="x"
              className="cursor"
              onClick={() => setIsOpenModal(false)}
            />
          </div>
        </div>
      </div>
      <div className="settingBox1">
        <div className="box1Head">
          <p className="settingBoxHeading">Slippage tolerance</p>
          <img src={questionMark} alt="img" />
        </div>
        <div className="dataBox1">
          <input type="text" placeholder="0.1%" />

          <input type="text" placeholder="0.5%" />

          <input type="text" placeholder="1%" />
          <div className="dataBox2">
            <input type="text" placeholder="8%" />
            <p className="text_regular_14_o7">%</p>
          </div>
        </div>
      </div>
      <div className="settingBox1 settingBox2">
        <div className="box1Head">
          <p className="settingBoxHeading">Transaction deadline </p>
          <img src={questionMark} alt="img" />
        </div>
        <div className="dataBox1">
          <div className="dataBox1">
            <input type="text" placeholder="8%" />
            <p className="text_regular_14_o7">Minutes</p>
          </div>
        </div>
      </div>
      <div></div>

      <div className="audioBox">
        <div className="audioText">
          <p className="text_regular_14_o7">Audio</p>
        </div>
        <div className="audioToggle">
          <div className="audioOn"></div>
          <p className="text_regular_12">ON</p>
        </div>
      </div>
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
        <img src={tokenModal} alt="token" />
        <p className="text_regular_24_w600">Select a Token</p>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">
            <img src={closeIcon} alt="img" />
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
            <img src={closeIcon} alt="img" />
          </div>
        </div>
      </div>

      <div className="tokenName">
        <div className="tokenBox text_regular_14">
          <img src={binance} alt="img" />
          <div className="token-name">
            <p>Binance</p>
          </div>
          <div className="smallName">
            <p>bnb</p>
          </div>
        </div>
        <div className="tokenBox text_regular_14">
          <img src={etherium} alt="img" />
          <div className="token-name">
            <p>Etherium</p>
          </div>
          <div className="smallName">
            <p>eth</p>
          </div>
        </div>
        <div className="tokenBox text_regular_14">
          <img src={alpaca} alt="img" />
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
        <img src={bar_chart} alt="invest" />
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
        <img src={learn_more} alt="img" />
      </div>
    </div>
  );

  const renderLiquidityModal = (
    <div className="modal liquidityModal">
      <div className="flex">
        <img src={liquidity} alt="liquidity" />
        <p className="text_regular_24_w600">Add liquidity</p>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">
            <img src={closeIcon} alt="img" />
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
              <img src={binance} alt="img" />
              <p className="text_regular_12_o7">Binance</p>
              <img src={downarrow_white} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="liquidAdd">
        <img src="" alt="img" />
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
              <img src={downarrow_white} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <Button className="btn-secondary modalButton">Invalid Pair</Button>
    </div>
  );

  const renderSaveChart = (
    <div className="card">
      <div className="cardHead" style={{ justifyContent: "left" }}>
        <img src="" alt="t" style={{ width: "75px", height: "78px" }} />
        <p className="text_regular_16">Save Chart</p>
      </div>
      <div className="cardAbout">
        <input type="text" placeholder="https://tradingview_chartimage.in" />
        <p className="text_regular_14_o7">Copy URL</p>
      </div>
      <div className="cardAbout" style={{ justifyContent: "left" }}>
        <img src="" alt="down" />
        <p>Save Image</p>
      </div>
    </div>
  );

  const renderIndicator = (
    <div className="card">
      <div className="cardHead" style={{ justifyContent: "space-between" }}>
        <div>
          <img src="" alt="i" />
          <p>Indicators</p>
        </div>
        <div>
          <img src="" alt="cross" />
        </div>
      </div>
      <div className="cardAbout">
        <input type="text" placeholder="Search token name or paste address" />
        <img src="" alt="i" />
      </div>
      <div className="cardAbout">
        <p>Script Name</p>
        <img src="" alt="i" />
      </div>
      <div className="cardAbout">
        <p className="text_regular_14">Accumulation/Distribution</p>
      </div>
      <div className="cardLine" style={{ marginBottom: "5%" }}></div>
      <div className="cardAbout">
        <p className="text_regular_14">Advance Decline Line</p>
      </div>
      <div className="cardLine" style={{ marginBottom: "5%" }}></div>
      <div className="cardAbout">
        <p className="text_regular_14">Advance Decline Ratio</p>
      </div>
    </div>
  );

  const renderHistory = (
    <div className="card">
      <div className="cardHead" style={{ justifyContent: "space-between" }}>
        <div className="cardHeadRight">
          <img src={clock} alt="i" />
          <p>History</p>
          <p className="text_regular_14">Rounds</p> <p>|</p>
          <p className="text_regular_12_o7">PNL</p>
        </div>
        <div>
          <img src={closeIcon} alt="cross" />
        </div>
      </div>
      <div className="cardHead" style={{ justifyContent: "space-between" }}>
        <div className="cardHeadRight">
          <p>Filter:</p>
          <p>All</p>
          <p>Collected</p>
          <p>Uncollected</p>
        </div>
      </div>
      <div className="cardAbout">
        <p className="text_regular_14">No prediction history available</p>
      </div>

      <div className="cardAbout">
        <p className="text_regular_12_o7">
          If you are sure you should see history here, make sure you’re
          connected to the correct wallet and try again.
        </p>
      </div>
    </div>
  );

  const settingLen = (
    <div className="card">
      <div className="cardHead" style={{ justifyContent: "left" }}>
        <img src={settingModal} alt="t" />
        <p className="text_regular_16">Settings</p>
      </div>
      <div className="cardHead" style={{ justifyContent: "space-between" }}>
        <div className="cardHeadRight">
          <p className="text_regular_12_o7" style={{ color: "#EC1654" }}>
            Input
          </p>
          <p className="text_regular_12_o7">Stock</p>
        </div>
      </div>
      <div className="cardAbout">
        <p className="text_regular_14">MA Length:</p>
      </div>

      <div className="cardAbout">
        <input type="text" placeholder="20" />
        <div
          style={{
            backgroundColor: "#0B0B0B",
            borderRadius: "5px",
            marginLeft: "-6%",
          }}
        >
          <img src="" alt="arror" />
          <img src="" alt="arror" />
        </div>
      </div>
      <Button className="btn-primary">OK</Button>
      <Button className="btn-secondary">Cancel</Button>
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
    case "saveChart":
      return renderSaveChart;
    case "indicator":
      return renderIndicator;
    case "history":
      return renderHistory;
    default:
      return null;
  }
};

export default Modal;
