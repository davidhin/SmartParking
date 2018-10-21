-- MySQL dump 10.13  Distrib 5.7.23, for Linux (i686)
--
-- Host: 127.0.0.1    Database: SPS
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `SPS`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `SPS` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `SPS`;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts` (
  `account_id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,'Jimmy Bill','jimmy@email.com','password'),(2,'Aquert Fanto','myemail@email.com','aquert123'),(3,'Bonty Uticl','fail@email.com','numbers'),(4,'Pillo Texta','888@email.com','aquert123'),(5,'Satin Fabric','7ubmil@email.com','password123'),(6,'test','test','test');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parking_spaces`
--

DROP TABLE IF EXISTS `parking_spaces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parking_spaces` (
  `parking_id` int(4) NOT NULL AUTO_INCREMENT,
  `account_id` int(4) DEFAULT NULL,
  `pos_lat` decimal(10,8) DEFAULT NULL,
  `pos_lng` decimal(11,8) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `address` text,
  PRIMARY KEY (`parking_id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `parking_spaces_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parking_spaces`
--

LOCK TABLES `parking_spaces` WRITE;
/*!40000 ALTER TABLE `parking_spaces` DISABLE KEYS */;
INSERT INTO `parking_spaces` VALUES (1,NULL,-34.92149890,138.60074560,'Parallel',3.3,'South Australia, Adelaide, Jimmy St., CBD'),(2,NULL,-34.92149890,138.60084560,'Right Angle',2.15,'South Australia, Adelaide, Jimmy St., CBD'),(3,NULL,-34.92149890,138.60094560,'Perpendicular',1.2,'South Australia, Adelaide, Jimmy St., CBD'),(4,NULL,-34.92149890,138.60104560,'Right Angle',5.23,'South Australia, Adelaide, Jimmy St., CBD'),(5,NULL,-34.92249890,138.60064560,'Perpendicular',7.12,'South Australia, Adelaide, Johnny St., CBD'),(6,NULL,-34.92249890,138.60074560,'Right Angle',0.12,'South Australia, Adelaide, Johnny St., CBD'),(7,NULL,-34.92249890,138.60084560,'Parallel',1.9,'South Australia, Adelaide, Johnny St., CBD'),(8,NULL,-34.92249890,138.60094560,'Perpendicular',4.3,'South Australia, Adelaide, Johnny St., CBD'),(9,NULL,-34.93249890,138.60094560,'Right Angle',9,'South Australia, Adelaide, Agriculture Dr., CBD'),(10,NULL,-34.92149890,138.62094560,'Parallel',2.1,'South Australia, Adelaide, Crime St., CBD'),(11,NULL,-34.91249890,138.60294560,'Right Angle',3.3,'South Australia, Adelaide, Undo Cr., CBD'),(12,NULL,-34.92249890,138.60694560,'Right Angle',4.7,'South Australia, Adelaide, Candy St., CBD'),(13,NULL,-34.92449890,138.61094560,'Perpendicular',5.8,'South Australia, Adelaide, Fake Av., CBD'),(14,NULL,-34.92249890,138.60004560,'Perpendicular',5.8,'South Australia, Adelaide, Pop Av., CBD');
/*!40000 ALTER TABLE `parking_spaces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `account_id` int(4) DEFAULT NULL,
  `parking_id` int(4) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `stars` int(1) DEFAULT NULL,
  `review` text,
  KEY `account_id` (`account_id`),
  KEY `parking_id` (`parking_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`parking_id`) REFERENCES `parking_spaces` (`parking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,'Jimmy Bill',4,'almost loved it'),(1,9,'Jimmy Bill',4,'almost loved it'),(2,9,'Aquert Fanto',3,'Not bad, I might partake in the use of this parking space in the future if I do so choose to do. I would suggest however, that the parking space be widened by 30cm to accomodate for my modified sidecar.'),(3,9,'Bonty Uticl',4,'This parking location blah blah'),(4,2,'Pillo Texta',4,'almost loved it'),(5,3,'Satin Fabric',4,'almost loved it'),(3,3,'Bonty Uticl',4,'almost loved it'),(1,4,'Jimmy Bill',4,'almost loved it'),(2,5,'Aquert Fanto',4,'almost loved it');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session` (
  `date` date DEFAULT NULL,
  `startTime` time DEFAULT NULL,
  `endTime` time DEFAULT NULL,
  `account_id` int(4) DEFAULT NULL,
  `parking_id` int(4) DEFAULT NULL,
  `cost` float DEFAULT NULL,
  KEY `account_id` (`account_id`),
  KEY `parking_id` (`parking_id`),
  CONSTRAINT `session_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`),
  CONSTRAINT `session_ibfk_2` FOREIGN KEY (`parking_id`) REFERENCES `parking_spaces` (`parking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES
('2018-09-23','12:12:00','12:14:00',6,1,5.5),
('2018-09-24','01:13:00','03:14:00',6,1,2.6),
('2018-09-25','12:12:00','12:14:00',6,1,1.0),
('2018-09-26','02:12:00','08:14:00',6,1,5.6),
('2018-09-27','12:12:00','12:14:00',2,1,5.5),
('2018-09-28','12:12:00','12:14:00',2,1,5.5),
('2018-09-29','12:12:00','12:14:00',3,1,5.5),
('2018-09-23','12:12:00','12:14:00',4,1,5.5),
('2018-09-23','12:12:00','12:14:00',5,1,5.5);
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-21 15:30:07
