import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <footer className="flex flex-col w-full text-gray-500 bg-gray-100 text-center p-4 ">
      <div className="py-2">
        <img
          src="https://arbuz.kz/static/platform/frontend/assets/banners/landing/arbuz-logo.png"
          alt=""
          className="w-[150px]"
        />
      </div>
      <div className="flex justify-between  py-2">
        <div className="flex flex-col items-start">
          <p>Телефон доставки</p>
          <p>г. Алматы:</p>
          <p>+7 (727) 339 85 83</p>
          <p>+7 (705) 926 00 00</p>
          <p>help@arbuz.kz</p>
        </div>
        <div className="space-y-2 w-1/3">
          <div className="flex flex-wrap space-x-12 space-y-4 items-end justify-start">
            <p>Доставка</p>
            <p>FAQ</p>
            <p>Вакансии</p>
            <p>Рекламодателям</p>
            <p>Подписка friends</p>
            <p>Акции</p>
            <p>О нас</p>
          </div>
          <div className="flex gap-2">
            <img
              src="https://arbuz.kz/static/platform/frontend/assets/banners/ru/appstore-badge-ru.svg"
              alt=""
              className="w-[150px]"
            />
            <img
              src="https://arbuz.kz/static/platform/frontend/assets/banners/ru/google-play-badge-ru.svg"
              alt=""
              className="w-[150px]"
            />
          </div>
        </div>
        <div className="flex gap-2">
        <FacebookIcon />
        <InstagramIcon />
        </div>
      </div>
      <div className="text-start py-2">
        <p>© 2024 Все права защищены. Публичная оферта</p>
      </div>
    </footer>
  );
}

export default Footer;
