---
title: "Шпаргалка Markdown"
metaTitle: "Markdown Syntax Cheatsheet"
metaDescription: "This is a quick reference for Markdown syntax."
---

## Шпаргалка Markdown

Это краткий справочник по синтаксису Markdown. Более полное руководство можно найти на [GitHub](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Основное форматирование

-   **Bold**: `**Bold**`
-   _Emphasized_: `*Emphasized*`
-   Strikethrough : `~~Strikethrough~~`
-   Horizontal rules: `---` (three hyphens), `***` (three asterisks), or `___` (three underscores).

### Заголовки

Все уровни заголовка (e.g. H1, H2, etc), отмечены `#` в начале строки. Например, H1 `# Heading 1` и H2 - это `## Heading 2`.Наименьший -  `###### Heading 6`.

### Ссылки

Ссылки могут быть созданы несколькими способами:

-   Ссылки могут быть `[inline](https://markdowntohtml.com)`
-   Встроенные ссылки могут быть `[have a title](https://markdowntohtml.com "Awesome Markdown Converter")`
-   Кроме того, могут быть ссылочные ссылки, позволяющие разместить URL-адрес позже в документе:
    -   Эта ссылка `[reference link][kaila.netlify.com]` ссылается на этот сайт.
    -   Ссылки не чувствительны к регистру (пример `[this link][Kaila.Netlify.Com]` будет работать).
    -   Ссылки также могут `[use numbers][1]`.
    -   Или оставьте это пустым и используйте `[link text itself]`.
-   Также вы можете использовать относительные ссылки \[like this\](../blob/master/LICENSE.txt).
-   URL-адреса и URL-адреса в угловых скобках автоматически превращаются в ссылки: https://markdowntohtml.com or .

URL для ссылочных ссылок где-то позже в документе, как это:

```
[markdowntohtml]: https://kaila.netlify.com
[1]: https://kaila.netlify.com
[link text itself]: https://kaila.netlify.com
```

### Изображения

Изображения также могут быть встроенными или использовать стиль ссылки, аналогично ссылкам. Просто добавьте восклицательный знак, чтобы превратить ссылку в изображение. Например:

```
Изображения с полным URL: ![alt text](https://placebear.com/300/300)

Or, a reference-style image: ![alt text][bears].

[bears]: https://placebear.com/300/300
```

### Списки (Упорядоченные Списки и Неупорядоченные Списки)

Списки составляются с использованием отступа и маркера начала строки для обозначения элемента списка. Например, неупорядоченные списки создаются следующим образом:

```
* One item
* Another item
  * A sub-item
    * A deeper item
  * Back in sub-item land
* And back at the main level
```

Неупорядоченные списки могут использовать звездочку (`*`), плюс (`+`), или минус (`-`) для отметки каждог элемента списка.

Упорядоченные списки используют число в начале строки. Числа не нужно увеличивать - это произойдет автоматически с помощью HTML. Это позволяет упорядочить ваши упорядоченные списки (в markdown) по мере необходимости.

Кроме того, упорядоченные и неупорядоченные списки могут быть вложены друг в друга. Например:

```
* One item
* Another item
  1. A nested ordered list
  1. This is the second item
    * And now an unordered list as its child
    * Another item in this list
  1. One more in the ordered list
* And back at the main level
```

### Подсветка кода и синтаксиса

Встроенный код использует `` `обратные кавычки` `` вокруг него. Если используются плагины, добавляйте указание языка (js, php, html). Блоки кода либо огорожены тремя обратными галочками (` ``` `) или отступом в четыре пробела. Например:

````
```js
var foo = 'bar';

function baz(s) {
   return foo + ':' + s;
}
```
````

### Цитаты

Используются `>` для смещения текста в виде цитаты. Например:

```
> Это какая-то часть цитаты.
> Еще кое-что.
```

Будет выводить: 
  

> Это какая-то часть цитаты. Еще кое-что.
