import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 2 / 3;
`;
