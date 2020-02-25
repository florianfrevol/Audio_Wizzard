import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function LeftNav() {
    const blockcss = {
        height: '70px',
        width: '80px',
        backgroundColor: 'black',
        marginTop: '10px',
        marginBottom: '10px',
        color: 'white',
        borderRadius: '10px'
    }

    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol style={blockcss}><a href="#">1er visite</a></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol style={blockcss}><a href="#">Adaptation</a></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol style={blockcss}><a href="#">Essais</a></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol style={blockcss}><a href="#">Appareillés</a></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol style={blockcss}><a href="#">Relance</a></MDBCol>
                </MDBRow>
        </MDBContainer>
        </div>
    );
  }

  export default LeftNav;
