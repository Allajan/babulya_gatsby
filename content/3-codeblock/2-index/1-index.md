---
title: "Часы на сайт JavaScript"
metaTitle: "Часы на сайт JavaScript"
metaDescription: "Дижитал часы на сайт на JavaScript. Пример кода. Как вставить HTML в MD."
---
## Вставка рабочего кода HTML
 
Эти часы можно увидеть в нижнем левом углу страницы. 
 
HTML в стиле ```<pre></pre>```можно вставить вумя способами. Первый - это 4 пробела от начала строки:

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



<iframe width="100%" height="715" src="https://www.babulya.com.ua/wp-content/uploads/games_git/IP/ip.html" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## HTML

```html textwidth=100
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
## css

```css
#cal {
margin-left: 10px;
margin-top: 10px;
}
#clck {
  margin-top:10px;
  opacity:.7;
  align-items: center;
  justify-content: center;
  max-width: 230px;
  height: 100vh;
  font-family: 'Open Sans';
  font-size: 16px;
  font-smooth: auto;
  font-weight: 300;
  line-height: 1.5;
  color: #444;  
}

.alarm-clock {
  position: relative;  
  border-radius: 10px; 
  box-shadow:0 0 10px rgba(0,0,0,0.5);
}
.alarm-clock .date {
  position: absolute;
  bottom: 10px;
  left: 44%;
  font-weight: 900;
  color: #1c00f1;
  font-size: 12px;
  text-transform: uppercase;
  transform: translateX(-50%);
  z-index: 9;
}
.alarm-clock .time {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 30px 0px 30px;
  background: linear-gradient(45deg, #EECFBA, #C5DDE8);
  border-radius: 10px;
  font-family: 'Open Sans', sans-serif;
  font-size: 40px;
}
.alarm-clock .time span {
  position: relative;  
  align-items: center;
  justify-content: center;
  color: #53a0ef;
  text-shadow:1px 1px 2px black, 0 0 1em #ffffff;
  line-height: 1.75;
}

.alarm-clock .time span.colon {
  width: 12px;
  text-align: center;
  animation: blink 2s infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


#calendar2 {
  width: 230px;
  padding: 10 10 0 10;
  font-family: Open Sans;
  line-height: 1.2em;
  font-size: 15px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  background: linear-gradient(45deg, #EECFBA, #C5DDE8);
}
#calendar2 thead tr:last-child {
  font-size: small;
  color: rgb(85, 85, 85);
}
#calendar2 thead tr:nth-child(1) td:nth-child(2) {
  color: rgb(187, 13, 142);
  font-size: 18px;
}
#calendar2 thead tr:nth-child(1) td:nth-child(1):hover, #calendar2 thead tr:nth-child(1) td:nth-child(3):hover {
  cursor: pointer;
}
#calendar2 tbody td {
  color: rgb(44, 86, 122);
  
}
#calendar2 tbody td:nth-child(n+6), #calendar2 .holiday {
  color: rgb(245, 57, 57);
  font-weight: bold;
}
#calendar2 tbody td.today {
  background: rgb(0, 220, 78);
  color: #fff;
  border-radius:50%;
  box-shadow: 0 0 5px rgba(44, 86, 122, 0.6);
}
```

Ниже приведен блок кода с подсветкой синтаксиса языка JavaScript.

```javascript line=1
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

