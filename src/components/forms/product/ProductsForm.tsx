import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { ProductInitialValue, ProductSchema, ProductType } from '../schema/product.schema'
import Input from '../../common/Input'
import { Button } from '@mantine/core'
import { Suspense, useEffect } from 'react'
import { addProduct, updateProduct } from '../../../redux/reducer/products.slice'

interface FormDataProps {
    data?: {
        name: string,
        price: number,
        description: string,
        quantity: number,
        id?: number | null,
    }
    isEdit?: boolean
}

const ProductsForm = ({ data, isEdit = false }: FormDataProps) => {
    console.log({ data }, 'produtForm')
    // const dispatch = useDispatch()
    const methods = useForm({
        defaultValues: isEdit ? data : ProductInitialValue,
        mode: 'onBlur',
        resolver: zodResolver(ProductSchema),
    })

    const { setValue, } = methods;

    const onSubmit = (data: ProductType) => {
        console.log({ data }, 'submit data')
        if (isEdit) {
            updateProduct(data)
        } else {
            addProduct(data)
        }
    }

    useEffect(() => {
        if (data) {
            setValue('name', data.name);
            setValue('description', data.description);
            setValue('price', data.price);
            setValue('quantity', data.quantity);
        }
    }, [isEdit])

    return (
        <Suspense fallback="Loading...">
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Input
                        label={'Product Name'}
                        name={'name'}
                        error={'name'}
                        props={{ required: true }}
                    />
                    <Input
                        label={'Description'}
                        name={'description'}
                        props={{ required: true }}
                    />
                    <Input
                        label={'Price'}
                        name={'price'}
                        props={{ required: true }}
                    />
                    <Input
                        label={'Quantity'}
                        name={'quantity'}
                        props={{ required: true }}
                    />
                    <Button variant='filled' > Submit</Button>
                </form>
            </FormProvider>
        </Suspense>
    )
}

export default ProductsForm