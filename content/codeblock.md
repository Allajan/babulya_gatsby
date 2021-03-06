---
title: " WordPress-плагины для развертывания в Netlify"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

# Рост популярности JAMstack привел к увеличению количества WordPress-плагинов для развертывания в Netlify

Одна из наиболее интересных тенденций этого года заключается в том, что WordPress-разработчики начали рассматривать JAMstack-установки для своих сайтов. JAMstack – это термин, введенный генеральным директором Netlify Мэттом Билманом для описания архитектуры разработки, которая включает в себя клиентский JavaScript, реюзабельные API, а также встроенную разметку – три кита современного статичного сайта.

Статичные сайты сегодня снова в моде, что стало реакцией на медленные, перенасыщенные опциями PHP-фреймворки, охватывающие заметную часть сети. Скорость, безопасность и масштабируемость таких сайтов, разработка которых обходится в более низкую цену – вот самые убедительные причины, почему разработчики присоединяются к быстрорастущему сообществу JAMstack.

JAMstack предлагает удобный процесс разработки, дружественный к git и CLI, что позволяет разработчикам экспериментировать с новейшими фронтэнд-технологиями, не привязываясь к каким-либо конкретным фреймворкам или инструментам.

Большинство JAMstack-сайтов создаются с использованием Jekyll, Hugo, Nuxt, Next, Gatsby или других генераторов статичных сайтов. Сгенерированная разметка и ресурсы часто передаются через CDN для практически мгновенной загрузки страниц.

[Netlify](https://www.netlify.com/) стали пионерами в области внедрения JAMstack-хостинга и вдохновили многих на создание разноплановых инструментов, обеспечивающих быстрое и удобное развертывание. Плагины, позволяющие разработчикам получать исходный контент из WordPress и размещать его в Netlify, начинают появляться все чаще. Бесплатный тариф Netlify – одна из главных причин популярности этой среды, поскольку на этом тарифе можно быстро разместить персональный сайт или небольшой проект с поддержкой произвольного домена, HTTPS, git-интеграции и непрерывного развертывания.

Tiny Pixel Collective создали плагин под названием [Netlify Deploy](https://github.com/pixelcollective/netlify-deploy), который автоматизирует сборки Netlify по событиям публикации и обновления WordPress. Компания создала плагин, чтобы разработчикам было проще перестраивать Gatsby-фронтэнды, размещенные в Netlify, используя WordPress в качестве инструмента публикации. Плагин работает в фоновом режиме, поддерживая синхронизацию статичного фронтэнда с базой данных записей, перестраивая сайт, когда пользователи обновляют записи и страницы. Вебхук Netlify инициируется всякий раз, когда стандартные записи или страницы в WordPress меняются после публикации, однако его также можно модифицировать для работы с произвольными типами записей и произвольными хуками публикации.

Плагин [JAMstack Deployments](https://wordpress.org/plugins/wp-jamstack-deployments/), созданный Кристофером Гири, разработчиком и поклонником JAMstack, представляет собой аналогичное решение, которое облегчает развертывание в Netlify, а также на других платформах. Страница настроек плагина позволяет пользователям настраивать URL-адрес вебхука и включает в себя опции для ограничения работы плагина с определенными типами записей или таксономий. JAMstack Deployments предлагается бесплатно на WordPress.org.

[Deploy Netlify Webhook](https://wordpress.org/plugins/webhook-netlify-deploy/) – аналогичный плагин, который делает все то же самое, но только вручную через кнопку Build в консоли WordPress. Это дает дополнительное преимущество, позволяя разработчикам проверить статус последней сборки, чтобы увидеть, были ли она успешной, не покидая WordPress.

Джастин Холл, автор плагинов и старший веб-разработчик в SendGrid, опубликовал на Github стартовую [среду Gatsby + Headless WordPress + Netlify](https://github.com/justinwhall/gatsby-wordpress-netlify-starter). Эта конкретная установка требует, чтобы плагин [LittleBot Netlify](https://github.com/justinwhall/littlebot-netlify) вызывал хуки сборки Netlify во время сохранения записи или ее обновления. Имеется также дополнительная опция, позволяющая пользователям WordPress публиковать контент на тестовых либо рабочих сайтах.

[WP2Static](https://wordpress.org/plugins/static-html-output-plugin/) – популярный плагин, который генерирует статичные HTML-файлы на базе WordPress-сайта. Пользователи могут автоматически развертываться в папку на сервере, в ZIP-файл, на FTP-сервер, в S3, GitHub, Netlify, BunnyCDN, BitBucket и GitLab. Плагин в данный момент имеет более 10000 активных установок.

Это всего лишь небольшая выборка инструментов, которые были созданы разработчиками, чтобы разрешить пользователям WP использовать все возможности статических сайтов при обращении к динамической платформе WordPress.

Тренд по использованию headless CMS в сочетании с генераторами статичных сайтов – установка, которая в настоящий момент ориентирована по большей части на разработчиков. Перевод этого жаргона для простых пользователей и владельцев бизнеса – новая задача для тех, кто хочет предлагать услуги по настройке архитектуры JAMstack.

Многие хостинговые платформы, такие как Strattic, Shifter, HardyPress, уже начали адаптировать технологию JAMstack для менее продвинутой аудитории. Хостинги предлагают комплексную serverless-архитектуру, позволяющую генерировать статичные файлы на базе WordPress-сайтов, причем все это передается через CDN.

Один из главных недостатков статичной установки WordPress заключается в том, что многие динамические возможности не работают в этой среде. Добавление контактных форм может стать проблемой. Сайты, требующие нативных комментариев WordPress или чего-то более сложного и интерактивного, не будут работать. Сюда относится функционал, предлагаемый WooCommerce, bbPress, BuddyPress, плагинами сообществ и т.д. На данный момент интерес к JAMstack исходит лишь со стороны некоторых DIY-разработчиков, которые хотят размещать более простые сайты.

Источник: _wptavern.com_
