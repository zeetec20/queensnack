<script context="module">
	export async function preload(page, session) {
		return {page}
	}
</script>

<script>
	import {setContext, onMount} from 'svelte'
	import {footer} from '../store'
	export let page
	
	setContext(
		'image_snack', 
		[
			{
				image: 'img/snack/snack1.jpg',
				name: 'Coco Crunch'
			},
			{
				image: 'img/snack/snack2.jpg',
				name: 'Opale Medan'
			},
			{
				image: 'img/snack/snack3.jpg',
				name: 'Kacang Toba'
			},
			{
				image: 'img/snack/snack4.jpg',
				name: 'Biduran Keju'
			},
			{
				image: 'img/snack/snack5.jpg',
				name: 'Kacang Bima'
			},
			{
				image: 'img/snack/snack6.jpg',
				name: 'Kripik Tepung'
			},
			{
				image: 'img/snack/snack7.jpg',
				name: 'Makaroni Pedas'
			},
			{
				image: 'img/snack/snack8.jpg',
				name: 'Marning Pedas Manis'
			},
			{
				image: 'img/snack/snack9.jpg',
				name: 'Kripik Pangsit'
			},
			{
				image: 'img/snack/snack10.jpg',
				name: 'Potato'
			},
			{
				image: 'img/snack/snack11.jpg',
				name: 'Makaroni Rujak'
			},
			{
				image: 'img/snack/snack12.jpg',
				name: 'Stick'
			}
		]
	)

	setContext(
		'no_hp',
		'' 
	)

	let ready = false
	$: if (ready) {
		page = window.location.pathname;
	}
	onMount(async function () {
		ready = true
	})

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
				<a href="snack" class="site-btn header-btn">Order Snack</a>
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
		{#if $footer}
			<h2 class="section-title mb-5">Let’s order Snack</h2>
			<a href="snack" class="site-btn">Order!</a>
		{/if}
		<div class="social-links">
			<a href="e"><span class="fa fa-pinterest"></span></a>
			<a href="e"><span class="fa fa-linkedin"></span></a>
			<a href="e"><span class="fa fa-instagram"></span></a>
			<a href="e"><span class="fa fa-facebook"></span></a>
			<a href="e"><span class="fa fa-twitter"></span></a>
		</div>
	</div>
</footer>