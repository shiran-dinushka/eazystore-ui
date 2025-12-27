import React from "react";
import PageTitle from "./PageTitle";
import { useNavigate } from "react-router-dom";
import emptyCartImage from "../assets/Util/emptycart.png";

export default function Cart() {
    const navigation = useNavigate();

  const handleClick = () => {
    navigation("/home", { state: { username: "shiran" } });
  };
  return (
    <div className="min-h-[770px] py-12 bg-normalbg dark:bg-darkbg font-primary">
      <div className="max-w-4xl mx-auto px-4">
        <PageTitle title="Your Cart" />
        <div className="text-center text-gray-600 dark:text-ligther flex flex-col items-center">
          <p className="max-w-xl px-2 mx-auto text-base mb-4">
            Oops... Your cart is empty. Continue shopping
          </p>
          <img
            src={emptyCartImage}
            alt="Empty Cart"
            className="max-w-[360px] mx-auto mb-6 dark:bg-light dark:rounded-md"
          />
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-primary text-light font-semibold rounded-md hover:bg-primarydark transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}
