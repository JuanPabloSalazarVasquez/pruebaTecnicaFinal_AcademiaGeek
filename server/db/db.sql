
-- Eliminación de tablas
DROP TABLE IF EXISTS directivos;
DROP TABLE IF EXISTS consolidados;
DROP TABLE IF EXISTS grupos_estudiantes;
DROP TABLE IF EXISTS grupos_materias;
DROP TABLE IF EXISTS notas;
DROP TABLE IF EXISTS estudiante;
DROP TABLE IF EXISTS materias;
DROP TABLE IF EXISTS grupos;
DROP TABLE IF EXISTS maestros;
DROP TABLE IF EXISTS persona;

-- Eliminación de secuencias
DROP SEQUENCE IF EXISTS directivos_seq;
DROP SEQUENCE IF EXISTS consolidados_seq;
DROP SEQUENCE IF EXISTS grupos_estudiantes_seq;
DROP SEQUENCE IF EXISTS grupos_materias_seq;
DROP SEQUENCE IF EXISTS notas_seq;
DROP SEQUENCE IF EXISTS estudiante_seq;
DROP SEQUENCE IF EXISTS materias_seq;
DROP SEQUENCE IF EXISTS grupos_seq;
DROP SEQUENCE IF EXISTS maestros_seq;
DROP SEQUENCE IF EXISTS persona_seq;


-- Eliminación de enumeraciones
DROP TYPE IF EXISTS enum_genero;
DROP TYPE IF EXISTS enum_estado_estudiante;
DROP TYPE IF EXISTS enum_estado_grupo_estudiantes;
DROP TYPE IF EXISTS enum_materia_sexto;
DROP TYPE IF EXISTS enum_materia_septimo;
DROP TYPE IF EXISTS enum_materia_octavo;
DROP TYPE IF EXISTS enum_materia_noveno;
DROP TYPE IF EXISTS enum_materia_decimo;
DROP TYPE IF EXISTS enum_materia_once;
DROP TYPE IF EXISTS enum_persona_estado_cuenta;
DROP TYPE IF EXISTS enum_persona_tipo_usuario;

-- Creación de secuencias 
CREATE SEQUENCE directivos_seq;
CREATE SEQUENCE consolidados_seq;
CREATE SEQUENCE grupos_estudiantes_seq;
CREATE SEQUENCE grupos_materias_seq;
CREATE SEQUENCE notas_seq;
CREATE SEQUENCE estudiante_seq;
CREATE SEQUENCE materias_seq;
CREATE SEQUENCE grupos_seq;
CREATE SEQUENCE maestros_seq;
CREATE SEQUENCE persona_seq;

-- Creación de enumeraciones 
CREATE TYPE enum_genero AS ENUM ('Hombre', 'Mujer');
CREATE TYPE enum_estado_estudiante AS ENUM ('Estudiando','Graduado');
CREATE TYPE enum_estado_grupo_estudiantes AS ENUM ('En curso','Aprobado','Reprobado');
CREATE TYPE enum_materia_sexto AS ENUM ('S','N');
CREATE TYPE enum_materia_septimo AS ENUM ('S','N');
CREATE TYPE enum_materia_octavo AS ENUM ('S','N');
CREATE TYPE enum_materia_noveno AS ENUM ('S','N');
CREATE TYPE enum_materia_decimo AS ENUM ('S','N');
CREATE TYPE enum_materia_once AS ENUM ('S','N');
CREATE TYPE enum_persona_estado_cuenta AS ENUM ('Activa','Inactiva');
CREATE TYPE enum_persona_tipo_usuario AS ENUM ('Directivo','Maestro','Estudiante');



-- Tabla consolidados
CREATE TABLE consolidados (
  id_consolidado int4 NOT NULL DEFAULT NEXTVAL ('consolidados_seq'),
  id_estudiante int4 NOT NULL,
  consolidado text NOT NULL,
  PRIMARY KEY (id_consolidado)
);

