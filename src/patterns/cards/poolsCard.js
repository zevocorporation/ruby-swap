import React from "react";

import "../../styles/patterns/poolsCard.scss";

const PoolsCard = ({ variant }) => {
  const renderCardView = <div></div>;

  const renderGridView = <div></div>;

  return variant === "grid" ? renderGridView : renderCardView;
};

export default PoolsCard;
