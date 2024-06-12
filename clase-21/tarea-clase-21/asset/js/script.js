const formProductosHTML = document.getElementById('form-productos');
const listadoProductosHTML = document.getElementById('listado-productos');
const btnLimpiarLista = document.getElementById('btn-limpiar');

const obtenerValoresFormulario = (formulario) => {
    const inputs = ['titulo', 'precio', 'descripcion', 'stock', 'codigo'];

    const inputsInfo = {};

    for (let input of inputs) {
        const spanErrorHTML = formulario.querySelector(`.error-${input}`);
        const valor = formulario[input].value;
        inputsInfo[input] = {
            errorHTML: spanErrorHTML,
            validacion: VALIDACIONES[input].validacion,
            errorText: VALIDACIONES[input].errorText,
            valor: valor
        };
    }

    return inputsInfo;
};

const VALIDACIONES = {
    titulo: {
        validacion: (titulo) => titulo.length >= 6,
        errorText: 'Error: Título debe tener al menos 6 caracteres.'
    },
    precio: {
        validacion: (precio) => Number(precio) > 0 && Number.isInteger(Number(precio)),
        errorText: 'Error: El precio debe ser mayor a 0.'
    },
    descripcion: {
        validacion: (descripcion) => descripcion.length >= 100,
        errorText: 'Error: La descripcion debe tener al menos 100 caracteres.'
    },
    stock: {
        validacion: (stock) => Number(stock) > 0 && Number.isInteger(Number(stock)),
        errorText: 'Error: El stock debe ser mayor a 0.'
    },
    codigo: {
        validacion: (codigo) => codigo.length >= 6 && /#/.test(codigo),
        errorText: 'Error: El Código debe tener al menos 6 caracteres e incluir un #.'
    }
};

const limpiarErrores = (formulario, valoresFormulario) => {
    for (const propiedad in valoresFormulario) {
        const objetoFormulario = valoresFormulario[propiedad];
        objetoFormulario.errorHTML.innerText = '';
        formulario[propiedad].classList.remove('error-input');
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    const formulario = event.target;
    const valoresFormulario = obtenerValoresFormulario(formulario);

    limpiarErrores(formulario, valoresFormulario); 

    let valido = true;

    for (const propiedad in valoresFormulario) {
        const objetoFormulario = valoresFormulario[propiedad];
        if (!objetoFormulario.validacion(objetoFormulario.valor)) {
            objetoFormulario.errorHTML.innerText = objetoFormulario.errorText;
            formulario[propiedad].classList.add('error-input');
            valido = false;
        }
    }
    

    if (valido) {

        listadoProductosHTML.innerHTML = listadoProductosHTML.innerHTML +`
        <div class="producto">
        <span class="producto-id"> Codigo:${valoresFormulario['codigo'].valor}</span>
        <h3>${valoresFormulario['titulo'].valor}</h3>
        <span>Precio: $ ${valoresFormulario['codigo'].valor}</span>
        <p>Descripción: ${valoresFormulario['descripcion'].valor}</p>
        <span>Stock: ${valoresFormulario['stock'].valor}</span>
    </div>`;
    }
};

const limpiarListaProductos = () => {
    listadoProductosHTML.innerHTML = ''; 
};

formProductosHTML.addEventListener('submit', handleSubmit);

btnLimpiarLista.addEventListener('click', limpiarListaProductos);


