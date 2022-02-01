import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getProductInfo } from "../utils/api";
import Tooltip from "../components/Tooltip";
import Button from "../components/Button";

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

  const onClick = (id) => setSelectedProduct(id);

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
      <Box>
        <PhotoInfoBox src={mainImage}></PhotoInfoBox>
        {productInfo.map((item) => (
          <React.Fragment key={`tooltip_list_${item.productId}`}>
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
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </>
  );
}

export default ProductInfoPage;

const PhotoInfoBox = styled.img`
  width: 800px;
  height: 998px;
`;

const Box = styled.div`
  width: 1000px;
  height: 1248px;
`;
