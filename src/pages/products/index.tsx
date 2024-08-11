import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/products-slice';
import { AppDispatch } from '../../store';

const Products = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: any) => state.products.items);
    const status = useSelector((state: any) => state.products.status);
    const error = useSelector((state: any) => state.products.error);

    useEffect(() => {
    if (status === 'idle') {
        dispatch(fetchProducts());
    }
  }, [status, dispatch]);

    return (
        <>
            Hello
        </>
    )
}

export default Products;