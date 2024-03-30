import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Card = ({ id, name, username }) => {
  const { state, dispatch } = useContext( ContextGlobal )

  return (
    <div className="card">
      <img src="/assets/images/doctor.jpg" alt="imagen" />
      <h2>{name}</h2>
      <Link to={`/odontologo/${id}`}>Ver detalles</Link>
      {
        location.pathname === '/' 
        ? <button onClick={ () => dispatch({ type: 'ADD_FAV', payload: { id, name, username } }) } className="favButton">Add fav</button>
        : <button onClick={ () => { dispatch({ type: 'DELETE_FAV', payload: id }), location.reload() } } className="favButton">Remove fav</button>
      }
    </div>
  );
};

export default Card;
