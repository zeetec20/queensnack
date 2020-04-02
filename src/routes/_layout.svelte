<script>
	import {setContext} from 'svelte'

	setContext(
		'image_snack', 
		[
			'img/snack/snack1.jpg',
			'img/snack/snack2.jpg',
			'img/snack/snack3.jpg',
			'img/snack/snack4.jpg',
			'img/snack/snack5.jpg',
			'img/snack/snack6.jpg',
			'img/snack/snack7.jpg',
			'img/snack/snack8.jpg',
			'img/snack/snack9.jpg',
			'img/snack/snack10.jpg',
			'img/snack/snack11.jpg',
			'img/snack/snack12.jpg'
		]
	)
</script>

<svelte:head>
	<script src="js/jquery-2.1.4.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/mixitup.min.js"></script>
	<script src="js/magnific-popup.min.js"></script>
	<script src="js/main.js"></script>
</svelte:head>

<header class="header-section">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-3">
				<div class="logo">
					<h2 class="site-logo">Queen Snack</h2>
				</div>
			</div>
			<div class="col-lg-8 col-md-9">
				<a href="order" class="site-btn header-btn">Order Snack</a>
				<nav class="main-menu">
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="about">About Me</a></li>
						<li><a href="snack">Snack</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
	<div class="nav-switch">
		<i class="fa fa-bars"></i>
	</div>
</header>

<main>
	<slot></slot>
</main>

<footer class="footer-section text-center">
	<div class="container">
		<h2 class="section-title mb-5">Let’s order Snack</h2>
		<a href="order" class="site-btn">Order!</a>
		<div class="social-links">
			<a href="e"><span class="fa fa-pinterest"></span></a>
			<a href="e"><span class="fa fa-linkedin"></span></a>
			<a href="e"><span class="fa fa-instagram"></span></a>
			<a href="e"><span class="fa fa-facebook"></span></a>
			<a href="e"><span class="fa fa-twitter"></span></a>
		</div>
	</div>
</footer>