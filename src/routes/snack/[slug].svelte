<script context="module">
    export async function preload(page, session) {
        const {slug} = page.params
        return {slug}
    }
</script>

<script>
    import {getContext} from 'svelte'
	import {footer} from '../../store'
    import {css} from 'emotion'

    export let slug
    
    const image_snack = getContext('image_snack')
    let snack, size
    footer.set(false)
    
    image_snack.map(snck => {
        if (snck.name.toLowerCase().replace(/ /g, '-') == slug) {
            snack = snck
        }
    });

    const cover_snack = css`
        background-image: url('${snack.image}');
    `
    let quantity = 0
</script>

<style>
    .image_snack{
        height: 400px;
        width: 100%;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
        float: left;
    }

    .wrap-snack{
        height: 300px !important;
    }

    .wrap{
        margin-bottom: 20%;
        margin-top: 10%;
    }

    .quantity{
        width: 70px;
        float: left;
    }

    .quantity::-webkit-inner-spin-button,
    .quantity::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
        -moz-appearance: none;
    }

    .button_control_quantity{
        float: left;
        margin: 0.5%;
        margin-right: 0px;
    }

    .title{
        margin-top: 2%;
        margin-bottom: 3%;
    }

    .button-order{
        width: 15%;
        min-width: 100px;
        margin-top: 6%;
    }

    p{
        font-size: 12px;
        width: 100%;
    }

    @media only screen and (max-width: 991px){
        .col-lg-8{
            margin-left: 3%;
        }
    }

    @media only screen and (max-width: 575px){
        .col-lg-8{
            margin-left: 6%;
        }
    }

    .btn-primary{
        background-color: #000000 !important;
    }

    .btn{
        outline: none !important;
        border: none !important;
    }
</style>

<div class="wrap">                  
    <div class="container wrap-snack p-0">
        <div class="row">
            <div class="col-lg-4 col-sm-12">
                <div class="image_snack {cover_snack}">

                </div>
            </div>
            <div class="col-lg-8 col-sm-12 control">
                <div class="row">
                    <h1 class="title">{snack.name}</h1>

                </div>
                <div class="row">
                        <input type="number" value={quantity} class="form-control quantity">
                        <button class="btn btn-primary btn-sm button_control_quantity" on:click={() => quantity += 1}>+</button>
                        <button class="btn btn-primary btn-sm button_control_quantity" on:click={() => quantity == 0 ? '' : quantity -= 1}>-</button>
                </div>
                <div class="row">
                    <select bind:value={size} class="custom-select mb-3 w-25 mt-1">
                        <option value="undefined" selected>Pilih Ukuran</option>
                        {#each snack.price as snck, key}
                            <option value={key}>{snck.size}</option>
                        {/each}
                    </select>
                </div>
                <div class="row">
                    <h3>Total Harga : Rp.{size == 'undefined' || size == undefined ? '0' : snack.price[size].nominal * quantity}</h3>
                </div>
                <div class="row">
                    {#if size != 'undefined' && quantity != 0}
                        <a on:click={el => quantity == 0 ? el.preventDefault() : ''} href="https://api.whatsapp.com/send?phone={getContext('no_hp')}&text={`Saya ingin membeli ${snack.name} ${snack.price[size].size} dengan jumlah ${quantity}`.replace(/ /g, '%20')}" class="btn btn-primary button-order">Order</a>
                    {:else}
                        <button class="btn btn-primary button-order disabled">Order</button>
                    {/if}
                    <p class="mt-1">Untuk melakukan pemesanan anda akan diarahkan ke private message Whatsapp</p>
                </div>
            </div>
        </div>
    </div>
</div>