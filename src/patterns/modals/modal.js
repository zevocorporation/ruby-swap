import React from "react";

//IMPORTING STYLESHEETS

import "../../styles/patterns/modal.scss";

//IMPORTING COMPONENTS

import Button from "../../components/button";

//IMPORTING MEDIA ASSETS

import {
  wrongNetworkIcon,
  closeIcon,
  paymentConfirmedIcon,
  paymentProcessingIcon,
} from "../../assets/icons/iconsExportFile";

const Modal = ({ variant }) => {
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
          <div id="icon"></div>
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
        <p>
          Please connect your crypto wallet to view your recent transactions
        </p>
      </div>

      <button className="modalButton" id="recentModalButton">
        <Button className="btn-primary">Close</Button>
      </button>
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
        <Button className="btn-primary">I understand</Button>
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
      <div className="flex">
        <img src="" alt="wallet" />
        <p className="text_regular_24_w600">Connect to a wallet</p>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">
            <img src={closeIcon} alt="x" />
          </div>
        </div>
      </div>
      <div className="walletBoxes">
        <div className="walletBox">
          <div className="wallentcontain">
            <div className="walletBoxImg"></div>
            <div className="walletBoxText text_regular_14">
              <p>Metamask</p>
            </div>
          </div>
        </div>
        <div className="walletBox">
          <div className="wallentcontain">
            <div className="walletBoxImg"></div>
            <div className="walletBoxText text_regular_14">
              <p>TrustWallet</p>
            </div>
          </div>
        </div>
        <div className="walletBox">
          <div className="wallentcontain">
            <div className="walletBoxImg"></div>
            <div className="walletBoxText text_regular_14">
              <p>MathWallet</p>
            </div>
          </div>
        </div>
        <div className="walletBox">
          <div className="wallentcontain">
            <div className="walletBoxImg"></div>
            <div className="walletBoxText text_regular_14">
              <p>TokenPocket</p>
            </div>
          </div>
        </div>
        <div className="walletBox">
          <div className="wallentcontain">
            <div className="walletBoxImg"></div>
            <div className="walletBoxText text_regular_14">
              <p>WalletConnect</p>
            </div>
          </div>
        </div>
        <div className="walletBox">
          <div className="wallentcontain">
            <div className="walletBoxImg"></div>
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
        <img src="" alt="setting" />
        <p className="text_regular_24_w600">Settings</p>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">
            <img src={closeIcon} alt="x" />
          </div>
        </div>
      </div>
      <div className="settingBox1">
        <div className="box1Head">
          <p className="settingBoxHeading">Slippage tolerance</p>
          <img src="" alt="g" />
        </div>
        <div className="dataBox1" id="dataBox-1">
          <p>0.1%</p>
        </div>
        <div className="dataBox1" id="dataBox-2">
          <p>0.5%</p>
        </div>
        <div className="dataBox1" id="dataBox-3">
          <p>1%</p>
        </div>
        <div className="dataBox2" id="dataBox-4">
          <p>8%</p>
        </div>
      </div>
      <div className="settingBox1">
        <div className="box1Head">
          <p>Transaction deadline </p>
          <img src="" alt="g" />
        </div>
        <div className="dataBox1">
          <p>20</p>
        </div>
      </div>
      <div></div>

      <div className="audioBox">
        <div className="audioText">
          <p className="text_regular_14_o7">Audio</p>
        </div>
        <div className="audioToggle">
          <div className="audioOn">
            <p className="text_regular_14_o7">ON</p>
          </div>
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
        <img src={wrongNetworkIcon} />
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
