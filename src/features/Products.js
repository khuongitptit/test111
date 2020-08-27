import React, { useState } from 'react'
import { Button, Input, Form, Upload, Modal } from 'antd'
import { Formik, Field } from 'formik'
import axios from 'axios'
import { FieldArray } from 'formik'
import { PlusOutlined } from '@ant-design/icons'
const { Item } = Form
const Products = () => {
    const [previewVisible, setPreviewVisible] = useState(false)
    const [previewImage, setPreviewImage] = useState('')
    const [previewTitle, setPreviewTitle] = useState('')
    const [fileList, setFileList] = useState('')
    //
    const getProductList = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/pullproducts',
            headers: {
                Retailer: 'khuongtest2',
                Authorization:
                    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc5NzQ4MTQsImV4cCI6MTU5ODA2MTIxNCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.EWlxADIMLxrDDsYO5fcmU10ssGgU-XINQKrJ4aZ7U5UOw3OBmEMegAwn4ZS8H1koJYkKcibuqFhFRgcrBrHowgUOftDDNXIROywV_BjcsY6kzFw_oVxzLg7aaKQsWgc__phhz9m48sePvf_U2GTzkHBUySi6sU3Ay-HJdgQ61OwBzmAUszXvRmICqHbz_yBQOtU73dP8ejsuwOBjiP554C_GsjKkKw5Ou5X7yGbac0yPcLljHrqQoIHdQV_nuF46k081uKfRTGrVRurnj3oMiks_oa_FdYQxSGvW4Dd3f8ZCjc3NnWU1ZtXGZLDLCyi2vEqIcfhbIoHNKw6X8Z6U2Q',
            },
        }).then(res => {
            console.log(res.data)
        })
    }
    const getProductAttributes = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/attributes/allwithdistinctvalue',
            headers: {
                Retailer: 'khuongtest2',
                Authorization:
                    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc5NzQ4MTQsImV4cCI6MTU5ODA2MTIxNCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.EWlxADIMLxrDDsYO5fcmU10ssGgU-XINQKrJ4aZ7U5UOw3OBmEMegAwn4ZS8H1koJYkKcibuqFhFRgcrBrHowgUOftDDNXIROywV_BjcsY6kzFw_oVxzLg7aaKQsWgc__phhz9m48sePvf_U2GTzkHBUySi6sU3Ay-HJdgQ61OwBzmAUszXvRmICqHbz_yBQOtU73dP8ejsuwOBjiP554C_GsjKkKw5Ou5X7yGbac0yPcLljHrqQoIHdQV_nuF46k081uKfRTGrVRurnj3oMiks_oa_FdYQxSGvW4Dd3f8ZCjc3NnWU1ZtXGZLDLCyi2vEqIcfhbIoHNKw6X8Z6U2Q',
            },
        }).then(res => {
            console.log(res.data)
        })
    }
    const getBase64 = file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }
    const handleCancel = () => {
        setPreviewVisible(false)
    }
    const onPreviewImage = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj)
        }
        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(
            file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
        )
    }
    const onImageFileChange = ({ fileList }) => {
        setFileList(fileList)
        handleFileListChange({ fileList })
    }
    const beforeUpload = file => {
        setFileList({ ...fileList, file })
        return false
    }
    const handleFileListChange = ({ fileList }) => {
        setFileList(fileList)
    }
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div className='ant-upload-text'>Upload</div>
        </div>
    )
    return (
        <div>
            <Button onClick={getProductList}>Lấy danh sách hàng hóa</Button>
            <hr />
            <p>Lấy chi tiết hàng hóa</p>
            <Formik
                initialValues={{ id: '', code: '' }}
                onSubmit={values => {
                    const id = values.id
                    const code = values.code
                    const info = id !== '' ? id : `code${code}`
                    axios({
                        method: 'get',
                        url: `http://localhost:3000/products/${info}`,
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
                        <Item label='id / code hang hoa'>
                            <Input
                                name='id'
                                placeholder='ID hang hoa'
                                onChange={handleChange}
                                value={values.id}
                            />
                            <Input
                                name='code'
                                placeholder='code hang hoa'
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
            <p>Thêm mới hàng hóa</p>
            {/* bỏ masterProductId nếu ko có attributes */}
            <Formik
                initialValues={{
                    name: '',
                    code: '',
                    fullName: '',
                    categoryId: 0,
                    allowsSale: false,
                    description: '',
                    hasVariants: false,
                    attributes: [
                        {
                            attributeName: '',
                            attributeValue: '',
                        },
                    ],
                    unit: '',
                    masterProductId: 0,
                    masterUnitId: 0,
                    conversionValue: 0,
                    inventories: [
                        {
                            branchId: 0,
                            branchName: 0,
                            onHand: 0,
                            cost: 0,
                            reserved: 0,
                        },
                    ],
                    basePrice: 0,
                    weight: 0,
                    images: [],
                }}
                onSubmit={values => {
                    console.log(values)
                    const {
                        name,
                        code,
                        fullName,
                        categoryId,
                        allowsSale,
                    } = values
                    axios({
                        method: 'post',
                        url: `http://localhost:3000/products`,
                        headers: {
                            Retailer: 'khuongtest2',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc5NzQ4MTQsImV4cCI6MTU5ODA2MTIxNCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.EWlxADIMLxrDDsYO5fcmU10ssGgU-XINQKrJ4aZ7U5UOw3OBmEMegAwn4ZS8H1koJYkKcibuqFhFRgcrBrHowgUOftDDNXIROywV_BjcsY6kzFw_oVxzLg7aaKQsWgc__phhz9m48sePvf_U2GTzkHBUySi6sU3Ay-HJdgQ61OwBzmAUszXvRmICqHbz_yBQOtU73dP8ejsuwOBjiP554C_GsjKkKw5Ou5X7yGbac0yPcLljHrqQoIHdQV_nuF46k081uKfRTGrVRurnj3oMiks_oa_FdYQxSGvW4Dd3f8ZCjc3NnWU1ZtXGZLDLCyi2vEqIcfhbIoHNKw6X8Z6U2Q',
                        },
                        data: values,
                    }).then(res => {
                        console.log(res.data)
                    })
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                    <Form onFinish={handleSubmit}>
                        <Item label='name'>
                            <Input
                                name='name'
                                placeholder='name'
                                onChange={handleChange}
                                value={values.name}
                            />
                        </Item>
                        <Item label='code'>
                            <Input
                                name='code'
                                placeholder='code'
                                onChange={handleChange}
                                value={values.code}
                            />
                        </Item>
                        <Item label='fullname'>
                            <Input
                                name='fullName'
                                placeholder='fullName'
                                onChange={handleChange}
                                value={values.fullName}
                            />
                        </Item>
                        <Item label='categoryId'>
                            <Input
                                type='number'
                                name='categoryId'
                                placeholder='category id'
                                onChange={handleChange}
                                value={values.categoryId}
                            />
                        </Item>
                        <Item label='allows sale'>
                            <Input
                                type='checkbox'
                                name='allowsSale'
                                placeholder='allow sale'
                                onChange={handleChange}
                                value={values.allowsSale}
                            />
                        </Item>
                        <Item label='description'>
                            <Input
                                name='description'
                                placeholder='description'
                                onChange={handleChange}
                                value={values.description}
                            />
                        </Item>
                        <Item label='has variants'>
                            <Input
                                type='checkbox'
                                name='hasVariants'
                                placeholder='has variants'
                                onChange={handleChange}
                                value={values.hasVariants}
                            />
                        </Item>
                        <Item label='attributes'>
                            <FieldArray name='attributes'>
                                {arrayHelpers => (
                                    <div>
                                        {values.attributes &&
                                        values.attributes.length > 0 ? (
                                            values.attributes.map(
                                                (attribute, index) => (
                                                    <div key={index}>
                                                        <Field
                                                            name={`attributes.${index}.attributeName`}
                                                            placeholder='attribute name'
                                                            value={
                                                                attribute.attributeName
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Field
                                                            name={`attributes.${index}.attributeValue`}
                                                            placeholder='value'
                                                            values={
                                                                attribute.attributeValue
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Button
                                                            onClick={() =>
                                                                arrayHelpers.remove(
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
                                                arrayHelpers.insert(
                                                    values.attributes.length +
                                                        1,
                                                    {
                                                        attributeName: '',
                                                        attributeValue: '',
                                                    }
                                                )
                                            }
                                        >
                                            +
                                        </Button>
                                    </div>
                                )}
                            </FieldArray>
                        </Item>
                        <Item label='unit'>
                            <Input
                                name='unit'
                                placeholder='unit'
                                onChange={handleChange}
                                value={values.unit}
                            />
                        </Item>
                        <Item label='masterProductId'>
                            <Input
                                name='masterProductId'
                                placeholder='masterProductId'
                                onChange={handleChange}
                                value={values.masterProductId}
                            />
                        </Item>
                        <Item label='masterUnitId'>
                            <Input
                                type='number'
                                name='masterUnitId'
                                placeholder='masterUnitId'
                                onChange={handleChange}
                                value={values.masterUnitId}
                            />
                        </Item>
                        <Item label='conversionValue'>
                            <Input
                                type='number'
                                name='conversionValue'
                                placeholder='conversionValue'
                                onChange={handleChange}
                                value={values.conversionValue}
                            />
                        </Item>
                        <Item label='inventories'>
                            <FieldArray name='inventories'>
                                {arrayHelpers => (
                                    <div>
                                        {values.inventories &&
                                        values.inventories.length > 0 ? (
                                            values.inventories.map(
                                                (inventory, index) => (
                                                    <div key={index}>
                                                        <Field
                                                            type='number'
                                                            name={`inventories.${index}.branchId`}
                                                            placeholder='branchId'
                                                            value={
                                                                inventory.branchId
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Field
                                                            name={`inventories.${index}.branchName`}
                                                            placeholder='branchName'
                                                            values={
                                                                inventory.branchName
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Field
                                                            type='number'
                                                            name={`inventories.${index}.onHand`}
                                                            placeholder='onHand'
                                                            values={
                                                                inventory.onHand
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Field
                                                            type='number'
                                                            name={`inventories.${index}.cost`}
                                                            placeholder='cost'
                                                            values={
                                                                inventory.cost
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Field
                                                            type='number'
                                                            name={`inventories.${index}.reserved`}
                                                            placeholder='reserved'
                                                            values={
                                                                inventory.reserved
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />

                                                        <Button
                                                            onClick={() =>
                                                                arrayHelpers.remove(
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
                                                arrayHelpers.insert(
                                                    values.inventories.length +
                                                        1,
                                                    {
                                                        branchId: 0,
                                                        branchName: 0,
                                                        onHand: 0,
                                                        cost: 0,
                                                        reserved: 0,
                                                    }
                                                )
                                            }
                                        >
                                            +
                                        </Button>
                                    </div>
                                )}
                            </FieldArray>
                        </Item>
                        <Item label='basePrice'>
                            <Input
                                type='number'
                                name='basePrice'
                                placeholder='basePrice'
                                onChange={handleChange}
                                value={values.basePrice}
                            />
                        </Item>
                        <Item label='weight'>
                            <Input
                                type='number'
                                name='weight'
                                placeholder='weight'
                                onChange={handleChange}
                                value={values.weight}
                            />
                        </Item>
                        <Item label='hinh anh'>
                            <div>
                                <Upload
                                    listType='picture-card'
                                    fileList={fileList}
                                    onPreview={onPreviewImage}
                                    onChange={handleFileListChange}
                                    beforeUpload={beforeUpload}
                                >
                                    {fileList.length >= 5 ? null : uploadButton}
                                </Upload>
                                <Modal
                                    visible={previewVisible}
                                    title={previewTitle}
                                    footer={null}
                                    onCancel={handleCancel}
                                >
                                    <img
                                        alt='img preview'
                                        style={{ width: '100%' }}
                                        src={previewImage}
                                    />
                                </Modal>
                            </div>
                        </Item>
                        <Item>
                            <Button htmlType='submit'>Them</Button>
                        </Item>
                    </Form>
                )}
            </Formik>
            <hr />
            <p>Cập nhật hàng hóa</p>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    code: '',
                    fullName: '',
                    categoryId: 0,
                    allowsSale: false,
                    description: '',
                    hasVariants: false,
                    attributes: [
                        {
                            attributeName: '',
                            attributeValue: '',
                        },
                    ],
                    unit: '',
                    masterProductId: 0,
                    masterUnitId: 0,
                    conversionValue: 0,
                    inventories: [
                        {
                            branchId: 0,
                            branchName: 0,
                            onHand: 0,
                            cost: 0,
                            reserved: 0,
                        },
                    ],
                    basePrice: 0,
                    weight: 0,
                    images: [],
                }}
                onSubmit={values => {
                    const { id, ...data } = values
                    console.log(data)
                    const test = { name: values.name }
                    axios({
                        method: 'put',
                        url: `http://localhost:3000/products/${id}`,
                        headers: {
                            Retailer: 'khuongtest2',
                            Authorization:
                                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTc5NzQ4MTQsImV4cCI6MTU5ODA2MTIxNCwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6ImU4MWNhOTJkLThjNzQtNGU2Zi1hZGI0LThlYTYzNmI3ZDA5MiIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJraHVvbmd0ZXN0MiIsImNsaWVudF9SZXRhaWxlcklkIjoiNzUxNTE4IiwiY2xpZW50X1VzZXJJZCI6IjQwMDQ5IiwiY2xpZW50X1NlbnNpdGl2ZUFwaSI6IlRydWUiLCJzY29wZSI6WyJQdWJsaWNBcGkuQWNjZXNzIl19.EWlxADIMLxrDDsYO5fcmU10ssGgU-XINQKrJ4aZ7U5UOw3OBmEMegAwn4ZS8H1koJYkKcibuqFhFRgcrBrHowgUOftDDNXIROywV_BjcsY6kzFw_oVxzLg7aaKQsWgc__phhz9m48sePvf_U2GTzkHBUySi6sU3Ay-HJdgQ61OwBzmAUszXvRmICqHbz_yBQOtU73dP8ejsuwOBjiP554C_GsjKkKw5Ou5X7yGbac0yPcLljHrqQoIHdQV_nuF46k081uKfRTGrVRurnj3oMiks_oa_FdYQxSGvW4Dd3f8ZCjc3NnWU1ZtXGZLDLCyi2vEqIcfhbIoHNKw6X8Z6U2Q',
                        },
                        data: test,
                    }).then(res => {
                        console.log(res.data)
                    })
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                    <Form onFinish={handleSubmit}>
                        <Item label='id'>
                            <Input
                                name='id'
                                placeholder='id'
                                onChange={handleChange}
                                value={values.id}
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
                        <Item label='code'>
                            <Input
                                name='code'
                                placeholder='code'
                                onChange={handleChange}
                                value={values.code}
                            />
                        </Item>
                        <Item label='fullname'>
                            <Input
                                name='fullName'
                                placeholder='fullName'
                                onChange={handleChange}
                                value={values.fullName}
                            />
                        </Item>
                        <Item label='categoryId'>
                            <Input
                                name='categoryId'
                                placeholder='category id'
                                onChange={handleChange}
                                value={values.categoryId}
                            />
                        </Item>
                        <Item label='allows sale'>
                            <Input
                                type='checkbox'
                                name='allowsSale'
                                placeholder='allow sale'
                                onChange={handleChange}
                                value={values.allowsSale}
                            />
                        </Item>
                        <Item label='description'>
                            <Input
                                name='description'
                                placeholder='description'
                                onChange={handleChange}
                                value={values.description}
                            />
                        </Item>
                        <Item label='has variants'>
                            <Input
                                type='checkbox'
                                name='hasVariants'
                                placeholder='has variants'
                                onChange={handleChange}
                                value={values.hasVariants}
                            />
                        </Item>
                        <Item label='attributes'>
                            <FieldArray name='attributes'>
                                {arrayHelpers => (
                                    <div>
                                        {values.attributes &&
                                        values.attributes.length > 0 ? (
                                            values.attributes.map(
                                                (attribute, index) => (
                                                    <div key={index}>
                                                        <Field
                                                            name={`attributes.${index}.attributeName`}
                                                            placeholder='attribute name'
                                                            value={
                                                                attribute.attributeName
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Field
                                                            name={`attributes.${index}.attributeValue`}
                                                            placeholder='value'
                                                            values={
                                                                attribute.attributeValue
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Button
                                                            onClick={() =>
                                                                arrayHelpers.remove(
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
                                                arrayHelpers.insert(
                                                    values.attributes.length +
                                                        1,
                                                    {
                                                        attributeName: '',
                                                        attributeValue: '',
                                                    }
                                                )
                                            }
                                        >
                                            +
                                        </Button>
                                    </div>
                                )}
                            </FieldArray>
                        </Item>
                        <Item label='unit'>
                            <Input
                                name='unit'
                                placeholder='unit'
                                onChange={handleChange}
                                value={values.unit}
                            />
                        </Item>
                        <Item label='masterProductId'>
                            <Input
                                name='masterProductId'
                                placeholder='masterProductId'
                                onChange={handleChange}
                                value={values.masterProductId}
                            />
                        </Item>
                        <Item label='masterUnitId'>
                            <Input
                                name='masterUnitId'
                                placeholder='masterUnitId'
                                onChange={handleChange}
                                value={values.masterUnitId}
                            />
                        </Item>
                        <Item label='conversionValue'>
                            <Input
                                name='conversionValue'
                                placeholder='conversionValue'
                                onChange={handleChange}
                                value={values.conversionValue}
                            />
                        </Item>
                        <Item label='inventories'>
                            <FieldArray name='inventories'>
                                {arrayHelpers => (
                                    <div>
                                        {values.inventories &&
                                        values.inventories.length > 0 ? (
                                            values.inventories.map(
                                                (inventory, index) => (
                                                    <div key={index}>
                                                        <Field
                                                            name={`inventories.${index}.branchId`}
                                                            placeholder='branchId'
                                                            value={
                                                                inventory.branchId
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Field
                                                            name={`inventories.${index}.branchName`}
                                                            placeholder='branchName'
                                                            values={
                                                                inventory.branchName
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Field
                                                            name={`inventories.${index}.onHand`}
                                                            placeholder='onHand'
                                                            values={
                                                                inventory.onHand
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Field
                                                            name={`inventories.${index}.cost`}
                                                            placeholder='cost'
                                                            values={
                                                                inventory.cost
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                        <Field
                                                            name={`inventories.${index}.reserved`}
                                                            placeholder='reserved'
                                                            values={
                                                                inventory.reserved
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />

                                                        <Button
                                                            onClick={() =>
                                                                arrayHelpers.remove(
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
                                                arrayHelpers.insert(
                                                    values.inventories.length +
                                                        1,
                                                    {
                                                        branchId: 0,
                                                        branchName: 0,
                                                        onHand: 0,
                                                        cost: 0,
                                                        reserved: 0,
                                                    }
                                                )
                                            }
                                        >
                                            +
                                        </Button>
                                    </div>
                                )}
                            </FieldArray>
                        </Item>
                        <Item label='basePrice'>
                            <Input
                                name='basePrice'
                                placeholder='basePrice'
                                onChange={handleChange}
                                value={values.basePrice}
                            />
                        </Item>
                        <Item label='weight'>
                            <Input
                                name='weight'
                                placeholder='weight'
                                onChange={handleChange}
                                value={values.weight}
                            />
                        </Item>
                        <Item label='hinh anh'>
                            <div>
                                <Upload
                                    listType='picture-card'
                                    fileList={fileList}
                                    onPreview={onPreviewImage}
                                    onChange={handleFileListChange}
                                    beforeUpload={beforeUpload}
                                >
                                    {fileList.length >= 5 ? null : uploadButton}
                                </Upload>
                                <Modal
                                    visible={previewVisible}
                                    title={previewTitle}
                                    footer={null}
                                    onCancel={handleCancel}
                                >
                                    <img
                                        alt='img preview'
                                        style={{ width: '100%' }}
                                        src={previewImage}
                                    />
                                </Modal>
                            </div>
                        </Item>
                        <Item>
                            <Button htmlType='submit'>Them</Button>
                        </Item>
                    </Form>
                )}
            </Formik>
            <p>xoa hàng hóa</p>
            <Formik
                initialValues={{ id: '' }}
                onSubmit={values => {
                    const id = values.id
                    axios({
                        method: 'delete',
                        url: `http://localhost:3000/products/${id}`,
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
                                placeholder='id of product to delete'
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
            <p>Lấy thông tin thuộc tính sản phẩm</p>
            <Button onClick={getProductAttributes}>
                Lấy thông tin thuộc tính sản phẩm
            </Button>
        </div>
    )
}

export default Products
