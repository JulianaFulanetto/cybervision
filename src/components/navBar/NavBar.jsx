import React from "react";

const NavBar = (props) => {
  return (
    <div className="bg-black-gradient d-flex justify-content-between align-items-center w-100 p-4">
      <img className="img-fluid col-2" src={props.Logo} alt="Logo" />

      <div className="search col-7 d-flex align-items-center">
        <input
          className="form-control me-2"
          onKeyDown={props.handleKeyPress}
          onChange={(e) => props.setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise por filmes"
        />
        <img 
          onClick={() => props.searchMovies(props.search)}
          src={props.Lupa}
          alt="Lupa"
          className="btn "
          style={{ width: "50px", height: "auto", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default NavBar;