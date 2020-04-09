<svelte:head>
	<title>About</title>
</svelte:head>

<script>
	import {getContext} from 'svelte'
	import {footer} from '../store'
	footer.set(true)

	let image_snack = getContext('image_snack')
</script>

<style>
	.section1{
		margin-top: 5%;
	}

	.milestone{
		margin-top: -10%;
	}
</style>

<div class="wrap">
	<section class="page-section section1">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<h2>Queen Snack</h2>
					<p>Queen Snack berdiri bulan Maret 2020 . 
Queen Snack Menjual aneka snack atau cemilan. Beralamatkan di Desa Grajagan Dusun Curahjati RT 01/ RW 06 Kecamatan Purwoharjo Kabupaten Banyuwangi.
Keunggulan Cemilan dari Queen Snack selain enak dan harganya terjangkau,isi setiap kemasan snack banyak. Ada banyak varian snack yang ada di Queen Snack.</p>
					<div class="row mt-5">
						<div class="col-md-4">
							<div class="milestone">
								<h2>{image_snack.length}<span>Snack</span></h2>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-5 offset-lg-1">
					<figure class="pic-frame">
						<img src="img/snack/about_snack.jpeg" alt="">
					</figure>
				</div>
			</div>
		</div>
	</section>
</div>