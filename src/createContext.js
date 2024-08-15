import React, { createContext, useState } from 'react';
import { products } from "./data";

const FurnitureContext = createContext();

const FurnitureProvider = ({ children }) => {
    const [furnitureItems, setFurnitureItems] = useState([]);
    const [active, setActive] = useState(0)
    return (
        <FurnitureContext.Provider value={{ furnitureItems, setFurnitureItems, products , active , setActive }}>
            {children}
        </FurnitureContext.Provider>
    );
};

export { FurnitureContext, FurnitureProvider };

