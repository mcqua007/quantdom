/**
 * @class Quantdom
 */
class Quantdom {
  constructor(selector) {
    this.selector = selector
    if (typeof selector === 'string') {
      this.els = document.querySelectorAll(selector)
    } else if (NodeList.prototype.isPrototypeOf(selector)) {
      this.els = selector // allow passing in nodelist
    } else {
      this.els = [selector] // handles the context/this case
    }
  }
}

// using prototype will be more efficient and
// allows for a shared function across instances of the class
// ===========================================================

/**
 * @description executes a function on each iteration on the list of elements.
 * @param {function} handler A function to run on each iteration
 */
Quantdom.prototype.each = function (handler) {
  this.els.forEach(handler)
  return this
}

/**
 * @description returns the parent of the first element that matches the selector
 * @returns {Quantdom} Returns parent of first element that matches the selector
 */
Quantdom.prototype.parent = function () {
  return new Quantdom(this.els[0].parentNode)
}

/**
 * @description returns the first element that matches the selector in children of the selected node
 * @param {string} [selector] query selector to search for
 * @returns {Quantdom} returns first element that matches the selector
 */
Quantdom.prototype.find = function (selector) {
  return new Quantdom(this.els[0].querySelectorAll(selector))
}

/**
 * @description returns first element that matches the selector in children of the selected node
 * @param {string} [selector] query selector to search for
 * @returns {HTMLElement} returns first element that matches the selector
 */
Quantdom.prototype.findEl = function (selector) {
  return this.els[0].querySelector(selector)
}

/**
 * @description returns elements that matches the selector in children of the selected node
 * @param {string} [selector] query selector to search for
 * @returns {Nodelist} returns nodelist of that matches the selector
 */
Quantdom.prototype.findEls = function (selector) {
  return this.els[0].querySelectorAll(selector)
}

/**
 * @description returns first element in an array of elements with same selector, acts like document.querySelector
 * @param {integer} [index] index of element to return
 * @returns {HTMLElement} an element in the array of elements you want to use
 */
Quantdom.prototype.el = function (index = 0) {
  return this.els[index]
}

/**
 * @description returns last element in an array of elements with same selector
 * @returns {HTMLElement} last element in array of elements you want to use
 */
Quantdom.prototype.lastEl = function () {
  return this.els[this.els.length - 1]
}

/**
 * @description returns all matching elements, alias for querySelectorAll
 * @returns {Nodelist} a nodelists
 */
Quantdom.prototype.els = function () {
  return this.els
}

/**
 * @description adds an event on an element(s)
 * @param {string} event type of event to add to element
 * @param {function} listener event listener function to execute on event
 */
Quantdom.prototype.on = function (event, listener) {
  return this.each(el => {
    el.addEventListener(event, listener)
  })
}

/**
 * @description removes an event on an element(s)
 * @param {string} event type of event to add to element
 * @param {function} listener event listener function to remove
 */
Quantdom.prototype.off = function (event, listener) {
  return this.each(el => {
    el.removeEventListener(event, listener)
  })
}

/**
 * @description Appends an html string to a dom element
 * @param  {string} html html string to append to DOM
 */
Quantdom.prototype.append = function (html) {
  return this.each(el => {
    el.insertAdjacentHTML('beforeend', html)
  })
}

/**
 * @description prepends a html string to dom
 * @param {string} html string of html to prepend
 */
Quantdom.prototype.prepend = function (html) {
  return this.each(el => {
    el.insertAdjacentHTML('afterbegin', html)
  })
}

/**
 * @description inserts a html string to dom right before element
 * @param {string} html string of html to prepend
 */
Quantdom.prototype.before = function (html) {
  return this.each(el => {
    el.insertAdjacentHTML('beforebegin', html)
  })
}

/**
 * @description inserts a html string to dom right after element
 * @param {string} html string of html to prepend
 */
