---
title: "Плагин WordPress с React"
metaTitle: "Как разработать плагин WordPress с React"
metaDescription: "WordPress также принял React в своем ядре и выпустил 6 декабря 2018 года. Это был один из главных релизов в истории WordPress."
---
# Как разработать плагин WordPress с React?

Одним из самых мощных современных JavaScripts является React. WordPress также принял React в своем ядре и выпустил 6 декабря 2018 года. Это был один из главных релизов в истории WordPress. Это была [версия 5.0 под названием «Bebo».](https://wordpress.org/news/2018/12/bebo/)

Новейшие технологии растут так же быстро, как и свет! Каждый день, когда мы просыпаемся, мы слышим о чем-то новом в технологической индустрии. Каждый день новые термины, новые имена, новые фразы выпускаются и слышатся. В этом случае этому невозможно научиться всему.

### «Мы не можем есть все наши любимые блюда сразу»

Но, если взглянуть на другую сторону медали, кажется, что большинство из нас даже не пытается съесть ни единого кусочка с этого большого обеденного стола в интернете. Ничего не изучая или не интересуясь изучением чего-то нового, каждый день отстает от них.

Так что давайте не будем одним из них и не изучим React! Ниже приведены некоторые подробности о том, как создать плагин для WordPress с помощью React и напечатать простой тест «Hello World» в бэкэнде WordPress.

## Важные условия

Мы должны использовать JSX, Webpack и Babel для создания WP-плагина с React. Итак, давайте рассмотрим каждый из них:

### JSX

**JSX = JavaScript + XML**

Используя JSX, мы можем писать HTML-код (без кавычек) прямо в файлы JavaScript!

Пример,

```
const element = Hello World!
```

### Babel

Babel - это компилятор, который компилирует и преобразует код JSX в JavaScript Vanilla, чтобы браузеры могли понимать код JS.

### Webpack

Webpack - это модуль-упаковщик. Он связывает (оборачивает) файлы Javascript и делает его пригодным для использования в браузерах.

## Необходимые файлы для сборки плагина WP с React

Для создания плагина для Wordpress требуется 3 файла:

1.  package.json
2.  webpack.config.js
3.  .bablerc

Эти файлы должны быть созданы вручную и помещены в корень плагина.

Вы можете скачать эти 3 файла с Github. [Нажмите здесь, чтобы посетить страницу.](https://github.com/faisal-alvi/basic-react-files-for-wordpress/)

## Практическая цель - печать «Hello World» с React в WP Backend

## Mеры

### Шаг 1 - Установите Node в системе

Установите Node JS в системе. [Нажмите здесь,](https://nodejs.org/en/download/) чтобы загрузить Node JS.

### Шаг 2 - Создать страницу настроек

Создать страницу настроек в WordPress очень просто. Нам просто нужно поместить следующий код в файл funtions.php или в основной файл PHP нашего плагина.

Этот код также доступен на GitHub. [Нажмите здесь,](https://github.com/faisal-alvi/basic-react-files-for-wordpress/blob/master/setting-page.php) чтобы увидеть.
```php
<?php
/**
 * WordPress Setting Page for a React.
 *
 * @package WordPress
 * @since 1.0.0
 */

//_____________________Combining ReactJS & WordPress


// Action to add menu in settings page.
add_action( 'admin_menu', 'wpreact_admin_menu' );

/**
 * Function to add new menu in settings
 *
 * @since   1.0.0
 */
function wpreact_admin_menu() {
	add_options_page(
		__( 'React Page', 'wpreact' ),
		__( 'React Page', 'wpreact' ),
		'manage_options',
		'wpreact-page',
		'display_wpreact_admin_page'
	);
}

/**
 * Callback function of Setting Page
 *
 * @since    1.0.0
 */
function display_wpreact_admin_page() {
	?>
	<h1>Welcome..!</h1><br />
        <div id="root" style="border: 1px solid red; padding : 25px; width: 800px;">This is 'root' div.</div>
	<?php
}

// Action to add scripts to admin side.
add_action( 'admin_enqueue_scripts', 'wpreact_enqueue_admin_scripts' );

/**
 * Function to add the scripts and styles to admin page.
 *
 * @since 1.0.0
 */
function wpreact_enqueue_admin_scripts() {
	wp_enqueue_script( 'wpreact-script', get_stylesheet_directory_uri() . '/dist/bundle.js', array(
		'jquery',
		'wp-element'
	), '1.0.1' );
}
```
Это создаст страницу настроек в бэкэнде WordPress под названием «React Page», и появится приветственное сообщение «Это« корневой »div».

## Шаг 3 - Загрузите необходимые файлы

[Загрузите](https://github.com/faisal-alvi/basic-react-files-for-wordpress/) 3 необходимых файла с Github и поместите эти файлы в корень директории вашего плагина.

## Шаг 4 - Создание файлов компонентов

Мы должны создать файл основного компонента [_**index.jsx**_](https://github.com/faisal-alvi/basic-react-files-for-wordpress/blob/master/src/index.jsx) в папке src. Другие необходимые компоненты должны быть созданы в [папке компонентов](https://github.com/faisal-alvi/basic-react-files-for-wordpress/tree/master/components) .

Пожалуйста, не беспокойтесь о создании их, если вы уже загрузили / клонировали репозиторий Git в корневой каталог вашего плагина на шаге 3.

## Шаг 5 - Выполнить команду установки

Откройте интерфейс командной строки (CMD) в корне вашего плагина и выполните следующую команду.

~npm install

Это установит необходимые библиотеки и модули и автоматически создаст **файл pakcage-lock.json** и папку **node\_modules** в корне плагина.

## Шаг 6 - Выполнить команду Run / Watch

Выполните следующую команду в CMD.

~npm run dev

Выполнение этой команды автоматически сгенерирует файл _**bundle.js**_ в папке _**dist,**_ и будет запущен **WATCH** через приложение React, так что если вы измените что-либо в index.jsx или любых других компонентах index.jsx, в bundle.js файл будет обновлен автоматически.

**Цель достигнута!**

Теперь мы сможем увидеть Hello World, напечатанный в бэкэнде WordPress, используя ваш плагин WordPress и React. Вы увидите следующий вывод в бэкэнде:

![plugin wordpress](https://www.babulya.com.ua/wp-content/uploads/2020/04/wpreactobjective.png)​​​​​​​