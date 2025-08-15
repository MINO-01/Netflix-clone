import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchSearchResults } from "../api/tmdb";
import { Link } from "react-router-dom";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const Modal = styled.div`
  background: #222;
  padding: 20px;
  width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  margin: 80px auto;
  border-radius: 10px;
  color: white;
`;

const MovieItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 10px;
`;

const Poster = styled.img`
  width: 80px;
  height: 120px;
  border-radius: 5px;
`;

const SearchModal = ({ query, onClose }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchSearchResults(query);
      setResults(data);
    };
    load();
  }, [query]);

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h2> '{query}' 검색 결과</h2>
        {results.map((movie) => (
          <Link to={`/detail/${movie.id}`} key={movie.id}>
            <MovieItem>
              <Poster src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
              <div>
                <strong>{movie.title}</strong>
                <p>{movie.release_date}</p>
              </div>
            </MovieItem>
          </Link>
        ))}
      </Modal>
    </Overlay>
  );
};

export default SearchModal;
