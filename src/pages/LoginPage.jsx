import styled from "styled-components";
import { useState } from "react";
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
`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background-color: #333;
  color: white;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #e50914;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  margin-top: 15px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #b20710;
  }
`;

const ErrorMessage = styled.div`
  color: #ff6666;
  margin-top: 10px;
`;

const SignupLink = styled.p`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;

  a {
    color: #e50914;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find((u) => u.email === email && u.pw === pw);

    if (!found) {
      setError("이메일 또는 비밀번호가 잘못되었습니다.");
    } else {
      alert("로그인 되었습니다.");
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("currentUser", JSON.stringify(found));
      navigate("/home");
    }
  };

  return (
    <Container>
      <Box onSubmit={handleLogin} as="form">
        <h2>로그인</h2>
        <Input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} />
        <Button type="submit">로그인</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SignupLink>
          계정이 없으신가요? <a onClick={() => navigate("/signup")}>회원가입</a>
        </SignupLink>
      </Box>
    </Container>
  );
};

export default LoginPage;
