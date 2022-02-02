import styled from "styled-components";

function Button({ pointX, pointY, isSelected, ...rest }) {
  return (
    <>
      <StyledButton {...rest} pointX={pointX} pointY={pointY}>
        {isSelected ? "X" : "🔍"}
      </StyledButton>
    </>
  );
}

export default Button;

const StyledButton = styled.button`
  border-radius: 50%;
  background-color: pink;
  position: absolute;
  left: ${(props) => `${props.pointX}px`};
  top: ${(props) => `${props.pointY}px`};
  cursor: pointer;
`;
