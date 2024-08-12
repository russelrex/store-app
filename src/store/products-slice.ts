import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../interface/products/Product';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await axios.get('https://fakestoreapi.in/api/products');
      return response.data;
    }
  );

export const fetchProductCategories = createAsyncThunk(
    'products/fetchProductCategories',
    async () => {
      const response = await axios.get('https://fakestoreapi.in/api/products/category');
      return response.data;
    }
  );

export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchProductsByCategory',
    async (category: string) => {
        const response = await axios.get(`/api/proxy`, {
            params: { type: category },
        });
        return response.data;
    }
);

export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async (id: any) => {
      const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
      return response.data;
    }
  );

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
        categories: [],
        selectedProduct: null,
        selectedProductStatus: 'idle',
    },
    reducers: {},
    extraReducers: (builder: any) => {
      builder
        .addCase(fetchProducts.pending, (state: any) => {
            state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state: any, action: any) => {
            state.status = 'succeeded';
            state.items = action.payload.products;
        })
        .addCase(fetchProducts.rejected, (state: any, action: any) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(fetchProductById.pending, (state: any) => {
            state.selectedProductStatus = 'loading';
        })
        .addCase(fetchProductById.fulfilled, (state: any, action: any) => {
            state.selectedProductStatus = 'succeeded';
            state.selectedProduct = action.payload.product;
        })
        .addCase(fetchProductById.rejected, (state: any, action: any) => {
            state.selectedProductStatus = 'failed';
            state.error = action.error.message;
        })
        .addCase(fetchProductCategories.pending, (state: any) => {
            state.status = 'loading';
        })
        .addCase(fetchProductCategories.fulfilled, (state: any, action: any) => {
            state.status = 'succeeded';
            state.categories = action.payload.categories;
        })
        .addCase(fetchProductsByCategory.fulfilled, (state: any, action: any) => {
            state.status = 'succeeded';
            state.items = action.payload.products;
        })
    },
  });
  
  export default productsSlice.reducer;