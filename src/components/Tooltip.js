import styled from "styled-components";
import arrowIcon from "assets/arrowIcon.png";
import triangle from "assets/triangle.png";
function Tooltip({
  productName,
  productPrice,
  productImage,
  outside,
  priceDiscount,
  discountRate,
  pointX,
  pointY,
}) {
  return (
    <TooltipBox pointX={pointX} pointY={pointY} triangle={triangle}>
      <TooltipImage>
        <ProductImage src={productImage}></ProductImage>
      </TooltipImage>
      <ProductInfo>
        <ProductName>{productName}</ProductName>
        <ProductInfoBottom>
          {!outside ? (
            <>
              <DiscountRate>{discountRate}%</DiscountRate>
              <PriceDiscount>{priceDiscount}</PriceDiscount>
            </>
          ) : (
            <>
              <BeforePrice>예상가</BeforePrice>
              <ProductPrice>{productPrice}</ProductPrice>
            </>
          )}
          <ArrowBox src={arrowIcon} alt="상품 보기"></ArrowBox>
        </ProductInfoBottom>
      </ProductInfo>
    </TooltipBox>
  );
}

export default Tooltip;

const TooltipBox = styled.div`
  position: absolute;
  left: ${(props) => `${1.65 * props.pointY}px`};
  top: ${(props) => `${1.6 * props.pointX}px`};
  margin-top: 50px;
  z-index: 1000;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.95);
  width: 214px;
  height: 70px;
  padding: 8px 0 8px 8px;
  border-radius: 7px;
  /* -webkit-box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%); */
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 34px;
    width: 12px;
    height: 8px;
    background-image: url(${(props) => props.triangle});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
`;
const TooltipImage = styled.div``;

const ProductImage = styled.img`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  margin-top: 2px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductName = styled.div`
  margin-bottom: 10px;
  width: 115px;
  font-size: 13px;
  height: 40px;
`;
const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
`;

const BeforePrice = styled.div`
  color: #898f94;
  font-size: 11px;
  line-height: 11px;
  font-weight: bold;
  margin-right: 4px;
  margin-top: 2px;
`;
const PriceDiscount = styled.div`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
`;
const DiscountRate = styled.div`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  color: #ff585d;
  margin-right: 4px;
`;

const ArrowBox = styled.img`
  display: flex;
  align-items: flex-end;
  width: 20px;
  height: 20px;
  margin-left: 30px;
`;

const ProductInfoBottom = styled.div`
  display: flex;
  align-items: center;
`;
