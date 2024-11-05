import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonSearch = ({
    size, 
    placeholder, 
    textButton, 
    borderless, 
    backgroundColorInput = '#fff',
    backgroundColorButton = 'rgb(13, 92, 182)', 
    colorButton = '#fff'
}) => {
    return (
        <div style={{ display: 'flex', borderRadius: '5px', overflow: 'hidden' }}> {/* Sửa borderRadius và overflow */}
            <InputComponent
                size={size}
                placeholder={placeholder}
                borderless={borderless}
                style={{
                    backgroundColor: backgroundColorInput,
                    // border: 'none',  // Loại bỏ border
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,  // Bỏ bo góc bên phải
                }}
            />
            <ButtonComponent
                size={size}
                styleButton={{
                    background: backgroundColorButton,
                    border: 'none',  // Loại bỏ border
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,  // Bỏ bo góc bên trái
                }}
                icon={<SearchOutlined style={{ color: colorButton }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    );
};

export default ButtonSearch;
