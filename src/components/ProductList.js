import ProductItem from "components/ProductItem";
import styled from "styled-components";

function ProductList({ productInfo, selectedProduct, onClick }) {
  return (
    <WrapperProductList>
      {productInfo.map((item) => (
        <ProductItem
          key={`product_list${item.productId}`}
          imageUrl={item.imageUrl}
          isSelected={selectedProduct === item.productId ? true : false}
          onClick={() => onClick(item.productId)}
          discountRate={item.discountRate}
        ></ProductItem>
      ))}
    </WrapperProductList>
  );
}

export default ProductList;

const WrapperProductList = styled.div`
  display: flex;
  width: 805px;
  overflow-x: scroll;
`;
