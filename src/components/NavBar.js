import styled from "styled-components";

function NavBar() {
  return (
    <>
      <Header>
        <CompanyName>🏠집꾸미기</CompanyName>
        <MenuList>
          <MenuItem>카테고리</MenuItem>
          <MenuItem>스토어</MenuItem>
          <MenuItem>컨텐츠</MenuItem>
          <MenuItem>커뮤니티</MenuItem>
        </MenuList>
        <SearchBar>
          <InputBox placeholder=" 내 스타일 매거진, 상품, 사진 검색"></InputBox>
        </SearchBar>
      </Header>
    </>
  );
}

export default NavBar;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 4px -4px #f5f5f5;
  margin-bottom: 10px;
`;
const CompanyName = styled.h1``;
const MenuList = styled.div`
  display: flex;
`;
const MenuItem = styled.h3`
  margin-right: 20px;
`;
const SearchBar = styled.div``;
const InputBox = styled.input`
  width: 300px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
`;
