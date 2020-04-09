<svelte:head>
    <title>Snack</title>
</svelte:head>

<script>
    import {getContext} from 'svelte'
	import {footer} from '../../store'
	footer.set(true)

    let image_snack = getContext('image_snack')
</script>

<style>
    .portfolio-section{
        padding: 8%;
    }

    .portfolios-area{
        width: 100% !important;
        margin: auto !important;
        margin-top: -5% !important;
    }

    a{color: unset;}
</style>

<div class="wrap">
	<!-- portfolio section start -->
	<section class="portfolio-section pt100">
		<div class="container">
			
		</div>                       
		<div class="container-fluid p-0">
            <div class="col-lg-6">
                <div class="portfolio-intro">
                    <h2 class="section-title mb-5">Selamat datang di Queen Snack, tempat mencari <span>Snack</span> terbaik.</h2>
                </div>
            </div>
		</div>
	</section>
    <div class="container-fluid p-0 galery">
        <div class="row portfolios-area">
            {#each image_snack as snack}
                <div class="mix col-md-6 col-lg-3 rened">
                        <a href="{snack.image}" class="portfolio-item pi-style2 set-bg" data-setbg="{snack.image}" style="background-image: url('{snack.image}'); height: 358px;">
                            <div class="pi-inner">
                                <h2>{snack.name}</h2>
                            </div>						
                        </a>
                        <div class="portfolio-meta">
                            <h2><a href="snack/{`${snack.name}`.toLowerCase().replace(/ /g, '-')}">Order. {snack.name}</a></h2>
                        </div>
                </div>
            {/each}
        </div>
    </div>
	<!-- portfolio section end -->
</div>