import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as router, route, Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Kind = () => {
  const user = useContext(UserContext);

  return (
    <div className="user-form">
    <MDBContainer>
    <div style={{height: "200px"}}></div>

        <MDBRow className="justify-content-md-center">
    <MDBCol md="3">
        <Link to="/name">       
            <Button renderAs="button" onClick={e => user.setKind("Madame")}>

                <span>Femme</span>
            </Button>
        </Link>

    </MDBCol>
    <MDBCol md="2">
    <Link to="/name">       
        <Button renderAs="button" onClick={e => user.setKind("Monsieur")}>

            <span>Homme</span>
        </Button>
    </Link>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default Kind;