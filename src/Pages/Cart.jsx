import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../Store/Slices/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(25);
  const { items: products, totalPrice } = useSelector((state) => state.cart);
  const { status } = useSelector((state) => state.user);

  const handleCheckout = () => {
    if (status === "success") {
      if (products.length === 0) {
        toast.error("Your cart is empty");
        return;
      }
      navigate("/MediPortal/pharmacy/checkout");
    } else {
      navigate("/MediPortal/login");
    }
  };

  return (
    <div className="py-6 px-6">
      <div className="container max-w-[1300px] m-auto py-[10px] flex flex-col gap-[24px] text-primary min-h-[620px] md:min-h-[789px] justify-center">
        <div className="title text-primary">
          <h1 className="text-[32px] md:text-[40px] font-bold capitalize">
            Your Cart
          </h1>
        </div>
        <div className="order flex flex-col lg:flex-row gap-[20px] lg:gap-[24px] items-start">
          {products.length > 0 ? (
            <div className="details border rounded-[20px] py-[20px] px-[24px] flex flex-col gap-[24px] w-full lg:w-[70%]">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`product flex justify-between gap-[15px] md:gap-[25px] pb-[20px] h-[170px] ${
                    index < products.length - 1 && "border-b"
                  }`}
                >
                  <div className="img w-[30%] md:w-[20%] flex-shrink-0">
                    <Link
                      to={`/MediPortal/pharmacy/categories/${product.categoryname}/products/${product.id}`}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full object-contain rounded-2xl mb-4 bg-[#f0eeed] h-[150px]"
                      />
                    </Link>
                  </div>
                  <div className="data flex flex-row justify-between w-full">
                    <div className="info flex flex-col justify-between gap-2 w-[70%]">
                      <div className="tags">
                        <Link
                          to={`/MediPortal/pharmacy/categories/${product.categoryname}/products/${product.id}`}
                        >
                          <h1 className="text-[14px] md:text-[20px] font-bold">
                            {product.title}
                          </h1>
                          <h1 className="text-[14px] md:text-[20px] text-primary/60 font-semibold">
                            {product.categoryName}
                          </h1>
                        </Link>
                      </div>
                      <div className="price">
                        <p className="text-[14px] md:text-[20px] font-bold">
                          ${product?.totalPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="actions flex flex-col justify-between items-end w-full md:w-[30%] mt-4 md:mt-0">
                      <div className="remove">
                        <button
                          onClick={() => dispatch(removeFromCart(product.id))}
                        >
                          <FaRegTrashAlt className="text-[20px] md:text-[24px] text-[#FF3333] hover:text-red-600 transition-all duration-300" />
                        </button>
                      </div>
                      <div className="quantity">
                        <div className="quantity flex items-center bg-[#F0F0F0] gap-[20px] md:gap-[37px] py-[10px] md:py-[14px] px-[16px] md:px-[20px] rounded-[62px]">
                          <button
                            onClick={() => {
                              if (product.quantity - 1 < 1)
                                dispatch(removeFromCart(product.id));
                              else dispatch(decreaseQuantity(product.id));
                            }} // Decrement quantity
                            className="font-bold text-[16px] md:text-[20px]"
                          >
                            <AiOutlineMinus />
                          </button>
                          <span>{product.quantity}</span>
                          <button
                            onClick={() =>
                              dispatch(increaseQuantity(product.id))
                            } // Increment quantity
                            className="font-bold text-[16px] md:text-[20px]"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-cart border rounded-[20px] py-[20px] px-[24px] flex justify-center items-center w-full lg:w-[60%]">
              <h1 className="text-[20px] md:text-[24px] font-bold text-primary">
                Your cart is empty
              </h1>
            </div>
          )}
          <div className="summary border rounded-[20px] py-[20px] px-[24px] flex flex-col gap-[24px] w-full lg:w-[35%]">
            <div className="title">
              <h1 className="text-[20px] md:text-[24px] font-bold">
                Order Summary
              </h1>
            </div>
            <div className="prices flex flex-col gap-[20px] pb-6 border-b">
              <div className="single flex justify-between">
                <span className="text-[16px] md:text-[20px] text-black/60">
                  Subtotal
                </span>
                <span className="text-[16px] md:text-[20px] font-bold">
                  ${totalPrice?.toFixed(2)}
                </span>
              </div>
              <div className="single flex justify-between">
                <span className="text-[16px] md:text-[20px] text-black/60">
                  Delivery Fee
                </span>
                <span className="text-[16px] md:text-[20px] font-bold">
                  ${delivery?.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="totalPrice">
              <div className="single flex justify-between">
                <span className="text-[16px] md:text-[20px]">Total</span>
                <span className="text-[16px] md:text-[20px] font-bold">
                  $
                  {(
                    totalPrice -
                    totalPrice * (discount / 100) +
                    delivery
                  ).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="checkout w-full">
              <button
                className="bg-[#9db4c0] hover:bg-primary hover:text-tertiary text-primary font-medium py-[12px] md:py-[15px] rounded-[62px] w-full transition-all duration-300 flex justify-center items-center"
                onClick={handleCheckout}
              >
                Go To CheckOut <span className="font-bold">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
