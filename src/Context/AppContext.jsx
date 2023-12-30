import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

const AppContext = ({ children }) => {
  const initialstate = {
    data: [],
    singledata: [],
    query: "",
    cartdata: [],
    itempresent: false,
    user: false,
    errorMsg: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "Add_Product":
        return { ...state,data: action.payload };
      case "Add_Query":
        return { ...state, query: action.payload };
      case "Single_Product":
        return { ...state, singledata: action.payload };
      case "Add_To_Cart":
        let result = state.cartdata.some((cartitem) => {
          return cartitem.id === action.payload.id;
        });
        if (!result)

            return {
                ...state,
                cartdata: [...state.cartdata, { ...action.payload, quantity: 1 }],
            };
          
          
case"CLEAR_ALL":return{
  ...state,cartdata:[]
}
      case "Remove_Cart_item":
        return {
          ...state,
          cartdata: state.cartdata.filter((item) => {
            return item.id !== action.payload;
          }),
        };
      case "Item_In_Cart":
        return { ...state, itempresent: action.payload };
      case "INCR":
        let newdataa = state.cartdata.map((cartitem) => {
          if (cartitem.id === action.payload) {
            return { ...cartitem, quantity: cartitem.quantity + 1 };
          } else {
            return cartitem;
          }
        });
        return { ...state, cartdata: newdataa };

      case "DECR":
        let newdata2 = state.cartdata.map((cartitem) => {
          if (cartitem.id === action.payload) {
            return {
              ...cartitem,
              quantity:
                cartitem.quantity > 1
                  ? cartitem.quantity - 1
                  : cartitem.quantity,
            };
          } else {
            return cartitem;
          }
        });
        return { ...state, cartdata: newdata2 };
      case "User_Exist":
        return { ...state, user: action.payload };
        
      case "Error":
        return { ...state, errorMsg: action.payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default AppContext;
