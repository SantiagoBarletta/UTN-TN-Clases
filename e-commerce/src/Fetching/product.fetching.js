const obtenerProductos = async () => {
    const response = await fetch(
      '/productos.json',
       { 
        method: "GET" 
      }
    );
    return response.json();
    
  };

  export default obtenerProductos