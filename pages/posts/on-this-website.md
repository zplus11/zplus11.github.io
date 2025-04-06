---
title: On this Website
date: 17 December, 2024
---

After looking at so many personal websites, I finally set my mind on
designing one for myself as well. And, here it is. I have kept it very
plain and simple, with merely an introduction of mine along with a blog
where I will talk about the things I like.

Being a simple website, I have resorted to implementing it in simple
ways. I wrote [index.html](../index.html) file as well as
[blog.html](blog.html) manually, whereas I created a pandoc template for
the blog-posts. It is available at [template.html](template.html) which
contains the boiler-plate code (including all CSS styling) along with
variables that are to change per post. These include

1.  title of the post,
2.  date on which the post is written, and
3.  content of the post.

In template.html, these are marked with respectively `$title$`,
`$date$`, and `$body$`. The former two are supplied via the yaml section
in the markdown file, whereas the latter is probably a standard variable
for content of the markdown file. The yaml section of this post contains
the following:

    ---
    title: On This Website
    date: 16 December, 2024
    ---

After writing my markdown file, I merely run the following command:

    pandoc on-this-website.md --template template.html -o on-this-website.html

which (if I have pandoc installed) will create `on-this-website.html`
ready to be imported in my website. The list of blogs is printed to the
[blog.html](blog.html) page (after being filtered by tag) using
javascript.

Here is to hoping that I continue writing about the things I like or do.