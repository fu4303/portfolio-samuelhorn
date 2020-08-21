---
title: Leverage vertical rhythm with Tailwind & Tailbase
date: 2020-08-21
published: true
category: 'Typography'
canonical_url: false
description: "Typographic hierarchy and vertical rhythm are super important. If you use tailwind, I have made it easier to set up a good foundation by building a generator that I call Tailbase. It's totally free to use and it's open-source."
---

## TLDR

Typographic hierarchy and vertical rhythm are super important. If you use tailwind, I have made it easier to set up a good foundation by building a generator that I call Tailbase. It's totally free to use and it's open-source. You can try it [here](https://tailbase.samuelhorn.com) or contribute [here](https://github.com/samuelhorn/tailbase).

## Background

Ever since I started with web development about 15 years ago, I have been passionate about grids, typography and hierarchy. I have built and used countless systems to calculate font-size, line-heigt using SCSS, JS and so on. 

I will not write an essay about why things like typographic hierarchy and vertical rhythm, because many others have described it better than I could ever do. But if you want to dig deeper, I would recommend these articles on [vertical rhythm](https://zellwk.com/blog/why-vertical-rhythms/) and [modular scale](https://blog.prototypr.io/defining-a-modular-type-scale-for-web-ui-51acd5df31aa).

In the more recent years I have fallen completely in love with the JAM-stack. It was my interest for the JAM-stack that further led me to [Tailwind CSS](https://tailwindcss.com/). A framework that works incredibly well with components, which is often exactly how you would build things in a modern static site generator, like [Gridsome](https://gridsome.org/) or [Gatsby](https://www.gatsbyjs.com/) for example.

Tailwind makes use of a config file where you define things like colors, font-size, distances and so on - a single source of truth. Then it will build utility classes for you to use in your markup. This is a very neat setup for sure, but getting a good balance between font-size, line-height and spacing is not that easy when you have no reference. This is why I created [Tailbase](https://tailbase.samuelhorn.com).

## So what is Tailbase and how to use it?

If you want a better understanding of how it works when implemented on a real page, just click the grid icon next to the menu icon in the header to turn on the grid overlay. The app itself is really pretty simple. You just give it a base font-size, a font-scale ande grid-size. Let's go through them one by one.

### Font-size

The font-size setting is used to create a base. This is the value that gets multiplied by the font-scale to create different font-sizes. I tend to set this to the font size i would like my body text to have on pretty small screens.

### Font-scale

This value is used to multiply the font-size to create different text sizes for the Tailwind config. Experiment with different values to create a scale you like.

### Grid-size

The grid-size sets the height of each row in the grid. When the line-height for each text size gets calculated, it is done based on this value. This is done to ensure that the height of the text always extends over one or more full lines.

## Wrapping up

So, not a very long intro to Tailbase i know, but I think the app is kind of self explanatoy. If you have any questions about how to use Tailbase, just [respond to this post](https://twitter.com/intent/tweet?via=pixelcrook&text=Leverage%20vertical%20rhythm%20with%20Tailwind%20%26%20Tailbase&url=https://samuelhorn.com/leverage-vertical-rhythm-with-tailwind-and-tailbase/) on Twitter. And if you have any suggestions or improvements that you think qoudl make it better, just open a [PR](https://github.com/samuelhorn/tailbase/pulls) on Github.

