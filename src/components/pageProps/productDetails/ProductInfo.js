import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      {/* <p className="text-xl font-semibold">${productInfo.price}</p> */}
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <span className="font-medium text-lg"> <p className="font-normal">{productInfo.func1}</p></span>
      <div>
        <ul className="font-normal text-sm">
          <li style={{listStyle:"none"}}> {productInfo.feat1}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat2}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat3}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat4}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat5}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat6}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat7}</li>
        </ul>
      </div>
      <span className="font-medium text-lg"> <p className="font-normal">{productInfo.func2}</p></span>
      <div>
        <ul className="font-normal text-sm">
          <li style={{listStyle:"none"}}> {productInfo.feat21}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat22}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat23}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat24}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat25}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat26}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat27}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat28}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat29}</li>
        </ul>
      </div>
      <span className="font-medium text-lg"> <p className="font-normal"> {productInfo.func3}</p></span>
      <div>
        <ul className="font-normal text-sm">
          <li style={{listStyle:"none"}}> {productInfo.feat31}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat32}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat33}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat34}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat35}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat36}</li>
        </ul>
      </div>
      <span className="font-medium text-lg"> <p className="font-normal"> {productInfo.func4}</p></span>
      <div>
        <ul className="font-normal text-sm">
          <li style={{listStyle:"none"}}> {productInfo.feat41}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat42}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat43}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat44}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat45}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat46}</li>
        </ul>
      </div>
      <span className="font-medium text-lg"> <p className="font-normal"> {productInfo.func5}</p></span>
      <div>
        <ul className="font-normal text-sm">
          <li style={{listStyle:"none"}}> {productInfo.feat51}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat52}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat53}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat54}</li>
          <li style={{listStyle:"none"}}> {productInfo.feat55}</li>
        </ul>
      </div>
      {/* <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p> */}
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      {/* <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p> */}
    </div>
  );
};

export default ProductInfo;