Quantdom.prototype.after = function (html) {
  return this.each(el => {
    el.insertAdjacentHTML('afterend', html)
  })
}

/**
 * @description sets an elements attribute or returns first element attribute value
 * @param {string} attr an attribue
 * @param {any} value a value to set attribute
 * @return {string} value of first occurence of element attribute
 */
Quantdom.prototype.attr = function (attr, value) {
  if (value !== undefined) {
    return this.each(el => {
      el.setAttribute(attr, value)
    })
  }
  return this.els[0].getAttribute(attr)
}

/**
 * @description adds display none from css inline styles
 * @param {boolean} [aria] if true sets ara-hidden to true instead of setting inline display style to none
 */
Quantdom.prototype.hide = function (ariaOnly) {
  return this.each(el => {
    if (ariaOnly) {
      el.setAttribute('aria-hidden', 'true')
    } else {
      el.style.display = 'none'
      el.setAttribute('aria-hidden', 'true')
    }
  })
}

/**
 * @description removes display none from css inline styles
 * @param {boolean} [aria] if true sets ara-hidden to false instead of removing inline display style
 */
Quantdom.prototype.show = function (ariaOnly) {
  return this.each(el => {
    if (ariaOnly) {
      el.setAttribute('aria-hidden', 'false')
    } else {
      el.style.display = ''
      el.setAttribute('aria-hidden', 'false')
    }
  })
}

/**
 * @description inserts/replaces html or returns html of an element
 * @param {string} [html] html to insert into dom
 * @returns {string} html of first occurence of element
 */
Quantdom.prototype.html = function (html) {
  if (html !== undefined) {
    return this.each(el => {
      el.innerHTML = html
    })
  }
  return this.els[0].innerHTML
}

/**
 * @description inserts/replaces text or returns text of an element
 * @param {string} [newValue] text to insert into dom
 * @returns {string} text of first occurence of element
 */
Quantdom.prototype.text = function (newValue) {
  if (newValue !== undefined) {
    return this.each(el => {
      el.textContent = newValue
    })
  }
  return this.els[0].textContent
}

/**
 * @description gets a value of first html element or sets a new value of all HTML Elements
 * @param {*} [newValue] a new value to set
 * @returns {*} value of first occurence of element
 */
Quantdom.prototype.val = function (newValue) {
  if (newValue === undefined) {
    return this.els[0].value
  }
  return this.each(el => {
    el.value = newValue
  })
}

/**
 * @description adds a class to the selected element(s)
 * @param {string} className
 */
Quantdom.prototype.addClass = function (className) {
  return this.each(el => {
    el.classList.add(className)
  })
}

/**
 * @description removes a class from the selected element(s)
 * @param {string} className
 */
Quantdom.prototype.removeClass = function (className) {
  return this.each(el => {
    el.classList.remove(className)
  })
}

/**
 * @description toggles a class on selected element(s)
 * @param {string} className
 */
Quantdom.prototype.toggleClass = function (className) {
  return this.each(el => {
    el.classList.toggle(className)
  })
}

/**
 * @description sets a style or returnsthe style property value
 * @param {string} prop css property to get or set
 * @param {*} [value] value to set styles
 * @returns computed style of element
 */
Quantdom.prototype.css = function (prop, value) {
  if (prop && value) {
    return this.each(el => {
      el.style[prop] = value
    })
  }
  return getComputedStyle(this.els[0])[prop]
}

/**
 * Document Ready
 * @description wrapper to run code that needs to wait for DOM to be fully loaded
 * @param {callback} cb - a callback to run once the DOM is ready
 */
export function docReady(cb) {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    setTimeout(cb, 1) // call on next available tick
  } else {
    document.addEventListener('DOMContentLoaded', cb)
  }
}

/**
 * @description initializes Quantdom class in order to use it methods
 * @param {String | HTMLElement} selector an DOM element to manipulate
 * @returns {Quantdom}
 */

export default function (selector) {
  return new Quantdom(selector)
}
