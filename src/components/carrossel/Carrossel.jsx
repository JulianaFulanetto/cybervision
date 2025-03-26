import "./Carrossel.css";

export const Carrossel = (props) => {
  return (
    <div className="d-flex justify-content-center mt-4 ">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide w-75" // Define a largura do carrossel
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={props.spiderman}
              className="d-block w-100"
              alt="..."
            />
            <div className="bg-white carousel-caption bg-opacity-50 d-none d-md-block">
              <h5>Os melhores desenhos para maratonar com a família!</h5>
              <p>Spider Man</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={props.rick}
              className="d-block w-100"
              alt="..."
            />
            <div className="bg-white carousel-caption bg-opacity-50 d-none d-md-block">
              <h5>Desenhos não são só para crianças. Explore novas histórias! </h5>
              <p>Rick And Morty</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={props.scooby}
              className="d-block w-100"
              alt="..."
            />
            <div className="bg-white bg-opacity-50 carousel-caption d-none d-md-block">
              <h5>Aventura, risadas e nostalgia em um só lugar!</h5>
              <p>Scooby Doo</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};