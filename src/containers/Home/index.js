import React from 'react';
import Layout from '../../components/Layout';

import { Container, Form, Row, Col, Button,Jumbotron } from "react-bootstrap";
import './style.css'

function Home(props) {
    return (
        <Layout sidebar>
            
            <Jumbotron style={{margin:'5rem',backgroundColor:'#fff'}} className="text-center">
                <h3>Welcome to Admin dashboard</h3>
            </Jumbotron>
        </Layout>
    );
}

export default Home;