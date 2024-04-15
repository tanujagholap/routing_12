import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {

    const { id } = useParams();

    const {register, handleSubmit} = useForm({defaultValues:
        async ()=> await axios.get(`http://localhost:5000/users/${id}`)
    });

    const navi = useNavigate();

    function saveData(){
        axios.put(`http://localhost:5000/users/${id}`)
        navi('/show')
    }

  return (
    <>
        <center>
            <form onSubmit={handleSubmit(saveData)}>
                <label htmlFor='u'>USERNAME:</label>
                <input type='text' id='u' {...register('username')}/>
                <br/><br/>
                <label htmlFor='g'>GENDER:</label>
                <input type='text' id='g' {...register('gender')}/>
                <br/><br/>
                <label htmlFor='a'>AGE:</label>
                <input type='number' id='a' {...register('age')}/>
                <br/><br/>
                <label htmlFor='p'>PASSWORD:</label>
                <input type='text' id='p' {...register('password')}/>
                <br/><br/>
                <input type='submit' value='SUBMIT'/>
                <input type='reset' value='RESET'/>
            </form>
        </center>
    </>
  )
}

export default Update