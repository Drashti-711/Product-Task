import { Button } from '@mantine/core'
import { openModal } from '@mantine/modals'
import GlobalTable from '../../common/GlobalTable'
import { Productscolumns } from './ProductsColumn'
import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
// import { RootState } from '@reduxjs/toolkit/query'

const ProductsForm = lazy(() => import('../../forms/product/ProductsForm'))

const ProductsList = () => {
    const data1 = useSelector((state: RootState) => state.product.products)
    // const data = [
    //     { name: 'sdsjd', description: 'sadsdsd', quantity: 2, price: 123, id: 1 },
    //     { name: 'sdsjd', description: 'sadsdsd', quantity: 2, price: 123, id: 1 },
    //     { name: 'sdsjd', description: 'sadsdsd', quantity: 2, price: 123, id: 1 }]

    return (
        <div>
            <Button onClick={() => openModal({
                title: 'Add Product',
                children: <ProductsForm />,
            })}>Add New Product</Button>
            <GlobalTable
                columns={Productscolumns}
                data={data1}
                renderRowActions={({ row }) => {
                    const data = row?.original
                    return <>
                        <Button onClick={() => openModal({
                            title: 'Edit Product',
                            id: row.id,
                            children: <ProductsForm data={data} isEdit={true} />,
                        })}>Edit</Button>
                    </>
                }} />
        </div>
    )
}

export default ProductsList