import React from 'react'
import { Button, Input, Form } from 'antd'
import { Formik } from 'formik'
import axios from 'axios'
const { Item } = Form
class ProductGroup extends React.Component {
    getPriceBookList = () => {
        axios({
            method: 'get',
            headers: {
                Retailer: 'khuongtest2',
                Authorization:
                    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc5NzQ4MTQsImV4cCI6MTU5ODA2MTIxNCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.EWlxADIMLxrDDsYO5fcmU10ssGgU-XINQKrJ4aZ7U5UOw3OBmEMegAwn4ZS8H1koJYkKcibuqFhFRgcrBrHowgUOftDDNXIROywV_BjcsY6kzFw_oVxzLg7aaKQsWgc__phhz9m48sePvf_U2GTzkHBUySi6sU3Ay-HJdgQ61OwBzmAUszXvRmICqHbz_yBQOtU73dP8ejsuwOBjiP554C_GsjKkKw5Ou5X7yGbac0yPcLljHrqQoIHdQV_nuF46k081uKfRTGrVRurnj3oMiks_oa_FdYQxSGvW4Dd3f8ZCjc3NnWU1ZtXGZLDLCyi2vEqIcfhbIoHNKw6X8Z6U2Q',
            },
            url: 'http://localhost:3000/pullpricebooks',
        }).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <Button onClick={this.getPriceBookList}>
                    Lấy danh sách bảng giá
                </Button>
                <hr />
                <p>Lấy chi tiết bảng giá</p>
                <Formik
                    initialValues={{ id: '' }}
                    onSubmit={values => {
                        const id = values.id
                        axios({
                            method: 'get',
                            url: `http://localhost:3000/pricebooks/${id}`,
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
                                    placeholder='ID bảng giá'
                                    onChange={handleChange}
                                    value={values.id}
                                />
                            </Item>
                            <Item>
                                <Button htmlType='submit'>Lấy</Button>
                            </Item>
                        </Form>
                    )}
                </Formik>
                <hr />
            </div>
        )
    }
}

export default ProductGroup
