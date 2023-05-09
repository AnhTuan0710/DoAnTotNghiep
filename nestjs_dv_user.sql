-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nestjs
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dv_user`
--

DROP TABLE IF EXISTS `dv_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dv_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `address` varchar(500) NOT NULL DEFAULT '',
  `phone_no` varchar(12) NOT NULL DEFAULT '',
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `active_flg` int NOT NULL DEFAULT '1',
  `status` int NOT NULL DEFAULT '1',
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dv_user`
--

LOCK TABLES `dv_user` WRITE;
/*!40000 ALTER TABLE `dv_user` DISABLE KEYS */;
INSERT INTO `dv_user` VALUES (1,'Ninh Văn Tuấn','ninhvantuan082000@gmail.com','322 My Dinh,Nam Tu Liem,  Ha Noi','0857847685','2023-04-23 10:44:41','2023-04-23 10:44:41',1,1,'123456'),(7,'Anh Tuan','ninhvantuan072000@gmail.com','','0857847685','2023-04-23 10:44:41','2023-04-23 10:44:41',1,1,'123123'),(8,'Ninh Văn Tuấn','ninhvantuan062000@gmail.com','322 My Dinh,Nam Tu Liem,  Ha Noi','0987654321','2023-04-23 10:44:41','2023-04-27 20:04:11',1,1,'$2b$10$YdlP5IPo.WnonYL5K3dyAuKN/iO2KukSlF/elk9U7D2GXNDC7mO4C'),(9,'Hoang Quốc Việt','anhtuanbarca@gmail.com','Yen Loc - Y Yen - Nam Dinh','','2023-04-23 10:44:41','2023-04-23 10:44:41',1,1,'$2b$10$gESE3HSHIXtm4DH2FSAEUekxjXq291VIgEdEMDXaccUtNKueMrryW'),(10,'Sinh vien ','ninhvantuan102000@gmail.com','Yên Lộc Ý Yên Nam Định','0989174718','2023-05-03 18:36:55','2023-05-03 19:21:46',1,1,'$2b$10$irC9f.7gMZkS/QOmpsNhIeDTtboCwOhAZ2AAgIHotTFgmklVntrzq'),(11,'Khánh','ninhvantuan092000@gmail.com','Yên Lộc Ý Yên Nam Định','0857847685','2023-05-03 21:47:32','2023-05-08 13:17:44',1,1,'$2b$10$ebeHbmXtKHOSp3LWeIDlD.UnnsBhg8fPg6Cj.0Q8c1C.HGmL50G7S');
/*!40000 ALTER TABLE `dv_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-09 12:34:40