-- Insert
INSERT INTO consolidados VALUES (NEXTVAL ('consolidados_seq'), 1, 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');



-- Tabla directivos
CREATE TABLE directivos (
  id_directivo int4 NOT NULL DEFAULT NEXTVAL ('directivos_seq'),
  id_persona int4 NOT NULL,
  cargo_directivo varchar(20) NOT NULL,
  PRIMARY KEY (id_directivo)
);

-- Insert
INSERT INTO directivos VALUES (NEXTVAL ('directivos_seq'), 3, '2020001');


-- Tabla estudiante
CREATE TABLE estudiante (
  id_estudiante int4 NOT NULL DEFAULT NEXTVAL ('estudiante_seq'),
  id_persona int4 NOT NULL,
  codigo_estudiante varchar(20) NOT NULL,
  estado_estudiante enum_estado_estudiante NOT NULL,
  PRIMARY KEY (id_estudiante)
);

ALTER TABLE estudiante
  ADD CONSTRAINT UQ_estudiante_codigo
  UNIQUE (codigo_estudiante);

-- Insert
INSERT INTO estudiante VALUES (NEXTVAL ('estudiante_seq'), 1, '2020001', 'Estudiando');
INSERT INTO estudiante VALUES (NEXTVAL ('estudiante_seq'), 2, '2020002', 'Estudiando');
INSERT INTO estudiante VALUES (NEXTVAL ('estudiante_seq'), 4, '2020003', 'Estudiando');



-- Tabla grupos
CREATE TABLE grupos (
  id_grupo int4 NOT NULL DEFAULT NEXTVAL ('grupos_seq'),
  director_id_maestro int4  NOT NULL,
  codigo_grupo varchar(20) NOT NULL,
  jornada_grupo varchar(20) NOT NULL,
  grado_grupo varchar(20) NOT NULL,
  year_grupo varchar(10) NOT NULL,
  PRIMARY KEY (id_grupo)
);

ALTER TABLE grupos
  ADD CONSTRAINT UQ_grupos_codigo
  UNIQUE (codigo_grupo);

-- Insert
INSERT INTO grupos VALUES (NEXTVAL ('grupos_seq'), 1, '20206001', 'Mañana', '6', '2020');


-- Tablagrupos-estudiantes
CREATE TABLE grupos_estudiantes (
  id_grupo_estudiante int4 NOT NULL DEFAULT NEXTVAL ('grupos_estudiantes_seq'),
  id_estudiante int4 NOT NULL,
  id_grupo int4 NOT NULL,
  estado enum_estado_grupo_estudiantes NOT NULL,
  PRIMARY KEY (id_grupo_estudiante)
);

-- Insert
INSERT INTO grupos_estudiantes VALUES (NEXTVAL ('grupos_estudiantes_seq'), 1, 1, 'En curso');
INSERT INTO grupos_estudiantes VALUES (NEXTVAL ('grupos_estudiantes_seq'), 2, 1, 'En curso');
INSERT INTO grupos_estudiantes VALUES (NEXTVAL ('grupos_estudiantes_seq'), 3, 1, 'En curso');



-- Tabla grupos-materias
CREATE TABLE grupos_materias (
  id_grupo_materia int4 NOT NULL DEFAULT NEXTVAL ('grupos_materias_seq'),
  id_materia int4 NOT NULL,
  id_grupo int4 NOT NULL,
  id_maestro int4 NOT NULL,
  PRIMARY KEY (id_grupo_materia)
);

-- Insert
INSERT INTO grupos_materias VALUES (NEXTVAL ('grupos_materias_seq'), 1, 1, 1);
INSERT INTO grupos_materias VALUES (NEXTVAL ('grupos_materias_seq'), 2, 1, 2);
INSERT INTO grupos_materias VALUES (NEXTVAL ('grupos_materias_seq'), 4, 1, 4);
INSERT INTO grupos_materias VALUES (NEXTVAL ('grupos_materias_seq'), 5, 1, 5);
INSERT INTO grupos_materias VALUES (NEXTVAL ('grupos_materias_seq'), 6, 1, 9);
INSERT INTO grupos_materias VALUES (NEXTVAL ('grupos_materias_seq'), 10, 1, 10);



-- Tabla maestros
CREATE TABLE maestros (
  id_maestro int4 NOT NULL DEFAULT NEXTVAL ('maestros_seq'),
  id_persona int4 NOT NULL,
  codigo_maestro varchar(20) NOT NULL,
  PRIMARY KEY (id_maestro)
);

ALTER TABLE maestros
  ADD CONSTRAINT UQ_maestros_codigo
  UNIQUE (codigo_maestro);

-- Insert
INSERT INTO maestros VALUES (NEXTVAL ('maestros_seq'), 5, '2020001');
INSERT INTO maestros VALUES (NEXTVAL ('maestros_seq'), 6, '2020002');
INSERT INTO maestros VALUES (NEXTVAL ('maestros_seq'), 7, '2020003');
INSERT INTO maestros VALUES (NEXTVAL ('maestros_seq'), 8, '2020004');
INSERT INTO maestros VALUES (NEXTVAL ('maestros_seq'), 9, '2020005');
INSERT INTO maestros VALUES (NEXTVAL ('maestros_seq'), 10, '2020006');
INSERT INTO maestros VALUES (NEXTVAL ('maestros_seq'), 11, '2020007');
INSERT INTO maestros VALUES (NEXTVAL ('maestros_seq'), 12, '2020008');
INSERT INTO maestros VALUES (NEXTVAL ('maestros_seq'), 13, '2020009');
INSERT INTO maestros VALUES (NEXTVAL ('maestros_seq'), 14, '2020010');




-- Tabla materias
CREATE TABLE materias (
  id_materia int4 NOT NULL,
  nombre_materia varchar(20) NOT NULL DEFAULT NEXTVAL ('materias_seq'),
  codigo_materia varchar(20) NOT NULL,
  sexto enum_materia_sexto NOT NULL,
  septimo enum_materia_septimo NOT NULL,
  octavo enum_materia_octavo NOT NULL,
  noveno enum_materia_noveno NOT NULL,
  decimo enum_materia_decimo NOT NULL,
  once enum_materia_once NOT NULL,
  PRIMARY KEY (id_materia)
);

ALTER TABLE materias
  ADD CONSTRAINT UQ_materias_codigo
  UNIQUE (codigo_materia);

-- Insert
INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), 'GEOGRAFÍA', 'SOC001', 'S', 'S', 'S', 'S', 'S', 'S');
INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), 'HISTORIA', 'SOC002', 'S', 'S', 'S', 'N', 'N', 'N');
INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), 'FILOSOFÍA', 'SOC003', 'N', 'N', 'N', 'S', 'S', 'S');
INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), 'ESPAÑOL', 'IDM001', 'S', 'S', 'S', 'S', 'S', 'S');
INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), 'INGLÉS', 'IDM003', 'S', 'S', 'S', 'S', 'S', 'S');
INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), 'MATEMÁTICAS', 'MAT001', 'S', 'S', 'N', 'N', 'N', 'N');
INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), 'GEOMETRÍA', 'MAT002', 'N', 'N', 'S', 'S', 'N', 'N');
INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), 'TRIGONOMETRÍA', 'MAT003', 'N', 'N', 'N', 'N', 'S', 'S');
INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), 'FISICA', 'MAT004', 'N', 'N', 'N', 'N', 'S', 'S');
INSERT INTO materias VALUES (NEXTVAL ('materias_seq'), 'ED. FISICA', 'EDF001', 'S', 'S', 'S', 'S', 'S', 'S');





