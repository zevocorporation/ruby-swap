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
    default:
      return null;
  }
};

export default Modal;
