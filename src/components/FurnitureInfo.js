import styled from "styled-components";
import Tooltip from "components/Tooltip";
import Button from "components/Button";

function FurnitureInfo({ productInfo, onClick, selectedProduct }) {
  return (
    <>
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
              priceOriginal={item.priceOriginal}
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
    </>
  );
}

export default FurnitureInfo;

const ProductBox = styled.div``;
