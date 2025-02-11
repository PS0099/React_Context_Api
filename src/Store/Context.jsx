import { createContext, useContext, useState } from "react";

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(totalPrice)
  const shoesCollection = [
    {
      name: "Nike Air Max 270",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/89a9429b-c0d9-4699-b897-c261fddaf221/W+AIR+MAX+270.png",
      price: 150,
    },
    {
      name: "Adidas Ultraboost 21",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e16f8f2d-7b05-4f39-ad55-7bd3444fc724/W+AIR+MAX+270.png",
      price: 180,
    },
    {
      name: "Puma RS-X",
      imageUrl:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/390025/08/sv04/fnd/IND/fmt/png/RS-X-3D-Unisex-Sneakers",
      price: 120,
    },
    {
      name: "Reebok Zig Kinetica",
      imageUrl:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/395205/02/sv01/fnd/PNA/fmt/png/Suede-XL-Sneakers",
      price: 130,
    },
    {
      name: "PUMA x LAMELON",
      imageUrl:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/311177/01/sv01/fnd/PNA/fmt/png/PUMA-x-LAMELO-BALL-MB.03-Halloween-Big-Kids'-Basketball-Shoes",
      price: 175,
    },
    {
      name: " AdiDas Astoundrun Shoes",
      imageUrl:
        "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/8271eef9e1d44116837c2a9b3c07be1d_9366/astoundrun-shoes.jpg",
      price: 65,
    },
    {
      name: "AdiDas VS Pace 2.0",
      imageUrl:
        "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/97310c99ec74478ba99265769df85ea0_9366/vs-pace-2.0-shoes.jpg",
      price: 60,
    },
    {
      name: "Bruton 27",
      imageUrl:
        "https://m.media-amazon.com/images/I/71f3BmjCwtL._AC_UL480_FMwebp_QL65_.jpg",
      price: 160,
    },
    {
      name: "Bruton 20",
      imageUrl:
        "https://m.media-amazon.com/images/I/61VHvg7wvCL._AC_UL480_FMwebp_QL65_.jpg",
      price: 140,
    },
    {
      name: "Campus 288",
      imageUrl:
        "https://m.media-amazon.com/images/I/613zb10e5wL._AC_UL480_FMwebp_QL65_.jpg",
      price: 130,
    },
  ];

  const addToCart = (shoe) => {
    const itemInCart = cartItems.find((item) => item.id === shoe.id);
    if (itemInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...shoe, quantity: 1 }]);
    }
  };
  
  const increaseQuantity = (shoeId) => {
    const itemInCart = cartItems.find((item) => item.id === shoeId);
    if (itemInCart) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === shoeId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };
  
  const decreaseQuantity = (shoeId) => {
    const itemInCart = cartItems.find((item) => item.id === shoeId);
    if (itemInCart && itemInCart.quantity > 1) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== shoeId)
      );
    }
  };
  
  const clearCart = () => {
    setCartItems([]);
  };



  return (
    <ShoppingContext.Provider
      value={{
        shoesCollection,
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        setTotalPrice,
        totalPrice,
        setCartItems
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShoppingContext = () => useContext(ShoppingContext);

