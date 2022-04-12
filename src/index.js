/**
 * @class Quantdom
 * @description QuantDOM is a very small dom danipulation library that uses Jquery
 * like syntax but is only comprised of the most use Jquery functions. Made to making
 * manipulating the dom less verbose and less key strokes. I chose to base it of Jquery's
 * syntax as many developers are already familar with it so it should be easy to just start using.
 */
class Quantdom {
  constructor(selector) {
    this.selector = selector;
    if (typeof selector === 'string') {
      this.els = document.querySelectorAll(selector);
    } else if (NodeList.prototype.isPrototypeOf(selector)) {
      this.els = selector; // allow passing in nodelist
    } else {
      this.els = [selector]; // handles the context/this case
    }
  }
}

// using prototype will be more efficient and
// allows for a shared function across instances of the class
// ===========================================================

/**
 * @description Run a function on each iteration on the list of elements.
 * Don't remove as other methods depend on this for iteration.
 * @param {function} handler A function to run on each iteration of the loop
 */
Quantdom.prototype.each = function (handler) {
  this.els.forEach(handler);
  return this;
};

/**
 * @description returns Quantdom instance with first element that matches the selector in children of the selected node
 * @param {string} [selector] query selector to search for
 * @returns {Quantdom} returns first element that matches the selector
 */
Quantdom.prototype.find = function (selector) {
  return new Quantdom(this.els[0].querySelectorAll(selector));
};

/**
 * @description returns first element that matches the selector in children of the selected node
 * @param {string} [selector] query selector to search for
 * @returns {HTMLElement} returns first element that matches the selector
 */
Quantdom.prototype.findEl = function (selector) {
  return this.els[0].querySelector(selector);
};

/**
 * @description returns elements that matches the selector in children of the selected node
 * @param {string} [selector] query selector to search for
 * @returns {Nodelist} returns nodelist of that matches the selector
 */
Quantdom.prototype.findEls = function (selector) {
  return this.els[0].querySelectorAll(selector);
};

/**
 * @description returns first element in an array of elements with same selector
 * @param {integer} [index] index of element to return
 * @returns {HTMLElement} an element in the array of elements you want to use
 */
Quantdom.prototype.el = function (index = 0) {
  return Array.from(this.els).at(index);
};

/**
 * @description returns last element in an array of elements with same selector
 * @returns {HTMLElement} last element in array of elements you want to use
 */
Quantdom.prototype.lastEl = function () {
  return this.els[this.els.length - 1];
};

/**
 * @description returns all matching elements, alias for querySelectorAll
 * @returns {Nodelist} an a nodelists
 */
Quantdom.prototype.els = function () {
  return this.els;
};

/**
 * @description add an event on an element(s)
 * @param {string} event type of event to add to element
 * @param {function} listener event listener function to execute on event
 */
Quantdom.prototype.on = function (event, listener) {
  return this.each((el) => {
    el.addEventListener(event, listener);
  });
};

/**
 * @description remove an event on an element(s)
 * @param {string} event type of event to add to element
 * @param {function} listener event listener function to remove
 */
Quantdom.prototype.off = function (event, listener) {
  return this.each((el) => {
    el.removeEventListener(event, listener);
  });
};

/**
 * @description appends an html string to a dom element
 * @param  {string} html html string to append to dom
 */
Quantdom.prototype.append = function (html) {
  return this.each((el) => {
    el.insertAdjacentHTML('beforeend', html);
  });
};

/**
 * @description prepend html string to dom
 * @param {string} html string of html to prepend
 */
Quantdom.prototype.prepend = function (html) {
  return this.each((el) => {
    el.insertAdjacentHTML('afterbegin', html);
  });
};

/**
 * @description insert html string to dom right before element
 * @param {string} html string of html to prepend
 */
Quantdom.prototype.before = function (html) {
  return this.each((el) => {
    el.insertAdjacentHTML('beforebegin', html);
  });
};

/**
 * @description insert html string to dom right after element
 * @param {string} html string of html to prepend
 */
Quantdom.prototype.after = function (html) {
  return this.each((el) => {
    el.insertAdjacentHTML('afterend', html);
  });
};

/**
 * @description sets elements attribute or returns first element attribute value
 * @param {string} attr an attribue
 * @param {any} value a value to set attribute
 * @return {string} value of first occurence of element attribute
 */
Quantdom.prototype.attr = function (attr, value) {
  if (value !== undefined) {
    return this.each((el) => {
      el.setAttribute(attr, value);
    });
  } else {
    return this.els[0].getAttribute(attr);
  }
};

/**
 * @description adds display none from css inline styles
 * @param {boolean} [aria] if true sets ara-hidden to true instead of setting inline display style to none
 */
Quantdom.prototype.hide = function (ariaOnly) {
  return this.each((el) => {
    if (ariaOnly) {
      el.setAttribute('aria-hidden', 'true');
    } else {
      el.style.display = 'none';
      el.setAttribute('aria-hidden', 'true');
    }
  });
};

/**
 * @description removes display none from css inline styles
 * @param {boolean} [aria] if true sets ara-hidden to false instead of removing inline display style
 */
Quantdom.prototype.show = function (ariaOnly) {
  return this.each((el) => {
    if (ariaOnly) {
      el.setAttribute('aria-hidden', 'false');
    } else {
      el.style.display = '';
      el.setAttribute('aria-hidden', 'false');
    }
  });
};

/**
 * @description inserts html/replaces html or returns html of an element
 * @param {string} [html] html to insert into dom
 * @returns {string} html of first occurence of element
 */
Quantdom.prototype.html = function (html) {
  if (html !== undefined) {
    return this.each((el) => {
      el.innerHTML = html;
    });
  } else {
    return this.els[0].innerHTML;
  }
};
/**
 * @description inserts text/replaces text or returns text of an element
 * @param {string} [newValue] text to insert into dom
 * @returns {string} text of first occurence of element
 */
Quantdom.prototype.text = function (newValue) {
  if (newValue !== undefined) {
    return this.each((el) => {
      el.textContent = newValue;
    });
  } else {
    return this.els[0].textContent;
  }
};

/**
 * @description gets a value of first html element or sets a new value of all htmlElements
 * @param {*} [newValue] a new value to set
 * @returns {*} value of first occurence of element
 */
Quantdom.prototype.val = function (newValue) {
  if (newValue === undefined) {
    return this.els[0].value;
  } else {
    return this.each((el) => {
      el.value = newValue;
    });
  }
};

/**
 * @description add class to selected element(s)
 * @param {string} className
 */
Quantdom.prototype.addClass = function (className) {
  return this.each((el) => {
    el.classList.add(className);
  });
};

/**
 * @description remove a class from selected element(s)
 * @param {string} className
 */
Quantdom.prototype.removeClass = function (className) {
  return this.each((el) => {
    el.classList.remove(className);
  });
};

/**
 * @description toggle a class on selected element(s)
 * @param {string} className
 */
Quantdom.prototype.toggleClass = function (className) {
  return this.each((el) => {
    el.classList.toggle(className);
  });
};

/**
 * @description set style or returns rulename
 * @param {string} prop css property to get or set
 * @param {*} [value] value to set styles
 * @returns computed style of element
 */
Quantdom.prototype.css = function (prop, value) {
  if (prop && value) {
    return this.each((el) => {
      el.style[prop] = value;
    });
  } else {
    return getComputedStyle(this.els[0])[prop];
  }
};

/**
 * @description initializes Quantdom class in order to use it methods
 * @param {String | HTMLElement} selector an DOM element to manipulate
 * @returns {Quantdom}
 */
export default function (selector) {
  return new Quantdom(selector);
}
