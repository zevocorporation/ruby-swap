import React from "react";
import { useDispatch } from "react-redux";
import Web3 from "web3";

//IMPORTING STYLESHEETS

import "../../styles/patterns/modal.scss";
import "../../styles/patterns/card.scss";

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
// import clockIcon from "../../assets/icons/clock.svg";
import metamask from "../../assets/icons/metamask.svg";
import mathWallet from "../../assets/icons/mathWallet.svg";
import tokenPocket from "../../assets/icons/tokenPocket.svg";
import trustWallet from "../../assets/icons/trustWallet.svg";
import vector from "../../assets/icons/vector.svg";
import walletConnect from "../../assets/icons/walletConnect.svg";
import binanceChain from "../../assets/icons/binanceChain.svg";
import settings from "../../assets/icons/settings.svg";
import help_circle from "../../assets/icons/help_circle.svg";
import binance from "../../assets/icons/binance.svg";
import processOn from "../../assets/icons/processOn.svg";
import processDone from "../../assets/icons/processDone.svg";
import settingModal from "../../assets/icons/settingModal.svg";
import tokenModal from "../../assets/icons/tokenModal.svg";
import etherium from "../../assets/icons/etherium.svg";
import alpaca from "../../assets/icons/alpaca.svg";
import bar_chart from "../../assets/icons/bar_chart.svg";
import learn_more from "../../assets/icons/learn_more.svg";
import downarrow_white from "../../assets/icons/downarrow_white.svg";
import liquidity from "../../assets/icons/liquidity.svg";
import line from "../../assets/icons/line.svg";
import areachart from "../../assets/icons/areachart.svg";
import barchart from "../../assets/icons/bar-chart.svg";
import candlestick from "../../assets/icons/candlestick.svg";
import lineChart from "../../assets/icons/line-chart.svg";
import plusCircle from "../../assets/icons/plusCircle.svg";
import soundfx from "../../assets/icons/soundfx.svg";
import camera from "../../assets/icons/camera.svg";
import close from "../../assets/icons/close.svg";
import chart from "../../assets/icons/chart.svg";
import sun from "../../assets/icons/sun.svg";
import eye from "../../assets/icons/eye.svg";
import points from "../../assets/icons/points.svg";
import whiteCross from "../../assets/icons/whiteCross.svg";
import greenDot from "../../assets/icons/greenDot.svg";
import bitcoin from "../../assets/icons/bitcoin.svg";
import warning from "../../assets/icons/warning.svg";
import add from "../../assets/icons/addSign.svg";
import magnify from "../../assets/icons/magnify.svg";
import whiteDownArrow from "../../assets/icons/whiteDownArrow.svg";
import switchToDesktop from "../../assets/icons/switchToDesktop.svg";

//GET USER BALANCE

export const balance = async (address) => {
  const balance1 = await window.web3.eth.getBalance(address);
  const balance2 = Web3.utils.fromWei(balance1, "ether");

  return balance2;
};

