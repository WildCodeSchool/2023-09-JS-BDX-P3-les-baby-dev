import barSearch from "../../assets/BarSearch.svg";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <h1>
        Réservez une place auprès de professionnels de la petite enfance
        gratuitement en quelques clics
      </h1>
      <div className="search-bar">
        <img src={barSearch} alt="" />
      </div>
    </header>
  );
}

export default Header;
