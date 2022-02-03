import styled from "styled-components";
import searchIcon from "assets/searchIcon.png";
import closeIcon from "assets/closeIcon.png";
import { resizePointX, resizePointY } from "utils/constants";

function Button({ pointX, pointY, isSelected, ...rest }) {
  return (
    <>
      <StyledButton {...rest} pointX={pointX} pointY={pointY}>
        {isSelected ? (
          <ButtonImage src={closeIcon} alt="closeIcon"></ButtonImage>
        ) : (
          <ButtonImage src={searchIcon} alt="searchIcon"></ButtonImage>
        )}
      </StyledButton>
    </>
  );
}

export default Button;

const StyledButton = styled.button`
  all: unset;
  border-radius: 50%;
  position: absolute;
  left: ${(props) => `${resizePointY * props.pointY}px`};
  top: ${(props) => `${resizePointX * props.pointX}px`};
  cursor: pointer;
`;

const ButtonImage = styled.img`
  width: 32px;
`;