const Modal = ({
  variant,
  setIsOpenModal,
  setIndicator,
  setSaveChartModal,
}) => {
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
          <img src={clock} alt="clock" />
          <span className="text_regular_24_w600">Recent Transactions</span>
        </p>
        <img
          src={closeIcon}
          alt="x"
          className="cursor"
          onClick={() => setIsOpenModal(false)}
        />
      </div>
      <p className="text_regular_14_o7" style={{marginBottom:"5%"}}>Please connect your crypto wallet to view your recent transactions</p>

      <Button className="btn-primary" onClick={() => setIsOpenModal(false)}>
        Close
      </Button>
    </div>
  );

  // RENDER WARNING

  const renderWarning = (
    <div className="modal">
      <div className="flex">
        <img src={warning} alt="wrongNetwork" />
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
      <div>
        <img src={switchToDesktop} alt="switch"/>
      </div>
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
          <img src={magnify} alt="Magnify" />
        </button>
      </form>

      <div className="tokenHead">
        <p className="text_regular_14">Token Name</p>
        <div className="modalDownArrowBox">
          <div className="modalDownArrowIcon">
            <img src={whiteDownArrow} alt="img" />
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
            <img
              src={closeIcon}
              alt="img"
              className="cursor"
              onClick={() => setIsOpenModal(false)}
            />
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
              <p className="text_regular_16">Binance</p>
              <img src={downarrow_white} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="liquidAdd">
        <img src={add} alt="img" />
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
    <div className="primary_gradient_bg chart_modal">
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
        <p onClick={() => setSaveChartModal(false)}>Save Image</p>
      </div>
    </div>
  );

  const renderIndicator = (
    <div className="primary_gradient_bg chart_modal">
      <div className="cardHead" style={{ justifyContent: "space-between" }}>
        <div>
          <img src={soundfx} alt="i" />
          <p>Indicators</p>
        </div>
        <div>
          <img
            src={closeIcon}
            alt="cross"
            className="cursor"
            onClick={() => setIndicator(false)}
          />
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

  // const settingLen = (
  //   <div className="card">
  //     <div className="cardHead" style={{ justifyContent: "left" }}>
  //       <img src={settingModal} alt="t" />
  //       <p className="text_regular_16">Settings</p>
  //     </div>
  //     <div className="cardHead" style={{ justifyContent: "space-between" }}>
  //       <div className="cardHeadRight">
  //         <p className="text_regular_12_o7" style={{ color: "#EC1654" }}>
  //           Input
  //         </p>
  //         <p className="text_regular_12_o7">Stock</p>
  //       </div>
  //     </div>
  //     <div className="cardAbout">
  //       <p className="text_regular_14">MA Length:</p>
  //     </div>

  //     <div className="cardAbout">
  //       <input type="text" placeholder="20" />
  //       <div
  //         style={{
  //           backgroundColor: "#0B0B0B",
  //           borderRadius: "5px",
  //           marginLeft: "-6%",
  //         }}
  //       >
  //         <img src="" alt="arror" />
  //         <img src="" alt="arror" />
  //       </div>
  //     </div>
  //     <Button className="btn-primary">OK</Button>
  //     <Button className="btn-secondary">Cancel</Button>
  //   </div>
  // );

  const renderChart = (
    <div className="primary_gradient_bg fixed chartModal1" style={{ width: "1059px" }}>
      <div className="cardHead">
        <div className="cardHeadRight">
          <img src={chart} alt="u" />
          <p>Chart</p>
          <img src={line} alt="|" />
          <Button className="btn-secondary">1m</Button>
          <Button className="btn-secondary">5m</Button>
          <Button className="btn-secondary">30m</Button>
          <Button className="btn-secondary">1hr</Button>
          <img src={downarrow_white} alt="arrow" />
          <img src={line} alt="|" />
          <img src={barchart} alt="barChart" />
          <img src={candlestick} alt="candlestick" />
          <img src={areachart} alt="areaChart" />
          <img src={lineChart} alt="lineChart" />
          <img src={line} alt="|" />
          <img src={plusCircle} alt="plus" />
          <p className="text_regular_14_o7">Compare</p>
          <img src={soundfx} alt="fx" onClick={() => setIndicator(true)} />
          <p className="text_regular_14_o7">Indicator</p>
        </div>

        <div>
          <div>
            <img
              src={camera}
              alt="camera"
              className="cursor"
              style={{marginRight : "20px"}}
              onClick={() => setSaveChartModal(true)}
            />
            <img
              src={close}
              alt="close"
              className="cursor"
              onClick={() => setIsOpenModal(false)}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="cardAbout" style={{ justifyContent: "left" }}>
          <p className="text_regular_14">Binance Coin / TetherUS 5 BINANCE</p>
          <div id="posImg">
            <div className="image">
              <img src={eye} alt="see" />
            </div>
            <div className="image">
              <img src={points} alt="point" />
            </div>
            <div className="image">
              <img src={greenDot} alt="dot" />
            </div>
          </div>
          <p>418.24</p>
          <p style={{ marginLeft: "2%", color:"#EC1654" }}>+2.59 (+0.82%)</p>
        </div>
      </div>
      <div className="box_1">
        <p>Vol</p>
        <p>23,885k</p>
        <img src={eye} alt="see" />
        <img src={settings} alt="settings" />
        <img src={whiteCross} alt="cross" />
        <img src={points} alt="point" />
      </div>
      <div style={{ float: "right" }}>
        <img src={sun} alt="sun" />
      </div>
    </div>
  );

  const renderCompare = (
    <div className="card" style={{ width: "463px" }}>
      <div className="cardHead text_regular_12_o7">
        <p>All</p>
        <p>Stock</p>
        <p>Futures</p>
        <p>Forex</p>
        <p>CFD</p>
        <p>Crypto</p>
        <p>Index</p>
        <p>Economy</p>
      </div>

      <div className="cardHead">
        <div className="cardHead" style={{ width: "200px", marginTop: "3%" }}>
          <p>TUSDBTC</p>
          <p className="text_regular_12_o7">TRUEUSD / BITCOIN</p>
        </div>
        <div className="cardHead" style={{ width: "150px" }}>
          <p>Crypto- Bitrex</p>
          <img src={bitcoin} alt="bitcoin" />
        </div>
      </div>

      <div className="cardLine" style={{ marginBottom: "5%" }}></div>

      <div className="cardHead">
        <div className="cardHead" style={{ width: "200px" }}>
          <p>TUSDBTC</p>
          <p className="text_regular_12_o7">TRUEUSD / BITCOIN</p>
        </div>
        <div className="cardHead" style={{ width: "150px" }}>
          <p>Crypto- Bitrex</p>
          <img src={bitcoin} alt="bitcoin" />
        </div>
      </div>
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
    case "chart":
      return renderChart;
    case "compare":
      return renderCompare;
    default:
      return null;
  }
};

export default Modal;
