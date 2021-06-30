import React from 'react';
import { Redirect,Link } from 'react-router-dom';
import { Container, Form, Row, Col, Button,Jumbotron } from "react-bootstrap";
import Layout from '../../components/Layout';
import { BiHappy } from "react-icons/bi";
import './style.css'


export default function PageNotFound() {
    const handleHome = ()=>{
        
         <Redirect to={`/`} />
    }
    return (
        <Layout sidebar >
            
            <Jumbotron style={{margin:'1rem 15rem',backgroundColor:'#FFEDE6'}} className="text-center">
                
                <BiHappy size={150} style={{ fill: 'red' }}/>
                <h1 style={{color:'red'}}>404</h1>
                <h3 className="page">Page Not Found !</h3>
                <Link to="/">Go to Home </Link>
            </Jumbotron>
        </Layout>
    )
}
