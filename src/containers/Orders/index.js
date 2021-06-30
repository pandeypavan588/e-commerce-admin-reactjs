import React from 'react';
import { Container, Form, Row, Col, Button,Jumbotron } from "react-bootstrap";
import Layout from '../../components/Layout';

export default function Orders() {
    return (
       <Layout sidebar>
            
            <Jumbotron style={{margin:'5rem',backgroundColor:'#fff'}} className="text-center">
                <h3>Welcome to Order dashboard</h3>
            </Jumbotron>
        </Layout>
    )
}
