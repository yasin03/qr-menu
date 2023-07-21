import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartModal, toggleProductModal } from "@/store/productSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertTitle, IconButton } from "@mui/material";
import { addProduct } from "@/store/cartSlice";

const ProductModal = ({ product }) => {
  const isOpen = useSelector((state) => state.product.isProductModalOpen);
  const isOpenCart = useSelector((state) => state.product.isCartModalOpen);
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product?.price);

  useEffect(() => {
    setTotalPrice(product?.price * qty);
  }, [qty]);

  const handleIncrement = () => {
    if (qty < 9) {
      setQty(qty + 1);
    } else {
      alert("Maximum 9 adet ürün sepete ekleyebilirsiniz!");
    }
  };
  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      alert("Minimum 1 adet ürün sepete eklemelisiniz!");
    }
  };

  const addCart = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        id: product?.id,
        name: product?.name,
        image: product?.img,
        price: product?.price,
        quantity: qty,
      })
    );
    dispatch(toggleProductModal());
    if (!isOpenCart) dispatch(toggleCartModal());
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(toggleProductModal())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <div className="flex justify-between items-center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {product?.name}
          </Typography>
          <IconButton
            color="error"
            onClick={() => {
              dispatch(toggleProductModal());
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className="my-4">
          <img
            src={product?.img}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            fill="true"
          />
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {product?.desc}
        </Typography>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3 bg-gray-100 border border-blue-300 rounded-full">
            <IconButton
              onClick={handleDecrement}
              color="primary"
              aria-label="add to shopping cart"
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <Typography>{qty}</Typography>
            <IconButton
              onClick={handleIncrement}
              color="primary"
              aria-label="add to shopping cart"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <Typography>{totalPrice} ₺</Typography>
        </div>
        <Button
          variant="outlined"
          className="w-full"
          startIcon={<AddShoppingCartIcon />}
          onClick={addCart}
        >
          Sepete Ekle
        </Button>
      </Box>
    </Modal>
  );
};

export default ProductModal;
