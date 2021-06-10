import React from "react";

//IMPORTING STYLESHEET

import "../styles/screens/collectiblesScreen.scss";

import card_image from "../assets/images/collectibles_image.png";

export const CollectiblesCard = ({ title, description, image }) => {
  return (
    <div className="collectibles_card">
      <div>
        <img src={image} alt="collectibles" />
      </div>
      <p className="text_regular_16_w500" style={{ margin: "1em 0" }}>
        {title}
      </p>
      <p className="text_regular_14_o7">{description}</p>
    </div>
  );
};

const CollectiblesScreen = () => {
  const rendercollectiblesCard = (
    <div className="card_container">
      <CollectiblesCard
        image={card_image}
        title="Red & White Abstract"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sapien consectetur fermentum id egestas porttitor mattis. "
      />
      <CollectiblesCard
        image={card_image}
        title="Red & White Abstract"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sapien consectetur fermentum id egestas porttitor mattis. "
      />
      <CollectiblesCard
        image={card_image}
        title="Red & White Abstract"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sapien consectetur fermentum id egestas porttitor mattis. "
      />
      <CollectiblesCard
        image={card_image}
        title="Red & White Abstract"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sapien consectetur fermentum id egestas porttitor mattis. "
      />
      <CollectiblesCard
        image={card_image}
        title="Red & White Abstract"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sapien consectetur fermentum id egestas porttitor mattis. "
      />
    </div>
  );
  const renderScreen = (
    <div className="collectibles_screen">{rendercollectiblesCard}</div>
  );
  return renderScreen;
};

export default CollectiblesScreen;
