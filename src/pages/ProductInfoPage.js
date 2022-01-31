import { useEffect, useState } from "react";
import styled from "styled-components";
import { getProductInfo } from "../utils/api";
import Tooltip from "../components/Tooltip";

function ProductInfoPage() {
  const [mainImage, setMainImage] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const getData = async () => {
    try {
      const response = await getProductInfo();
      const { id, imageUrl, productList } = response;
      setMainImage(imageUrl);
      setProductInfo(productList);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   console.log(productInfo);
  // }, [productInfo]);

  return (
    <>
      <PhotoInfoBox src={mainImage}></PhotoInfoBox>
      {productInfo &&
        productInfo.map((item) => (
          <Tooltip
            productImage={item.imageUrl}
            productName={item.productName}
            productPrice={item.priceOriginal}
            key={`tooltip_list_${item.productId}`}
          />
        ))}
    </>
  );
}

export default ProductInfoPage;

const PhotoInfoBox = styled.img`
  width: 500px;
`;
