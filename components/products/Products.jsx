import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { store } from "@/store";
import { getProducts, getCategories } from "@/store/productsStore";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import productsData from "@/api/products.json";
import ProductModal from "./ProductModal";
import { toggleProductModal } from "@/store/productSlice";

export default function Products() {
  const isOpen = useSelector((state) => state.product.isProductModalOpen);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState([]);
  const [filterSize, setFilterSize] = useState(4);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    
    dispatch(toggleProductModal());
  };

  const loadData = () => {
    try {
      setCategories(productsData.map((p) => p.category));
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
    /* setFilter(
      products.filter((product) => product.category === categories[active])
    ); */
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Stack direction="row" spacing={2}>
          {categories?.map((category, index) => (
            <div key={index}>
              <Button
                color="error"
                onClick={() => {
                  setActive(index);
                  setFilterSize(4);
                }}
              >
                {category}
              </Button>
            </div>
          ))}
        </Stack>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productsData?.map((product) => (
            <div key={product.id}>
              <Button onClick={() => handleProductClick(product)}>
                <ProductItem product={product} />
              </Button>
            </div>
          ))}
          {isOpen && <ProductModal product={selectedProduct} />}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button
          className="btn btn-primary text-white font-bold text-xl"
          onClick={() => setFilterSize(filterSize + 4)}
        >
          Daha Fazla
        </Button>
      </div>
    </div>
  );
}
