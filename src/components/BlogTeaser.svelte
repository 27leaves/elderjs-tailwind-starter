<script>
  export let blog;
  export let helpers;
</script>

  <a href={helpers.permalinks.blog({ slug: blog.slug })} class="block px-6 py-4 my-3 transition rounded-lg bg-slate-50 hover:shadow-md hover:-translate-y-1 no-link">
    <h3>{blog.frontmatter.title}</h3>
    <p class="mb-0">{blog.frontmatter.excerpt}</p>
  </a>
