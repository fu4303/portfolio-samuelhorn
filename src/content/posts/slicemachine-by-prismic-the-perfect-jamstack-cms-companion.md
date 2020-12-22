---
title: Slicemachine by Prismic, the perfect Jamstack CMS companion
date: 2020-11-25
published: true
category: 'Slicemachine'
canonical_url: false
description: "When working with the Jamstack there are several options for a headless CMS. My absolute favourite is Prismic, and with their activly developed Slicemachine it gets even better."
color: '#5163ba'
---

## So, why Prismic?

<p class="intro">When working with the Jamstack there are several options for a headless CMS. My absolute favourite is <a href="https://prismic.io" rel="noopener" target="_blank">Prismic</a>, and with their activly developed Slicemachine it gets even better.</p>

I recently discovered that I tried Prismic for the first time as early as five years ago, but for some reason I did not start using it then. It is only now in the last six months that I have looked into it more seriously. It probably has to do with the fact that we have gradually started a shift from WordPress to Jamstack at work. 🙏🏻

What I really love about Prismic, besides their pricing model, their monthly product meet-ups, and their brand transparency is the slices feature.

As a professional WordPress developer for many years, I have built countless sites with the help of [Advanced Custom Fields](https://www.advancedcustomfields.com/), where I built sections (or modules) with their "Flexible content field", all forming small parts of a page, which the content editor then put together into a whole page in wp-admin. So for me, this Prismic thing with slices felt like a nobrainer when I first saw it, that's how you design and build the web today, with sections and components. It's really strange that this feauture is'nt more common in the headless CMS space.

## Slices, what is it?

A slice is Prismics way of thinking of a part of a page. Like they say it: "Define dynamic zones to allow your content writers to compose richer page layouts.". Exactly what I'm used to with Advanced custom fields then. Great!

For a more in depth view on how the slices work, you can have a look here:

`youtube:https://www.youtube.com/watch?v=TmnoGiyGNLo`

## Slicemachine

So, slices are nice as hell, but kind of what I already take for granted in a modern CMS, but what really makes it tick in my developer brain is Slicemachine. It's a tool to make it super flexible to develop slices and which works together with my favorite framework [Nuxtjs](https://nuxtjs.org/) ([Nextjs](https://nextjs.org/) also, and more in the future).

Slicemachine allows you to bootstrap a new Prismic repository via Prismic's CLI, and easily start creating slices directly from the command line. Wow!

It ships with a simple UI for editing the content model of each slice, and sync that model to your Prismic repo. 

But there is more good stuff, like content mocks and Storybook. 🥰

### Mocks

So, besides making it easy to create slices, and save the content model as json for syncing, slicemachine also creates mocks for you.

For each slice you make, a mock json-file is created along the slice, wich contains mock data for each field in your slice. It can look like this:

```json
[{
  "id": "default-slice",
  "name": "Default slice",
  "docURL": "...",
  "version": "sktwi1xtmkfgx8626",
  "description": "TestSlice",
  "primary": {
    "title": [{
      "type": "heading1",
      "text": "This is where it all begins...",
      "spans": []
    }],
    "description": [{
      "type": "paragraph",
      "text": "start by editing this slice from inside the SliceMachine builder!",
      "spans": []
    }]
  },
  "slice_type": "test_slice"
}]
```

So, if you add an image field in the UI, somethin like this gets added:

```json
...
"image": {
  "dimensions": { "width": 1600, "height": 800 },
  "alt": "Placeholder image",
  "copyright": null,
  "url": "https://source.unsplash.com/JspLKUauwSI/1600x800"
},
...
```

This is really nice, because it means you can focus on developing without worrying about going to Prismics dashboard an manually add content. The content is there when yu create the model.

As for now the mocks data iis pretty basic. For example if you create repeatable item you can't decide how many items gets added to the mock array. But the development in this area is super active, and you could participate and discuss [here](https://github.com/prismicio/slice-machine). And you can always create your own custom mock file, where you specify exactly what you need.

### Storybook

Another really nice feature with Slicemachine is that you get [Storybook](https://storybook.js.org/) integrated out of the box. This means you don't even need to run your local development when developing. Instead you can just run Storybook and develop each slice independently. This helps you focus on getting everything in that slice right, and in the end you end up with a full documentation for your components. Awesome stuff.

## #SliceContest

Recently Prismic held the [#SliceContest](https://twitter.com/hashtag/SliceContest?src=hashtag_click), a fun and rewarding experience where I participated. In the contest each participant created an open source library of slices. I made this to learn more about Slicemachinee and Storybook. This resulted in a MIT-licenced [git repository](https://github.com/samuelhorn/pixelslices), a [demo](https://pxlsls-demo.samuelhorn.com) and a [Storybook](https://pxlsls-story.samuelhorn.com). (I won a PS5 🍻)

I highly encourage you to try Slicemachine, and to see what it's all about. To get started, read more at [slicemachine.dev](https://www.slicemachine.dev/)

