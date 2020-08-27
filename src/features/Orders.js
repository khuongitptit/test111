import React from 'react'
import { Button, Input, Form } from 'antd'
import { Formik, FieldArray } from 'formik'
import axios from 'axios'
const { Item } = Form
const Orders = () => {
    const getOrderList = () => {
        axios({
            method: 'get',
            headers: {
                Retailer: 'khuongtest1',
                Authorization:
                    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc4ODc2NDQsImV4cCI6MTU5Nzk3NDA0NCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.kF6za7gFb6PfKYBUKhr52uD8XHnbSS2M9KXtZaViUWIxmWWbrURJYY6ooAqab71-V5C7OUlDrUudxmBa47OvnLvILoiBeE-jZO2E1y4XZ34f81EQ26UqI4mC7Pfzpq0sJiwio-VgHR5dFqzTPdEdumYAGovUsCufmeCvZC242_Lr4KFgurCKGXSMDra3phOHbAI98d6cFuUDQa3KjmMULuiTShzzLy7TpyL5P015kFXyY9UMybEYtlRGJc_tb6JZkmjKTkMJnas8tiOxTp2hoQ1f7J_j0HJ9rawtxvzPdI1FXSYK4xSsdr5-H-1W9dGsjI6nobiYXknOWTRZhFogXg',
            },
            url: 'http://localhost:3000/orders',
            params: {},
        }).then(res => {
            console.log(res)
        })
    }
    return (
        <div>
            <p>Lấy danh sách đặt hàng</p>
            <Button onClick={getOrderList}>Lấy danh sách đặt hàng</Button>
            <hr />
            {/* <Formik
                initialValues={{ id: '' }}
                onSubmit={values => {
                    const id = values.id
                    axios({
                        method: 'get',
                        url: `http://localhost:3000/categories/${id}`,
                        headers: {
                            Retailer: 'khuongtest1',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc4ODc2NDQsImV4cCI6MTU5Nzk3NDA0NCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.kF6za7gFb6PfKYBUKhr52uD8XHnbSS2M9KXtZaViUWIxmWWbrURJYY6ooAqab71-V5C7OUlDrUudxmBa47OvnLvILoiBeE-jZO2E1y4XZ34f81EQ26UqI4mC7Pfzpq0sJiwio-VgHR5dFqzTPdEdumYAGovUsCufmeCvZC242_Lr4KFgurCKGXSMDra3phOHbAI98d6cFuUDQa3KjmMULuiTShzzLy7TpyL5P015kFXyY9UMybEYtlRGJc_tb6JZkmjKTkMJnas8tiOxTp2hoQ1f7J_j0HJ9rawtxvzPdI1FXSYK4xSsdr5-H-1W9dGsjI6nobiYXknOWTRZhFogXg',
                        },
                    }).then(res => {
                        console.log(res.data)
                    })
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                    <Form onFinish={handleSubmit}>
                        <Item>
                            <Input
                                name='id'
                                placeholder='ID nhom hang'
                                onChange={handleChange}
                                value={values.id}
                            />
                        </Item>
                        <Item>
                            <Button htmlType='submit'>Xem</Button>
                        </Item>
                    </Form>
                )}
            </Formik>
            <hr /> */}
            <p>them moi dat hang</p>
            <Formik
                initialValues={{
                    branchId: '',
                    soldById: '',
                    cashierId: '',
                    discount: '',
                    description: '',
                    method: '',
                    totalPayment: '',
                    accountId: '',
                    makeInvoice: '',
                    saleChanelId: '',
                    orderDetails: {
                        productId: '',
                        productCode: '',
                        quantity: '',
                        price: '',
                    },
                    orderDelivery: {
                        address: '',
                        price: '',
                    },
                    customer: {
                        id: '',
                        code: '',
                    },
                    surchages: [
                        {
                            code: '',
                            price: '',
                        },
                    ],
                }}
                onSubmit={values => {
                    console.log(values)
                    axios({
                        method: 'post',
                        url: `http://localhost:3000/orders`,
                        headers: {
                            Retailer: 'khuongtest1',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc4ODc2NDQsImV4cCI6MTU5Nzk3NDA0NCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.kF6za7gFb6PfKYBUKhr52uD8XHnbSS2M9KXtZaViUWIxmWWbrURJYY6ooAqab71-V5C7OUlDrUudxmBa47OvnLvILoiBeE-jZO2E1y4XZ34f81EQ26UqI4mC7Pfzpq0sJiwio-VgHR5dFqzTPdEdumYAGovUsCufmeCvZC242_Lr4KFgurCKGXSMDra3phOHbAI98d6cFuUDQa3KjmMULuiTShzzLy7TpyL5P015kFXyY9UMybEYtlRGJc_tb6JZkmjKTkMJnas8tiOxTp2hoQ1f7J_j0HJ9rawtxvzPdI1FXSYK4xSsdr5-H-1W9dGsjI6nobiYXknOWTRZhFogXg',
                        },
                        data: values,
                    }).then(res => {
                        console.log(res.data)
                    })
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                    <Form onFinish={handleSubmit}>
                        <Item label='branchId'>
                            <Input
                                name='branchId'
                                placeholder='branchId'
                                onChange={handleChange}
                                value={values.branchId}
                            />
                        </Item>
                        <Item label='soldById'>
                            <Input
                                name='soldById'
                                placeholder='soldById'
                                onChange={handleChange}
                                value={values.soldById}
                            />
                        </Item>
                        <Item label='cashierId'>
                            <Input
                                name='cashierId'
                                placeholder='cashierId'
                                onChange={handleChange}
                                value={values.cashierId}
                            />
                        </Item>
                        <Item label='method'>
                            <Input
                                name='method'
                                placeholder='method'
                                onChange={handleChange}
                                value={values.method}
                            />
                        </Item>
                        <Item label='totalPayment'>
                            <Input
                                name='totalPayment'
                                placeholder='totalPayment'
                                onChange={handleChange}
                                value={values.totalPayment}
                            />
                        </Item>
                        <Item label='makeInvoice'>
                            <Input
                                type='checkbox'
                                name='makeInvoice'
                                placeholder='makeInvoice'
                                onChange={handleChange}
                                value={values.makeInvoice}
                            />
                        </Item>
                        <Item label='orderDetails'>
                            <Input
                                name='orderDetails.productId'
                                placeholder='productId'
                                onChange={handleChange}
                                value={values.orderDetails.productId}
                            />
                            <Input
                                name='orderDetails.productCode'
                                placeholder='productCode'
                                onChange={handleChange}
                                value={values.orderDetails.productCode}
                            />
                            <Input
                                name='orderDetails.quantity'
                                placeholder='quantity'
                                onChange={handleChange}
                                value={values.orderDetails.quantity}
                            />
                            <Input
                                name='orderDetails.price'
                                placeholder='price'
                                onChange={handleChange}
                                value={values.orderDetails.price}
                            />
                        </Item>
                        <Item label='orderDelivery'>
                            <Input
                                name='orderDelivery.address'
                                placeholder='address'
                                onChange={handleChange}
                                value={values.orderDelivery.address}
                            />
                            <Input
                                name='orderDelivery.price'
                                placeholder='price'
                                onChange={handleChange}
                                value={values.orderDelivery.price}
                            />
                        </Item>
                        <Item label='customer'>
                            <Input
                                name='customer.id'
                                placeholder='id'
                                onChange={handleChange}
                                value={values.customer.id}
                            />
                            <Input
                                name='customer.code'
                                placeholder='code'
                                onChange={handleChange}
                                value={values.customer.code}
                            />
                        </Item>
                        <Item label='surchages'>
                            <FieldArray name='surchages'>
                                {formikHelpers => (
                                    <div>
                                        {values.surchages &&
                                        values.surchages.length > 0 ? (
                                            values.surchages.map(
                                                (surchage, index) => (
                                                    <div>
                                                        <Input
                                                            name={`surchages.${index}.code`}
                                                            value={
                                                                surchage.code
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Input
                                                            name={`surchages.${index}.price`}
                                                            value={
                                                                surchage.price
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Button
                                                            onClick={() =>
                                                                formikHelpers.remove(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </Button>
                                                    </div>
                                                )
                                            )
                                        ) : (
                                            <div></div>
                                        )}
                                        <Button
                                            onClick={() =>
                                                formikHelpers.insert(
                                                    values.surchages.length + 1,
                                                    { code: '', price: '' }
                                                )
                                            }
                                        >
                                            +
                                        </Button>
                                    </div>
                                )}
                            </FieldArray>
                        </Item>
                        <Item>
                            <Button htmlType='submit'>Them</Button>
                        </Item>
                    </Form>
                )}
            </Formik>
            <hr />
            {/* <p>cap nhat nhom hang</p>
            <Formik
                initialValues={{ id: '', categoryName: '' }}
                onSubmit={values => {
                    const id = values.id
                    const categoryName = values.categoryName
                    axios({
                        method: 'put',
                        url: `http://localhost:3000/categories/${id}`,
                        headers: {
                            Retailer: 'khuongtest1',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc4ODc2NDQsImV4cCI6MTU5Nzk3NDA0NCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.kF6za7gFb6PfKYBUKhr52uD8XHnbSS2M9KXtZaViUWIxmWWbrURJYY6ooAqab71-V5C7OUlDrUudxmBa47OvnLvILoiBeE-jZO2E1y4XZ34f81EQ26UqI4mC7Pfzpq0sJiwio-VgHR5dFqzTPdEdumYAGovUsCufmeCvZC242_Lr4KFgurCKGXSMDra3phOHbAI98d6cFuUDQa3KjmMULuiTShzzLy7TpyL5P015kFXyY9UMybEYtlRGJc_tb6JZkmjKTkMJnas8tiOxTp2hoQ1f7J_j0HJ9rawtxvzPdI1FXSYK4xSsdr5-H-1W9dGsjI6nobiYXknOWTRZhFogXg',
                        },
                        data: { categoryName: categoryName },
                    }).then(res => {
                        console.log(res.data)
                    })
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                    <Form onFinish={handleSubmit}>
                        <Item>
                            <Input
                                name='id'
                                placeholder='id of category'
                                onChange={handleChange}
                                value={values.id}
                            />
                        </Item>
                        <Item>
                            <Input
                                name='categoryName'
                                placeholder='category name'
                                onChange={handleChange}
                                value={values.categoryName}
                            />
                        </Item>
                        <Item>
                            <Button htmlType='submit'>Them</Button>
                        </Item>
                    </Form>
                )}
            </Formik>
            <hr />
            <p>xoa nhom hang</p>
            <Formik
                initialValues={{ id: '' }}
                onSubmit={values => {
                    const id = values.id
                    axios({
                        method: 'delete',
                        url: `http://localhost:3000/categories/${id}`,
                        headers: {
                            Retailer: 'khuongtest1',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc4ODc2NDQsImV4cCI6MTU5Nzk3NDA0NCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.kF6za7gFb6PfKYBUKhr52uD8XHnbSS2M9KXtZaViUWIxmWWbrURJYY6ooAqab71-V5C7OUlDrUudxmBa47OvnLvILoiBeE-jZO2E1y4XZ34f81EQ26UqI4mC7Pfzpq0sJiwio-VgHR5dFqzTPdEdumYAGovUsCufmeCvZC242_Lr4KFgurCKGXSMDra3phOHbAI98d6cFuUDQa3KjmMULuiTShzzLy7TpyL5P015kFXyY9UMybEYtlRGJc_tb6JZkmjKTkMJnas8tiOxTp2hoQ1f7J_j0HJ9rawtxvzPdI1FXSYK4xSsdr5-H-1W9dGsjI6nobiYXknOWTRZhFogXg',
                        },
                        data: null,
                    }).then(res => {
                        console.log(res.data)
                    })
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                    <Form onFinish={handleSubmit}>
                        <Item>
                            <Input
                                name='id'
                                placeholder='id of category to delete'
                                onChange={handleChange}
                                value={values.id}
                            />
                        </Item>
                        <Item>
                            <Button htmlType='submit'>Xoa</Button>
                        </Item>
                    </Form>
                )}
            </Formik> */}
            {/* <hr />  */}
        </div>
    )
}

export default Orders
