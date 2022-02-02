import styled from "styled-components";

function ProductItem({ imageUrl, isSelected, ...rest }) {
  return (
    <ProductBox {...rest}>
      <ProductImage src={imageUrl} isSelected={isSelected} />
    </ProductBox>
  );
}

export default ProductItem;
const ProductBox = styled.button`
  all: unset;
  cursor: pointer;
  margin: 3px;
`;
const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  border: 4px solid ${(props) => (props.isSelected ? "pink" : "none")};
`;
