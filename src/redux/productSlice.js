import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productApi from '../api/ProductApi'

const initialState = {
  products: [],
  product: null
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPageAsync.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => { })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        state.product = action.payload;
        console.log(action.payload);
      })
      .addCase(editProductAsync.fulfilled, (state, action) => {
      })
  },
})
export const getPageAsync = createAsyncThunk(
  'products/getPage',
  async (filter) => {
    const reponse = await productApi.getPage(filter)
    const filterProducts = reponse.data.filter(x => x.image)
    console.log(filterProducts)
    return filterProducts
  }
)
export const addProductAsync = createAsyncThunk(
  'products/addProduct',
  async (product) => {
    await productApi.add(product)
  }
)
export const getProductAsync = createAsyncThunk(
  'products/getProduct',
  async (id) => {
    const reponse = await productApi.get(id)
    console.log(reponse)
    return reponse.data
  }
)
export const editProductAsync = createAsyncThunk(
  'products/editProduct',
  async (product) => {
    await productApi.update(product)
  }
)

export default productSlice.reducer