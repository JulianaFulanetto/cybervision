import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import MovieCards from "./components/movieCard/MovieCards";
import Lupa from "./assets/search.svg";
import Logo from "./assets/Logo.png";
// import NavBar from "./components/navBar/NavBar";

// import Logo from ""

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  //Utilizando chave de API do arquivo .env
  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Alimento com dados para não ficar nulo
  useEffect(() => {
    searchMovies("Toy Story");
  }, []);

  //criando a conexão com a Api e tarazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //alimentando o movies
    setMovies(data.Search);
  };

  //e = evento | ao clicar ou digitar aconetece algo
  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(search);
  };

  return (
    <div id="app">
      {/* <NavBar /> */}
      <div className="bg-black-gradient d-flex justify-content-between align-items-center w-100 p-5 pt-0">
        <img className="img-fluid col-2" src={Logo} alt="Logo" />

        <div className="search col-7">
          <input
            onKeyDown={handleKeyPress}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Pesquise por filmes"
          />

          <img onClick={() => searchMovies(search)} src={Lupa} alt="" />
        </div>
      </div>

      
      {movies?.length > 0 ? (
        <>
          <div className="container">
            {movies.map((movie, index) => (
              <MovieCards key={index} apiUrl={apiUrl} {...movie} />
            ))}
          </div>
        </>
      ) : (
        <h2 className="empty"> Filme não encontrado 😒</h2>
      )}

{movies?.length > 0 ? (
        <>
          <div className="container">
            {movies.map((movie, index) => (
              <MovieCards key={index} apiUrl={apiUrl} {...movie} />
            ))}
          </div>
        </>
      ) : (
        <h2 className="empty"> Filme não encontrado 😒</h2>
      )}


      <Footer
        devName={"Juju e Loh"}
        devLinks={"https://github.com/JulianaFulanetto"}
      />
    </div>
  );
};

export default App;
