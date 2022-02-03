import styled from "styled-components";
import badgeIcon from "assets/badgeIcon.png";

function ProductItem({ imageUrl, isSelected, discountRate, ...rest }) {
  return (
    <ItemWrapper isSelected={isSelected}>
      <ProductBox {...rest}>
        <ProductImage src={imageUrl} />
        {discountRate !== 0 && (
          <DiscountRate badgeIcon={badgeIcon}>{discountRate}%</DiscountRate>
        )}
      </ProductBox>
    </ItemWrapper>
  );
}

export default ProductItem;

const ItemWrapper = styled.div`
  margin: 26px 4px;
  border-radius: 18px;
  background: ${(props) =>
    props.isSelected
      ? "linear-gradient(163.54deg,#ff659e 8.22%,#f56b30 94.1%)"
      : "none"};
`;
const ProductBox = styled.button`
  all: unset;
  cursor: pointer;
  margin: 2px;
  width: 106px;
  height: 106px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;
const ProductImage = styled.img`
  width: 105px;
  height: 105px;
  border-radius: 18px;
  border: 0.5px solid #aaafb9;
`;
const DiscountRate = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  background-image: url(${(props) => props.badgeIcon});
  width: 24px;
  height: 28px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
`;
