[comment]: <> (Badges from https://shields.io/ and https://badgen.net/)
## Quantdom JS
![npm bundle size](https://img.shields.io/bundlephobia/min/quantdom?color=%234338ca&logoColor=%232a2b2c) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/quantdom?color=%234338ca&label=gzipped%20size&logoColor=%232a2b2c) ![NPM](https://img.shields.io/npm/l/quantdom?color=%234338ca&logoColor=%232a2b2c)

Quantdom is a very small (about 600 bytes when ran through [terser](https://www.npmjs.com/package/terser) & gzipped) dom danipulation library that uuses a Jquery like syntax and supports chaining but is only comprised of the most commonly used Jquery functions.

Made for working with the dom less verbose without all the bloat from jQuery. I chose to base it off of Jquery's syntax as many developers are already familar with it and it is very concise. This library is meant to be as small as possible (without being unreadble) so when you need to directly interact with the DOM you can use this library on top of a larger framework without extra bloat that you don't need.

***Why the name, QuantDOM ?*** 
Taken from [Wikipedia's *Quantum* article](https://en.wikipedia.org/wiki/Quantum), *"In physics, a quantum (plural quanta) is the minimum amount of any physical entity (physical property) involved in an interaction."* This fit the goal of this project in the way Quantdom is made to reduce the effort when having to deal directly with the DOM.

## Getting Started

### Install via NPM
1. Install using npm ` npm i quantdom` or with yarn `yarn add quantdom`
2. Then import into project using `import q from 'quantdom'` or use the jQuery popularized $ as your function name. i.e. `import $ from 'quantdom'`

### Install via CDN

1. Use latest version [https://cdn.jsdelivr.net/npm/quantdom/dist/quantdom.min.js](https://cdn.jsdelivr.net/npm/quantdom/dist/quantdom.min.js) or specify a certain version [https://cdn.jsdelivr.net/npm/quantdom@1.1.9/dist/quantdom.min.js](https://cdn.jsdelivr.net/npm/quantdom@1.1.9/dist/quantdom.min.js)

    ```
    <script src="https://cdn.jsdelivr.net/npm/quantdom/dist/quantdom.min.js"></script>
    ```

2. Then start using with $() ex. `$('.drop-down').attr('aria-expanded', 'true')`

### Documentation
*View generated [documentation](docs.md)*
