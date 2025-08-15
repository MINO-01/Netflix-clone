import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api/tmdb";

const Subtitle = styled.h2`
  font-weight: bold;
`;
const Container = styled.div`
  color: white;
  padding: 40px;
  background-color: #141414;
`;

const InfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const Info = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  line-height: 1.6;
  font-size: 16px;
`;

const SubInfo = styled.div`
  margin: 8px 0;
`;

const ReviewBox = styled.div`
  background: #222;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b20710;
  }
`;

const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  const [showAllReviews, setShowAllReviews] = useState(false);
  const toggleReviews = () => setShowAllReviews((prev) => !prev);

  if (!movie) return <Container>로딩중...</Container>;

  const director = movie.credits?.crew?.find((c) => c.job === "Director");

  return (
    <Container>
      <InfoSection>
        <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <Info>
          <Title>{movie.title}</Title>
          <SubInfo> 개봉일: {movie.release_date}</SubInfo>
          <SubInfo> 감독: {director?.name || "정보 없음"}</SubInfo>
          <SubInfo>
            출연:{" "}
            {movie.credits?.cast
              ?.slice(0, 5)
              .map((c) => c.name)
              .join(", ")}
          </SubInfo>
          <SubInfo> 장르: {movie.genres?.map((g) => g.name).join(", ")}</SubInfo>
          <Overview>{movie.overview}</Overview>
        </Info>
      </InfoSection>

      <Subtitle>리뷰</Subtitle>
      {movie.reviews?.results?.length > 0 ? (
        <>
          {(showAllReviews ? movie.reviews.results : movie.reviews.results.slice(0, 3)).map((review) => (
            <ReviewBox key={review.id}>
              <strong>{review.author}</strong>
              <p>{review.content}</p>
            </ReviewBox>
          ))}

          {movie.reviews.results.length > 3 && <ToggleButton onClick={toggleReviews}>{showAllReviews ? "접기" : "더보기"}</ToggleButton>}
        </>
      ) : (
        <p>리뷰가 없습니다.</p>
      )}
    </Container>
  );
};

export default DetailPage;
