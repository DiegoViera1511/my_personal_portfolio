import mysql from 'mysql2/promise'

//Creamos una configuración
const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'users_db',
}
//Establecer conección con la base de datos con la configuración 
const db = await mysql.createConnection(config);

export default db