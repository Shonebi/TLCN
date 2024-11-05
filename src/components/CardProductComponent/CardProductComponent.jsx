import { Card } from "antd";
import React from "react";
import {
  PriceWrapper,
  StyleNameProduct,
  WrapperPriceOff,
  WrapperPriceOn,
  WrapperRate,
} from "./style";
import { StarOutlined } from "@ant-design/icons";

const CardProductComponent = () => {
  return (
    <Card
      hoverable
      style={{ width: 380 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <StyleNameProduct>Áo</StyleNameProduct>
      <WrapperRate>
        {[...Array(5)].map((_, index) => (
          <StarOutlined
            key={index}
            style={{ fontSize: "14px", marginRight: index !== 4 ? "5px" : "0" }}
          />
        ))}
      </WrapperRate>
      <PriceWrapper>
        <WrapperPriceOn>1.000.000đ</WrapperPriceOn>
        <WrapperPriceOff>1.000.000đ</WrapperPriceOff>
      </PriceWrapper>
    </Card>
  );
};

export default CardProductComponent;
