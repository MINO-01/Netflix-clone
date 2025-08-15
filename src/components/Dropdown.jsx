import { Link } from "react-router-dom";

const genres = [
  { id: 28, name: "액션" },
  { id: 35, name: "코미디" },
  { id: 16, name: "애니메이션" },
  { id: 53, name: "스릴러" },
];

const Dropdown = () => {
  return (
    <div>
      {genres.map((genre) => (
        <Link key={genre.id} to={`/genre/${genre.id}`} style={{ display: "block", margin: "5px 0", color: "white" }}>
          {genre.name}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;

// export function getMoviesByGenre(genreId) {
//   return fetch(${BASE_PATH}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=ko-KR)
//     .then((response) => response.json())
//     .then((data) => data.results);
// }
// tmdb 가져오는 방법

//https://developer.themoviedb.org/reference/discover-movie
//여기서 tmdb 주소랑 장르 id 찾아서 가져오기 가져올 때 and나 OR로 조건 넣어서 가져오기 예를 들어 action and adult = "true"하면 액션이면서 성인물
//근데 tmdb에서 테스트 할 때는 id 값 찾아서 테스트 해보고 그 주소에 넣어서 사용하기 아마도 리액트에서 사용할 때도
// id 값을 넣어서 사용하는 듯
