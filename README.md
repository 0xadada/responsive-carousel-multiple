# Responsive Carousel Multiple

A jQuery plugin for the [Filamentgroup responsive-carousel](https://github.com/filamentgroup/responsive-carousel/) to enable multiple items visible in the carousel simultaneously and pagination of the items one-at-a-time.


## Getting Started

* Add Google Analytics to page
* Install (Easy)
  * `bower install responsive-carousel-multiple` if you're using [Bower](http://bower.io)
* Install (Manually)
  * Add jQuery
  * Add [Filamentgroup responsive-carousel](https://github.com/filamentgroup/responsive-carousel/)
* Add dependencies and this responsive-carousel.multiple.js to page
* Add `data-multiple` attribute to carousel element.

In your web page:

```html
<script src="jquery.js"></script>
<script src="responsive-carousel.js"></script>
<script src="responsive-carousel.multiple.js"></script>
<link href="responsive-carousel.css" rel="stylesheet">

<div class="carousel"
    data-multiple>
    <div>
        <!-- carousel item content here -->
    </div>
    <div>
        <!-- carousel item content here -->
    </div>
</div>

```

### Demos

Check out the `test/functional/` directory for demo (requires dependencies installed).

## Authors

* [Ron. A](https://github.com/0xadada) - [@0xadada](http://twitter.com/0xadada)
* Created at [Nara Logics](http://nara.me/)

## License

Copyright 2014 Ron. A

Licensed under the MIT License
