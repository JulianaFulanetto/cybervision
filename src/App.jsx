import { useEffect, useState, useRef } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import MovieCards from "./components/movieCard/MovieCards";
import Lupa from "./assets/search.svg";
import Logo from "./assets/Logo.png";
import NavBar from "./components/navBar/NavBar";

const App = () => {

const mudaTema = () => {
const tema = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

  document.documentElement.setAttribute("data-bs-theme", tema);
};

mudaTema();

//adiciona o evento de mudança do tema au
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', mudaTema);

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const scrollContainerRef = useRef(null); // Referência para o contêiner de rolagem

  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Batman");
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


      {/* Conteúdo principal */}
      <div className="flex-grow-1">
        {movies?.length > 0 ? (
          <div className="container mt-20">
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
        devLinks={"https://github.com/JulianaFulanetto"}
      />
    </div>
  );
};

export default App;