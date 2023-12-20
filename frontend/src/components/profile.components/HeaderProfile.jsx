import "./HeaderProfile.scss";

function HeaderProfile() {
  return (
    <div className="background-header-profile">
      <h1>Jean-Philippe</h1>
      <h2>Papa du petit Antoine</h2>
      <div className="bouton-div">
        <div className="blue-button">Enfants</div>
        <div className="green-button">Parents</div>
        <div className="orange-button">Documents</div>
      </div>
    </div>
  );
}

export default HeaderProfile;