-- Tabla notas
CREATE TABLE notas (
  id_nota int4 NOT NULL DEFAULT NEXTVAL ('notas_seq'),
  id_materia int4 NOT NULL,
  id_grupo int4 NOT NULL,
  id_estudiante int4 NOT NULL,
  nota float8 NOT NULL,
  tipo_nota varchar(20) NOT NULL,
  PRIMARY KEY (id_nota)
);

-- Insert
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 1, 1, 1, 3.7, 'Actitudinal');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 2, 1, 1, 4.5, 'Actitudinal');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 4, 1, 1, 3.4, 'Procedimental');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 5, 1, 1, 5, 'Procedimental');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 6, 1, 1, 2.3, 'Conceptual');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 10, 1, 1, 2.9, 'Conceptual');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 1, 1, 2, 3.5, 'Procedimental');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 2, 1, 2, 2.1, 'Procedimental');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 4, 1, 2, 4.5, 'Actitudinal');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 5, 1, 2, 3.9, 'Actitudinal');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 6, 1, 2, 1.3, 'Procedimental');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 10, 1, 2, 3.2, 'Procedimental');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 1, 1, 3, 4.5, 'Actitudinal');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 2, 1, 3, 3.2, 'Procedimental');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 4, 1, 3, 3.7, 'Conceptual');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 5, 1, 3, 1, 'Conceptual');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 6, 1, 3, 2.7, 'Procedimental');
INSERT INTO notas VALUES (NEXTVAL ('notas_seq'), 10, 1, 3, 4.5, 'Conceptual');




