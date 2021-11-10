import React from "react";
import Button from './Button';
import './Form.css'

import api from '../services/api.js'

import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";

const Form = () => {

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
            <div className="Form">
                <h3>Cadastro</h3>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <fieldset class="grupo">
                        <div class="campo">
                                <label for="nome">Nome</label>
                                <input type="text" id = "nome" name="nome" />
                            </div>
                            <div class="campo">
                                <label for="nome">Endereço</label>
                                <input type="text" id = "endereco" name="endereco" />
                            </div>
                        </fieldset>
                    </fieldset>
                    <Button props="Enviar"/> 
                </form>
            </div>
        </Router>

    );
}

export default Form;



