---
path: Birthday Message
date: 2020-06-06T01:22:55.506Z
title: Birthday Message
description: I hope every day puts a smile on your face, and whatever you wish for will come true. I hope you never forget me, as I will always remember you. Warm wishes for your Birthday. 
---
![Great Gatsby](/../assets/great2.jpg "Great Gatsby")

## Have a look at a small video on this special occasion

<iframe width="640" height="360" src="https://www.youtube.com/embed/eg5sCr08kjE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Gatsby Plugins

From [@cwgw](https://github.com/cwgw):

So digging a little deeper, it looks like Gatsby only looks for "subplugins" at one specific path, `options.plugins`.

`gatsby-plugin-mdx` uses `options.gatsbyRemarkPlugins`. This is fine for transforming markdown as the plugin handles that itself, but Gatsby-specific api files like `gatsby-browser.js` don't get loaded because Gatsby doesn't know they exist.

If you try this…

```javascript
{
  resolve: 'gatsby-plugin-mdx',
  options: {
    gatsbyRemarkPlugins: [ `gatsby-remark-images` ],
    plugins: [ `gatsby-remark-images` ],
  }
},
```

…everything works as it should.

