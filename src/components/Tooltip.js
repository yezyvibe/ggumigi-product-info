import styled from "styled-components";

function Tooltip({
  productName,
  productPrice,
  productImage,
  outside,
  priceDiscount,
  discountRate,
}) {
  return (
    <>
      <TooltipBox>
        <TooltipImage>
          <ProductImage src={productImage}></ProductImage>
        </TooltipImage>
        <ProductInfo>
          <ProductName>{productName}</ProductName>

          {!outside ? (
            <>
              <DiscountRate>{discountRate}%</DiscountRate>
              <PriceDiscount>{priceDiscount}</PriceDiscount>
            </>
          ) : (
            <ProductPrice>예상가 {productPrice}</ProductPrice>
          )}
        </ProductInfo>
      </TooltipBox>
    </>
  );
}

export default Tooltip;

const TooltipBox = styled.div`
  width: 200px;
  height: 100px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TooltipImage = styled.div`
  border-radius: 8px;
  border: 1px solid grey;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const ProductName = styled.div`
  .span {
    background-color: red;
  }
`;
const ProductPrice = styled.div``;
const PriceDiscount = styled.div``;
const DiscountRate = styled.div`
  color: red;
`;
