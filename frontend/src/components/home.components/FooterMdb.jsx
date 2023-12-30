import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

function FooterMdb() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Babyplace</h6>
              <p className="adress">
                Warehouse Society, 234 Bahagia Ave Street PRBW 29281
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">À propos</h6>
              <p>
                <a href="#!" className="text-reset">
                  Notre équipe
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Mention Légales
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Aide</h6>
              <p>
                <a href="#!" className="text-reset">
                  Contact
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@davewarehouse.fr
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-top">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        {/* <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a> */}
        {/* </div> */}
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default FooterMdb;
