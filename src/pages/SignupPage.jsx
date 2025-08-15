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
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
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

const LoginLink = styled.p`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;

  a {
    color: #e50914;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !pw || !pwConfirm) return setError("모든 항목을 입력해주세요.");
    if (pw !== pwConfirm) return setError("비밀번호가 일치하지 않습니다.");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const isDuplicate = users.some((u) => u.email === email);
    if (isDuplicate) {
      setError("이미 존재하는 이메일입니다.");
      return;
    }
    users.push({ email, pw });
    localStorage.setItem("users", JSON.stringify(users));

    alert("회원가입 완료! 로그인해주세요.");
    navigate("/"); // 로그인 페이지로 이동
  };

  return (
    <Container>
      <Box as="form" onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <Input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} />
        <Input type="password" placeholder="비밀번호 확인" value={pwConfirm} onChange={(e) => setPwConfirm(e.target.value)} />
        <Button type="submit">가입하기</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <LoginLink>
          이미 계정이 있으신가요? <a onClick={() => navigate("/")}>로그인</a>
        </LoginLink>
      </Box>
    </Container>
  );
};

export default SignupPage;
