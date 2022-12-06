CREATE DATABASE  IF NOT EXISTS `latech` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `latech`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: latech
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `idMarcas` int NOT NULL AUTO_INCREMENT,
  `Marca` varchar(45) NOT NULL,
  PRIMARY KEY (`idMarcas`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Samsung'),(2,'apple'),(3,'motorola'),(4,'iphone'),(5,'xiaomi'),(6,'lg'),(7,'dell'),(8,'asus'),(9,'philips'),(10,'lenovo'),(11,'acer'),(13,'hp'),(14,'intelbras'),(15,'sony'),(16,'toshiba'),(17,'acer'),(18,'canon'),(19,'epson'),(20,'fujitsu'),(21,'positivo'),(22,'panasonic');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `idCategorias` int NOT NULL AUTO_INCREMENT,
  `Categoria` varchar(45) NOT NULL,
  PRIMARY KEY (`idCategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Notebook'),(2,'Desktop'),(3,'Celulares'),(4,'Acessorios');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `idImagens` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(45) NOT NULL,
  `Data_Upload` varchar(45) NOT NULL,
  `Imagem` varchar(100) DEFAULT NULL,
  `Produtos_idProdutos` int NOT NULL,
  `Marcas_idMarcas` int NOT NULL,
  PRIMARY KEY (`idImagens`),
  KEY `fk_Imagens_Produtos1_idx` (`Produtos_idProdutos`),
  KEY `fk_Imagens_Marcas1_idx` (`Marcas_idMarcas`),
  CONSTRAINT `fk_Imagens_Marcas1` FOREIGN KEY (`Marcas_idMarcas`) REFERENCES `brands` (`idMarcas`),
  CONSTRAINT `fk_Imagens_Produtos1` FOREIGN KEY (`Produtos_idProdutos`) REFERENCES `products` (`idProdutos`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'notebook ideapad 3i intel','11/11/2022',NULL,1,8);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `idProdutos` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(100) NOT NULL,
  `Codigo` varchar(45) DEFAULT NULL,
  `Preco` decimal(10,2) DEFAULT NULL,
  `Categorias_id` int NOT NULL,
  `Marcas_id` int NOT NULL,
  PRIMARY KEY (`idProdutos`),
  KEY `fk_Produtos_Categorias1_idx` (`Categorias_id`),
  KEY `fk_Produtos_Marcas1_idx` (`Marcas_id`),
  CONSTRAINT `fk_products_brands1` FOREIGN KEY (`Marcas_id`) REFERENCES `brands` (`idMarcas`),
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`Categorias_id`) REFERENCES `categories` (`idCategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'notebook ideapad 3i intel 128gb tela 15,6\" windows 11',NULL,999.00,1,8),(2,'notebook np550xda i3-1115g4 4gb intel 2568gb tela 15,6\" windows 11',NULL,1999.00,1,1),(3,'notebook intel celeron-6305 4gb 2568gb tela 15,6\" windows 11',NULL,2999.00,1,1),(4,'notebook aspire intel celeron-4020 4gb 128gb tela 15,6\" windows 11 prata',NULL,1599.00,1,11),(5,'notebook ultrafino ideapad 3i 8gb 256gb tela 15,6\" windows 11 prata',NULL,1599.00,1,10),(6,'notebook intel core i5-1035 8gb 256gb ssd linux 15,6\" cinza',NULL,4599.00,1,8),(7,'notebook intel core i7-1165 8gb 256gb ssd linux 15,6\" preto',NULL,4599.00,1,8),(8,'computador 3020 core i5 4 geração 8gb ssd 240gb ',NULL,699.00,2,7),(9,'pc desktop core i5 2 geração 8gb ssd 120gb ',NULL,699.00,2,7),(10,'computador compac intel core  8gb hd 1tb win 10 ',NULL,1499.00,2,13),(11,'computador thinkcentreneo 50s displayport i3  8gb 256gb win 11 ',NULL,3499.00,2,10),(12,'Galaxy A03 64GB 4GB RAM Octa Core 48MP + 2MP 5MP Tela Infinita de 6.5\" Dual Chip Android - Preto',NULL,3499.00,3,1),(13,'Galaxy A03 Core 32GB 4G Wi-Fi Tela 6,5\' Dual Chip 2GB RAM Câmera 8MP + Selfie 5MP',NULL,3499.00,3,1),(14,'Galaxy S20 FE 5G 128GB 6.5\' DualChip 6GB RAM Câmera Tripla + Selfie 32MP - Azul',NULL,3499.00,3,1),(15,'Moto E20 32GB 4G Wi-Fi Tela 6.5\' Dual Chip 2GB RAM Câmera Dupla + Selfie 5MP - Cinza',NULL,799.00,3,3),(16,'Moto G22 128GB 4G Wi-Fi Tela 6.5\' Dual Chip 4GB RAM Câmera Quádrupla + Selfie 16MP - Verde',NULL,1299.00,3,3),(17,'Twist 4 64GB Dual Chip Android 10 Tela 5.5\" Quad-Core 1,3 GHz 3G 8MP - Vermelho Rubber',NULL,399.00,3,21),(18,'Twist 3 Pro S533 Tela 5.7 64GB 1GBRAM Android',NULL,999.00,3,21),(19,'poco X4 Pro 256GB 5G Tela 6,67\' 8GB ram Câmera Tripla + Selfie 16MP Azul',NULL,2799.00,3,5),(20,'Smartphone Redmi Note 11 6.43 Octa Core 128GB 4GB Câmera Quádrupla',NULL,2799.00,3,5),(21,'iPhone 11 Apple (64GB) Branco Tela 6,1\" 4G Câmera 12MP iOS',NULL,3599.00,3,4),(22,'iPhone 12 Apple 128GB iOS 5G Wi-Fi Tela 6.1\' Câmera 12MP - PRODUCT(RED)',NULL,4999.00,3,4),(23,'Smartphone Multilaser e, 32GB, 5, Android 8.1, Câmera 5MP, Dourado',NULL,399.00,4,4),(24,'Fone de Ouvido Bluetooth 5.0 Sem Fio E6S Display Digital',NULL,399.00,4,1),(25,'Bateria Portátil Pineng Carregador Power Bank 10000mah Pn-951 Slim',NULL,399.00,4,21),(26,'Fone de Ouvido com Redução de Ruído Orelha De Gato Verde',NULL,399.00,4,9),(27,'Bateria Externa Portátil Power Bank Para Celular, Tablet, Caixa de Som, iPhone, Motorola, Samsung An',NULL,399.00,4,15),(28,'Carregador Portátil Xiaomi Mi 18W Fast Charge Power Bank 3 Turbo 20000 mAh 2 Saídas USB + Tipo C',NULL,399.00,4,5),(29,'Fone de ouvido Headphone Philips Bluetooth 15h TAH1205BK/00',NULL,399.00,4,9);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_has_purchases`
--

DROP TABLE IF EXISTS `products_has_purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_has_purchases` (
  `Produtos_idProdutos` int NOT NULL,
  `Pedidos_idPedidos` int NOT NULL,
  PRIMARY KEY (`Produtos_idProdutos`,`Pedidos_idPedidos`),
  KEY `fk_Produtos_has_Pedidos_Pedidos1_idx` (`Pedidos_idPedidos`),
  KEY `fk_Produtos_has_Pedidos_Produtos_idx` (`Produtos_idProdutos`),
  CONSTRAINT `fk_Produtos_has_Pedidos_Pedidos1` FOREIGN KEY (`Pedidos_idPedidos`) REFERENCES `purchases` (`idPedidos`),
  CONSTRAINT `fk_Produtos_has_Pedidos_Produtos` FOREIGN KEY (`Produtos_idProdutos`) REFERENCES `products` (`idProdutos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_has_purchases`
--

LOCK TABLES `products_has_purchases` WRITE;
/*!40000 ALTER TABLE `products_has_purchases` DISABLE KEYS */;
INSERT INTO `products_has_purchases` VALUES (1,1);
/*!40000 ALTER TABLE `products_has_purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchases`
--

DROP TABLE IF EXISTS `purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchases` (
  `idPedidos` int NOT NULL AUTO_INCREMENT,
  `Data_pedido` varchar(45) NOT NULL,
  `Total` decimal(10,2) NOT NULL,
  `Clientes_email` varchar(45) NOT NULL,
  `Forma_de_Pagamento` varchar(45) NOT NULL,
  `Endereço_de_Entrega` varchar(100) NOT NULL,
  PRIMARY KEY (`idPedidos`),
  KEY `fk_Purchases_Users_idx` (`Clientes_email`) /*!80000 INVISIBLE */,
  CONSTRAINT `fk_Purch_Users1` FOREIGN KEY (`Clientes_email`) REFERENCES `users` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchases`
--

LOCK TABLES `purchases` WRITE;
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
INSERT INTO `purchases` VALUES (1,'11/11/2020',999.00,'ana@email.com','Pix','Rua Itapuã, n1, Bairro Itapuã, Salvador, Bahia');
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idClientes` int NOT NULL,
  `Nome` varchar(45) NOT NULL,
  `Sobrenome` varchar(45) DEFAULT NULL,
  `Email` varchar(45) NOT NULL,
  `Telefone` varchar(45) DEFAULT NULL,
  `Endereco` varchar(45) DEFAULT NULL,
  `Cidade` varchar(45) DEFAULT NULL,
  `Estado` varchar(45) DEFAULT NULL,
  `Senha` varchar(12) NOT NULL,
  `Avatar` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ana','Santos Silva','ana@email.com','7198888888','Rua Itapuã, n1, Bairro Itapuã','Salvador','Bahia','123456',NULL),(2,'Lucas','Lima Paz','lucas@email.com','71991919191','Rua do bispo, n4, Bairro Itapuã','Salvador','Bahia','654321',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-06  0:22:51
