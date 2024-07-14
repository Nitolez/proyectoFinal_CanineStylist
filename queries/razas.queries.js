const queries = {
    getAllRazas: `
    SELECT * 
    FROM Razas;`,

    getRazaByNombre: `
    SELECT * 
    FROM Razas 
    WHERE nombre=$1;`,

    createRaza: `
    INSERT INTO Razas (nombre, descripcion, precio) 
    VALUES ($1, $2, $3) 
    RETURNING *;`,

    updateRazaByNombre: `
    UPDATE Razas 
    SET nombre=$1, descripcion=$2, precio=$3 
    WHERE nombre=$4 
    RETURNING *;`,

    deleteRazaByNombre: `
    DELETE FROM Razas 
    WHERE nombre=$1 
    RETURNING *;`
};


module.exports = queries;