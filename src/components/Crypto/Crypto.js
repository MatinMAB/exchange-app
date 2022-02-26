import React from "react";

//Styles
import style from "./Crypto.module.css"

const Crypto = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <img className={style.image} src={data.image} alt="Crypto icon" />
        <span className={style.name}>{data.name}</span>
      </div>
      <span className={style.symbol}>{data.symbol.toUpperCase()}</span>
      <span className={style.price}>{data.current_price.toLocaleString()} $</span>
      <span className={style.marketcap}>{data.market_cap.toLocaleString()} </span>
      <span className={ data.price_change_percentage_24h > 0 ?  style.green : style.red}>{data.price_change_percentage_24h.toFixed(2)}</span>
    </div>
  );
};

export default Crypto;
