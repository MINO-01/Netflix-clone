import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api/tmdb";
import { MovieGrid, Poster, StyledLink } from "../Style/MovieGrid";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #141414;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
  font-size: 24px;
`;

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };
    loadMovies();
  }, []);

  return (
    <Container>
      <Title>회원님을 위한 추천 영화</Title>
      <MovieGrid>
        {movies.map((movie) => (
          <StyledLink key={movie.id} to={`/detail/${movie.id}`}>
            <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </StyledLink>
        ))}
      </MovieGrid>
    </Container>
  );
};

export default HomePage;
