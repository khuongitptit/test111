import React from 'react'
import { Button, Input, Form } from 'antd'
import { Formik } from 'formik'
import axios from 'axios'
const { Item } = Form
const ProductGroup = () => {
    const getToken = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3000/token',
            data: {
                scopes: 'PublicApi.Access',
                grant_type: 'client_credentials',
                client_id: 'e81ca92d-8c74-4e6f-adb4-8ea636b7d092',
                client_secret: '7CDB1DDE156A17D040DF4253E1E03AAEA8C122FE',
            },
        }).then(res => {
            console.log(res)
        })
    }
    const getProductGroupList = () => {
        axios({
            method: 'get',
            headers: {
                Retailer: 'khuongtest2',
                Authorization:
                    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc5NzQ4MTQsImV4cCI6MTU5ODA2MTIxNCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.EWlxADIMLxrDDsYO5fcmU10ssGgU-XINQKrJ4aZ7U5UOw3OBmEMegAwn4ZS8H1koJYkKcibuqFhFRgcrBrHowgUOftDDNXIROywV_BjcsY6kzFw_oVxzLg7aaKQsWgc__phhz9m48sePvf_U2GTzkHBUySi6sU3Ay-HJdgQ61OwBzmAUszXvRmICqHbz_yBQOtU73dP8ejsuwOBjiP554C_GsjKkKw5Ou5X7yGbac0yPcLljHrqQoIHdQV_nuF46k081uKfRTGrVRurnj3oMiks_oa_FdYQxSGvW4Dd3f8ZCjc3NnWU1ZtXGZLDLCyi2vEqIcfhbIoHNKw6X8Z6U2Q',
            },
            url: 'http://localhost:3000/categories',
        }).then(res => {
            console.log(res)
        })
    }
    return (
        <div>
            <Button onClick={getToken}>Lấy access token</Button>
            <hr />
            <Button onClick={getProductGroupList}>
                Lấy danh sách nhóm hàng
            </Button>
            <hr />
            <p>lay chi tiet nhom hang</p>
            <Formik
                initialValues={{ id: '' }}
                onSubmit={values => {
                    const id = values.id
                    axios({
                        method: 'get',
                        url: `http://localhost:3000/categories/${id}`,
                        headers: {
                            Retailer: 'khuongtest2',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc5NzQ4MTQsImV4cCI6MTU5ODA2MTIxNCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.EWlxADIMLxrDDsYO5fcmU10ssGgU-XINQKrJ4aZ7U5UOw3OBmEMegAwn4ZS8H1koJYkKcibuqFhFRgcrBrHowgUOftDDNXIROywV_BjcsY6kzFw_oVxzLg7aaKQsWgc__phhz9m48sePvf_U2GTzkHBUySi6sU3Ay-HJdgQ61OwBzmAUszXvRmICqHbz_yBQOtU73dP8ejsuwOBjiP554C_GsjKkKw5Ou5X7yGbac0yPcLljHrqQoIHdQV_nuF46k081uKfRTGrVRurnj3oMiks_oa_FdYQxSGvW4Dd3f8ZCjc3NnWU1ZtXGZLDLCyi2vEqIcfhbIoHNKw6X8Z6U2Q',
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
            <hr />
            <p>them nhom hang</p>
            <Formik
                initialValues={{ categoryName: '' }}
                onSubmit={values => {
                    const categoryName = values.categoryName
                    axios({
                        method: 'post',
                        url: `http://localhost:3000/categories`,
                        headers: {
                            Retailer: 'khuongtest2',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc5NzQ4MTQsImV4cCI6MTU5ODA2MTIxNCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.EWlxADIMLxrDDsYO5fcmU10ssGgU-XINQKrJ4aZ7U5UOw3OBmEMegAwn4ZS8H1koJYkKcibuqFhFRgcrBrHowgUOftDDNXIROywV_BjcsY6kzFw_oVxzLg7aaKQsWgc__phhz9m48sePvf_U2GTzkHBUySi6sU3Ay-HJdgQ61OwBzmAUszXvRmICqHbz_yBQOtU73dP8ejsuwOBjiP554C_GsjKkKw5Ou5X7yGbac0yPcLljHrqQoIHdQV_nuF46k081uKfRTGrVRurnj3oMiks_oa_FdYQxSGvW4Dd3f8ZCjc3NnWU1ZtXGZLDLCyi2vEqIcfhbIoHNKw6X8Z6U2Q',
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
            <p>cap nhat nhom hang</p>
            <Formik
                initialValues={{ id: '', categoryName: '' }}
                onSubmit={values => {
                    const id = values.id
                    const categoryName = values.categoryName
                    axios({
                        method: 'put',
                        url: `http://localhost:3000/categories/${id}`,
                        headers: {
                            Retailer: 'khuongtest2',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc5NzQ4MTQsImV4cCI6MTU5ODA2MTIxNCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.EWlxADIMLxrDDsYO5fcmU10ssGgU-XINQKrJ4aZ7U5UOw3OBmEMegAwn4ZS8H1koJYkKcibuqFhFRgcrBrHowgUOftDDNXIROywV_BjcsY6kzFw_oVxzLg7aaKQsWgc__phhz9m48sePvf_U2GTzkHBUySi6sU3Ay-HJdgQ61OwBzmAUszXvRmICqHbz_yBQOtU73dP8ejsuwOBjiP554C_GsjKkKw5Ou5X7yGbac0yPcLljHrqQoIHdQV_nuF46k081uKfRTGrVRurnj3oMiks_oa_FdYQxSGvW4Dd3f8ZCjc3NnWU1ZtXGZLDLCyi2vEqIcfhbIoHNKw6X8Z6U2Q',
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
                            Retailer: 'khuongtest2',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc5NzQ4MTQsImV4cCI6MTU5ODA2MTIxNCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.EWlxADIMLxrDDsYO5fcmU10ssGgU-XINQKrJ4aZ7U5UOw3OBmEMegAwn4ZS8H1koJYkKcibuqFhFRgcrBrHowgUOftDDNXIROywV_BjcsY6kzFw_oVxzLg7aaKQsWgc__phhz9m48sePvf_U2GTzkHBUySi6sU3Ay-HJdgQ61OwBzmAUszXvRmICqHbz_yBQOtU73dP8ejsuwOBjiP554C_GsjKkKw5Ou5X7yGbac0yPcLljHrqQoIHdQV_nuF46k081uKfRTGrVRurnj3oMiks_oa_FdYQxSGvW4Dd3f8ZCjc3NnWU1ZtXGZLDLCyi2vEqIcfhbIoHNKw6X8Z6U2Q',
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
            </Formik>
            <hr />
        </div>
    )
}

export default ProductGroup
