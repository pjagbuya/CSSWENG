const sql = require('../sql');

const queries = {
    selectAll : 
    "SELECT * FROM users;",
    selectById :
    "SELECT * FROM users WHERE user_id = ?;",
    insertOne :
    `
        INSERT INTO users
        (
            user_id, 
            user_name, 
            user_password,
            staff_id
        )
        VALUES (?, ?, ?, ?);
    `
}

function getAll(){
    return sql.query(queries['selectAll'])
}

function getById(data){
    return sql.query(queries['selectOne'], data)
}

function insertOne(data){
    return sql.query(queries['insertOne'], data)
}

module.exports = {
    getAll,
    getById,
    insertOne
}