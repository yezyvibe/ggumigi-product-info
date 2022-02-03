import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getProductInfo } from "utils/api";
import NavBar from "components/NavBar";
import ProductList from "components/ProductList";
import FurnitureInfo from "components/FurnitureInfo";

function ProductInfoPage() {
  const [mainImage, setMainImage] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const getData = async () => {
    try {
      const response = await getProductInfo();
      const { imageUrl, productList } = response;
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

  return (
    <>
      <NavBar></NavBar>
      <MainWrapper>
        <MainImage src={mainImage} alt="mainImage"></MainImage>
        <FurnitureInfo
          productInfo={productInfo}
          onClick={onClick}
          selectedProduct={selectedProduct}
        ></FurnitureInfo>

        <ProductList
          productInfo={productInfo}
          selectedProduct={selectedProduct}
          onClick={onClick}
        ></ProductList>
      </MainWrapper>
    </>
  );
}

export default ProductInfoPage;

const MainWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  height: 998px;
`;
