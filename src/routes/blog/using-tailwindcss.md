---
title: 'Using TailwindCSS'
excerpt: 'Using tailwind with elderjs'
author: Johannes Herrnegger
date: '2021-12-26T00:0:00.000Z'
# slug: common-uses-for-elderjs
---

This template is based on the [original Elder.js template](https://github.com/Elderjs/template) and enhanced so you can use [TailwindCSS v3](https://tailwindcss.com/).

## Use tailwind inline
Just use tailwind classes in your `.svelte`, `.html` and `.md` files.

```html
<div class="p-2">
  <div class="inline-flex items-center p-2 text-sm leading-none bg-white rounded-full shadow text-slate-600">
    <span class="inline-flex items-center justify-center h-6 px-3 text-white rounded-full bg-slate-600 text-">Example</span>
    <span class="inline-flex px-2">This is an example component</span>
  </div>
</div>
```

<div class="p-2">
  <div class="inline-flex items-center p-2 text-sm leading-none bg-white rounded-full shadow text-slate-600">
    <span class="inline-flex items-center justify-center h-6 px-3 text-white rounded-full bg-slate-600 text-">Example</span>
    <span class="inline-flex px-2">This is an example component</span>
  </div>
</div>

## Use tailwind globally
To add global styles, you can edit the `src/style.css`. Make sure you consider the [tailwind docs](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply) for best practices.
