const { Router } = require('express');
const router = Router();
const { connection } = require('../db/db');

// Peticion get para consultar todos los estudiantes mostrandonos algunos datos del mismo
// /Directivos/Registro_Estudiantes
// Esta peticion funciona correctamente
router.get("/getAllArticles", async (req, res) => {
  let client = await connection.connect();
  try {
    const result = await client.query(
      `SELECT * FROM 'articulos'`
    );
    if (result.rows) {
      res.json(result.rows);
    } else {
      res.json(result.data)
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
});
// Fin peticion get


// Peticion get para consultar los datos de un estudiante
// /maestros/registrar_notas/grupo_estudiantes/agregar_nota
// Esta peticion funciona correctamente
router.get("/maestro-registro-estudiante-info-estudiante/:id_estudiante", async (req, res) => {
  let client = await connection.connect();
  const { id_estudiante } = req.params;
  try {
    const result = await client.query(
      `SELECT estudiante.id_estudiante, nombres, apellidos, codigo_estudiante
      FROM estudiante
      INNER JOIN persona
      ON estudiante.id_persona = persona.id_persona AND id_estudiante = ${id_estudiante};`
    );
    if (result.rows) {
      res.json(result.rows);
    } else {
      res.json({});
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
});
// Fin peticion get


// PETICIONES PARA CREAR UN NUEVO ESTUDIANTE

// Peticion post para crear un registro en la tabla de personas y ala vez en la tabla de estudiantes
/// Directivos/Registro_Estudiantes
// Esta peticion funciona
router.post('/directivos-nuevo-estudiante-persona', async (req, res) => {
  let client = await connection.connect();
  const {
    nombres,
    apellidos,
    tipo_documento,
    numero_documento,
    sexo,
    fecha_nacimiento,
    direccion_residencial,
    ciudad_residencial,
    telefono_residencial,
    telefono_celular,
    correo_electronico,
    estado_cuenta,
    foto_perfil,
    pdf_documento,
    tipo_usuario,
    codigo_estudiante,
    estado_estudiante,
    id_grupo
  } = req.body;
  console.log(id_grupo)
  try {
    const result = await client.query(`INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), '${nombres}', '${apellidos}', '${tipo_documento}', '${numero_documento}', '${sexo}', '${fecha_nacimiento}', '${direccion_residencial}', '${ciudad_residencial}', '${telefono_residencial}', '${telefono_celular}', '${correo_electronico}', '${estado_cuenta}', '${foto_perfil}', '${pdf_documento}', '${tipo_usuario}') RETURNING id_persona;`)
    if (result.rows) {
      console.log(result.rows[0].id_persona);
      const result2 = await client.query(`INSERT INTO estudiante VALUES (NEXTVAL ('estudiante_seq'), ${result.rows[0].id_persona}, '${codigo_estudiante}', '${estado_estudiante}') RETURNING id_estudiante;`);
      const result3 = await client.query(`INSERT INTO grupos_estudiantes VALUES (NEXTVAL ('grupos_estudiantes_seq'), ${result2.rows[0].id_estudiante}, ${id_grupo}, 'En curso');`);
      console.log('id_estudiante:', result2.rows[0].id_estudiante)

      console.log('Este es el result 3', result3)
      if (result2) {
        res.json({ message: 'Se creo un nuevo estudiante.' });
      } else {
        res.json({ message: "No se ha creado un nuevo estudiante." });
      }
    } else {
      res.json({ message: 'No se creo una nueva persona' });
    }
  } catch (e) {
    res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
  }
});
// Fin peticion post para crear una nueva persona y estudiante

// FIN PETICIONES PARA CREAR UN NUEVO ESTUDIANTE

module.exports = estudiantes;