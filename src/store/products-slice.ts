import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await axios.get('https://fakestoreapi.in/api/products');
      return response.data;
    }
  );

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder: any) => {
      builder
        .addCase(fetchProducts.pending, (state: any) => {
            state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state: any, action: any) => {
            console.log('===', action.payload)
            state.status = 'succeeded';
            state.items = action.payload.products;
        })
        .addCase(fetchProducts.rejected, (state: any, action: any) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    },
  });
  
  export default productsSlice.reducer;