import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import ProductModal from "./ProductModal";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { toggleProductModal } from "@/store/productSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductItem = ({ product }) => {
  return (
    <div className="group relative rounded-md shadow-md">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-48">
        <img
          src={product?.img}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          fill="true"
        />
      </div>
      <div className="mt-4 flex justify-between m-2">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {product?.name.slice(0, 20)}
          </h3>
          <p className="mt-1 text-sm text-left text-gray-500">{product?.category}</p>
        </div>
        <p className="text-lg font-semibold  text-gray-900">{product?.price} ₺</p>
      </div>
    </div>
  );
};

export default ProductItem;
