import axios from 'axios';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Delete() {

    const { id } = useParams();

    const navi = useNavigate();

    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${id}`)
        navi('/show')
    }
  return (
    <div>
        <center>
            <h3>ARE YOU SURE?</h3>
            <button onClick={()=>deleteUser()}>YES</button>
            <NavLink to={`/show`}><button>NO</button></NavLink>
        </center>
    </div>
  )
}

export default Delete