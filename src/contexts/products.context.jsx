import React from "react";

import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";


export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await (getCategoriesAndDocuments());
      console.log(categoryMap);
      setCategories(categoryMap);
    }
    getCategoriesMap();
  }, []);

  const value = { categories };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};