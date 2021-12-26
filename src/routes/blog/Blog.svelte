<script>
  export let data, request, settings; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;
</script>

<style>

</style>

<svelte:head>
  <title>{frontmatter.title}</title>
  <meta name="description" content={frontmatter.excerpt} />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

<div class="container pt-6 mx-auto">
  {#if html}
  <article class="prose prose-slate max-w-none">
    <h1>{frontmatter.title}</h1>
    {#if frontmatter.author}<small>By {frontmatter.author}</small>{/if}
    {@html html}
  </article>
  {:else}
    <h1>Oops!! Markdown not found!</h1>
  {/if}
</div>
