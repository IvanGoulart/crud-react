import React from 'react';

import { useEffect, useState } from "react";
import api from '../services/api.js'

import { IconContext } from "react-icons";
import { FiTrash2 } from "react-icons/fi";

import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import './style.css'

function onClickDelete(id) {

    api.get("/customerdelete",{
            id: id
    });
}
const ListCustomer = () => {

    const [customers, setCustomer] = useState([]);

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
        <>
            <Table hover>
                <thead>
                    <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Nome
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
                        {customer.endereco}
                        </td>
                        <td>
                        <IconContext.Provider value={{ color: "blue", className: "global-class-name", size: "0.8em" }}>
                            <Button outline onClick={()=>onClickDelete(customer.id)}><FiTrash2 /></Button>
                        </IconContext.Provider>
                        </td>
                    </tr>

                     ))}
                </tbody>
                </Table>

        </>
    );
}

export default ListCustomer;