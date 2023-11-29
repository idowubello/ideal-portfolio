import React from "react";
import { Card } from "antd";
import ageChecker from "../../Assets/Images/agechecker.jpg";
import fbLogin from "../../Assets/Images/facebook login clone.jpg";
import productCard from "../../Assets/Images/product card.jpg";

const Cards = () => {
  const cardData = [

    {
      title: "Online Store Products Card",
      content: (
        <a href="https://assesment-cyan.vercel.app/" target="_blank">
          <img src={productCard} className="w-full h-[140px]" />
        </a>
      ),
    },
    {
      title: "Age Checker",
      content: (
        <a href="https://age-calculator-livid.vercel.app/" target="_blank">
          <img src={ageChecker} className="w-full h-[140px]" />
        </a>
      ),
    },
    {
      title: "Facebook Login Page Clone",
      content: (
        <a href="https://facebook-login-clone-theta.vercel.app/" target="_blank">
          <img src={fbLogin} className="w-full h-[140px]" />
        </a>
      ),
    },
    /*{
      title: "Basic Calculator",
      content: (
        <a href="https://age-calculator-livid.vercel.app/" target="_blank">
          <img src={""} className="w-full h-[140px]" />
        </a>
      ),
    },
    {
      title: "Age Calculator",
      content: (
        <a href="https://age-calculator-livid.vercel.app/" target="_blank">
          <img src={""} className="w-full h-[140px]" />
        </a>
      ),
    },
    {
      title: "Age Calculator",
      content: (
        <a href="https://age-calculator-livid.vercel.app/" target="_blank">
          <img src={""} className="w-full h-[140px]" />
        </a>
      ),
    },*/
    
  ];

  return (
    <div className="flex items-center flex-wrap justify-around gap-[5rem]">
      {cardData.map((item, index) => (
        <Card
          key={index}
          cover={item.content}
          className="w-[300px] h-[190px] mb-[50px] shadow-md text-center"
        >
            <h2 className="text-center font-[archivo-bold]">{item.title}</h2>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
