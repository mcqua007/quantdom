## Quantdom JS
![npm bundle size](https://img.shields.io/bundlephobia/min/quantdom?color=%234338ca&logoColor=%232a2b2c) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/quantdom?color=%234338ca&label=gzipped%20size&logoColor=%232a2b2c) ![license type](https://img.shields.io/npm/l/quantdom?color=%234338ca&logoColor=%232a2b2c)
![test coverage](https://img.shields.io/badge/test%20coverage-100%25-4c51bf?style=flat&logoColor=%232a2b2c&color=%234338ca)

Quantdom is a very small (about 600 bytes when run through [terser](https://www.npmjs.com/package/terser) & gzipped) dom manipulation library that uses a Jquery like syntax and supports chaining but is only composed of the most commonly used Jquery functions. t Made for working with the dom less verbose without all the bloat from jQuery. I chose to base it off of Jquery's syntax as many developers are already familiar with it and it is very concise. This library is meant to be as small as possible (without being unreadable) so when you need to directly interact with the DOM you can use this library on top of a larger framework without extra bloat that you don't need.

***Why the name, QuantDOM ?*** 
Taken from [Wikipedia's *Quantum* article](https://en.wikipedia.org/wiki/Quantum), *"In physics, a quantum (plural quanta) is the minimum amount of any physical entity (physical property) involved in an interaction."* This fits the goal of this project in the way Quantdom is made to reduce the effort when having to deal directly with the DOM.

**Supports Chaining:** 
``` javascript
$('.modal').show().addClass('active-overlay');
```

## Getting Started

### Install via NPM
1. Install using npm ` npm i quantdom` or with yarn `yarn add quantdom`
2. Then import into project using `import q from 'quantdom'` or use the jQuery popularized $ as your function name. i.e. `import $ from 'quantdom'`

### Install via CDN

1. Use latest version [https://cdn.jsdelivr.net/npm/quantdom](https://cdn.jsdelivr.net/npm/quantdom/dist/quantdom.min.js) or specify a certain version [https://cdn.jsdelivr.net/npm/quantdom@1.2.4/dist/quantdom.min.js](https://cdn.jsdelivr.net/npm/quantdom@1.2.4/dist/quantdom.min.js). Visit [Quantdom's JSDelivr](https://www.jsdelivr.com/package/npm/quantdom?path=dist) page for ESM versions.

    ``` html
    <script src="https://cdn.jsdelivr.net/npm/quantdom"></script>
    ```

2. Then start using ex.

    ``` javascript
    $('.drop-down').attr('aria-expanded', 'true');
    ```

### Try it Out!
- Fork the below playground by clicking th New Bin button and start editing!
- [Go to JSBin Playground](https://jsbin.com/yevusevahu/edit?html,output)
### Documentation
*View generated [documentation](docs.md)*