import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();


export const CartProvider = ({ children }) => {


  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });



  // Save cart whenever it changes

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);




  const addToCart = (food) => {


    const existingItem = cartItems.find(
      (item) => item._id === food._id
    );


    if(existingItem){


      setCartItems(

        cartItems.map((item)=>

          item._id === food._id

          ?

          {
            ...item,
            quantity:item.quantity + 1
          }

          :

          item

        )

      );


    }
    else{


      setCartItems([

        ...cartItems,

        {
          ...food,
          quantity:1
        }

      ]);


    }


  };




  const increaseQuantity = (id)=>{


    setCartItems(

      cartItems.map((item)=>

        item._id === id

        ?

        {
          ...item,
          quantity:item.quantity+1
        }

        :

        item

      )

    );

  };




  const decreaseQuantity=(id)=>{


    setCartItems(

      cartItems

      .map((item)=>

        item._id===id

        ?

        {
          ...item,
          quantity:item.quantity-1
        }

        :

        item

      )

      .filter(item=>item.quantity>0)

    );


  };




  const removeItem=(id)=>{


    setCartItems(

      cartItems.filter(
        item=>item._id!==id
      )

    );


  };





  const clearCart=()=>{

    setCartItems([]);

    localStorage.removeItem("cart");

  };





  const totalAmount = cartItems.reduce(

    (total,item)=>

      total + item.price * item.quantity,

    0

  );




  return(

    <CartContext.Provider

      value={{

        cartItems,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeItem,

        clearCart,

        totalAmount

      }}

    >

      {children}

    </CartContext.Provider>

  );


};




export const useCart=()=>useContext(CartContext);