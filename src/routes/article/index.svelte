<script context="module">
	export async function preload(page, session) {
		const article = await this.fetch('article.json')
		.then(res => res.json())
		return {article}
	}
</script>

<script>
	import {getContext} from 'svelte'
	import {footer} from '../../store'
	footer.set(true)

	export let article

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

<style>
	.button-article{
		background-color: black;
		color: white;
		border-radius: 0;
		border: none;
		min-width: 12%;
	}

	.button-article:hover{
		background-color: black;
		color: white;
	}
</style>

<div class="wrap">
	<section class="intro-section">
		<div class="container text-center">
			<div class="row">
				<div class="col-xl-10 offset-xl-1">
					<h2 class="section-title">Article Queen Snack</h2>
				</div>
			</div>
		</div>
	</section>

	<div class="container pl-5 pr-5">
		{#each article as artlc}
			<div class="card w-100">
				<div class="card-body">
					<h5 class="card-title">{artlc.title}</h5>
					<a href="article/{artlc.slug}" class="btn btn-primary button-article">Read</a>
				</div>
			</div>
		{/each}
	</div>

</div>

