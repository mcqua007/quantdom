/**
 * @module Quantdom
 * @description allows for maninuplating the dom, like a micro version of jquery
 */

/**
 * @class Quantdom
 * @description used to retun a dom element or elements and perform common methods on it
 */
class Quantdom {
    constructor(selector) {
        this.selector = selector;

        if (typeof selector === 'string') {
            this.els = document.querySelectorAll(this.selector);
        } else if (NodeList.prototype.isPrototypeOf(selector)) {
            this.els = this.selector; // allow passing in nodelist
        } else {
            this.els = [this.selector]; // handles the context/this case
        }
    }
}

// using prototype will be more efficient and
// allows for a shared function across instances of the class
// ===========================================================

/**
 * @description returns Quantdom instance with first element that matches the selector in children of the selected node
 * @param {string} [selector] query selector to search for
 * @returns {Quantdom} returns first element that matches the selector
 */
Quantdom.prototype.find = function (selector) {
    return new Quantdom(this.els[0].querySelector(selector));
};

/**
 * @description returns Quantdom instance with elements that matches the selector in children of the selected node
 * @param {string} [selector] query selector to search for
 * @returns {Quantdom} returns nodelist of that matches the selector
 */
Quantdom.prototype.findAllEls = function (selector) {
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
Quantdom.prototype.findAllEls = function (selector) {
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
    this.els.forEach((el) => {
        el.addEventListener(event, listener);
    });
};

/**
 * @description remove an event on an element(s)
 * @param {string} event type of event to add to element
 * @param {function} listener event listener function to remove
 */
Quantdom.prototype.off = function (event, listener) {
    this.els.forEach((el) => {
        el.removeEventListener(event, listener);
    });
};

/**
 * @description appends an html string to a dom element
 * @param  {string} html html string to append to dom
 */
Quantdom.prototype.append = function (html) {
    this.els.forEach((el) => {
        el.insertAdjacentHTML('beforeend', html);
    });
};

/**
 * @description prepend html string to dom
 * @param {string} html string of html to prepend
 */
Quantdom.prototype.prepend = function (html) {
    this.els.forEach((el) => {
        el.insertAdjacentHTML('afterbegin', html);
    });
};

/**
 * @description insert html string to dom right before element
 * @param {string} html string of html to prepend
 */
Quantdom.prototype.before = function (html) {
    this.els.forEach((el) => {
        el.insertAdjacentHTML('beforebegin', html);
    });
};

/**
 * @description insert html string to dom right after element
 * @param {string} html string of html to prepend
 */
Quantdom.prototype.after = function (html) {
    this.els.forEach((el) => {
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
        this.els.forEach((el) => {
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
    this.els.forEach((el) => {
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
    this.els.forEach((el) => {
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
        this.els.forEach((el) => {
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
        this.els.forEach((el) => {
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
        this.els.forEach((el) => {
            el.value = newValue;
        });
    }
};

/**
 * @description add class to selected element(s)
 * @param {string} className
 */
Quantdom.prototype.addClass = function (className) {
    this.els.forEach((el) => {
        el.classList.add(className);
    });
};

/**
 * @description remove a class from selected element(s)
 * @param {string} className
 */
Quantdom.prototype.removeClass = function (className) {
    this.els.forEach((el) => {
        el.classList.remove(className);
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
        this.els.forEach((el) => {
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
function $(selector) {
    return new Quantdom(selector);
}
export {
    $
};
