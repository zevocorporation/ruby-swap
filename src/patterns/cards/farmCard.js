import React from "react";

import "../../styles/patterns/farmCard.scss";

const FarmCard = ({ variant }) => {
  const renderCardView = <div></div>;

  const renderGridView = <div></div>;

  return variant === "grid" ? renderGridView : renderCardView;
};

export default FarmCard;
