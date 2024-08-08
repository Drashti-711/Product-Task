import { z } from "zod";

export const ProductSchema = z.object({
    id: z.number().optional().nullable(),  
    name: z.string().min(1, {message: 'Product Name is required'}),
    description: z.string().min(1, 'Product Description is required'),
    price: z.string().min(0, "Price must be greater than 0"),
  quantity: z.string().min(1, "Quantity must be at least 1"),
})

export type ProductType = z.infer<typeof ProductSchema>

export const ProductInitialValue = {
    name: '',
    price: null,
    description: '',
    quantity: null,
    id: null
}

