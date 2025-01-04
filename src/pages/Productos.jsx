import React from 'react'
import { ItemListContainer } from '../components';
import { useGetAllProducts } from '../hooks/useGetAllProducts';
import { Loader } from '../components';

export const Productos = () => {
  const { loading, items } = useGetAllProducts("products");
  
    return loading ? <Loader /> : <ItemListContainer products={items} />;
}
