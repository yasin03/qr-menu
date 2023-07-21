"use client";
import CartItem from "@/components/cartDrawer/CartItem";
import { getCartTotal } from "@/store/cartSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const { carts, itemCount, totalPrice } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  console.log(carts, totalPrice, itemCount, "drawer");

  return (
    <div className="min-h-screen">
      <div className="pt-28 px-8 md:px-20 py-4">
        <div className="flex justify-between">
          <div className="bg-slate-300">
            {carts?.map((item, index) => (
              <div key={index} className="">
                <CartItem item={item} />
              </div>
            ))}
          </div>
          <div className="bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