-- Tabla persona
CREATE TABLE persona (
  id_persona int4 NOT NULL DEFAULT NEXTVAL ('persona_seq'),
  nombres varchar(100) NOT NULL,
  apellidos varchar(100) NOT NULL,
  tipo_documento varchar(30) NOT NULL,
  numero_documento varchar(20) NOT NULL,
  sexo enum_genero NOT NULL,
  fecha_nacimiento date NOT NULL,
  direccion_residencial varchar(100) NOT NULL,
  ciudad_residencial varchar(100) NOT NULL,
  telefono_residencial varchar(15) NOT NULL,
  telefono_celular varchar(15) NOT NULL,
  correo_electronico varchar(30) NOT NULL,
  estado_cuenta enum_persona_estado_cuenta NOT NULL,
  foto_perfil text NOT NULL,
  pdf_documento text NOT NULL,
  tipo_usuario enum_persona_tipo_usuario NOT NULL,
  PRIMARY KEY (id_persona)
);

-- Campos unicos en la tabla

ALTER TABLE persona
  ADD CONSTRAINT UQ_persona_documento
  UNIQUE (numero_documento);

ALTER TABLE persona
  ADD CONSTRAINT UQ_persona_correo
  UNIQUE (correo_electronico);


-- Insert
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Miguel Angel', 'Milan Justo', 'Tarjeta de identidad', '6782377707', 'Hombre', '2003-02-25', '19302 McGlynn Mill', 'Medellín', '7726499731', '672090393', 'ifivesom-9896@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 'Estudiante');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Carla', 'Monreal Rodas', 'Tarjeta de identidad', '7516886105', 'Mujer', '2000-04-15', '2762 Beer Mills', 'Medellín', '8674082463', '8322509130', 'zimuviha-9501@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', 'Estudiante');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Ismael', 'Plaza Antunez', 'Cédula', '8676999420', 'Hombre', '1980-08-15', '6166 Adrienne Branch', 'Medellín', '6114480436', '818563363', 'hazohesatt-4725@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', 'Directivo');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Maria Antonia', 'Paris Fonseca', 'Tarjeta de identidad', '7827713443', 'Mujer', '2001-06-07', '0428 Anne Course', 'Medellín', '7514593230', '7586887020', 'azeddehe-3130@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', 'Estudiante');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Fabio', 'Leon Restrepo', 'Cédula', '7341368261', 'Hombre', '1990-02-28', '331 Koss Way Apt. 201', 'Medellín', '7885536423', '6890053925', 'sappyrennimm-3416@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 'Maestro');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Jaime', 'Alberto Giraldo', 'Cédula', '7826319142', 'Hombre', '1985-09-20', '4740 Kreiger Trace Apt. 283', 'Medellín', '7567476522', '8494740409', 'sappyrennimm@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 'Maestro');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Adriana', 'Maria Zuluaga', 'Cédula', '8222387486', 'Mujer', '1982-12-02', '93389 Crona Extension Suite 241', 'Medellín', '6614059051', '8646368817', 'egepuffak-4221@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', 'Maestro');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Fabiola', 'Ramirez', 'Cédula', '8934157706', 'Mujer', '1980-02-20', '757 Wolff Causeway Suite 354', 'Medellín', '7403498447', '6980401935', 'afazossod-2011@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', 'Maestro');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Maria', 'Dolores Smith', 'Cédula', '6222327989', 'Mujer', '1995-08-15', '42874 Kuhlman Greens Apt. 334', 'Medellín', '7452264309', '8314393507', 'pebekaza-8263@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', 'Maestro');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Alberto', 'Cañas', 'Cédula', '6844565792', 'Hombre', '1979-12-02', '63585 Klocko Burg Apt. 368', 'Medellín', '6173991840', '7395966699', 'hocaleppuh-3083@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', 'Maestro');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Alexander', 'Restrepo', 'Cédula', '7425690638', 'Hombre', '1992-02-01', '54814 Oberbrunner Springs Apt. 648', 'Medellín', '7732861419', '8679230225', 'maxiffine-1844@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', 'Maestro');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Aurora', 'Martinez', 'Cédula', '7726464574', 'Mujer', '1985-10-12', '2705 Jodie Fields Suite 253', 'Medellín', '8395164326', '6293154604', 'tattadegov-4600@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', 'Maestro');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Guillermo Alberto ', 'Marín', 'Cédula', '8219354794', 'Hombre', '1980-08-15', '58197 Conn Junctions Apt. 316', 'Medellín', '8223499382', '8860139891', 'kehehalemo-9833@yopmail.com', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', 'Maestro');
INSERT INTO persona VALUES (NEXTVAL ('persona_seq'), 'Fabio', 'Ramirez Castaño', 'Cédula', '8516745348', 'Hombre', '1994-12-20', '597 Reynolds Junction Apt. 080', 'Medellín', '8832511255', '8463660588', 'philopatr@rtfn.site', 'Activa', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 'Maestro');



