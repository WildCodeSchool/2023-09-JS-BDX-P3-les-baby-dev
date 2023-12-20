import "./footer.scss";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function Footer() {
  return (
    <>
      <div className="line" />
      <footer className="container  ">
        <div className="footerTop">
          <h3>Vous êtes professionnel de la petite enfance ? </h3>
          <div className="helpBtn">
            <button type="button">En savoir plus</button>
            <button type="button">
              Demander une démo <span>➜</span>
            </button>
          </div>
        </div>
        <div className="footerBtm">
          <div className="footerTitle">
            <button type="button" className="imgButton">
              <img src="./src/assets/logoPasPro.svg" alt="Babyplace" />
            </button>
            <h5>À propos</h5>
            <h5>Aide</h5>
            <h5>Réseaux sociaux</h5>
          </div>
          <div className="infoContainer">
            <div className="info">
              <p className="adress">
                Warehouse Society, 234 <br /> Bahagia Ave Street PRBW 29281
              </p>
              <p className="mail">
                info@davewarehouse.projet <br /> 02.40.01.02.03
              </p>
            </div>
            <div className="listAbout">
              <ul>
                <li>Notre équipe</li>
                <li>Mention Légales</li>
              </ul>
            </div>
            <div className="listHelp">
              <ul>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="socialMedia">
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#3b5998" }}
              >
                <MDBIcon fab icon="facebook-f" size="lg" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#55acee" }}
              >
                <MDBIcon fab icon="twitter" size="lg" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#dd4b39" }}
              >
                <MDBIcon fab icon="google" size="lg" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#ac2bac" }}
              >
                <MDBIcon fab icon="instagram" size="lg" />
              </MDBBtn>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
