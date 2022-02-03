import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getProductInfo } from "utils/api";
import Tooltip from "components/Tooltip";
import Button from "components/Button";
import ProductItem from "components/ProductItem";
import NavBar from "components/NavBar";

function ProductInfoPage() {
  const [mainImage, setMainImage] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const getData = async () => {
    try {
      const response = await getProductInfo();
      const { id, imageUrl, productList } = response;
      setMainImage(imageUrl);
      addShowState(productList);
    } catch (e) {
      console.error(e);
    }
  };

  const addShowState = (productList) => {
    setProductInfo(productList.map((item) => ({ ...item, isChecked: true })));
  };

  useEffect(() => {
    getData();
  }, []);

  const onClick = (id) => {
    selectedProduct !== id ? setSelectedProduct(id) : setSelectedProduct("");
  };

  useEffect(() => console.log(productInfo), [productInfo]);

  // const onToggleChecked = (id) => {
  //   setProductInfo((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, isChecked: !item.isChecked } : item
  //     )
  //   );
  // };
  return (
    <>
      <NavBar></NavBar>
      <Box>
        <PhotoInfoBox src={mainImage} alt="mainImage"></PhotoInfoBox>
        {productInfo.map((item) => (
          <ProductBox key={`tooltip_list_${item.productId}`}>
            <Button
              onClick={() => onClick(item.productId)}
              pointX={item.pointX}
              pointY={item.pointY}
              isSelected={item.productId === selectedProduct ? true : false}
            />
            {item.productId === selectedProduct && (
              <Tooltip
                productImage={item.imageUrl}
                productName={item.productName}
                productPrice={item.priceOriginal}
                isSelected={true}
                outside={item.outside}
                priceDiscount={item.priceDiscount}
                discountRate={item.discountRate}
                pointX={item.pointX}
                pointY={item.pointY}
              />
            )}
          </ProductBox>
        ))}

        <ProductList>
          {productInfo.map((item) => (
            <ProductItem
              key={`product_list${item.productId}`}
              imageUrl={item.imageUrl}
              isSelected={selectedProduct === item.productId ? true : false}
              onClick={() => onClick(item.productId)}
              discountRate={item.discountRate}
            ></ProductItem>
          ))}
        </ProductList>
      </Box>
    </>
  );
}

export default ProductInfoPage;

const Box = styled.div`
  width: 800px;
  /* height: 1248px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: relative;
`;

const PhotoInfoBox = styled.img`
  width: 100%;
  height: 998px;
`;

const ProductBox = styled.div``;

const ProductList = styled.div`
  display: flex;
  overflow-x: scroll;
`;
