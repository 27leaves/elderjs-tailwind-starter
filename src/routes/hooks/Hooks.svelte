<script>
  import HookDetail from '../../components/HookDetail.svelte';

  export let data;
  export let request;
  export let settings;
</script>

<style>
</style>

<svelte:head>
  <title>{data.hook.hook} Hook Interface: Elder.js Example Project</title>
  <meta name="description" content="Hook details for {data.hook.hook} in Elder.js from the Hook Interface" />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

<div class="container py-6 mx-auto">

<h1>Elder.js Hook: {data.hook.hook}</h1>

<HookDetail {...data} />

<img
  src="https://elderguide.com/images/elderjs-hooks-v100.png"
  alt="Elder.js hook Lifecycle"
  class="max-w-full lg:max-w-md" />

</div>
