import styled from "styled-components";
import logo from "assets/logo.png";
import searchBarIcon from "assets/searchBarIcon.png";
function NavBar() {
  return (
    <>
      <Header>
        <CompanyLogo src={logo} alt="logoImage"></CompanyLogo>
        <MenuList>
          <MenuItem>카테고리</MenuItem>
          <MenuItem>스토어</MenuItem>
          <MenuItem>컨텐츠</MenuItem>
          <MenuItem>커뮤니티</MenuItem>
        </MenuList>
        <SearchBar>
          <InputBox>내 스타일 매거진, 상품, 사진 검색</InputBox>
          <SearchIcon src={searchBarIcon} />
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
const CompanyLogo = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  width: 170px;
  height: 50px;
`;
const MenuList = styled.div`
  display: flex;
`;
const MenuItem = styled.h3`
  margin-right: 20px;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;
const SearchIcon = styled.img`
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
  width: 22px;
  height: 22px;
  margin-top: 9px;
  vertical-align: top;
  margin-right: 15px;
`;
const InputBox = styled.div`
  width: 300px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  padding-left: 18px;
  font-size: 13px;
  color: #9e9e9e;
  display: inline-block;
`;
