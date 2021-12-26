---
title: 'Starting a blog with elderjs and TailwindCSS'
excerpt: 'As everyone mentions that you should have your own blog as a developer I thought why not building one with elderjs?'
author: Johannes Herrnegger
# slug: common-uses-for-elderjs
---

I'm mostly a react-native developer nowadays. As [everyone](https://lo-victoria.com/why-every-developer-should-start-blogging) mentions that you should have your own blog as a developer I thought why not? And why not documenting and testing alongside the development of the blog itself?

Starting off with the [official getting started](https://elderguide.com/tech/elderjs/), I initialized the project:
```zsh
npx degit Elderjs/template elderjs-app
cd elderjs-app
yarn start
```

Basically that's a great first start. Opening `localhost:3000` already shows the first demo content.

## Creating a first blog entry
So now it's time to create the first entry. It's the one page you see right now :)
````md
# src/routes/blog/starting-a-blog-with-elderjs.md
---
title: 'Starting a blog with elderjs'
excerpt: 'As everyone mentions that you should have your own blog as a developer I thought why not building one with elderjs?'
author: Johannes Herrnegger
---

I'm mostly a react-native developer nowadays. ...
````

## Adding Syntax highlighting
As this blog will probably be focused on coding, first I wanted to enable syntax highlighting. First I activated `useSyntaxHighlighting`.
```js
// ./elder.config.js
'@elderjs/plugin-markdown': {
  routes: ['blog'],
  useSyntaxHighlighting: {
    theme: 'vitesse-light', // available themes: https://github.com/shikijs/shiki/blob/main/docs/themes.md - try dark-plus or github-light
    // theme is the only option available - for now.
  },
  useElderJsPluginImages: true, // if you are using the @elderjs/plugin-images the plugin replace all markdown images with the {{picture src="" alt="" /}} shortcode.
},
```
Then I removed the `background-color` and activated scrollbars if the content is too wide for the browser:
```css
/* File: ./assets/style.css */
.code,
code {
  padding: 0 0.25rem;
  border-radius: 3px;
  margin-right: 0.5rem;
  font-family: monospace;
  display: inline-block;
}

/* shiki is the markdown formatter */
.shiki {
  overflow-x: auto;
}
```

## Adding TailwindCSS
https://github.com/nickreese/elderjs-tailwind
https://github.com/meigo/elderjs-tailwind
```shell
npm install -D tailwindcss
yarn add -D typescript node-sass tailwindcss postcss-load-config
npx tailwindcss init
```

I have no idea what I'm doing

```json
/* package.json */
{
  "scripts": {
    /* add this line: */
    "tailwind": "npx tailwindcss -i ./src/style.css -o ./assets/style.css"
  }
}
```

And

```js
/* src/hooks.js */
const hooks = [
  // add this before the `copyAssetsToPublic` hook
  {
    hook: 'bootstrap',
    name: 'runTailwind',
    description:
      'Generates style.css for tailwind initialization',
    run: ({ settings }) => {
      execSync('npm run tailwind');
    },
  },
]
```
