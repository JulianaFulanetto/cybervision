import { useEffect, useState, useRef } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import MovieCards from "./components/movieCard/MovieCards";
import Lupa from "./assets/search.svg";

import Logo from "./assets/LogoCV.png";
import NavBar from "./components/navBar/NavBar";
import { Carrossel } from "./components/carrossel/Carrossel";

import spiderman from "./assets/spiderman.png";
import scooby from "./assets/scooby.jpg";
import rick from "./assets/rick.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./scss/styles.scss";

const App = () => {
  const mudaTema = () => {
    const tema = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    document.documentElement.setAttribute("data-bs-theme", tema);
  };

  mudaTema();

  //adiciona o evento de mudança do tema au
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", mudaTema);

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const scrollContainerRef = useRef(null); // Referência para o contêiner de rolagem

  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Toy Story");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(search);
  };

  // Função para habilitar rolagem horizontal com Shift + Scroll
  const handleHorizontalScroll = (e) => {
    if (e.shiftKey) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div id="app" className="container-fluid d-flex flex-column">
      {/* Navbar */}
      <NavBar
        Logo={Logo}
        Lupa={Lupa}
        setSearch={setSearch}
        search={search}
        searchMovies={searchMovies}
        handleKeyPress={handleKeyPress}
      />

      <div className="mt-4">
        <Carrossel 
        spiderman={spiderman}
        scooby={scooby}
        rick={rick}
        />
      </div>
      {/* Conteúdo principal */}
      <div className="flex-grow-1">
        {movies?.length > 0 ? (
          <div className="container mt mt-20">
            <div
              className="d-flex flex-nowrap overflow-hidden gap-3 scroll-container"
              ref={scrollContainerRef}
              onWheel={handleHorizontalScroll} // Adiciona o evento de rolagem horizontal
            >
              {movies.map((movie, index) => (
                <MovieCards key={index} apiUrl={apiUrl} {...movie} />
              ))}
            </div>
          </div>
        ) : (
          <h2 className="empty text-center mt-10">Filme não encontrado 😒</h2>
        )}
      </div>

      {/* Rodapé */}
      <Footer
        devName={"Juju e Loh"}
      />
    </div>
  );
};

export default App;
