import React from "react";
import Button from './Button';

import './Form.css'

//import Button from 'react-bootstrap/Button';


const Form = () => {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }



    return (
        <div className="Form">
            <h3>Cadastro</h3>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <fieldset class="grupo">
                    <div class="campo">
                            <label for="nome">Nome</label>
                            <input type="text" id="nome" name="nome" value="" />
                        </div>
                        <div class="campo">
                            <label for="nome">Endereço</label>
                            <input type="text" id="nome" name="nome" value="" />
                        </div>
                    </fieldset>
                </fieldset>
                <Button props="Enviar"/> 
            </form>
        </div>
    );
}

export default Form;



