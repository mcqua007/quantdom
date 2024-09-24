<a name="Quantdom"></a>

## Quantdom
**Kind**: global class  

* [Quantdom](#Quantdom)
    * [.each(handler)](#Quantdom+each)
    * [.exists()](#Quantdom+exists) ⇒ <code>boolean</code>
    * [.parent()](#Quantdom+parent) ⇒ [<code>Quantdom</code>](#Quantdom)
    * [.siblings()](#Quantdom+siblings) ⇒ [<code>Quantdom</code>](#Quantdom)
    * [.children()](#Quantdom+children) ⇒ [<code>Quantdom</code>](#Quantdom)
    * [.find([selector])](#Quantdom+find) ⇒ [<code>Quantdom</code>](#Quantdom)
    * [.findEl([selector])](#Quantdom+findEl) ⇒ <code>HTMLElement</code>
    * [.findEls([selector])](#Quantdom+findEls) ⇒ <code>Nodelist</code>
    * [.el([index])](#Quantdom+el) ⇒ <code>HTMLElement</code>
    * [.lastEl()](#Quantdom+lastEl) ⇒ <code>HTMLElement</code>
    * [.els()](#Quantdom+els) ⇒ <code>Nodelist</code>
    * [.on(event, listener)](#Quantdom+on)
    * [.off(event, listener)](#Quantdom+off)
    * [.append(html)](#Quantdom+append)
    * [.prepend(html)](#Quantdom+prepend)
    * [.before(html)](#Quantdom+before)
    * [.after(html)](#Quantdom+after)
    * [.attr(attr, value)](#Quantdom+attr) ⇒ <code>string</code>
    * [.hide([aria])](#Quantdom+hide)
    * [.show([aria])](#Quantdom+show)
    * [.html([html])](#Quantdom+html) ⇒ <code>string</code>
    * [.text([newValue])](#Quantdom+text) ⇒ <code>string</code>
    * [.val([newValue])](#Quantdom+val) ⇒ <code>\*</code>
    * [.addClass(className)](#Quantdom+addClass)
    * [.removeClass(className)](#Quantdom+removeClass)
    * [.toggleClass(className)](#Quantdom+toggleClass)
    * [.css(prop, [value])](#Quantdom+css) ⇒
    * [.docReady(cb)](#Quantdom+docReady)

<a name="Quantdom+each"></a>

### quantdom.each(handler)
executes a function on each iteration on the list of elements.

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | A function to run on each iteration |

<a name="Quantdom+exists"></a>

### quantdom.exists() ⇒ <code>boolean</code>
checks if element exists by checking the elements nodelist length & is an alias for exists i.e. $('.selector').exists

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>boolean</code> - returns true if element exists  
<a name="Quantdom+parent"></a>

### quantdom.parent() ⇒ [<code>Quantdom</code>](#Quantdom)
returns the parent of the first element that matches the selector

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: [<code>Quantdom</code>](#Quantdom) - Returns parent of first element that matches the selector  
<a name="Quantdom+siblings"></a>

### quantdom.siblings() ⇒ [<code>Quantdom</code>](#Quantdom)
returns the siblings of the first element that matches the selector

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: [<code>Quantdom</code>](#Quantdom) - Returns siblings of first element that matches the selector  
<a name="Quantdom+children"></a>

### quantdom.children() ⇒ [<code>Quantdom</code>](#Quantdom)
returns the children of the first element that matches the selector

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: [<code>Quantdom</code>](#Quantdom) - Returns children of first element that matches the selector  
<a name="Quantdom+find"></a>

### quantdom.find([selector]) ⇒ [<code>Quantdom</code>](#Quantdom)
returns the first element that matches the selector in children of the selected node

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: [<code>Quantdom</code>](#Quantdom) - returns first element that matches the selector  

| Param | Type | Description |
| --- | --- | --- |
| [selector] | <code>string</code> | query selector to search for |

<a name="Quantdom+findEl"></a>

### quantdom.findEl([selector]) ⇒ <code>HTMLElement</code>
returns first element that matches the selector in children of the selected node

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>HTMLElement</code> - returns first element that matches the selector  

| Param | Type | Description |
| --- | --- | --- |
| [selector] | <code>string</code> | query selector to search for |

<a name="Quantdom+findEls"></a>

### quantdom.findEls([selector]) ⇒ <code>Nodelist</code>
returns elements that matches the selector in children of the selected node

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>Nodelist</code> - returns nodelist of that matches the selector  

| Param | Type | Description |
| --- | --- | --- |
| [selector] | <code>string</code> | query selector to search for |

<a name="Quantdom+el"></a>

### quantdom.el([index]) ⇒ <code>HTMLElement</code>
returns first element in an array of elements with same selector, acts like document.querySelector

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>HTMLElement</code> - an element in the array of elements you want to use  

| Param | Type | Description |
| --- | --- | --- |
| [index] | <code>integer</code> | index of element to return |

<a name="Quantdom+lastEl"></a>

### quantdom.lastEl() ⇒ <code>HTMLElement</code>
returns last element in an array of elements with same selector

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>HTMLElement</code> - last element in array of elements you want to use  
<a name="Quantdom+els"></a>

### quantdom.els() ⇒ <code>Nodelist</code>
returns all matching elements, alias for querySelectorAll

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>Nodelist</code> - a nodelists  
<a name="Quantdom+on"></a>

### quantdom.on(event, listener)
adds an event on an element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | type of event to add to element |
| listener | <code>function</code> | event listener function to execute on event |

<a name="Quantdom+off"></a>

### quantdom.off(event, listener)
removes an event on an element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | type of event to add to element |
| listener | <code>function</code> | event listener function to remove |

<a name="Quantdom+append"></a>

### quantdom.append(html)
Appends an html string to a dom element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | html string to append to DOM |

<a name="Quantdom+prepend"></a>

### quantdom.prepend(html)
prepends a html string to a dom element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | string of html to prepend |

<a name="Quantdom+before"></a>

### quantdom.before(html)
inserts a html string to dom right before element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | string of html to prepend |

<a name="Quantdom+after"></a>

### quantdom.after(html)
inserts a html string to dom right after element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | string of html to prepend |

<a name="Quantdom+attr"></a>

### quantdom.attr(attr, value) ⇒ <code>string</code>
sets an element(s) attribute or returns first element attribute value

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>string</code> - value of first occurrence of element attribute  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | an attribute |
| value | <code>any</code> | a value to set attribute |

<a name="Quantdom+hide"></a>

### quantdom.hide([aria])
adds display none from css inline styles

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| [aria] | <code>boolean</code> | if true sets ara-hidden to true instead of setting inline display style to none |

<a name="Quantdom+show"></a>

### quantdom.show([aria])
removes display none from and element(s) css inline styles

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| [aria] | <code>boolean</code> | if true sets ara-hidden to false instead of removing inline display style |

<a name="Quantdom+html"></a>

### quantdom.html([html]) ⇒ <code>string</code>
inserts/replaces html or returns html of an element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>string</code> - html of first occurrence of element  

| Param | Type | Description |
| --- | --- | --- |
| [html] | <code>string</code> | html to insert into dom |

<a name="Quantdom+text"></a>

### quantdom.text([newValue]) ⇒ <code>string</code>
inserts/replaces text or returns text of an element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>string</code> - text of first occurrence of element  

| Param | Type | Description |
| --- | --- | --- |
| [newValue] | <code>string</code> | text to insert into dom |

<a name="Quantdom+val"></a>

### quantdom.val([newValue]) ⇒ <code>\*</code>
gets a value of first html element or sets a new value of all HTML Element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>\*</code> - value of first occurrence of element  

| Param | Type | Description |
| --- | --- | --- |
| [newValue] | <code>\*</code> | a new value to set |

<a name="Quantdom+addClass"></a>

### quantdom.addClass(className)
adds a class to the selected element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 

<a name="Quantdom+removeClass"></a>

### quantdom.removeClass(className)
removes a class from the selected element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 

<a name="Quantdom+toggleClass"></a>

### quantdom.toggleClass(className)
toggles a class on selected element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 

<a name="Quantdom+css"></a>

### quantdom.css(prop, [value]) ⇒
sets a style on element(s) or returns the style property value

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: computed style of element  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>string</code> | css property to get or set |
| [value] | <code>\*</code> | value to set styles |

<a name="Quantdom+docReady"></a>

### quantdom.docReady(cb)
wrapper to run code that needs to wait for DOM to be fully loaded

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>callback</code> | a callback to run once the DOM is ready |

