import React, {useState, useMemo} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Name from './NameComponent';
import UserForm from './UserForm'
import Kind from './UserKind'
import Button from 'react-bootstrap/Button';

function App2() {
  return (
    <MDBContainer>
    <div style={{height: "50px"}}></div>
      <MDBRow className="justify-content-md-center">
        <strong>Identité du patient</strong>
      </MDBRow>
    <div style={{height: "100px"}}></div>
      <MDBRow className="justify-content-md-center">
          <MDBCol md="5">
              <UserForm />
          </MDBCol>

          <Link to="/SetKind">       
        <Button renderAs="button" style={{height: "50px", width: "100px"}}>
          Continuer
        </Button>
        </Link>
      </MDBRow>


    </MDBContainer>
  );
}

function App3() {
  return (
    <div>
      <MDBContainer>
      <div style={{height: "50px"}}></div>
        <MDBRow className="justify-content-md-center">
          <Name />
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

function App4() {
  return (
    <div>
          <Kind />
      </div>
  );
}


function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
          <Route path="/" exact component={App2} />
          <Route path="/name/" component={App3} />
          <Route path="/SetKind/" component={App4} />

      </div>
    </Router>
  );
}

export {App, App2, App3};