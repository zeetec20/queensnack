<script>
	import {getContext} from 'svelte'
	import {footer} from '../store'
	footer.set(true)

	let image_snack = getContext('image_snack')
</script>

<svelte:head>
	<title>Queen Snack</title>

	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,600,600i,700" rel="stylesheet">
	<link rel="stylesheet" href="css/bootstrap.min.css"/>
	<link rel="stylesheet" href="css/font-awesome.min.css"/>
	<link rel="stylesheet" href="css/magnific-popup.css"/>
	<link rel="stylesheet" href="css/style.css"/>
</svelte:head>

<div class="wrap">
	<section class="intro-section">
		<div class="container text-center">
			<div class="row">
				<div class="col-xl-10 offset-xl-1">
					<h2 class="section-title">Selamat datang di Queen Snack, tempat mencari <span>Snack</span> terbaik.</h2>
				</div>
			</div>
		</div>
	</section>

	<section class="portfolio-section">
		<div class="container-fluid p-md-0 ">
			<div class="row portfolios-area">
				<div class="mix col-lg-6 col-md-6 web">
					<a href="{image_snack[0].image}" class="portfolio-item set-bg" data-setbg="{image_snack[0].image}" style="background-image: url('{image_snack[0].image}')">
						<div class="pi-inner">
							<h2>+ Lihat Snack</h2>
						</div>						
					</a>
				</div>
				
				<div class="mix col-lg-6 col-md-6 web">
					<a href="{image_snack[1].image}" class="portfolio-item set-bg" data-setbg="{image_snack[1].image}" style="background-image: url('{image_snack[1].image}')">
						<div class="pi-inner">
							<h2>+ Lihat Snack</h2>
						</div>						
					</a>
				</div>

				<div class="mix col-lg-4 col-md-6 web">
					<a href="{image_snack[2].image}" class="portfolio-item set-bg" data-setbg="{image_snack[2].image}" style="background-image: url('{image_snack[2].image}')">
						<div class="pi-inner">
							<h2>+ Lihat Snack</h2>
						</div>						
					</a>
				</div>
				<div class="mix col-lg-4 col-md-6 digital">
					<a href="{image_snack[3].image}" class="portfolio-item set-bg" data-setbg="{image_snack[3].image}" style="background-image: url('{image_snack[3].image}')">
						<div class="pi-inner">
							<h2>+ Lihat Snack</h2>
						</div>						
					</a>
				</div>
				<div class="mix col-lg-4 col-md-6 rened">
					<a href="{image_snack[4].image}" class="portfolio-item set-bg" data-setbg="{image_snack[4].image}" style="background-image: url('{image_snack[4].image}')">
						<div class="pi-inner">
							<h2>+ Lihat Snack</h2>
						</div>						
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="portfolio-section">
		<div class="container-fluid p-md-0 w-80">
			<h1 style="width: 100%; text-align: center; font-size: 50px; margin-top: 50px">Testimoni</h1>
			
			<div class="row">
				<div class="cog-lg-11 col-md-4 m-auto">
					<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="margin: auto; margin-top: 20px">
						<ol class="carousel-indicators">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						</ol>
						<div class="carousel-inner w-80">
							<div class="carousel-item active">
								<img class="d-block" src="img/testimoni/testimoni1.jpeg" alt="First slide">
							</div>
							<div class="carousel-item">
								<img class="d-block" src="img/testimoni/testimoni2.jpeg" alt="First slide">
							</div>
							<div class="carousel-item">
								<img class="d-block" src="img/testimoni/testimoni3.jpeg" alt="First slide">
							</div>
						</div>
						<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

