import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";

const AppContainer = styled.div`
  background-color: #141414;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/genre/:genreId" element={<GenrePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
