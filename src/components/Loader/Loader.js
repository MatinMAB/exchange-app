import React from "react";

//GIF
import Spinner from "../../assets/images/gif/Infinity-1s-190px.gif";

const Loader = () => {
  return (
    <div>
      <img src={Spinner} alt="Loader"/>
      <p style={{color : "#50de36" , fontSize : "30px", fontWeight : "bold" , marginTop : "-20px"}}>Loading ...</p>
    </div>
  );
};

export default Loader;
