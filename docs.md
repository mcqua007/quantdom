<a name="Quantdom"></a>

## Quantdom
**Kind**: global class  

* [Quantdom](#Quantdom)
    * [new Quantdom()](#new_Quantdom_new)
    * [.each(handler)](#Quantdom+each)
    * [.parent()](#Quantdom+parent) ⇒ [<code>Quantdom</code>](#Quantdom)
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

<a name="new_Quantdom_new"></a>

### new Quantdom()
QuantDOM is a very small dom danipulation library that uses Jquery
like syntax but is only comprised of the most use Jquery functions. Made to making
manipulating the dom less verbose and less key strokes. I chose to base it of Jquery's
syntax as many developers are already familar with it so it should be easy to just start using.

<a name="Quantdom+each"></a>

### quantdom.each(handler)
Run a function on each iteration on the list of elements.
Don't remove as other methods depend on this for iteration.

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | A function to run on each iteration of the loop |

<a name="Quantdom+parent"></a>

### quantdom.parent() ⇒ [<code>Quantdom</code>](#Quantdom)
returns Quantdom instance with parent of the first element that matches the selector

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: [<code>Quantdom</code>](#Quantdom) - returns parent of first element that matches the selector  
<a name="Quantdom+find"></a>

### quantdom.find([selector]) ⇒ [<code>Quantdom</code>](#Quantdom)
returns Quantdom instance with first element that matches the selector in children of the selected node

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
returns first element in an array of elements with same selector

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
**Returns**: <code>Nodelist</code> - an a nodelists  
<a name="Quantdom+on"></a>

### quantdom.on(event, listener)
add an event on an element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | type of event to add to element |
| listener | <code>function</code> | event listener function to execute on event |

<a name="Quantdom+off"></a>

### quantdom.off(event, listener)
remove an event on an element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | type of event to add to element |
| listener | <code>function</code> | event listener function to remove |

<a name="Quantdom+append"></a>

### quantdom.append(html)
appends an html string to a dom element

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | html string to append to dom |

<a name="Quantdom+prepend"></a>

### quantdom.prepend(html)
prepend html string to dom

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | string of html to prepend |

<a name="Quantdom+before"></a>

### quantdom.before(html)
insert html string to dom right before element

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | string of html to prepend |

<a name="Quantdom+after"></a>

### quantdom.after(html)
insert html string to dom right after element

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | string of html to prepend |

<a name="Quantdom+attr"></a>

### quantdom.attr(attr, value) ⇒ <code>string</code>
sets elements attribute or returns first element attribute value

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>string</code> - value of first occurence of element attribute  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | an attribue |
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
removes display none from css inline styles

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| [aria] | <code>boolean</code> | if true sets ara-hidden to false instead of removing inline display style |

<a name="Quantdom+html"></a>

### quantdom.html([html]) ⇒ <code>string</code>
inserts html/replaces html or returns html of an element

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>string</code> - html of first occurence of element  

| Param | Type | Description |
| --- | --- | --- |
| [html] | <code>string</code> | html to insert into dom |

<a name="Quantdom+text"></a>

### quantdom.text([newValue]) ⇒ <code>string</code>
inserts text/replaces text or returns text of an element

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>string</code> - text of first occurence of element  

| Param | Type | Description |
| --- | --- | --- |
| [newValue] | <code>string</code> | text to insert into dom |

<a name="Quantdom+val"></a>

### quantdom.val([newValue]) ⇒ <code>\*</code>
gets a value of first html element or sets a new value of all htmlElements

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: <code>\*</code> - value of first occurence of element  

| Param | Type | Description |
| --- | --- | --- |
| [newValue] | <code>\*</code> | a new value to set |

<a name="Quantdom+addClass"></a>

### quantdom.addClass(className)
add class to selected element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 

<a name="Quantdom+removeClass"></a>

### quantdom.removeClass(className)
remove a class from selected element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 

<a name="Quantdom+toggleClass"></a>

### quantdom.toggleClass(className)
toggle a class on selected element(s)

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 

<a name="Quantdom+css"></a>

### quantdom.css(prop, [value]) ⇒
set style or returns rulename

**Kind**: instance method of [<code>Quantdom</code>](#Quantdom)  
**Returns**: computed style of element  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>string</code> | css property to get or set |
| [value] | <code>\*</code> | value to set styles |

