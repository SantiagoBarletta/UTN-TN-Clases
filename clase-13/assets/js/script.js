/* funciones nativas*/ 

// $esunnumero = isNaN('caca');
// document.write ($esunnumero);

// alert('hola desde un alerta'); //alert tranforma cualquier dato a string

// let variable = isNaN(8);
// alert(variable);

// alert(typeof(8 + ''));

// let nombre = prompt('su nombre');

// document.write (nombre);

// let edad = prompt('ingrese su edad');

// if (edad > 18){
//     alert('Podes pasar');
// }
// else if (edad < 18)
// {
//     alert('No podes pasar');
// }
// else
// {
//     alert('de pedo!');
// }

// /* 1*/
// let tieneHijos = false;
// alert(tieneHijos);

// /*2*/
// let salario = prompt('salario actual');
// alert ("Salario anual $:" + salario * 12)

// /*3*/

// let edad = prompt('ingrese su edad');
// if (edad >= 18){
//          console.log('Eres mayor de edad');
//      }
//      else {
//      alert('Eres menor de edad');
//     }
/*4*/

// let sueldo = prompt('sueldo actual');
// let antiguedad = prompt('antiguedad');

// if (sueldo < 500 && antiguedad >= 10){
//     alert('otorgarle 20% aumento, total:' + sueldo * 1.20);
    
// }
// else if (sueldo < 500 && antiguedad < 10){
//     alert('otorgarl 5% aumento, total:' + sueldo * 1.05);
    
// }
// else if (sueldo >= 500){
//     document.write ("Sueldo:" + sueldo);
    
// }


/*4*/

let sueldo = prompt('sueldo actual');

if (sueldo < 500){
    let antiguedad = prompt('antiguedad');
    if (antiguedad >= 10){
        alert('otorgarle 20% aumento, total:' + sueldo * 1.20);
    }
    else {
        alert('otorgarl 5% aumento, total:' + sueldo * 1.05);
    }
}
else {
    document.write ("Sueldo: $" + sueldo);    
}