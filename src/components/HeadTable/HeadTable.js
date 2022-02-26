import React from 'react';

//Styles
import style from "./HeadTable.module.css"

const HeadTable = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <span className={style.name}>Currnecy</span>
      </div>
      <span className={style.symbol}>Symbol</span>
      <span className={style.price}>Price</span>
      <span className={style.marketcap}>Market Cap</span>
      <span className={style.change}>PC 24h</span>
    </div>
  );
};

export default HeadTable;