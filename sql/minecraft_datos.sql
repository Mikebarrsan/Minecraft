-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 12-03-2024 a las 17:43:58
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Minecraft`
--

--
-- Volcado de datos para la tabla `asigna`
--

INSERT INTO `asigna` (`username`, `idrol`, `created_at`) VALUES
('Dadu37', 1, '2024-03-12 16:20:41'),
('rommel49', 2, '2024-03-12 16:20:41');

--
-- Volcado de datos para la tabla `construccion`
--

INSERT INTO `construccion` (`id`, `nombre`, `imagen`, `username`, `created_at`) VALUES
(1, 'Casa', 'https://i.ytimg.com/vi/-BzfmgPgl5c/maxresdefault.jpg', 'rommel49', '2024-03-07 17:18:18'),
(2, 'Casa con alberca', 'https://i.pinimg.com/564x/46/b7/17/46b717db981c20b0e750fb0dcdf88443.jpg', 'rommel49', '2024-03-08 16:22:49'),
(3, 'Edificio', 'https://i.pinimg.com/564x/3c/11/7e/3c117eca45fb357af03f68230901a221.jpg', 'rommel49', '2024-03-11 15:37:54');

--
-- Volcado de datos para la tabla `permiso`
--

INSERT INTO `permiso` (`id`, `funcion`, `created_at`) VALUES
(1, 'construir', '2024-03-12 16:19:27'),
(2, 'ver', '2024-03-12 16:19:27');

--
-- Volcado de datos para la tabla `posee`
--

INSERT INTO `posee` (`idrol`, `idpermiso`, `created_at`) VALUES
(1, 1, '2024-03-12 16:21:01'),
(1, 2, '2024-03-12 16:21:01'),
(2, 2, '2024-03-12 16:21:06');

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `nombre`, `created_at`) VALUES
(1, 'constructor', '2024-03-12 16:19:05'),
(2, 'visualizador', '2024-03-12 16:19:05');

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`username`, `password`, `created_at`) VALUES
('Alexys', 'aguauwu3', '2024-03-11 16:27:06'),
('Dadu37', 'contra', '2024-03-11 16:48:29'),
('rommel49', 'rommel49', '2024-03-07 17:10:24'),
('ultramikebarsa', '$2a$12$5FPK0PMYRDNBHMz9A94RK.7s8MJyDff7BO4Evz6cFCmxdb7o5PXzu', '2024-03-11 16:56:10');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
