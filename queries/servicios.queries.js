const queries = {
    getAllServicios: `
    SELECT * 
    FROM Servicios;`,

    getServicioByNombre: `
    SELECT * 
    FROM Servicios 
    WHERE nombre=$1;`,

    createServicio: `
    INSERT INTO Servicios (nombre, descripcion) 
    VALUES ($1, $2) 
    RETURNING *;`,

    updateServicioByNombre: `
    UPDATE Servicios 
    SET nombre = $1, descripcion = $2 
    WHERE nombre = $3
    RETURNING *;`,

    deleteServicioByNombre: `
    DELETE FROM Servicios 
    WHERE nombre=$1 
    RETURNING *;`
};


module.exports = queries;