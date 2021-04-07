//metodos de console...
console.warn('Probando la consola');
console.log('Hola mundo');
console.log("desde typescript\ncompilado con un observable");
console.warn('Esta es una alerta');
console.error('Este es un error');
//*************************************************************************** */
// declaración de variales tipadas...
console.warn('Declaración de variables:');
var numero = 34;
var texto = 'Hola mundo';
var booleano = true;
console.log(numero + "\n" + texto + "\n" + booleano);
//**************************************************************************** */
//objetos... son iguales que en JS y no es necesario definir tipo en las propiedades...
console.warn('Objetos...');
var miAuto = {
    marca: 'NISSAN',
    modelo: 720,
    año: 1984
};
console.log(miAuto);
console.log("marca: " + miAuto.marca + "\nmodelo: " + miAuto.modelo + "\na\u00F1o: " + miAuto.año);
//**************************************************************************************** */
//interfaces...Nos permiten crear una plantilla para la relalización de distintos objetos
console.warn('Manejo de interfaces');
//uso
var auto1 = {
    marca: 'Toyota',
    modelo: 'Tacoma',
    año: 2021
};
var auto2 = {
    marca: 'Ford',
    modelo: 'Bronco',
    año: 1987
};
console.log("Este es un objeto creado con la interfas auto: ");
console.log(auto2);
/******************************************************************************** */
//tipo de dato any...Nos permiten usar variables como se usaran en js vanilla
console.warn('Datos any...');
//declaración
var variable = 31;
//uso
console.log("variable: " + variable);
variable = 'texto',
    console.log("variable reasignada: " + variable);
/*********************************************************************************** */
//arreglos...y arreglos de interfaces
console.warn('Manejo de arreglos...');
//definicion de arreglo tipado
var listaNombres = ['pam', 'daniel', 'elvia', 'mario', 'iván'];
//uso
console.log('Array de tipo string:');
listaNombres.forEach(function (v, i) {
    console.log("posicion: " + i + ", valor: " + v);
});
//definicion de arreglo tipado "interfas"
var listaInterfas = [
    { nombre: 'elvia', edad: 48, parentesco: 'mamá' },
    { nombre: 'mario', edad: 53, parentesco: 'papá' },
    { nombre: 'pam', edad: 18, parentesco: 'novia' },
    { nombre: 'iván', edad: 27, parentesco: 'hermano' },
    { nombre: 'daniel', edad: 21, parentesco: 'hermano' },
];
//uso
console.log('Este es un arreglo de interfases...');
listaInterfas.forEach(function (v, i) {
    console.log(v);
});
//tambien puedes acceder a las propiedades de un objeto dentro de un arreglo mediante "."
console.log('a continuación solo se muestran los nombres de los objetos dentro del arreglo...');
listaInterfas.forEach(function (v) {
    console.log(v.nombre);
});
/******************************************************************************* */
//switch con enum
// console.warn('switch con enum');
//declaración
// enum subMenu{
//   perfil = 1,
//   contactos = 2,
//   config = 3
// }
// //uso
// var menu:number = 2
// switch(menu){
//   case subMenus.perfil:{
//     console.log('perfil');
//   }
//   case subMenus.contactos:{
//     console.log('contactos');    
//   }
//   case subMenus.config:{
//     console.log('contactos');
//   }
//   default:{
//     console.log('no existe');
//   }
// }
/******************************************************************************* */
//For OF
console.warn('For OF');
var listaFam = [
    { nombre: 'daniel', apellido: 'hernandez' },
    { nombre: 'Elvia', apellido: 'Ascecio' },
    { nombre: 'Ivan', apellido: 'hernandez' },
    { nombre: 'Mario', apellido: 'hernandez' }
];
for (var _i = 0, listaFam_1 = listaFam; _i < listaFam_1.length; _i++) {
    var fam = listaFam_1[_i];
    console.log(fam.nombre);
}
/*********************************** */
console.warn('for IN');
for (var index in listaFam) {
    console.log(listaFam[index].apellido);
}
/******************************************** */
console.warn('Clases');
//declaración
var Person = /** @class */ (function () {
    //metodo de  asignación
    function Person() {
        this.nombre = 'sin nombre';
        this.peso = 0;
        this.vivo = undefined;
        this.resumen();
    }
    Person.prototype.resumen = function () {
        console.log("Hola soy " + this.nombre + ", mi peso es de " + this.peso + "KG y estoy " + (this.vivo == true ? 'vivo' : this.vivo == false ? 'muerto' : 'naciendo') + ".");
    };
    Person.prototype.asignar = function (nombreParam, pesoParam, vivoParam) {
        this.nombre = nombreParam;
        this.peso = pesoParam;
        this.vivo = vivoParam;
        this.resumen();
    };
    return Person;
}());
//uso
var person1 = new Person;
person1.asignar('Brandon', 73, true);
var person2 = new Person;
person2.asignar('Joaquin', .3, false);
