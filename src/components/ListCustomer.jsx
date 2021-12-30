import React from 'react';

import { useEffect, useState } from "react";
import api from '../services/api.js'

import { IconContext } from "react-icons";
import { FiTrash2 } from "react-icons/fi";

import { Table, Button } from 'reactstrap';
import './style.css'
import { Link } from 'react-router-dom'


const ListCustomer = () => {

    const [customers, setCustomer] = useState([]);

    function onClickDelete(id) {
        console.log(customers);

        api.get("/customerdelete/"+id);

        const newCustomers = customers.filter(customer => customer.id !== id)

        setCustomer(newCustomers);
   }

   useEffect(() => {
  
      const fetchTasks = async () => {
        const { data } = await api.get(
          "/customerlist"
        );
        setCustomer(data);
      };
  
      fetchTasks();
  
    }, []);

    return(
        <div className= "table">
            <Table hover >
                <thead>
                    <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Endereço
                    </th>
                    <th>
                        Ação
                    </th>
                    </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (

                    <tr>
                        <th scope="row">
                            {customer.id}
                        </th>
                        <td>
                            {customer.nome}
                        </td>
                        <td>
                            {customer.email}
                        </td>
                        <td>
                            {customer.endereco}
                        </td>
                        <td>
                            <IconContext.Provider value={{ color: "red", className: "global-class-name", size: "0.8em" }}>
                                <Button outline onClick={()=>onClickDelete(customer.id)}><FiTrash2 /></Button>
                            </IconContext.Provider>
                        </td>
                        <td>
                            <IconContext.Provider value={{ color: "blue", className: "global-class-name", size: "0.8em" }}>
                                <Link to="/update">
                                    <Button outline ><FiTrash2 /></Button>
                                </Link>
                            </IconContext.Provider>
                        </td>
                    </tr>

                     ))}
                </tbody>
            </Table>

        </div>
    );
}

export default ListCustomer;