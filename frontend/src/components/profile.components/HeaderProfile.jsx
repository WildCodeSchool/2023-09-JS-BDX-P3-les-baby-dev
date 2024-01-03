import "./HeaderProfile.scss";

function HeaderProfile() {
  return (
    <div className="background-header-profile">
      <h1 className="inscription-titre">Jean-Philippe</h1>
      <h2 className="inscription-sous-titre">Papa du petit Antoine</h2>
      <div className="bouton-div">
        <div className="blue-button">Parents</div>
        <div className="green-button">Enfants</div>
        <div className="orange-button">Documents</div>
      </div>
    </div>
  );
}

export default HeaderProfile;
