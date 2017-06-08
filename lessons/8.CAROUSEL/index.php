<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>JavaScript. Lesson 7.</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="slideshow-container">
		<div class="mySlides fade"><br>
			<div class="numbertext">1/3</div><br>		
			<img src="img/sea.jpg" style="width: 100%" alt="Море">	
			<div class="text">Это красивый берег моря.</div>
		</div>
		<div class="mySlides fade"><br>
			<div class="numbertext">2/3</div><br>		
			<img src="img/japan.jpg" style="width: 100%" alt="Япония">	
			<div class="text">Это парк в Японии.</div>
		</div>
		<div class="mySlides fade"><br>
			<div class="numbertext">3/3</div><br>		
			<img src="img/lake.jpg" style="width: 100%" alt="Озеро">	
			<div class="text">Это озеро на Южном Урале.</div>
		</div>
		
		<a class="prev" onclick="plusSlides(-1)">&#10094</a>
		<a class="next" onclick="plusSlides(1)">&#10095</a>
	
	</div>
	<br>
	
	<div style="text-align: center";>
		<span class="dot" onclick="currentSlide(1)"></span>
		<span class="dot" onclick="currentSlide(2)"></span>
		<span class="dot" onclick="currentSlide(3)"></span>
	</div>
	
	<script src="script.js"></script> 
</body>
</html>
























