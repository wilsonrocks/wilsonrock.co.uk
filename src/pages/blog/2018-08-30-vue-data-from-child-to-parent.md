---
layout: post
title: "How to get data from a Vue child to a parent"
category: tech
tags: [javascript, vue, frontend]
---
I haven't found the perfect Stack Overflow answer or tutorial on how to solve this problem, so I thought I would attempt to write it as simply as possible.

## Problem
You have a child component, which is an HTML input of some sort - in this case a `<select>` element.

    <template>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
    </template>

    <script>
    export default {
      name: 'Chooser',
    }
    </script>

The `<chooser>` component is in a parent component.

    <template>
      <chooser/>
    <template>

    <script>
      import Chooser from './components/Chooser.vue'
      export default {
        components: {
          Chooser
        },
        data: () => {
          selected: '',
        },
      }
    </script>

And you want to have the value that is selected by `<chooser>` stored in the `selected` property of `data`.

It seems reasonable enough, but I found it tricky. No one site seemed to give me all of the answer I needed.

## Solution

* In `<chooser>`, you need to set the `v-on:change` attribute on the `<select>` element to `e => $emit('update', e.target.value)`.
      v-on:update="update"
* In your parent component, you need to set the `v-on:update` attribute on the `<chooser>` component to `updateSelected` which is the name of a function that updates the `selected` you define in the `methods` property of your `export default` statement.

* So it looks like this:

### Chooser
    <template>
      <select
        v-on:change="e => $emit('update', e.target.value)"
      >
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </template>

    <script>
      export default {
        name: 'Chooser',
      }
    </script>

### Parent

    <template>
      <chooser
        v-on:update="updateSelected"
      />
    <template>

    <script>
      import Chooser from './components/Chooser.vue'
      export default {
        components: {
          Chooser
        },
        data: () => ({
          selected: ''
        }),
        methods: {
          updateSelected (value) {
            this.selected = value;
          },
        }
      }
    </script>

## How it works

* The `v-on:change` attribute calls the function inside the string when the `<select>` element changes value. You could put any event here, including custom ones. We make a custom event by using `$emit` and we give it the name `update`. It could be anything here.
* We listen for this even in the parent. That's what the `v-on:update` part does. If we called our custom event something else, we'd have to change this. When the `update` custom event we made happens, the function inside the string is called. It works just like it did in our `<chooser>` component, except:
  * the function isn't defined inline
  * `updateSelected` is a method of the component, and is therefore defined in the `export default` section under methods.
We have to use the `this` keyword so that we use the correct context and update the right thing.

## Thoughts

* I'm still new to Vue, so there may be other, and possibly better ways of doing this, but it answered my question, so I thought I'd stick it on here.
* Vue seems like an interesting framework, and I'm looking forward to learning more. There seems to be less flexibility than React, but it comes with really cool [Single File Components](https://vuejs.org/v2/guide/single-file-components.html) which I've used in this post.