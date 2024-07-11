import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import obtenerProductos from "../../Fetching/product.fetching";
import "./Home.css";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  

  
  const handleChangeValue = (e) =>{
    console.log(e.target.value)
    setSearch(e.target.value)
}
const handleChangeFocus = () => {
    setIsWritting(true)
}
const handleAbortFocus = () => {
    setIsWritting(false)
}


  useEffect(
    () => {
        
        setTimeout(
            () => {
                obtenerProductos()
                .then(   
                    (productos)=> {
                        console.log('productos', productos)
                        if(search){
                            const nuevaListaProductos = productos.filter(
                                producto => 
                                    producto.titulo.toLowerCase().includes(search.toLowerCase())
                            )
                            setProductos(nuevaListaProductos)
                        }
                        else{
                            setProductos(productos)
                        }
                        setIsLoading(false)
                    }
                )
            },
            500
        )
        
    },
    [search]
)

  return (
    <div>
      <h1>HOME</h1>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={handleChangeValue}
        value={search}
      />
      {search !== "" && <p>Buscando: {search}</p>}
      <div>
        {isLoading ? (
          <section className="loader">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </section>
        ) : (
          <>
            {productos.map((producto) => (
              <div key={producto.id}>
                <h2>{producto.titulo}</h2>
                <p>Precio: {producto.precio}</p>
                <p>Categoría: {producto.categoria}</p>
                <Link to={`/detalle/${producto.id}`}>Ir al detalle</Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
