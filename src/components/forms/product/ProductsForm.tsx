import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { ProductInitialValue, ProductSchema,  } from '../schema/product.schema'
import Input from '../../common/Input'
import { Button } from '@mantine/core'
import { Suspense, useEffect } from 'react'
import { addProduct, updateProduct } from '../../../redux/reducer/products.slice'
import { useDispatch } from 'react-redux'
import { closeAllModals } from '@mantine/modals'

interface FormDataProps {
    data?: {
        name: string,
        price: number | string ,
        description: string,
        quantity: number | string ,
        id?: number | null,
    }
    isEdit?: boolean
}

const ProductsForm = ({ data, isEdit = false }: FormDataProps) => {
    const dispatch = useDispatch()
    const methods = useForm({
        defaultValues: isEdit ? data : ProductInitialValue,
        mode: 'onBlur',
        resolver: zodResolver(ProductSchema),
    })

    const { setValue, } = methods;

    const onSubmit = (data) => {
        // console.log({ data }, 'submit data')
        if (isEdit) {
            dispatch(updateProduct(data))
            closeAllModals()
        } else {
            dispatch(addProduct(data))
            closeAllModals()
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
                    <Button variant='filled' type="submit" > Submit</Button>
                </form>
            </FormProvider>
        </Suspense>
    )
}

export default ProductsForm