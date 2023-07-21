"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "@/store/cartSlice";
import CartItem from "./CartItem";
import Link from "next/link";
import { toggleCartModal, toggleProductModal } from "@/store/productSlice";

const CartDrawer = ({ show, setShow }) => {
  const { carts, itemCount, totalPrice } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const router = useRouter();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleCartRoute = () => {
    dispatch(toggleCartModal());
    router.push("/cart");
  };

  console.log(carts, totalPrice, itemCount, "drawer");
  return (
    <Box
      className="w-3/4 md:w-1/4 h-screen fixed opacity-90 top-0 right-0 bg-white shadow-xl "
      role="presentation"
    >
      <div className="flex flex-row-reverse">
        <IconButton
          className="m-5"
          color="error"
          onClick={() => {
            dispatch(toggleCartModal());
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      {carts?.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <Divider />
      <Typography>{totalPrice}</Typography>
      <div className="flex justify-center py-2">
        <Button
          variant="outlined"
          className="w-3/5"
          size="large"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleCartRoute}
        >
          Sepete Git
        </Button>
      </div>
    </Box>
  );
};

export default CartDrawer;
