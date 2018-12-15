-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Дек 15 2018 г., 21:32
-- Версия сервера: 10.1.32-MariaDB
-- Версия PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `nlc`
--

-- --------------------------------------------------------

--
-- Структура таблицы `techs`
--

CREATE TABLE `techs` (
  `tech_id` int(8) NOT NULL,
  `descr` text NOT NULL,
  `logo` tinytext NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `techs`
--

INSERT INTO `techs` (`tech_id`, `descr`, `logo`, `name`) VALUES
(1, 'Описание', '../../assets/images/angular.png', 'Angular'),
(2, 'Описание', '../../assets/images/bootstrap.png', 'Bootstarp'),
(3, 'Описание', '../../assets/images/express.png', 'Express'),
(4, 'Описание', '../../assets/images/jquery.png', 'JQuery'),
(5, 'Описание', '../../assets/images/cs.png', 'C#'),
(6, 'Описание', '../../assets/images/mongodb.png', 'MongoDB'),
(7, 'Описание', '../../assets/images/laravel.png', 'Laravel'),
(8, 'Описание', '../../assets/images/go.png', 'GO'),
(9, 'Описание', '../../assets/images/mysql.png', 'MySql'),
(10, 'Описание', '../../assets/images/net.png', 'ASP.Net Co'),
(11, 'Описание', '../../assets/images/react.png', 'React.js'),
(12, 'Описание', '../../assets/images/plsql.png', 'Oracle PL/'),
(13, 'Описание', '../../assets/images/sql-server.png', 'MS Sql Ser'),
(14, 'Описание', '../../assets/images/vue.png', 'Vue.js'),
(15, 'Описание', '../../assets/images/php.png', 'PHP'),
(16, 'Описание', '../../assets/images/node.png', 'Node.js');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) NOT NULL,
  `name` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `photo` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `photo`) VALUES
(1, 'Ваня Номоконов', 'nomokonov.vana@gmail.com', '12345', NULL),
(2, 'vorobushek', 'vorobueva@yandex.ru', '321', NULL),
(3, 'ksit', 'ksit@email.com', '444', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `techs`
--
ALTER TABLE `techs`
  ADD PRIMARY KEY (`tech_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
