# videojs-youtube

YouTube Wrapper for Video.js

## Table of Contents

<!-- START doctoc -->
<!-- END doctoc -->
## Installation

```sh
npm install --save @codingcatdev/videojs-youtube
```

## Usage

To include videojs-youtube on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-youtube.min.js"></script>
<script>
  var player = videojs('my-video');

  player.youtube();
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-youtube via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('@codingcatdev/videojs-youtube');

var player = videojs('my-video');

player.youtube();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', '@codingcatdev/videojs-youtube'], function(videojs) {
  var player = videojs('my-video');

  player.youtube();
});
```

## License

MIT. Copyright (c) Alex &lt;alex@codingcat.dev&gt;


[videojs]: http://videojs.com/
