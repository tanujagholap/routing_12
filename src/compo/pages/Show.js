import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Show() {
    const [users, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users')
        setUser(result.data);
    }

    useEffect(()=>{
        fetchData();
    }, [])

  return (
    <div>
        <center>
            <table className='table table-dark table-stripted'>
                <thead>
                    <tr>
                        <th>USERNAME</th>
                        <th>GENDER</th>
                        <th>AGE</th>
                        <th>PASSWORD</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((obj)=>{
                            return(
                                <tr>
                                    <td>{obj.username}</td>
                                    <td>{obj.gender}</td>
                                    <td>{obj.age}</td>
                                    <td>{obj.password}</td>
                                    <td>
                                        <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning'>UPDATE</button></NavLink>
                                        <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger'>DELETE</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </center>
    </div>
  )
}

export default Show
