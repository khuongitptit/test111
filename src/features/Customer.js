import React, { useState } from 'react'
import { Button, Input, Form, Upload, Modal } from 'antd'
import { Formik, Field } from 'formik'
import axios from 'axios'
import { FieldArray } from 'formik'
import { PlusOutlined } from '@ant-design/icons'
const { Item } = Form
const Customer = () => {
    //
    const getCustomerList = async () => {
        await axios({
            method: 'get',
            url: 'http://localhost:3000/customers',
            headers: {
                Retailer: 'khuongtest2',
                Authorization:
                    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc5NzQ4MTQsImV4cCI6MTU5ODA2MTIxNCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.EWlxADIMLxrDDsYO5fcmU10ssGgU-XINQKrJ4aZ7U5UOw3OBmEMegAwn4ZS8H1koJYkKcibuqFhFRgcrBrHowgUOftDDNXIROywV_BjcsY6kzFw_oVxzLg7aaKQsWgc__phhz9m48sePvf_U2GTzkHBUySi6sU3Ay-HJdgQ61OwBzmAUszXvRmICqHbz_yBQOtU73dP8ejsuwOBjiP554C_GsjKkKw5Ou5X7yGbac0yPcLljHrqQoIHdQV_nuF46k081uKfRTGrVRurnj3oMiks_oa_FdYQxSGvW4Dd3f8ZCjc3NnWU1ZtXGZLDLCyi2vEqIcfhbIoHNKw6X8Z6U2Q',
            },
        }).then(res => {
            console.log(res.data)
        })
    }
    return (
        <div>
            <Button onClick={getCustomerList}>Lấy danh sách khách hàng</Button>
            <hr />
            <p>Lấy chi tiết khách hàng</p>
            <Formik
                initialValues={{ id: '', code: '' }}
                onSubmit={values => {
                    const id = values.id
                    const code = values.code
                    const info = id !== '' ? id : `code/${code}`
                    axios({
                        method: 'get',
                        url: `http://localhost:3000/customers/${info}`,
                        headers: {
                            Retailer: 'khuongtest2',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc3MzUyNzAsImV4cCI6MTU5NzgyMTY3MCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6IjJkODRlOTIwLTA0NjAtNGY4MC1hZTc1LTMwY2FlYmZhNzczYiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MSIsImNsaWVudF9SZXRhaWxlcklkIjoiNzQ5NDY3IiwiY2xpZW50X1VzZXJJZCI6IjM2MTk5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.iB3d7Mk1PdYnkIJfJA4VpZIjodiTXx9s-McNu-S9QwrhQOsySpAQmerPbdFQqsQwysuTbTcKlq38duo7-YUsWgGbWC8b6bP5BHcvqbRgLF0ev5EAmU4E9bS9mjYoCd9vNK0bOrtfjMWZ0G5bkEPgFyAA7dkZB0Mgp70XgECAp_6vqXCZ0VYAyUGIIgWWGgF0nsZuekMlLSD9cNBeGzYuERYkxCtlwnDphVJiuUGlClYOPaZPL3BWvaBEfjAYkgwbHIGI5zfhaCzghukmDPyo4RtEovkO3YZTWMM_QHI4yrsmQRn1L3L97CbkjwpoOjEwNzJMtM8By0lxbwQqGJdXEQ',
                        },
                    }).then(res => {
                        console.log(res.data)
                    })
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                    <Form onFinish={handleSubmit}>
                        <Item label='id / code khách hàng'>
                            <Input
                                name='id'
                                placeholder='ID khách hàng'
                                onChange={handleChange}
                                value={values.id}
                            />
                            <Input
                                name='code'
                                placeholder='code khách hàng'
                                onChange={handleChange}
                                value={values.code}
                            />
                        </Item>
                        <Item>
                            <Button htmlType='submit'>
                                Lấy chi tiết hàng hóa
                            </Button>
                        </Item>
                    </Form>
                )}
            </Formik>
            <hr />
            <p>Thêm mới khách hàng</p>
            <Formik
                initialValues={{
                    code: '',
                    name: '',
                    gender: '',
                    birthDate: '',
                    contactNumber: '',
                    address: '',
                    email: '',
                    comment: '',
                    branchid: '',
                }}
                onSubmit={values => {
                    console.log(values)
                    axios({
                        method: 'post',
                        url: `http://localhost:3000/customers`,
                        headers: {
                            Retailer: 'khuongtest2',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc3MzUyNzAsImV4cCI6MTU5NzgyMTY3MCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6IjJkODRlOTIwLTA0NjAtNGY4MC1hZTc1LTMwY2FlYmZhNzczYiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MSIsImNsaWVudF9SZXRhaWxlcklkIjoiNzQ5NDY3IiwiY2xpZW50X1VzZXJJZCI6IjM2MTk5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.iB3d7Mk1PdYnkIJfJA4VpZIjodiTXx9s-McNu-S9QwrhQOsySpAQmerPbdFQqsQwysuTbTcKlq38duo7-YUsWgGbWC8b6bP5BHcvqbRgLF0ev5EAmU4E9bS9mjYoCd9vNK0bOrtfjMWZ0G5bkEPgFyAA7dkZB0Mgp70XgECAp_6vqXCZ0VYAyUGIIgWWGgF0nsZuekMlLSD9cNBeGzYuERYkxCtlwnDphVJiuUGlClYOPaZPL3BWvaBEfjAYkgwbHIGI5zfhaCzghukmDPyo4RtEovkO3YZTWMM_QHI4yrsmQRn1L3L97CbkjwpoOjEwNzJMtM8By0lxbwQqGJdXEQ',
                        },
                        data: values,
                    }).then(res => {
                        console.log(res.data)
                    })
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                    <Form onFinish={handleSubmit}>
                        <Item label='code'>
                            <Input
                                name='code'
                                placeholder='code'
                                onChange={handleChange}
                                value={values.code}
                            />
                        </Item>
                        <Item label='name'>
                            <Input
                                name='name'
                                placeholder='name'
                                onChange={handleChange}
                                value={values.name}
                            />
                        </Item>
                        <Item label='gender'>
                            <Input
                                name='gender'
                                placeholder='gender'
                                onChange={handleChange}
                                value={values.gender}
                            />
                        </Item>
                        <Item label='birthDate'>
                            <Input
                                name='birthDate'
                                placeholder='birthDate'
                                onChange={handleChange}
                                value={values.birthDate}
                            />
                        </Item>
                        <Item label='contactNumber'>
                            <Input
                                name='contactNumber'
                                placeholder='contactNumber'
                                onChange={handleChange}
                                value={values.contactNumber}
                            />
                        </Item>
                        <Item label='address'>
                            <Input
                                name='address'
                                placeholder='address'
                                onChange={handleChange}
                                value={values.address}
                            />
                        </Item>
                        <Item label='email'>
                            <Input
                                name='email'
                                placeholder='email'
                                onChange={handleChange}
                                value={values.email}
                            />
                        </Item>
                        <Item label='comment'>
                            <Input
                                name='comment'
                                placeholder='comment'
                                onChange={handleChange}
                                value={values.comment}
                            />
                        </Item>
                        <Item label='branchid'>
                            <Input
                                name='branchid'
                                placeholder='branchid'
                                onChange={handleChange}
                                value={values.branchid}
                            />
                        </Item>
                        <Item>
                            <Button htmlType='submit'>Them</Button>
                        </Item>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Customer
