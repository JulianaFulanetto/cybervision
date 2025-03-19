import { useState } from "react";
import MovieDescription from "../MovieDescription/MovieDescription";
import styles from "./MovieCards.module.css";

const MovieCards = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={styles.movie} onClick={ToggleModal}>
        <div>
          <p>{props.Year}</p>
        </div>

        <div>
          <img src={props.Poster} alt="" />
        </div>

        <div>
          <span>{props.Type}</span>
          <h3>{props.Title}</h3>
        </div>
      </div>
      {isModalOpen && (
        <MovieDescription 
        apiUrl={props.apiUrl} 
        movieID={props.imdbID} 
        click={ToggleModal}/>
      )}
    </>
  );
};

export default MovieCards;
