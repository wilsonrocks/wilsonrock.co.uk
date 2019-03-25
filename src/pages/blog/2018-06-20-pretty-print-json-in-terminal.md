---
layout: post
title: "Pretty Print JSON in the command line"
category: tech
tags: toptips python JSON
---

Sometimes you just want to see the output from an API call in the terminal. And it comes out as a lengthy mess of text, commas, and curly brackets.

There's probably loads of ways of doing something with this, most of which will use the `|` pipe operator to modify and print curl's output. As most people will have python installed already, this is a good tip:

    curl [URL] | python -m json.tool

(I got it from [here](https://stackoverflow.com/a/1920585/4699448))

You could alias `python -m json.tool` to something else by typing `alias prettyJSON='python -m json.tool'`. You will need to add this line to your `.bashrc` (or equivalent if you're using a different shell) to make it permanent though.