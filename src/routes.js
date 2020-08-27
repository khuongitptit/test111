import React from 'react'
import ProductGroups from './features/ProductGroup'
import Products from './features/Products'
import Customer from './features/Customer'
import Orders from './features/Orders'
import PriceBook from './features/PriceBook'
import SaleChannel from './features/SaleChannel'
export default [
    {
        path: '/productgroups',
        exact: true,
        component: () => <ProductGroups />,
    },
    {
        path: '/products',
        exact: true,
        component: () => <Products />,
    },
    {
        path: '/customer',
        exact: true,
        component: () => <Customer />,
    },
    {
        path: '/orders',
        exact: true,
        component: () => <Orders />,
    },
    {
        path: '/pricebook',
        exact: true,
        component: () => <PriceBook />,
    },
    {
        path: '/salechannel',
        exact: true,
        component: () => <SaleChannel />,
    },
]
