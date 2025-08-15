import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  color: white;
  background: #141414;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background: #222;
  padding: 40px;
  border-radius: 10px;
  width: 360px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const EmailText = styled.p`
  margin: 20px 0;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #e50914;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #b20710;
  }
`;

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("currentUser");
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <Container>
      <Box>
        <h2>내 정보</h2>
        <EmailText> 이메일: {user?.email ?? "이메일 정보를 불러올 수 없습니다."}</EmailText>
        <Button onClick={handleLogout}>로그아웃</Button>
      </Box>
    </Container>
  );
};

export default ProfilePage;
