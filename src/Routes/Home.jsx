import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from "../Components/utils/useFunctions";
import axios from 'axios';
import { useEffect } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  // guardarlo en una variable
  // traer dichas variables del contexto
  const { state, dispatch } = useContextGlobal();

  useEffect(() => {
    const llamadoAPI = async () => {
      const res = await axios(url);
      const data = await res.data;
      // console.log(data);
      dispatch({ type: "Data", payload: data });
    };

    llamadoAPI();
  }, [dispatch]);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {state.data.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            username={item.username}
            id={item.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;