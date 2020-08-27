import React from 'react'
import { Menu as AntMenu } from 'antd'
import { Link } from 'react-router-dom'
const { Item } = AntMenu
const Menu = () => {
    return (
        <AntMenu mode='horizontal'>
            <Item>
                <Link to='/productgroups'>Nhóm sản phẩm</Link>
            </Item>
            <Item>
                <Link to='/products'> Sản phẩm</Link>
            </Item>
            <Item>
                <Link to='/customer'> Khách hàng</Link>
            </Item>
            <Item>
                <Link to='/orders'> Đặt hàng</Link>
            </Item>
            <Item>
                <Link to='/pricebook'> Bảng giá</Link>
            </Item>
            <Item>
                <Link to='/salechannel'> Kênh bán</Link>
            </Item>
        </AntMenu>
    )
}

export default Menu
