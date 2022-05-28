/*
SQLyog Trial v13.1.8 (64 bit)
MySQL - 10.4.20-MariaDB : Database - nft_market
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`nft_market` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `nft_market`;

/*Table structure for table `collection` */

DROP TABLE IF EXISTS `collection`;

CREATE TABLE `collection` (
  `collection_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

/*Data for the table `collection` */

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

/*Data for the table `migrations` */

/*Table structure for table `nft` */

DROP TABLE IF EXISTS `nft`;

CREATE TABLE `nft` (
  `Blockchain` varchar(255) NOT NULL,
  `Token_ID` varchar(255) NOT NULL,
  `IPFS_Address` varchar(255) NOT NULL,
  `Number_of_like` int(11) NOT NULL,
  `Privacy` varchar(255) NOT NULL,
  `Collection` varchar(255) NOT NULL,
  `id` varchar(36) CHARACTER SET utf8 NOT NULL,
  `deletedAt` datetime(6) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `image_url` varchar(255) NOT NULL,
  `NFT_Address` varchar(255) NOT NULL,
  `Meta_Data` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `nft` */

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` varchar(36) CHARACTER SET utf8 NOT NULL,
  `deletedAt` datetime(6) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `user_type` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT 'NORMAL',
  `login_user` varchar(255) DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `email_verified` tinyint(4) DEFAULT NULL,
  `verification_code` varchar(255) DEFAULT NULL,
  `followers` int(11) NOT NULL DEFAULT 0,
  `medium` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `background` varchar(255) DEFAULT NULL,
  `wallet_address` varchar(255) DEFAULT NULL,
  `forgetpassword_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`deletedAt`,`createdAt`,`updatedAt`,`name`,`email`,`user_type`,`login_user`,`password`,`phone`,`role`,`email_verified`,`verification_code`,`followers`,`medium`,`instagram`,`twitter`,`facebook`,`avatar`,`background`,`wallet_address`,`forgetpassword_code`) values 
('052502b8-c4a6-4eb0-a7bd-db26b3126147',NULL,'2022-03-11 01:04:05.075941','2022-03-11 01:04:05.075941','Admin','admin@gmail.com','ADMIN',NULL,'$2b$10$Suek4bZ/7yIJ18LMQm89uugkkGEiVC4fRw4X5RyEcgRmRwdLXSXZS',NULL,NULL,1,'',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
('6e0e7b44-30b8-4bd7-a708-dc7bc99b0952',NULL,'2022-03-10 04:24:33.445026','2022-03-10 04:25:23.008090','Baby Pig','babypigdev@gmail.com','NORMAL',NULL,'$2b$10$znyjpLSvJ2Mvu/Bx.pZa1O7VxYVrhdSYiwDOycl.GdEKk6l4Vq8J2',NULL,NULL,1,'EM3Sa00jfeMz1T502In3kybQKqBRgN',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `wallet` */

DROP TABLE IF EXISTS `wallet`;

CREATE TABLE `wallet` (
  `wallet_number` varchar(255) NOT NULL,
  `Blockchain` varchar(255) NOT NULL,
  `wallet_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

/*Data for the table `wallet` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
