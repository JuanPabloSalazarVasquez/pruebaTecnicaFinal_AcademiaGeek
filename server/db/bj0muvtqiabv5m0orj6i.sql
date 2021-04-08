-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bj0muvtqiabv5m0orj6i-mysql.services.clever-cloud.com:3306
-- Generation Time: Apr 08, 2021 at 01:58 PM
-- Server version: 8.0.22-13
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bj0muvtqiabv5m0orj6i`
--
CREATE DATABASE IF NOT EXISTS `bj0muvtqiabv5m0orj6i` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bj0muvtqiabv5m0orj6i`;

-- --------------------------------------------------------

--
-- Table structure for table `articulos`
--

DROP TABLE IF EXISTS `articulos`;
CREATE TABLE `articulos` (
  `id_articulo` varchar(10) CHARACTER SET utf8 NOT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `precio` varchar(20) CHARACTER SET utf8 NOT NULL,
  `existencias` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `articulos`
--

INSERT INTO `articulos` (`id_articulo`, `descripcion`, `precio`, `existencias`) VALUES
('0', 'Foam', '25000', '523'),
('1', 'Carbón Activado WIKI', '18000', '300'),
('10', 'Mantequilla Corporal (naranja)', '25000', '700'),
('2', 'DepilYA', '10000', '1000'),
('3', 'Mantequilla Corporal (durazno)', '25000', '1000'),
('4', 'Bronceador', '40000', '250'),
('5', 'Antiestrias', '35000', '300'),
('6', 'Despigmentante Intimo', '40000', '500'),
('7', 'Despigmentante Facial', '35000', '365'),
('8', 'Dermatónico', '40000', '500'),
('9', 'Mantequilla Corporal (frutos rojos)', '25000', '2000');

-- --------------------------------------------------------

--
-- Table structure for table `articulosXorden`
--

DROP TABLE IF EXISTS `articulosXorden`;
CREATE TABLE `articulosXorden` (
  `numero_orden` int NOT NULL,
  `id_articulo` varchar(10) NOT NULL,
  `cantidad` varchar(20) NOT NULL,
  `subtotal_articulo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ordenes`
--

DROP TABLE IF EXISTS `ordenes`;
CREATE TABLE `ordenes` (
  `numero_orden` int NOT NULL,
  `nombre_usuario` varchar(80) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fecha_orden` varchar(10) CHARACTER SET utf8 NOT NULL,
  `subtotal_orden` varchar(20) CHARACTER SET utf8 NOT NULL,
  `total_iva` varchar(20) CHARACTER SET utf8 NOT NULL,
  `total_orden` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=COMPACT;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id_articulo`);

--
-- Indexes for table `articulosXorden`
--
ALTER TABLE `articulosXorden`
  ADD PRIMARY KEY (`numero_orden`,`id_articulo`);

--
-- Indexes for table `ordenes`
--
ALTER TABLE `ordenes`
  ADD PRIMARY KEY (`numero_orden`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `numero_orden` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
