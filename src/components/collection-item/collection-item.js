import React from "react";

import "./collection-item.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="collection-footer"></div>
    <span className="name">{name}</span>
    <span className="name">{price}</span>
  </div>
);

export default CollectionItem;
