import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    // const currency = '₹';
    const currency = '$';
    const dilevery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(true)

    const value = {
        products,
        currency,
        dilevery_fee,
        search,setSearch,showSearch,setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
        {props.children}
        </ShopContext.Provider>
    );
}
export default ShopContextProvider;