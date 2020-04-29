<script context="module">
	export async function preload(page, session) {
		let article = await this.fetch('article.json')
        .then(res => res.json())
        
        const {slug} = page.params

        article.map(artcl => {
            if (artcl.slug == slug) {
                article = artcl
            }
        })
		return {article, slug}
	}
</script>

<script>
    export let article
</script>

<div class="wrap">
    <div class="container pt-5">
        <h1 class="mb-5">{article[0].title}</h1>
        <div class="content pl-5 pr-5">
            {@html article[0].content}
        </div>
    </div>
</div>