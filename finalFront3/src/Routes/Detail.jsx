import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal, url } from '../Components/utils/global.context';
import axios from 'axios';

const Detail = () => {
  const { state, dispatch } = useContext(ContextGlobal)
  const { odontologoData } = state
  const params = useParams()
  console.log(odontologoData)

  useEffect(() => {
    axios(`${url}/${params.id}`)
      .then(res => dispatch({ type: 'GET_ODONTOLOGO', payload: res.data }))
  }, [])

  return (
    <div className="section">
      <h1>Detail Dentist id </h1>
      <table>
        <thead>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Sitio Web</th>
        </thead>
        <tbody>
          <td>{ odontologoData.name }</td>
          <td>{ odontologoData.email }</td>
          <td>{ odontologoData.phone }</td>
          <td>{ odontologoData.website }</td>
        </tbody>
      </table>
    </div>
  )
}

export default Detail