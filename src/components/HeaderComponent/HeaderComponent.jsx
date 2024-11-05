import { Col } from 'antd';
import React from 'react';
import { WrapperHeader, WrapperHeaderAccount } from './style';
import { ShoppingCartOutlined } from '@ant-design/icons';
import ButtonSearch from './ButtonSearch';

export const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader>
                <Col span={6}>
                    logo
                </Col>
                <Col span={12}>
                    <ButtonSearch
                        size="large"
                        placeholder="input search"
                        textButton="Tìm kiếm"
                    />
                </Col>
                <Col span={6}>
                    <WrapperHeaderAccount>
                        <span>
                            Đăng nhập | Đăng ký
                        </span>
                        <ShoppingCartOutlined style={{ fontSize: '30px' }} />
                    </WrapperHeaderAccount>
                </Col>
            </WrapperHeader>
        </div>
    );
};
