import React, { useState, useEffect } from "react";

//API Services
import { getCryptos } from "../../services/api";

//Components
import Crypto from "../Crypto/Crypto";
import Loader from "../Loader/Loader";
import HeadTable from "../HeadTable/HeadTable";

//Styles
import style from "./Landing.module.css";
import TimeZone from "../TimeZone/TimeZone";

const Landing = () => {
  const [cryptos, setcryptos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const newCryptos = cryptos.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));

  useEffect(() => {
    fetchCrypto();
  }, []);

  const fetchCrypto = () => {
    getCryptos().then((res) => setcryptos(res));
  };

  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={style.container}>
      <input className={style.input} type="text" placeholder="Search Your Crypto Currency ..." value={searchText} onChange={searchHandler} />
      <TimeZone/>
      {cryptos.length > 0 && <HeadTable/>}
      <div className={style.crypto}>{cryptos.length > 0 ? newCryptos.map((crypto) => <Crypto key={crypto.id} data={crypto} />) : <Loader />}</div>
    </div>
  );
};

export default Landing;
