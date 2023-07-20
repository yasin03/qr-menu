"use client";
import { toggleProductModal } from "@/store/productSlice";
import { Box, Modal, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "../products/ProductModal";
import CartDrawer from "../cartDrawer/CartDrawer";

const Header = () => {
  const [show, setShow] = useState(true);

  return (
    <header className="absolute w-full px-8 md:px-20 py-4 shadow-lg bg-gray-100 z-50">
      <div className="flex justify-between items-center">
        <section>
          <Link href="/">Logo</Link>
        </section>

        <section className="hidden md:hidden">
          <nav className="flex justify-between items-center gap-8">
            <Link href="/" className={`menu-item`}>
              Ana Sayfa
            </Link>
            <Link href="/" className={`menu-item`}>
              Hakkımızda
            </Link>
            <Link href="/" className={`menu-item`}>
              Ürünler
            </Link>
            <Link href="/" className={`menu-item`}>
              İletişim
            </Link>
          </nav>
        </section>

        <section>
          <button
            className="custom-btn flex justify-center items-center gap-3"
            onClick={() => setShow(!show)}
          >
            <MdShoppingCart />
            <span>CART</span>
          </button>
        </section>
      </div>
      {show && <CartDrawer show={show} setShow={setShow} />}
    </header>
  );
};

export default Header;
