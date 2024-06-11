// const formLoginHTML = document.getElementById('login');

// const handleLogin =  (evento) => {
//     evento.preventDefault();
//     const formulario = evento.target;
//     // console.log('Formulario', formulario.username.value);
//     const username = formulario.username.value;
//     if (username.length < 4) {
//         const errorTextHML = document.getElementById('error-username');
//         errorTextHML.innerText = 'Error: El nombre de usuario debe tener mas de 4 caracteres';
//         // errorTextHML.style.color = 'red';
//     } else {
//         console.log('Nombre de usuario válido:', username);
//     }
// }

// formLoginHTML.addEventListener('submit', handleLogin);



/////////////////////////////// TAREA en clase //////////////////////////////////////////////////
// const formLoginHTML = document.getElementById('login');
// const errorTextHTML = document.getElementById('error-username');
// const errorTextHTML2 = document.getElementById('error-password');
// const errorTextHTML3 = document.getElementById('error-email');

// const validarUsername = (username) => {
//     return /[A-Z]/.test(username) && /-/.test(username) && username.length >= 4;
// };

// const validarPassword = (password) => {
//     return /[A-Z]/.test(password) && /#/.test(password) && password.length >= 4;
// };

// const validarEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// };

// const handleLogin = (evento) => {
//     evento.preventDefault();
//     const formulario = evento.target;
//     const usernameInput = formulario.username;
//     const passwordInput = formulario.password;
//     const emailInput = formulario.email;
//     const username = usernameInput.value;
//     const password = passwordInput.value;
//     const email = emailInput.value;

//     errorTextHTML.innerText = '';
//     errorTextHTML2.innerText = '';
//     errorTextHTML3.innerText = '';

//     let valido = true;

//     if (!validarUsername(username)) {
//         errorTextHTML.innerText = 'Error: El nombre de usuario debe tener al menos 4 caracteres, una mayúscula y un guion (-).';
//         usernameInput.classList.add('error-input');
//         valido = false;
//     }

//     if (!validarPassword(password)) {
//         errorTextHTML2.innerText = 'Error: La contraseña debe tener al menos 4 caracteres, una mayúscula y un símbolo "#".';
//         passwordInput.classList.add('error-input');
//         valido = false;
//     }

//     if (!validarEmail(email)) {
//         errorTextHTML3.innerText = 'Error: El email no es válido.';
//         emailInput.classList.add('error-input');
//         valido = false;
//     }

//     if (valido) {
//         console.log('Éxito');
//     }
// };

// formLoginHTML.addEventListener('submit', handleLogin);



/////////////////////////////////////////////Con BIBLIOTECAS ///////////////////

const formLoginHTML = document.getElementById('login');

const obtenerValoresFormulario = (formulario) => {
    const inputs = ['username', 'password', 'email'];

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
    username: {
        validacion: (username) => /[A-Z]/.test(username) && /-/.test(username) && username.length >= 4,
        errorText: 'Error: El nombre de usuario debe tener al menos 4 caracteres, una mayúscula y un guion (-).'
    },
    password: {
        validacion: (password) => /[A-Z]/.test(password) && /#/.test(password) && password.length >= 4,
        errorText: 'Error: La contraseña debe tener al menos 4 caracteres, una mayúscula y un símbolo "#".'
    },
    email: {
        validacion: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        errorText: 'Error: El email no es válido.'
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
        console.log('Éxito');
    }
};


formLoginHTML.addEventListener('submit', handleSubmit);
