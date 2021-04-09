//Función para guardar datos en el functions
export const saveToLocal = (key, value) => localStorage.setItem(key, value);
//Función para tomar datos guardados en el local storage  
export const getFromLocal = (key) => localStorage.getItem(key);
//Función para borrar datos del functions  
export const removeFromLocal = (key) => localStorage.removeItem(key);
//Función para borrar todos los datos del functions 
export const remove = () => localStorage.clear();
//Función para generar la fecha actual
export const generateDate = () => {
    let d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    return day + "/" + month + "/" + year;
}
//Función para generar la hora
export const generateHour = () => {
    let d = new Date();
    let hours = '' + (d.getHours() - 5);
    console.log(hours);
    let minutes = '' + d.getMinutes();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    console.log("Horas: " + hours)
    console.log("Final: " + hours + ":" + minutes)
    return hours + ":" + minutes;
}