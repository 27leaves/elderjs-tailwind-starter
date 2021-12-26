<script>
  // import style from '../../assets/style.css';
  // import /style from '../tailwind.css';
  export let templateHtml, settings, data, request;
  const navLinks = [
    ['Home', '/'],
    ['Simple', '/simple/'],
  ];
</script>

<style global lang="postcss">

</style>

<svelte:head>
  <!-- You can remove this balloon it is just for hover effects -->
  <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css" />
  <link rel="stylesheet" href="/style.css" media="all" />
</svelte:head>
<div class="fixed z-50 w-full h-12 bg-white shadow-sm">
  <nav class="container flex justify-between mx-auto">
    {#if request.route !== 'home'}
      <a href="/" class="flex items-center h-12 px-3 py-2 font-medium text-gray-700 hover:bg-slate-200 hover:text-gray-900">&lt; Home</a>
    {:else}
      <div></div>
    {/if}
    <div class="flex justify-end">
      {#each navLinks as [title, url]}
        <a href={url} class="flex items-center h-12 px-3 py-2 font-medium text-gray-700 hover:bg-slate-200 hover:text-gray-900">{title}</a>
      {/each}
    </div>
  </nav>
</div>
<div class="pt-12">
  {@html templateHtml}
</div>
<div class="w-full bg-white bg-slate-100">
  <div class="container p-6 mx-auto text-center">Built with ❤ and <a href="https://elderguide.com/tech/elderjs/">Elder.js</a></div>
</div>
