import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteForever from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "@/store/cartSlice";

const CartDrawer = ({ show, setShow }) => {
  const { carts, itemCount, totalPrice } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  console.log(carts, totalPrice, itemCount , "drawer");
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
            setShow(!show);
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      {carts?.map((item, index) => (
        <Card
          key={index}
          className="flex items-center p-6 border-r-8 border-red-500 mr-4 mb-2"
        >
          <CardMedia
            component="img"
            sx={{ width: 120, height: 120 }}
            image="https://i4.hurimg.com/i/hurriyet/75/750x422/629620854e3fe02c2424a34a.jpg"
            alt="Live from space album cover"
          />
          <Box className="flex flex-col justify-center gap-4 ml-3">
            <Typography component="div">{item?.name}</Typography>

            <Box>
              <div className="flex justify-between items-center gap-3 bg-gray-100 border border-blue-300 rounded-full">
                <IconButton color="primary" aria-label="add to shopping cart">
                  {item?.quantity == 1 ? (
                    <DeleteForever />
                  ) : (
                    <RemoveCircleOutlineIcon />
                  )}
                </IconButton>
                <Typography>{item?.quantity}</Typography>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </Box>
            <Typography className="text-lg font-semibold">
              {item?.price * item?.quantity} ₺
            </Typography>
          </Box>
        </Card>
      ))}
      <Divider />
      <Typography>{totalPrice}</Typography>
      <div className="flex justify-center py-2">
        <Button
          variant="outlined"
          className="w-3/5"
          size="large"
          startIcon={<AddCircleOutlineIcon />}
        >
          Sepete Ekle
        </Button>
      </div>
    </Box>
  );
};

export default CartDrawer;
