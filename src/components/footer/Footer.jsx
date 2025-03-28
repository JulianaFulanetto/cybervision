import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="bg-black-gradient2">
    <footer className=" text-center text-light py-3">
      <p className="mb-1">
        Feito com <span className="text-danger">❤️</span> por
        <a
          href={props.devLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          {" "}
          {props.devName}
        </a>
      </p>
    </footer>
    </div>
  );
};

export default Footer;
