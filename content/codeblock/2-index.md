---
title: "WordPress с React"
metaTitle: "WordPress как безголовая CMS "
metaDescription: "WordPress в качестве бэкэнда и REST API для подачи данных в приложение React"
---

# WordPress с React

Каждому разработчику и его собаке есть что сказать о WordPress, и это не всегда лестно. Отнюдь не. Однако даже самые заядлые хулители вынуждены обратить внимание на эту функцию, потому что она уже изменила способ использования популярной CMS.

WordPress REST API - это **огромный** шаг вперед для разработчиков интерфейсов, которые хотят объединить возможности JavaScript-фреймворков, таких как React ( [или Vue.js](https://snipcart.com/blog/wordpress-vue-headless) ), с WordPress.

Это именно то, что я хочу сделать сегодня с этой демонстрацией WordPress REST API в работе.

Я буду использовать WordPress в качестве бэкэнда и REST API для подачи данных в приложение React.

Точнее, вы научитесь:

-   Получите доступ к API REST WP из вашего интерфейса
-   Добавьте пользовательский тип записи и предоставьте его API
-   Создайте приложение React на основе этого API
-   Обрабатывать React Hooks (и создавать собственные)

Прежде чем мы начнем, давайте посмотрим, что такое REST API для WordPress и почему вы должны заботиться об этом.

![WP REST API](https://www.babulya.com.ua/wp-content/uploads/2020/04/wp-rest-api.webp)  

## Что такое API WordPress REST?

Сам WordPress не нуждается в представлении, но давайте более подробно рассмотрим недавний WP REST API. Прежде чем мы начнем скользить по пути его эволюции, давайте разберемся с некоторыми определениями:

**API** (Application Program Interface) представляет [собой набор протоколов](https://en.wikipedia.org/wiki/Application_programming_interface) для построения программных приложений. Он определяет способ обмена информацией между программами и структурами, как различные компоненты приложения будут взаимодействовать друг с другом. Хороший API облегчает разработку программ, предоставляя все необходимые компоненты. Вы можете узнать больше об API [здесь](https://snipcart.com/blog/apis-integration-usage-benefits) .

**REST** (Передача состояния представления) - [это архитектурный стиль,](https://code.tutsplus.com/tutorials/demystifying-rest--pre-58000) определяющий ограничения на способ создания программ. Когда эту архитектуру встречают веб-сервисы, мы называем их RESTful API или просто REST API.

**JSON** (JavaScript Object Notation) - [это формат для структурирования данных,](http://www.json.org/) чтобы их могли читать многие приложения. Это делает взаимодействие между чем-то вроде, скажем, WordPress, и любым видом приложения удобным.

Начиная с WordPress 4.7, эти концепции были применены для создания WordPress JSON REST API. Это позволяет разделить подход, эффективно отделяя данные (сзади) от представлений (спереди).

## Что это значит для пользователей?

**WordPress теперь можно использовать как безголовую CMS.**

Это открывает перед разработчиками совершенно новый мир возможностей, поскольку оболочка WordPress [не обязательно должна быть «WordPress»](https://poststatus.com/wordpress-json-rest-api/) - представлениями, сгенерированными PHP. Постоянно растущее число интегрированных сред теперь можно подключить к бэкэнду WordPress для разработки веб-сайтов и приложений.

Когда дело доходит до WP REST API, преимуществ предостаточно.

Не только поверьте мне на слово, [разработчики, уже использующие его](https://medium.com/digital-times/my-wordpress-renaissance-ff4c0a224f30) , в восторге от этой смены парадигмы:

> «Мне удалось забыть о некоторых более слабых аспектах WordPress и воспользоваться некоторыми из его лучших функций, такими как ревизии, простой интерфейс редактирования и знакомство. Затем я могу использовать любую инфраструктуру внешнего интерфейса для использования REST API. и отображать контент в выбранной мной форме, используя все преимущества этих JavaScript-фреймворков, без проблем с темой WordPress ».

[Я сам не самый большой поклонник PHP, поэтому самое интересное для меня - избавиться от него, по крайней мере, на фронтенде.](https://twitter.com/intent/tweet?text=I%27m%20not%20the%20biggest%20fan%20of%20PHP%20myself%2C%20so%20the%20most%20exciting%20part%20for%20me%20is%20to%20get%20rid%20of%20it%2C%20at%20least%20on%20the%20frontend.&hashtags=wordpress%2Crestapi&url=http%3A%2F%2Fbit.ly%2F2vWa2XD&via=snipcart)

Работа в одиночку над небольшой демонстрацией означает, что мне все еще приходится иметь дело с этим, чтобы запустить WordPress. Однако в более крупном проекте с большой командой разработчики веб-интерфейсов могут работать на языке по своему выбору (даже не касаясь PHP), даже если все данные обрабатываются с помощью WordPress на сервере. JSON магия на работе прямо здесь.

> Ищете альтернативы? Мы перечислили [множество безголовых решений,](https://snipcart.com/blog/headless-ecommerce-guide) которые мы протестировали в других технических руководствах.

### Более простые приложения и использование React на WordPress без головы

Что действительно удивительно, так это то, что мы можем положить конец многолетним дебатам традиционных CMS и современных инструментов веб-разработки, таких как JS-фреймворки. Теперь мы можем использовать лучшие аспекты обоих миров и заставить их [прекрасно работать вместе](https://www.strattic.com/jamstack-and-wordpress-friends-or-foes/) .

WordPress REST API упрощает подключение к приложениям. Настраиваемое мобильное или одностраничное приложение теперь может не только читать данные WordPress, но и создавать, редактировать и удалять эти данные.

Многие начали [использовать WordPress в «странных местах»](https://wordpress.tv/2014/11/03/k-adam-white-wordpress-in-weird-places-content-management-for-node-using-rest/) , например, в приложениях, с которыми было бы больно работать несколько лет назад.

Как для нас? Мы выбрали React для этой демонстрации, потому что, ну, _это React_ . Когда мы написали первую версию этого поста, нам все еще приходилось оправдывать этот выбор, но с тех пор он стал настолько популярным, что это просто вариант использования, который охватит большинство разработчиков.

Кроме того, это более чем когда-либо одна из лучших платформ: гибкая и многократно используемая система компонентов, виртуальный DOM, эффективный рабочий процесс с JSX и т. Д.

Да, и добавил совсем недавно: [React Hooks](https://reactjs.org/docs/hooks-intro.html) , который я буду использовать в демоверсии ниже.

Кроме того, используя WP REST API с интерфейсом React, вы можете собрать [полный JAMstack](https://snipcart.com/blog/jamstack) , который я всегда более чем готов.

> Чтобы узнать, как подключить React к Headless CMS, ознакомьтесь с [этим руководством](https://snipcart.com/blog/react-graphql-grav-cms-headless-tutorial) по использованию генератора статических сайтов Gatsby и GraphQL.

Хватит болтать; время практиковаться.

## Учебное пособие по WordPress & React: пример API JSON REST

В этой небольшой демонстрации я собираюсь создать интернет-магазин для продажи онлайн-курсов. Я не буду вдаваться в подробности для части электронной коммерции, хотя. Я хочу сосредоточиться на том, что для нас здесь важно: **создание приложения React, связанного с данными WordPress, благодаря API REST WP.**

Если вам интересно узнать об интеграции корзины покупок, не стесняйтесь посетить репозиторий GitHub, связанный сразу после урока.

Хорошо, давайте сделаем это!

### 1. Запрос данных WordPress

Прежде всего, вам нужно запустить сайт WordPress. Я не буду подробно рассказывать об «установке WordPress», так как это выходит за рамки того, на чем я хочу сосредоточиться.

Поэтому я предполагаю, что вы уже установили WP для работы с выбранным вами веб-сервером, или перед тем, как продолжить, обратитесь к [документации WordPress](https://wordpress.org/support/article/how-to-install-wordpress/) .

Лично я быстро начал использовать Docker Compose для локальной разработки и внес некоторые изменения, `wp-config.php`чтобы демо-версия работала и на Heroku.

> Чувствуете любопытство? Смотрите мой [wp-config.php](https://github.com/snipcart/wordpress-rest-api-react/blob/master/wp-config.php) и мой [docker-compose.yml](https://github.com/snipcart/wordpress-rest-api-react/blob/master/docker-compose.yml) в [репозитории](https://github.com/snipcart/wordpress-rest-api-react/blob/master/docker-compose.yml) демо.

Из коробки вы уже можете использовать API-интерфейс WP REST со своего веб-интерфейса, отправив `GET`запрос на `/wp-json/wp/v2/{post type}`. Например, вы можете получить все сообщения от `/wp-json/wp/v2/posts`.

От нашего интерфейса запросы будут выполняться с помощью [API выборки](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) :

```js
fetch('/wp-json/wp/v2/posts')
  .then(response => response.json())
  .then(posts => console.log(posts));
```
  ### 2. Запрос WP REST API из React

Чтобы быстро начать работу с React, запустите эту команду в терминале:

```js
npx create-react-app react-app
```

_Обратите внимание, что `npx`поставляется с Node.js для запуска команд без их глобальной установки._

Затем добавьте `material-ui` в проект ( `cd react-app`тогда `npm install @material-ui/core`).

Чтобы запросить данные постов, добавьте следующий `Posts`компонент:

```js
import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
    
export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('/wp-json/wp/v2/posts');
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
            setPosts(posts);
        }
    
        loadPosts();
   }, [])
  return (
    <Grid container spacing={2}>
      {posts.map((post, index) => (
      <Grid item xs={4} key={index}>
        <Card>
           <CardContent>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                <Typography
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </CardContent>
        </Card>
      </Grid>
     ))}
    </Grid>
 );
}
```

Вы заметите , что я использовал `useEffect`и `useState`, два из [R](https://reactjs.org/docs/hooks-overview.html) [Eact в](https://reactjs.org/docs/hooks-overview.html) [H](https://reactjs.org/docs/hooks-overview.html) [ooks](https://reactjs.org/docs/hooks-overview.html) .

Во-первых, `useState`используется для объявления массива сообщений и обеспечения обратного вызова для его обновления.

Затем `useEffect`позволяет запускать код извлечения при монтировании компонента.

Наконец, чтобы отобразить список сообщений, вы можете «отобразить» массив сообщений и вернуть компоненты для каждого из них. Однако есть несколько причуд, связанных с тем, как `useEffect`работает:

-   Обратный вызов не может вернуть обещание, поэтому асинхронная функция не может быть передана напрямую `useEffect`.
-   Пустой массив должен быть передан, чтобы `useEffect`он запускался только один раз. Это говорит React, что этот эффект не зависит ни от какого значения.

**2.1 Создание пользовательского React Hook**

Чтобы упростить это, вы можете создать свой собственный React Hook « `useFetch`» (in `./useFetch.js`):

```js
import { useEffect, useState } from 'react';
    
export default function useFetch(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function loadData() {
            const response = await fetch(url);
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
            setData(posts);
        }
    
        loadData();
    }, [url]);
    return data;
```

Я извлек предыдущие хуки в функцию и сказал, useEffectчтобы они запускались снова, когда выбранный URL меняется. По сути, это то, как вы можете создавать любые пользовательские React Hooks!

Этот можно использовать так:

```js
export default function Posts() {
    const posts = useFetch('http://localhost/wp-json/wp/v2/posts');
  return (
    <Grid container spacing={2}>
      {posts && posts.map((post, index) => (
      <Grid item xs={4} key={index}>
        <!-- this code is unchanged -->
      </Grid>
      ))}
    </Grid>
  );
}
```
### 3. Добавление пользовательского типа записи в WP Rest API

Теперь, когда у нас есть некоторый базовый код React для запроса REST API в WP, давайте добавим новый тип данных!

Вы можете использовать множество функций WP, чтобы зарегистрировать то, что вам нужно. Все это войдет в новый файл PHP `wp-content/plugins/my_plugin.php`.

Начиная с мета-комментариев, как это:

```php
<?php
/**
 * @package Sample_Plugin
 * @version 1.0.0
 */
/*
Plugin Name: Sample Plugin
Plugin URI: http://example.com/
Description: The beginning of an awesome plugin
Author: Me
Version: 1.0.0
Author URI: http://example.com/
*/
export default function Posts() {
    const posts = useFetch('http://localhost/wp-json/wp/v2/posts');
  return (
    <Grid container spacing={2}>
      {posts && posts.map((post, index) => (
      <Grid item xs={4} key={index}>
        <!-- this code is unchanged -->
      </Grid>
      ))}
    </Grid>
  );
}
```

Ради этой демонстрации я решил создать courseтип, который будет представлять онлайн-курс из учебной платформы.

Я никогда не мог объяснить все доступные варианты при создании пользовательских типов сообщений. Для этого вы можете погрузиться в документацию WP или использовать генератор .

Какой бы способ вы ни предпочли, вот минимальная версия моего courseобъявления типа, затем я объясню соответствующие части:

```js
function generate_course_type() {
    $labels = array(
        'name'                  => 'Courses',
        'singular_name'         => 'Course',
    );
    $args = array(
        'label'                 => 'Course',
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'custom-fields' ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'capability_type'       => 'page',
        'show_in_rest'          => true,
        'rest_base'             => 'courses',
    );
    register_post_type( 'course_type', $args );
}
add_action( 'init', 'generate_course_type', 0 );
```

-   `generate_course_type` - это функция, которая будет запускаться при инициализации WP, потому что она подключена `init`через `add_action`вызов. Большинство настроек в WordPress привязываются к таким действиям.
-   В этой функции пользовательский тип регистрируется с `register_post_type`. Это то, что определяет, как тип обрабатывается в WP как для администратора, так и для REST API.
-   Соответствующие параметры должны `show_in_rest`позволять извлекать курсы из REST API, `rest_base`которые задают путь URL для курсов, которые будут`/wp-json/wp/v2/courses`

Теперь плагин можно активировать в админке WP, а затем добавить несколько курсов.

С помощью нашего `useFetch`хука получить список курсов в компоненте React очень просто:

```js
export default function Courses() {
    const courses = useFetch('http://localhost/wp-json/wp/v2/courses');
  return (
    <List component="nav" aria-label="main mailbox folders">
        {courses && courses.map((course, index) => (
        <ListItem key={index}>
          <ListItemText primary={course.title.rendered} />
        </ListItem>
        ))}
    </List>
  );
}
```

### 4. Дальнейшие настройки

Я знаю, что большинство вариантов использования будет более сложным, чем то, что мы только что сделали, но это закладывает основы для веб-приложения на основе WP & React. Кроме того, это помогает нам понять, как работает API REST WP.

Чтобы немного оживить ситуацию, я сделал эти курсы покупными для зарегистрированных пользователей. Таким образом, поле цены должно быть выставлено в API. Для этого есть два подхода:

-   Используйте **post meta** : более чистый способ сделать это с точки зрения плагина, но для [реализации мета-бокса](https://developer.wordpress.org/plugins/metadata/custom-meta-boxes/) для редактирования этих полей требуется немного больше работы .
-   использовать **настраиваемые поля** : они могут быть добавлены непосредственно из редактора, но нам нужно настроить API REST, чтобы открыть их.

Вот как можно объявить мета-запись для курсов:

```js
function generate_course_type() {
    // ... previous code from generate_course_type
    
    $meta_args = array(
        'type'         => 'number',
        'description'  => 'The price of a course.',
        'single'       => true,
        'show_in_rest' => true,
    );
    register_post_meta( 'course_type', 'price', $meta_args );
}
```
Если установлено `show_in_rest`значение true, оно будет автоматически представлено API REST.

В качестве альтернативы, пользовательские поля, созданные в интерфейсе администратора WP, могут быть доступны для API REST с помощью `register_rest_field`:

```js
function get_price_field($object, $field_name, $value) {
    return floatval(get_post_meta($object\['id'])[$field_name\][0]);
}
    
function register_course_price_in_api() {
    register_rest_field('course_type', 'price', array(
        'get_callback' => 'get_price_field',
        'update_callback' => null,
        'schema' => null,
    ));
}
    
add_action( 'rest_api_init', 'register_course_price_in_api' );
```
Здесь мы объявляем поле `get callback`for `price`и в этом обратном вызове извлекаем и форматируем это поле из мета записи.

Запрос REST API возвращает полезную нагрузку, подобную этой:

```js
[
    {
        "id": 72,
        "date": "2020-03-11T06:31:52",
        "slug": "markething-madness-with-frank",
        "status": "publish",
        "type": "course_type",
        "title": {
            "rendered": "Markething Madness with Frank"
        },
        "content": {
            "rendered": "",
            "protected": false
        },
        "price": 75.99,
        "_links": {
            // ...
        }
        // ...
    },
    // ...
]
```

С ценой, доступной в REST API, в приложение могут быть добавлены функции электронной коммерции!

Я не буду вдаваться в подробности настройки Snipcart в этой демонстрации. Однако, если вам интересно, репозиторий GitHub показывает [пример](https://github.com/snipcart/wordpress-rest-api-react/blob/master/src/snipcart.js) использования API Snipcart с React Hooks.

## Живое демо и репозиторий GitHub

> Попробуйте демо-версию [здесь](https://snipcart-wordpress-react.herokuapp.com/)

> Смотрите репозиторий GitHub [здесь](https://github.com/snipcart/wordpress-rest-api-react)

## Заключительные мысли

WordPress постоянно развивается, как и его REST API. Из того, что я помню из наших последних экспериментов с ним, теперь его гораздо проще использовать и даже приятно настраивать - верьте этому или нет;).

Все это может быть сделано очень быстро и без проблем, позволяя разработчикам использовать WP и его проверенные возможности управления контентом с любым стеком внешнего интерфейса.

Для меня использование React было вишенкой на торте, так как я еще не играл с его крючками. Поначалу их сложно понять, но в итоге они становятся простыми строительными блоками, которые мы можем абстрагировать, чтобы повысить эффективность.

Мы бы не подумали об этом пять лет назад, но WordPress и JAMstack теперь могут работать рука об руку несколькими различными способами. В этом посте мы показали, как WP можно использовать как безголовую CMS.

Оригинальная статья: [snipcart.com](http://snipcart.com/blog/reactjs-wordpress-rest-api-example).