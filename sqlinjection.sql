-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 09, 2019 at 06:20 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sqlinjection`
--

-- --------------------------------------------------------

--
-- Table structure for table `owid_covid_data`
--

DROP TABLE IF EXISTS `owid_covid_data`;
CREATE TABLE IF NOT EXISTS `owid_covid_data` (
  `iso_code` varchar(255) CHARACTER SET latin1 NOT NULL,
  `continent` varchar(255) CHARACTER SET latin1 NOT NULL,
  `location` varchar(255) CHARACTER SET latin1 NOT NULL,
  `date` varchar(16) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`date`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `owid_covid_data` (`iso_code`, `continent`, `location`, `date`) VALUES
('ASG', 'Asia', 'Afghanistan', '24-02-2020'),
('ASG', 'Asia', 'Afghanistan', '25-02-2020'),
('ASG', 'Asia', 'Afghanistan', '26-02-2020'),
('ASG', 'Asia', 'Afghanistan', '27-02-2020');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
