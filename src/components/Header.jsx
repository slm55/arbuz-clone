import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <header>
      <div className="flex justify-center bg-gray-100">
        <div className="flex gap-4 items-end">
          <img
            src="https://arbuz.kz/static/platform/frontend/assets/icons/pinemelon-mascot.svg"
            alt=""
          />
          <p className="text-3xl font-semibold text-gray-700 py-6">
            Дарим{" "}
            <span className="text-white bg-green-500 rounded-full px-4 py-2 ">
              3000 ₸
            </span>{" "}
            и бесплатную доставку на первый заказ!
          </p>
        </div>
      </div>
      <div className="flex justify-between p-4 gap-48 items-center">
        <img
          src="https://arbuz.kz/static/platform/frontend/assets/banners/store_main.svg?v1"
          alt="logo"
          className="w-[180px]"
        />
        <div className="flex-1 flex rounded-lg bg-gray-100 p-2 gap-1">
          <SearchIcon style={{color: "gray"}}/>
          <input type="search" placeholder="Начните вводить название товара" className="flex-1 outline-none bg-transparent" />
        </div>
        <div className="flex gap-2">
          <button className="bg-gray-100 rounded-lg py-2 px-3 text-gray-600">Войти</button>
          <button className="bg-green-500 text-white p-1.5  rounded-lg ">
            <ShoppingCartIcon /> 0
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
