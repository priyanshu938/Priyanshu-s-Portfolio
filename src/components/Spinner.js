import React from "react";
import loading from "./loading.gif";
const Spinner = () => {
  return (
    <div style={{ position: "absolute", left: "50%", top: "50%" }}>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
