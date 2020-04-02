<script>
	import {getContext} from 'svelte'

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
		<!-- <div class="container">
			<ul class="portfolio-filter controls">
				<li class="control" data-filter="all">All</li>
				<li class="control" data-filter=".web">Web design</li>
				<li class="control" data-filter=".digital">Digital design</li>
				<li class="control" data-filter=".rened">3D Renedering</li>
				<li class="control" data-filter=".brand">Brand Identity</li>
			</ul>
		</div>                        -->
		<div class="container-fluid p-md-0 ">
			<div class="row portfolios-area">
				<div class="mix col-lg-6 col-md-6 web">
					<a href="{image_snack[0]}" class="portfolio-item set-bg" data-setbg="{image_snack[0]}" style="background-image: url('{image_snack[0]}')">
						<div class="pi-inner">
							<h2>+ Lihat Snack</h2>
						</div>						
					</a>
				</div>
				
				<div class="mix col-lg-6 col-md-6 web">
					<a href="{image_snack[1]}" class="portfolio-item set-bg" data-setbg="{image_snack[1]}" style="background-image: url('{image_snack[1]}')">
						<div class="pi-inner">
							<h2>+ Lihat Snack</h2>
						</div>						
					</a>
				</div>

				<div class="mix col-lg-4 col-md-6 web">
					<a href="{image_snack[2]}" class="portfolio-item set-bg" data-setbg="{image_snack[2]}" style="background-image: url('{image_snack[2]}')">
						<div class="pi-inner">
							<h2>+ Lihat Snack</h2>
						</div>						
					</a>
				</div>
				<div class="mix col-lg-4 col-md-6 digital">
					<a href="{image_snack[3]}" class="portfolio-item set-bg" data-setbg="{image_snack[3]}" style="background-image: url('{image_snack[3]}')">
						<div class="pi-inner">
							<h2>+ Lihat Snack</h2>
						</div>						
					</a>
				</div>
				<div class="mix col-lg-4 col-md-6 rened">
					<a href="{image_snack[4]}" class="portfolio-item set-bg" data-setbg="{image_snack[4]}" style="background-image: url('{image_snack[4]}')">
						<div class="pi-inner">
							<h2>+ Lihat Snack</h2>
						</div>						
					</a>
				</div>
			</div>
		</div>
	</section>
</div>

