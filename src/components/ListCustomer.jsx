import React from 'react';

import { useEffect, useState } from "react";
import api from '../services/api.js'

import './Table.css'
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
        <table className="tablelist">
            {customers.map((customer) => (
                <tr>
                    <td>
                        {customer.nome}
                    </td>
                    <td>
                        {customer.endereco}
                    </td>
                    <td>
                        {customer.id}
                    </td>
                </tr>
            
            ))}
        </table>
        </>
    );
}

export default ListCustomer;