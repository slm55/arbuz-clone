import React, {useState} from "react";
import { useParams } from "react-router-dom";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { products } from "../assets/products";
function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id == id);
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity ] = useState(1);

  function increase() {
    setQuantity(quantity + 1);
  }

  function decrease() {
    if (quantity == 1) {
      setInCart(false)
    } else {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex-1 flex justify-center my-6">
      <div className="flex space-x-6">
        <div className="w-[400px] space-y-2">
          <img src={product.thumbnail} alt="" />
          <p>{product.description}</p>
        </div>
        <div className="space-y-4 w-[300px]">
          <div className="space-y-2 shadow-md p-2 rounded-lg">
            <p className="text-3xl font-semibold">{product.title}</p>
            <p className="text-2xl">{product.price} ₸</p>
            {!inCart && <button className="bg-green-500 text-white rounded-lg py-2 px-10 w-full" onClick={() => setInCart(true)}>Добавить в корзину</button>}
            {inCart && <div className="bg-green-500 text-white rounded-lg py-2 px-10 w-full">
            <button onClick={decrease}>-</button>
            <div>{product.price * quantity} ₸ - {quantity} шт</div>
            <button onClick={increase}>+</button>
            </div> }
          </div>
          <div>
            <p className="text-lg font-medium">Бренд</p>
            <p>{product.brand}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
