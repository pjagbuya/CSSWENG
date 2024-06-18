const sql = require('../sql');

const queries = {
    selectAll : 
    "SELECT * FROM staffs;",
    selectById :
    "SELECT * FROM staffs WHERE staff_id = ?;",
    insertOne :
    `
        INSERT INTO staffs
        (
            staff_id, 
            staff_name, 
            staff_position
        )
        VALUES (?, ?, ?);
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