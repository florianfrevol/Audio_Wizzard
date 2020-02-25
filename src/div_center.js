import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {App} from './App'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import LeftNav from './LeftNav';

function Div_center() {
    const leftstyle = {
        borderRight: "4px solid black"
    };
    const mainstyle = {
        height: '91vh',
    }
    return (
    <MDBContainer fluid>
        <MDBRow>
            <MDBCol size="4" lg="2" style={leftstyle}><LeftNav /></MDBCol>
            <MDBCol size="14" sm="8" lg="10" style={mainstyle}><App /></MDBCol>
        </MDBRow>
    </MDBContainer>
    );
  }

export default Div_center;
