const queries = {
    getAllUsuarios: `
    SELECT * 
    FROM Usuarios;`,

    getUsuarioByEmail: `
    SELECT * 
    FROM Usuarios 
    WHERE email=$1;`,

    createUsuario: `
    INSERT INTO Usuarios (nombre, email, password, telefono, direccion) 
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING *;`,

    updateUsuarioByEmail: `
    UPDATE Usuarios 
    SET nombre = $1, password = $2, telefono = $3, direccion = $4, puntos_descuento = $5
    WHERE email = $6
    RETURNING *;`,

    updatePuntosUsuarioByEmail: `
    UPDATE Usuarios 
    SET puntos_descuento = $1
    WHERE email = $2
    RETURNING *;`,

    deleteUsuarioByEmail: `
    DELETE FROM Usuarios 
    WHERE email=$1 
    RETURNING *;`
};

module.exports = queries;
