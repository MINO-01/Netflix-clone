import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGenreMovies } from "../api/tmdb";
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

// 장르 ID → 이름 매핑
const genreNames = {
  28: "액션",
  35: "코미디",
  99: "다큐멘터리",
  16: "애니메이션",
  53: "스릴러",
};

const GenrePage = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const genreName = genreNames[genreId] || "영화";

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchGenreMovies(genreId);
      setMovies(data);
    };
    loadMovies();
  }, [genreId]);

  return (
    <Container>
      <Title>{genreName}</Title>
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

export default GenrePage;
