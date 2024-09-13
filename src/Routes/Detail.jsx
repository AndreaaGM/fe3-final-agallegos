import React from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
import Card from '../Components/Card';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams(); // Obtiene el ID de los parámetros dinámicos de la URL
  const url = `https://jsonplaceholder.typicode.com/users/${id}`; // Genera la URL de la API con el ID del dentista
  const [datos, setDatos] = useState(null); // Estado para almacenar los datos del dentista
  const [loading, setLoading] = useState(true); // Estado para mostrar un mensaje de carga
  const [error, setError] = useState(null); // Estado para manejar errores
 
  useEffect(() => {
    const llamadoAPI = async () => {
      try {
        const res = await axios.get(url);
        setDatos(res.data);
        setLoading(false); // Una vez que los datos se obtienen, deja de mostrar el mensaje de carga
      } catch (err) {
        setError('Error al obtener los datos del dentista');
        setLoading(false);
      }
    };

    llamadoAPI();
  }, [url]);
  if (loading) {
    return <p>Cargando datos del dentista...</p>; // Muestra un mensaje mientras los datos se cargan
  }

  if (error) {
    return <p>{error}</p>; // Muestra un mensaje de error si la API falla
  }
 
 

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {datos && (
        <div className="detail-card">
          <h2>{datos.name}</h2>
          <p><strong>Username:</strong> {datos.username}</p>
          <p><strong>Email:</strong> {datos.email}</p>
          <p><strong>Phone:</strong> {datos.phone}</p>
          <p><strong>Website:</strong> {datos.website}</p>
        </div>
      )}
    </>
  );
};


export default Detail;