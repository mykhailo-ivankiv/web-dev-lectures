# awsm.css

[![Build Status](https://travis-ci.org/igoradamenko/awsm.css.svg)](https://travis-ci.org/igoradamenko/awsm.css)
[![GitHub release](https://img.shields.io/github/release/igoradamenko/awsm.css.svg)](https://github.com/igoradamenko/awsm.css/releases)

**awsm.css** is a simple CSS library for [semantic HTML](http://www.w3schools.com/html/html5_semantic_elements.asp), which doesn't require classes, ids, attributes, etc.

Just start to create page with HTML5 tags, link awsm.css and get simple, clean and beautiful markup.
  
Check out [examples](#examples) or sample markup [here](https://github.com/igoradamenko/awsm.css/tree/master/docs)..

..or watch demo video:

[![Demo video](http://igoradamenko.com/github/awsm.css/repo-video.png)](https://www.youtube.com/watch?v=OWhDTiXcWvU)

## Usage

```html
<link rel="stylesheet" href="awsm.min.css">
```

Also don't forget to add viewport info to the `<head>` for adaptation to mobile. Like this:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

And if you want to get beautiful fonts, add “[PT Serif](https://www.google.com/fonts/specimen/PT+Serif)” and “[PT Sans](https://www.google.com/fonts/specimen/PT+Sans)” from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css?family=PT+Sans|PT+Serif:400,400i,700,700i&amp;subset=cyrillic" rel="stylesheet">
```

It also available as the [npm package](https://www.npmjs.com/package/awsm.css), which supports [PostCSS API](#postcss-api).

## Download

Download the latest version here — [awsm.css](https://raw.githubusercontent.com/igoradamenko/awsm.css/master/dist/awsm.css).

Minified — [awsm.min.css](https://raw.githubusercontent.com/igoradamenko/awsm.css/master/dist/awsm.min.css) (≈2 Kb after gzip).

### unpkg

Also you can use unpkg for link latest or exact version of library:
    
```html
<link rel="stylesheet" href="https://unpkg.com/awsm.css/dist/awsm.min.css">
```
    
Get more information about the unpkg CDN on [unpkg.com](https://unpkg.com/).

### PostCSS API

If you install [npm package](https://www.npmjs.com/package/awsm.css), you can use library as PostCSS plugin:

```js
const postcss = require('postcss');
const awsm = require('awsm.css');

postcss([awsm()]).process('a {color: red}').then(result => {
  console.log(result.css); // awsm.css prepends your CSS 
});
```

## Why?

I have to create simple pages in my daily work. Sometimes it's compiled Markdown and sometimes it's pure HTML. I'd like to make them more beautiful without additional classes, ids, etc. So I did it.

## License

awsm.css licensed under [the MIT](http://en.wikipedia.org/wiki/MIT_License).

The MIT License places almost no restrictions on what you can do with this lib. You are free to use it in commercial projects as long as the copyright is left intact.

## Examples

[Website for this repo](https://igoradamenko.github.io/awsm.css/) uses awsm.css. Check this out. Also there are examples of [blog](https://igoradamenko.github.io/awsm.css/examples/blog/) and [homepage](https://igoradamenko.github.io/awsm.css/examples/homepage/) built with awsm.css.

If you use the library in your project, feel free to [open issue](https://github.com/igoradamenko/awsm.css/issues/new) and we will add your url in this list :)

## Got questions? Any troubles?

If you have questions or general suggestions, don't hesitate to submit a new [GitHub issue](https://github.com/igoradamenko/awsm.css/issues/new).
