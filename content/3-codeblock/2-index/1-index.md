---
title: "Часы на сайт JavaScript"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---
Ниже приведен блок кода с подсветкой синтаксиса языка HTML.
```html
<div id="cal">
<table id="calendar2">
  <thead>
    <tr><td>‹<td colspan="5"><td>›
    <tr><td>Пн<td>Вт<td>Ср<td>Чт<td>Пт<td>Сб<td>Вс
  <tbody>
</table>
<div id="clck">
  <div class="alarm-clock">
	<div class="time">
		<span class="hours"></span>
		<span class="colon">:</span>
		<span class="minutes"></span>
		<span class="colon">:</span>
		<span class="seconds"></span>
	</div>
</div>
</div>
</div>
```
Ниже приведен блок кода с подсветкой синтаксиса языка JavaScript.

```javascript
function Calendar2(id, year, month) {
var Dlast = new Date(year,month+1,0).getDate(),
    D = new Date(year,month,Dlast),
    DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr>',
    month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
if (DNfirst != 0) {
  for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
}else{
  for(var  i = 0; i < 6; i++) calendar += '<td>';
}
for(var  i = 1; i <= Dlast; i++) {
  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today">' + i;
  }else{
    calendar += '<td>' + i;
  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    calendar += '<tr>';
  }
}
for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
document.querySelector('#'+id+' tbody').innerHTML = calendar;
document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  
// чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
}
}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
}

var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');

function setDate() {
	var now = new Date();
	
	var secs = now.getSeconds();
	var mins = now.getMinutes();
	var hrs = now.getHours();
	

	if (hrs < 10) {
		hours.innerHTML = '0' + hrs;
	} else {
		hours.innerHTML = hrs;
	}

	if (secs < 10) {
		seconds.innerHTML = '0' + secs;
	} else {
		seconds.innerHTML = secs;
	}

	if (mins < 10) {
		minutes.innerHTML = '0' + mins;
	} else {
		minutes.innerHTML = mins;
	}	
}
setInterval(setDate, 1000);
```

Supports multiple languages.

Ниже приведен кодовый блок с diff. Строки с + выделены зеленым цветом, указывая на добавление. Строки с - выделены красным оттенком, указывающим на удаление.

```javascript
- const data = ['1','2'];
+ const data = [1,2];
```

## Live Editing example

```javascript react-live=true
<button className={'btn btn-default'}>Change my text</button>
```
