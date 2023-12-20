import "./header.scss";

function Header() {
  return (
    <header className="header">
      <h1>
        Réservez une place auprès de professionnels de la petite enfance
        gratuitement en quelques clics
      </h1>
      <div>
        <button type="button">
          {" "}
          Rechercher <span>➜</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
