---
title: "Подсветка синтаксиса"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

Turndown Demo
=============

This demonstrates [turndown](https://github.com/domchristie/turndown) – an HTML to Markdown converter in JavaScript.

Usage
-----

    var turndownService = new TurndownService()
    console.log(
      turndownService.turndown('Hello world')
    )

- - -

It aims to be [CommonMark](http://commonmark.org/) compliant, and includes options to style the output. These options include:

-   headingStyle (setext or atx)
-   horizontalRule (\*, -, or \_)
-   bullet (\*, -, or +)
-   codeBlockStyle (indented or fenced)
-   fence (\` or ~)
-   emDelimiter (\_ or \*)
-   strongDelimiter (\*\* or \_\_)
-   linkStyle (inlined or referenced)
-   linkReferenceStyle (full, collapsed, or shortcut)


