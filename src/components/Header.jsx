import React from "react";

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
            Дарим <span className="text-white bg-green-500 rounded-full px-4 py-2 ">3000 ₸</span> и бесплатную доставку на первый заказ!
          </p>
        </div>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
