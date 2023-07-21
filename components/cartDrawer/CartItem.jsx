import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteForever from "@mui/icons-material/DeleteForever";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(item?.quantity);
  const [totalPrice, setTotalPrice] = useState(item?.price);

  useEffect(() => {
    setTotalPrice(item?.price * qty);
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

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <Card className="flex items-center p-6 border-r-8 border-red-500 mr-4 mb-2">
      <CardMedia
        component="img"
        sx={{ width: 120, height: 120 }}
        image={item.image}
        alt="Live from space album cover"
      />
      <Box className="flex flex-col justify-center gap-4 ml-3">
        <Typography component="div">{item?.name}</Typography>

        <Box>
          <div className="flex justify-between items-center gap-3 bg-gray-100 border border-blue-300 rounded-full">
            <IconButton color="primary" aria-label="add to shopping cart">
              {item?.quantity == 1 ? (
                <DeleteForever onClick={handleDelete} />
              ) : (
                <RemoveCircleOutlineIcon onClick={handleDecrement} />
              )}
            </IconButton>
            <Typography>{item?.quantity}</Typography>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddCircleOutlineIcon onClick={handleIncrement} />
            </IconButton>
          </div>
        </Box>
        <Typography className="text-lg font-semibold">
          {item?.price * item?.quantity} ₺
        </Typography>
      </Box>
    </Card>
  );
};

export default CartItem;
