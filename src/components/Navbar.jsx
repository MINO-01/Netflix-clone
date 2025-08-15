import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchModal from "../components/SearchModal";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  background-color: #000;
  padding: 10px 20px;
  color: white;
  width: 100%;
`;

const LogoText = styled(Link)`
  color: red;
  font-size: 28px;
  font-weight: bold;
  margin-right: 40px;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover > div {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #111;
  padding: 10px;
  top: 30px;
  left: 0;
  z-index: 1;
  min-width: 120px;
`;

const DropdownItem = styled(Link)`
  display: block;
  color: white;
  padding: 5px 10px;
  text-decoration: none;

  &:hover {
    background-color: #333;
  }
`;

const SearchContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchInput = styled.input`
  padding: 6px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SearchButton = styled.button`
  padding: 6px 12px;
  margin-right: 30px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearch = () => {
    if (query.trim()) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setQuery("");
  };

  return (
    <>
      <NavbarContainer>
        <LogoText to="/home">NETFLIX</LogoText>
        <Menu>
          <MenuLink to="/home">홈</MenuLink>
          <MenuLink to="/profile">내 정보</MenuLink>
          <Dropdown>
            <span>영화 ▼</span>
            <DropdownContent>
              <DropdownItem to="/genre/28">액션</DropdownItem>
              <DropdownItem to="/genre/35">코미디</DropdownItem>
              <DropdownItem to="/genre/16">애니메이션</DropdownItem>
              <DropdownItem to="/genre/53">스릴러</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </Menu>

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <SearchButton onClick={handleSearch}>검색</SearchButton>
        </SearchContainer>
      </NavbarContainer>

      {showModal && <SearchModal query={query} onClose={handleCloseModal} />}
    </>
  );
};

export default Navbar;
