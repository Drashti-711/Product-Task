import { createSlice } from "@reduxjs/toolkit";
import ProductTypes from "../../utility/types/productTypes";

const initialProductValue = {
    data: {},
    products: [],
    defaultId: 1
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialProductValue,
    reducers: {
         addProduct: (state, action) => {
            // state.products.push(action.payload as any);
            const newProduct: ProductTypes = { ...action.payload, id: state.defaultId };
            state.products.push(newProduct as ProductTypes);
            state.defaultId += 1;
        },
        updateProduct: (state, action) => {
            // state.data = action.payload;
            const index = state.products.findIndex(product => product?.['id'] === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        listProducts: (state, action) => {
            state.products = action.payload;
        }
    },
})

export const { addProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;