import React from "react";
import MainCard from "./MainCard";

const Main = () => {
  return (
    <div className="flex-grow-1 main-container">
      <MainCard tagOne="Paket #1" tagTwo="250.00 kr">
        <img src="images/shoes.png" />
      </MainCard>
      <MainCard tagOne="Paket #2" tagTwo="350.00 kr">
        <img src="images/lipstick.png" />
      </MainCard>
      <MainCard tagOne="Paket #3" tagTwo="500.00 kr">
        <img src="images/shirt.png" />
      </MainCard>
    </div>
  );
};

export default Main;