-- Llaves foraneas coneccion con otras tablas


-- Constraint consolidados
ALTER TABLE consolidados ADD CONSTRAINT fk_id_estudiante_consolidados_estudiante FOREIGN KEY (id_estudiante) REFERENCES estudiante (id_estudiante) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_id_estudiante_consolidados_estudiante ON consolidados using btree (id_estudiante);

-- Constraint directivos
ALTER TABLE directivos ADD CONSTRAINT fk_id_persona_directivos_persona FOREIGN KEY (id_persona) REFERENCES persona (id_persona) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_id_persona_directivos_persona ON directivos using btree (id_persona);

-- Constraint estudiante
ALTER TABLE estudiante ADD CONSTRAINT fk_id_persona_estudiante_persona FOREIGN KEY (id_persona) REFERENCES persona (id_persona) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_id_persona_estudiante_persona ON estudiante using btree (id_persona);

-- Constraint grupos
ALTER TABLE grupos ADD CONSTRAINT fk_director_id_maestro_grupos_maestros FOREIGN KEY (director_id_maestro) REFERENCES maestros (id_maestro) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_director_id_maestro_grupos_maestros ON grupos using btree (director_id_maestro);

-- Constraint grupos-estudiantes
ALTER TABLE grupos_estudiantes
  ADD CONSTRAINT fk_id_estudiante_grupos_estudiantes_estudiante FOREIGN KEY (id_estudiante) REFERENCES estudiante (id_estudiante) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT fk_id_grupo_grupos_estudiantes_grupos FOREIGN KEY (id_grupo) REFERENCES grupos (id_grupo) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_id_estudiante_grupos_estudiantes_estudiante ON grupos_estudiantes using btree (id_estudiante);
CREATE INDEX fk_id_grupo_grupos_estudiantes_grupos ON grupos_estudiantes using btree (id_grupo);

-- Constraint grupos-materias
ALTER TABLE grupos_materias
  ADD CONSTRAINT fk_id_grupos_grupos_materias_grupos FOREIGN KEY (id_grupo) REFERENCES grupos (id_grupo) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT fk_id_maestro_grupos_materias_maestros FOREIGN KEY (id_maestro) REFERENCES maestros (id_maestro) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT fk_id_materia_grupos_materias_materias FOREIGN KEY (id_materia) REFERENCES materias (id_materia) ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE INDEX fk_id_grupos_grupos_materias_grupos ON grupos_materias using btree (id_grupo);
CREATE INDEX fk_id_maestro_grupos_materias_maestros ON grupos_materias using btree (id_maestro);
CREATE INDEX fk_id_materia_grupos_materias_materias ON grupos_materias using btree (id_materia);



-- Constraint maestros
ALTER TABLE maestros ADD CONSTRAINT fk_id_persona_maestros_persona FOREIGN KEY (id_persona) REFERENCES persona (id_persona) ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE INDEX fk_id_persona_maestros_persona ON maestros using btree (id_persona);

-- Constraint notas
ALTER TABLE notas
  ADD CONSTRAINT fk_id_estudiante_notas_estudiante FOREIGN KEY (id_estudiante) REFERENCES estudiante (id_estudiante) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT fk_id_grupo_notas_grupos FOREIGN KEY (id_grupo) REFERENCES grupos (id_grupo) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT fk_id_materia_notas_materias FOREIGN KEY (id_materia) REFERENCES materias (id_materia) ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE INDEX fk_id_estudiante_notas_estudiante ON notas using btree (id_estudiante);
CREATE INDEX fk_id_grupo_notas_grupos ON notas using btree (id_grupo);
CREATE INDEX fk_id_materia_notas_materias ON notas using btree (id_materia);