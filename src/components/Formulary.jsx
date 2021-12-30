import React from "react";
import { useState, useEffect } from "react";

import api from '../services/api.js';
import { Button } from 'reactstrap';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { Col } from 'reactstrap';
import { Alert } from 'reactstrap';


import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";


const Formulary = (props) => {

    const [submitted, setSubmitted] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();

        let nome = e.target.nome.value;
        let endereco = e.target.endereco.value;

        api.post("/customer", {nome, endereco }
        ).then((response) => setSubmitted(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });

    }

    const history = useHistory();

    const [customer, setCustomer] = useState([]);

    const handleCustomerListClick = () => {
        history.push(`/`)
    }
    useEffect(() => {
  
        const fetchTasks = async () => {
          const { data } = await api.get(
            "/customerfind/19"
          );
          setCustomer(data);
        };
    
        fetchTasks();
    
      }, []);
  
  
      console.log(customer.nome);
  
  
      return (
        
        <Router>
            <div className="jumbotron">
            {submitted && <div>
                    <Alert
                        color="primary"
                        isOpen = "false"
                    >
                        Cadastro feito com sucesso.
                    </Alert>
                </div>
            }
 
                <h3>Cadastro</h3>

                <Form onSubmit={handleSubmit}>
                    <FormGroup row>
                        <Label
                            for="email"
                            sm={3}
                        >
                        E-mail:
                        </Label>
                        <Col sm={6}>
                        <Input
                            id="email"
                            name="email"
                            placeholder=""
                            type="email"
                            value={customer.email}
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="nome"
                            sm={3}
                        >
                        Nome:
                        </Label>
                        <Col sm={6}>
                        <Input
                            id="nome"
                            name="nome"
                            placeholder=""
                            type="text"
                            value={customer.nome}
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="endereco"
                            sm={3}
                        >
                        Endereço:
                        </Label>
                        <Col sm={6}>
                        <Input
                            id="endereco"
                            name="endereco"
                            placeholder=""
                            type="text"
                            value={customer.endereco}
                        />
                        </Col>
                    </FormGroup>
                    <Button color="primary">
                        Enviar
                    </Button>
                </Form>
            </div>
            
        </Router>

    );
}

export default Formulary;



