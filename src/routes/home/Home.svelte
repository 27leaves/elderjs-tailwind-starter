<script>
  import HookDetail from '../../components/HookDetail.svelte';
  import BlogTeaser from '../../components/BlogTeaser.svelte';
  import Clock from '../../components/Clock.svelte';
  export let data, helpers, settings;

  // add permalinks to the hook list so we can link to the posts.
  const hooks = data.hookInterface.map((hook) => ({
    ...hook,
    link: helpers.permalinks.hooks({ slug: hook.hook.toLocaleLowerCase() }),
  }));
</script>

<style>

</style>

<svelte:head>
  <title>Elder.js Template: Home</title>
  <meta name="description" content="Elder.js Starter Template: It's A Tutorial Too!" />
  <link href="{settings.origin}/" rel="canonical" />
</svelte:head>
{#if data.testingHooks}
  <div class="banner">
    <p class="text-xl">Testing hooks worked</p>
    {#if data.cpus}
      <p class="text-xl">If you use Elder.js to build your site, it will span all {data.cpus.length} cpus listed below:</p>
      <ol>
        {#each data.cpus as cpu}
          <li>{cpu.model}</li>
        {/each}
      </ol>
    {/if}
  </div>
{/if}

<div class="w-full bg-slate-100">
  <div class="container py-6 mx-auto">
    <h1 class="mb-2">Hello World: Welcome to Elder.js!</h1>
    <p>Woot! You've got Elder.js installed. This template is designed to show you the ropes of how things work.</p>

    <p>
      We've tried to make this site a bit of a tutorial, but be sure to check out the full <a
      href="https://elderguide.com/tech/elderjs/">Elder.js docs.</a>
    </p>

    <p>
      Enjoy playing around with Elder.js and, if you encounter a problem, open a GitHub issue on <a
      href="https://github.com/Elderjs/template/issues">Elder.js</a> (or <a
      href="https://github.com/27leaves/elderjs-tailwind-starter/issues">elderjs-tailwind-starter</a> if you think it's an issue with the template).
    </p>
  </div>
</div>
<div class="container pt-6 mx-auto">
  <div class="">
    {#each data.markdown.blog as blog}
    <BlogTeaser {blog} {helpers} />
    {/each}
  </div>
</div>

<div class="container pb-6 mx-auto">
  <div class="prose prose-slate max-w-none">
<div class="about">
  <h2>About This Template</h2>
  <p>
    This example project is made up of 5 routes; you can find them by looking within the <span class="code"
      >./src/routes/</span> folder. They are:
  </p>

  <ul>
    <li><a href={helpers.permalinks.simple({ slug: 'simple' })}>Simple</a> - A barebones route.</li>
    <li>Home - The page you are on.</li>
    <li>
      Blog - Linked from above, but you can also see a blog post by checking out: <a
        href={helpers.permalinks.blog({ slug: 'getting-started' })}>'Getting Started'</a> .
    </li>
    <li>
      Hooks - These are how you customize Elder.js. Details are below, and we've used the <span class="code"
        >hookInterface</span> to build out dedicated pages for each hook as well.
    </li>
    <li>
      An SSR route which only works when Elder.js is in SSR mode. (<span class="code">npm run dev</span> or
      <span class="code">npm run serve</span>)
    </li>
  </ul>

  <p>
    The goal in showing off these 3 routes is to give you enough of an example to see how a site is built with Elder.js
    (but one that isn't too complex to overwhelm you).
  </p>
  <h3>Development Environment:</h3>
  <p>
    If you ran <span class="code">npm start</span> to see this page this is the same as
    <span class="code">npm run dev</span> which will:
  </p>
  <ol>
    <li>
      Spawn a dev server on the port defined in your <span class="code">.env</span>. (Pro-tip: add
      <span class="code">.env</span> to your .gitignore now)
    </li>
    <li>It will reload that dev server when changes are detected including rebundling your Svelte templates.</li>
  </ol>

  <h3>Other NPM commands</h3>
  <ol>
    <li>
      <code>npm run build</code>: will statically generate this same site so that it can be deployed with a static site
      host such as Netlify, Cloudflare Pages, Vercel, or S3.
    </li>
    <li>
      <code>npm run serve</code>: will start the server in production SSR mode which can be used with cluster mode or
      PM2 to host Elder.js in a SSR fashion.
    </li>
  </ol>
</div>

<div class="flex flex-col hydrate md:flex-row">
  <div class="md:w-2/3 left">
    <h2>Partial Hydration:</h2>
    <p>Svelte.js shines at bringing interactivity to otherwise static websites.</p>
    <p>
      By default, Elder.js statically renders Svelte components, only mounting them in the browser when it encounters a
      Svelte component which includes the
      <!-- Note: the actual prop is 'hydrate-client={}' but Svelte doesn't render empty objects-->
      <code>hydrate-client={JSON.stringify({})}</code> prop.
    </p>
    <p>
      This means that if a page doesn't need dynamic JS it will have 0KB of JS code resulting in faster loading, lighter
      weight websites.
    </p>
    <p>
      The <a href="https://svelte.dev/examples#clock">clock</a> on this page is an example of a component that has been hydrated
      on the client.
    </p>
    <p>This approach makes it easy to build SEO friendly websites, with Svelte for interactivity when needed.</p>
    <p>
      By default all hydrated components are lazy loaded with an intersection observer, but you can have full control
      over how hydration is handled via <a href="https://elderguide.com/tech/elderjs/#hydration-options"
        >several different hydration options</a
      >.
    </p>
  </div>
  <div class="flex justify-center align-middle right md:w/1/3">
    <Clock hydrate-client={{}} />
  </div>
</div>

<h2>The Elder.js Hook Interface</h2>

<p>
  Once you've digested the guides above and understand how to handle client hydration, we encourage you to explore the
  hook interface below.
</p>
<p>
  Hooks are the primary way to customize Elder.js and the list below outlines exactly what each hook can be used for.
</p>
<div class="flex justify-center">
  <img
  src="https://elderguide.com/images/elderjs-hook-lifecycle-v13.png"
  alt="Elder.js hook Lifecycle v1.3"
  class="max-w-full lg:max-w-md" />
</div>
<ul>
  {#each hooks as hook, i}
    <li class="overview">
      {#if hook.link && hook.link.length > 0}<a href={hook.link}>{hook.hook}</a>{:else}{hook.hook}{/if}
      : {hook.context}
    </li>
    <!-- <HookDetail {hook} {i} hookEntityDefinitions={data.hookEntityDefinitions} /> -->
  {/each}
  </ul>
</div>
</div>
