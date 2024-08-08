import { createSlice } from "@reduxjs/toolkit";

const initialProductValue = {
    data: {
        name: '',
        price: '',
        description: '',
    },
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialProductValue,
    reducers: {
        addProduct: (state, action) => {
            state.data = action.payload;
        },
        updateProduct: (state, action) => {
            state.data = action.payload;
            // const index = state.findIndex(product => product.id === action.payload.id);
            // if (index !== -1) {
            //     state[index] = action.payload;
            // }
        },
    },
})

export const { addProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;