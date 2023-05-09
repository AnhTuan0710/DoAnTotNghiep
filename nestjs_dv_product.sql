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
-- Table structure for table `dv_product`
--

DROP TABLE IF EXISTS `dv_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dv_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `categoryId` int DEFAULT NULL,
  `price` int NOT NULL,
  `image` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `active_flg` int NOT NULL DEFAULT '1',
  `status` int NOT NULL DEFAULT '1',
  `unit` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_19eca97806ad23fb2ae11a46de8` (`categoryId`),
  CONSTRAINT `FK_19eca97806ad23fb2ae11a46de8` FOREIGN KEY (`categoryId`) REFERENCES `dv_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dv_product`
--

LOCK TABLES `dv_product` WRITE;
/*!40000 ALTER TABLE `dv_product` DISABLE KEYS */;
INSERT INTO `dv_product` VALUES (1,'Kìm cắt sát 6',3,20000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNj7QEuqTsY3-_SOi8rBERxnUPRJxPp2usw&usqp=CAU','8mm','100g','Sản phẩm thuộc hãng Kapusi',NULL,NULL,1,0,'Cái'),(2,'Búa tay ngắn',3,15000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_QcC9KxOgi4eqrRQw29-vAZMzacX8swsdQ&usqp=CAU','8mm','100g','Sản phẩm thuộc hãng Kapusi',NULL,NULL,1,1,'Cái'),(3,'Búa cán dài',1,20000,'https://e7.pngegg.com/pngimages/512/412/png-clipart-hammer-hammer.png','8mm','100g','Sản phẩm thuộc hãng Kapusi',NULL,NULL,1,0,'Hôp'),(4,'Búa đóng đinh',1,20000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HkLgwhjCAkFtkM1Wlpgy4bYlNhqnOjWvCw&usqp=CAU','8mm','100g','Sản phẩm thuộc hãng Kapusi',NULL,NULL,1,1,'Chiếc'),(10,'Kìm cắt',1,20000,'https://vattudiennuoc.net/wp-content/uploads/2020/03/k%C3%ACm-c%E1%BA%AFt-licota-t%E1%BA%A1i-qu%E1%BA%ADn-12.jpg','8mm','100g','Sản phẩm thuộc hãng Kapusi',NULL,NULL,1,1,'Cai'),(11,'Bua to',1,20000,'https://congcutot.vn/uploads/store/good/01/e9/bua-can-nhua-kapusi.jpg','20cm','100g','Sản phẩm thuộc hãng Kapusi',NULL,NULL,1,0,'Cái'),(12,'Bua to',3,20000,'https://cf.shopee.vn/file/0b0cde6d0ae189269f4ab9916576f5b3','20cm','100g','Sản phẩm thuộc hãng Kapusi',NULL,NULL,1,1,'Cái'),(13,'Kéo cắt tay',4,75000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgsEYWQbaTs_f4AI_jE5FWJUHLAnRcKQP1A&usqp=CAU','20000','200g','Mô tả hình ảnh',NULL,NULL,1,1,'Cái'),(14,'Tovit can dai',5,10000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9L3nTq9S9OMqeXG4Km97YeSLwExTrtiDBQ&usqp=CAU','20cm','100g','mota ',NULL,NULL,1,1,'Cai'),(15,'nash',6,2000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgsEYWQbaTs_f4AI_jE5FWJUHLAnRcKQP1A&usqp=CAU','ams','asasa','aasas',NULL,NULL,0,0,'sdsdsd'),(16,'Máy khoan cầm tay',7,750000,'https://dungcucamtaymakita.com/Uploads/images/M%C3%A1y%20khoan/M%C3%A1y%20khoan%20d%C3%B9ng%20pin/khoan-pin-gia-re-tot-nhat-2.jpg','30cm','3kg','Máy khoan cầm tay mini Nhật',NULL,NULL,1,1,'Cái'),(17,'Búa tạ',1,200000,'https://thegioidonghe.com.vn/media/catalogue/20200502205440-7.jpg','30cm','5kg','Búa tạ cán nhựa',NULL,NULL,1,1,'Cái'),(18,'Búa sửng dê',1,35000,'https://product.hstatic.net/1000365242/product/4_0e4420b9935e469f89e89f9cd4226e65_master.png','20cm','1kg','Búa Sừng Dê Tolsen 25028 – mochaiphat',NULL,NULL,1,1,'Cái'),(19,'Kìm mỏ nhọn asaki',3,35000,'https://www.ketnoitieudung.vn/data/bt1/kim-nhon-tolsen-10006-1512349487.jpg','6 \'\'','300g','Kìm nhọn Tolsen 10006 | Kìm nhọn',NULL,NULL,1,1,'Cái'),(20,'Kìm cắt đa năng',3,30000,'https://www.sumobonsai.com/files/sanpham/697/1/jpg/kem-cat-da-nang-shell-nhat-ban-160-mm.jpg','20mm','100g','Kềm Cắt Đa Năng Shell Nhật Bản 160 mm',NULL,NULL,1,1,'Cái'),(21,'Kéo cắt nội địa nhật',4,75000,'https://salt.tikicdn.com/cache/w1200/ts/product/b3/c6/fd/af60ab4fbe6c158b816bfa75fd376f1a.jpg','10 \'\'','300g','Kéo Nhật Nội Địa SK5 Siêu Sắc, Kéo Nhà Bếp, Kéo Cắt Gà, Cắt Vịt, Cắt Thịt Các Loại',NULL,NULL,1,1,'Cái'),(22,'Kéo mở bia',4,45000,'https://cdn.tgdd.vn/2021/11/CookDish/4-cong-dung-cua-cai-keo-ma-ban-chua-biet-avt-1200x676.jpg','10m','300g','4 công dụng bất ngờ của cái kéo dùng để khui bia, kẹp cua, làm cá, cắt rau',NULL,NULL,1,1,'Chiếc'),(23,'Kéo cắt cành',4,50000,'https://thietbiphattien.com/uploads/source/san-pham/keo-cat-canh-tia-cay-kapusi-k-8618-cao-cap-dai-200mm-nhat-ban/keo-cat-canh-kapusi-k-8618-cao-cap-thiet-bi-phat-tien-(1).jpg','20mm','100g','kéo cắt cành tỉa cây kapusi k-8618 cao cấp dài 200mm nhật bản',NULL,NULL,1,1,'Chiếc'),(24,'Kéo cắt giấy',4,15000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OHZpAhoCm91tjhBbXFZpvayI40bd-IReClrwOBagfiCYub3_OLTfBxA2qRbnaxKMHfA&usqp=CAU','10mm','50g','Kéo cắt giấy học sinh',NULL,NULL,1,1,'Cái'),(25,'Kéo cắt cành',4,35000,'https://nongnghiepthuanthien.vn/wp-content/uploads/2021/09/keo-cat-canh-15-107-wao.jpg','10mm','100g','Kéo cắt cành nhập khẩu Đức Original LOWE 15.107',NULL,NULL,1,1,'Cái'),(26,'Tovit tools đen',5,25000,'https://lh3.googleusercontent.com/GpBZbSiKjpSAQgsrNX1NyTLQbVkucfHg7BGL1MIk6CU8OH2G5DuLMCAO66m9WzKTiuXTF0fDkejNPoU7FhkRz8ECHP80xSajT1Dy4ccxIa1pUl1e_8O8U6qNas7LjC_yjXPrrBKB8Q=w2400','10m','100g','Top 8 thương hiệu tô vít tốt nhất và đáng mua nhất hiện nay | HTGoods',NULL,NULL,1,1,'Cái'),(27,'Tovit 2 canh',5,34000,'https://cuahangdungcu.vn/resources/2019/09/12/tua-vit-century-nho_2_.jpg','20m','300g','Tô vít 2 cạnh đa năng Century 5x150mm',NULL,NULL,1,1,'Chiếc'),(28,'Tovit viha',5,20000,'https://bizweb.dktcdn.net/thumb/1024x1024/100/212/637/products/42991-wiha.jpg?v=1615254906753','20m','100g','Bộ tô vít Wiha -# 42991 | HTGoods',NULL,NULL,1,1,'Cái'),(29,'Thước 5m kapusi',6,12000,'https://product.hstatic.net/200000567559/product/upload_0f9f399bb65049aeb9e6767a5a725264.jpg','5m','100g','Thước 5m kapusi ',NULL,NULL,1,1,'Cái'),(30,'Thước 7,5m kapusi',6,15000,'https://kapusitools.vn/wp-content/uploads/2021/09/1e7e77c4c1b6d3aa48baf7de220d9ec2.jpeg\n','20m','100g','Thước Rút Cuộn Lỗ Ban 5m – 7m Nhật Bản Kapusi 2 Mặt Làm Từ Hợp Kim Nhôm Cao Cấp, Không Bị Gãy - KIM KHÍ STAKA',NULL,NULL,1,1,'Cái'),(31,'Máy khoan bosch',7,1500000,'https://diyhomedepot.vn/Uploads/images/image/BOSCH/may-khoan-gbh-8-45dv.jpg','59cm','2kg','Máy khoan bê tông công suất lớn siêu giảm rung Bosch GBH 8-45DV',NULL,NULL,1,1,'Hộp'),(32,'Máy khoan 10',7,2000000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MB3ry99gDtbCWN-6MqCQSmkmgCRNDDtv8g&usqp=CAU','50cm','5kg','Máy khoan cầm tay cho sản phẩm',NULL,NULL,1,1,'Chiếc');
/*!40000 ALTER TABLE `dv_product` ENABLE KEYS */;
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
