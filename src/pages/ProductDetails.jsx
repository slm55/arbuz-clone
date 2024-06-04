import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
function ProductDetails() {
  const product = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    ],
  };

  return (
    <div>
      <div>
        <div>
          <img src={product.thumbnail} alt="" />
          <p>{product.description}</p>
        </div>
        <div>
          <div>
            <p>{product.title}</p>
            <p>{product.price} ₸</p>
            <button>Добавить в корзину</button>
          </div>
          <div>
            <p>Бренд</p>
            <p>{product.brand}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
