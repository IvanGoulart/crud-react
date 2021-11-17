import React from "react";

import api from '../services/api.js';
import { Button } from 'reactstrap';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';


import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";

const Formulary = (props) => {

    function handleSubmit(e) {
        e.preventDefault();

        let nome = e.target.nome.value;
        let endereco = e.target.endereco.value;

        const response = api.post("/customer", {nome, endereco }
        
        );

      console.log(response);
    }


    const history = useHistory();

    const handleCustomerListClick = () => {
        history.push(`/`)
    }


    return (
        
        <Router>
            <div>
                <h3>Cadastro</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input id="nome" name="nome" placeholder="Nome" type="text" />
                        <Label for="endereco">Endereço</Label>
                        <Input id="endereco" name="endereco" placeholder="Endereço" type="text" />
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



