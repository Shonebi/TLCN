import styled from "styled-components";

export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56, 56, 61);
`

export const WrapperRate = styled.div`
    display: flex;
    width: auto;
`

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center; /* Căn chỉnh giá theo chiều dọc */
`;

export const WrapperPriceOn = styled.div`
    font-weight: 500;
    font-size: 20px;
    color: #ff0000;
    margin-right: 30px;
`

export const WrapperPriceOff = styled.div`
    font-weight: 500;
    font-size: 20px;
    color: #DDDDDD;
    text-decoration: line-through;
    display: inline-block;
`