<a name="module_Quantdom"></a>

## Quantdom
allows for maninuplating the dom, like a micro version of jquery


* [Quantdom](#module_Quantdom)
    * [~Quantdom](#module_Quantdom..Quantdom)
        * [new Quantdom()](#new_module_Quantdom..Quantdom_new)
        * [.find([selector])](#module_Quantdom..Quantdom+find) ⇒ <code>Quantdom</code>
        * [.findAllEls([selector])](#module_Quantdom..Quantdom+findAllEls) ⇒ <code>Quantdom</code>
        * [.findEl([selector])](#module_Quantdom..Quantdom+findEl) ⇒ <code>HTMLElement</code>
        * [.findAllEls([selector])](#module_Quantdom..Quantdom+findAllEls) ⇒ <code>Nodelist</code>
        * [.el([index])](#module_Quantdom..Quantdom+el) ⇒ <code>HTMLElement</code>
        * [.lastEl()](#module_Quantdom..Quantdom+lastEl) ⇒ <code>HTMLElement</code>
        * [.els()](#module_Quantdom..Quantdom+els) ⇒ <code>Nodelist</code>
        * [.on(event, listener)](#module_Quantdom..Quantdom+on)
        * [.off(event, listener)](#module_Quantdom..Quantdom+off)
        * [.append(html)](#module_Quantdom..Quantdom+append)
        * [.prepend(html)](#module_Quantdom..Quantdom+prepend)
        * [.before(html)](#module_Quantdom..Quantdom+before)
        * [.after(html)](#module_Quantdom..Quantdom+after)
        * [.attr(attr, value)](#module_Quantdom..Quantdom+attr) ⇒ <code>string</code>
        * [.hide([aria])](#module_Quantdom..Quantdom+hide)
        * [.show([aria])](#module_Quantdom..Quantdom+show)
        * [.html([html])](#module_Quantdom..Quantdom+html) ⇒ <code>string</code>
        * [.text([newValue])](#module_Quantdom..Quantdom+text) ⇒ <code>string</code>
        * [.val([newValue])](#module_Quantdom..Quantdom+val) ⇒ <code>\*</code>
        * [.addClass(className)](#module_Quantdom..Quantdom+addClass)
        * [.removeClass(className)](#module_Quantdom..Quantdom+removeClass)
        * [.css(prop, [value])](#module_Quantdom..Quantdom+css) ⇒
    * [~$(selector)](#module_Quantdom..$) ⇒ <code>Quantdom</code>

<a name="module_Quantdom..Quantdom"></a>

### Quantdom~Quantdom
**Kind**: inner class of [<code>Quantdom</code>](#module_Quantdom)  

* [~Quantdom](#module_Quantdom..Quantdom)
    * [new Quantdom()](#new_module_Quantdom..Quantdom_new)
    * [.find([selector])](#module_Quantdom..Quantdom+find) ⇒ <code>Quantdom</code>
    * [.findAllEls([selector])](#module_Quantdom..Quantdom+findAllEls) ⇒ <code>Quantdom</code>
    * [.findEl([selector])](#module_Quantdom..Quantdom+findEl) ⇒ <code>HTMLElement</code>
    * [.findAllEls([selector])](#module_Quantdom..Quantdom+findAllEls) ⇒ <code>Nodelist</code>
    * [.el([index])](#module_Quantdom..Quantdom+el) ⇒ <code>HTMLElement</code>
    * [.lastEl()](#module_Quantdom..Quantdom+lastEl) ⇒ <code>HTMLElement</code>
    * [.els()](#module_Quantdom..Quantdom+els) ⇒ <code>Nodelist</code>
    * [.on(event, listener)](#module_Quantdom..Quantdom+on)
    * [.off(event, listener)](#module_Quantdom..Quantdom+off)
    * [.append(html)](#module_Quantdom..Quantdom+append)
    * [.prepend(html)](#module_Quantdom..Quantdom+prepend)
    * [.before(html)](#module_Quantdom..Quantdom+before)
    * [.after(html)](#module_Quantdom..Quantdom+after)
    * [.attr(attr, value)](#module_Quantdom..Quantdom+attr) ⇒ <code>string</code>
    * [.hide([aria])](#module_Quantdom..Quantdom+hide)
    * [.show([aria])](#module_Quantdom..Quantdom+show)
    * [.html([html])](#module_Quantdom..Quantdom+html) ⇒ <code>string</code>
    * [.text([newValue])](#module_Quantdom..Quantdom+text) ⇒ <code>string</code>
    * [.val([newValue])](#module_Quantdom..Quantdom+val) ⇒ <code>\*</code>
    * [.addClass(className)](#module_Quantdom..Quantdom+addClass)
    * [.removeClass(className)](#module_Quantdom..Quantdom+removeClass)
    * [.css(prop, [value])](#module_Quantdom..Quantdom+css) ⇒

<a name="new_module_Quantdom..Quantdom_new"></a>

#### new Quantdom()
used to retun a dom element or elements and perform common methods on it

<a name="module_Quantdom..Quantdom+find"></a>

#### quantdom.find([selector]) ⇒ <code>Quantdom</code>
returns Quantdom instance with first element that matches the selector in children of the selected node

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: <code>Quantdom</code> - returns first element that matches the selector  

| Param | Type | Description |
| --- | --- | --- |
| [selector] | <code>string</code> | query selector to search for |

<a name="module_Quantdom..Quantdom+findAllEls"></a>

#### quantdom.findAllEls([selector]) ⇒ <code>Quantdom</code>
returns Quantdom instance with elements that matches the selector in children of the selected node

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: <code>Quantdom</code> - returns nodelist of that matches the selector  

| Param | Type | Description |
| --- | --- | --- |
| [selector] | <code>string</code> | query selector to search for |

<a name="module_Quantdom..Quantdom+findEl"></a>

#### quantdom.findEl([selector]) ⇒ <code>HTMLElement</code>
returns first element that matches the selector in children of the selected node

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: <code>HTMLElement</code> - returns first element that matches the selector  

| Param | Type | Description |
| --- | --- | --- |
| [selector] | <code>string</code> | query selector to search for |

<a name="module_Quantdom..Quantdom+findAllEls"></a>

#### quantdom.findAllEls([selector]) ⇒ <code>Nodelist</code>
returns elements that matches the selector in children of the selected node

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: <code>Nodelist</code> - returns nodelist of that matches the selector  

| Param | Type | Description |
| --- | --- | --- |
| [selector] | <code>string</code> | query selector to search for |

<a name="module_Quantdom..Quantdom+el"></a>

#### quantdom.el([index]) ⇒ <code>HTMLElement</code>
returns first element in an array of elements with same selector

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: <code>HTMLElement</code> - an element in the array of elements you want to use  

| Param | Type | Description |
| --- | --- | --- |
| [index] | <code>integer</code> | index of element to return |

<a name="module_Quantdom..Quantdom+lastEl"></a>

#### quantdom.lastEl() ⇒ <code>HTMLElement</code>
returns last element in an array of elements with same selector

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: <code>HTMLElement</code> - last element in array of elements you want to use  
<a name="module_Quantdom..Quantdom+els"></a>

#### quantdom.els() ⇒ <code>Nodelist</code>
returns all matching elements, alias for querySelectorAll

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: <code>Nodelist</code> - an a nodelists  
<a name="module_Quantdom..Quantdom+on"></a>

#### quantdom.on(event, listener)
add an event on an element(s)

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | type of event to add to element |
| listener | <code>function</code> | event listener function to execute on event |

<a name="module_Quantdom..Quantdom+off"></a>

#### quantdom.off(event, listener)
remove an event on an element(s)

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | type of event to add to element |
| listener | <code>function</code> | event listener function to remove |

<a name="module_Quantdom..Quantdom+append"></a>

#### quantdom.append(html)
appends an html string to a dom element

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | html string to append to dom |

<a name="module_Quantdom..Quantdom+prepend"></a>

#### quantdom.prepend(html)
prepend html string to dom

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | string of html to prepend |

<a name="module_Quantdom..Quantdom+before"></a>

#### quantdom.before(html)
insert html string to dom right before element

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | string of html to prepend |

<a name="module_Quantdom..Quantdom+after"></a>

#### quantdom.after(html)
insert html string to dom right after element

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | string of html to prepend |

<a name="module_Quantdom..Quantdom+attr"></a>

#### quantdom.attr(attr, value) ⇒ <code>string</code>
sets elements attribute or returns first element attribute value

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: <code>string</code> - value of first occurence of element attribute  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | an attribue |
| value | <code>any</code> | a value to set attribute |

<a name="module_Quantdom..Quantdom+hide"></a>

#### quantdom.hide([aria])
adds display none from css inline styles

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| [aria] | <code>boolean</code> | if true sets ara-hidden to true instead of setting inline display style to none |

<a name="module_Quantdom..Quantdom+show"></a>

#### quantdom.show([aria])
removes display none from css inline styles

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| [aria] | <code>boolean</code> | if true sets ara-hidden to false instead of removing inline display style |

<a name="module_Quantdom..Quantdom+html"></a>

#### quantdom.html([html]) ⇒ <code>string</code>
inserts html/replaces html or returns html of an element

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: <code>string</code> - html of first occurence of element  

| Param | Type | Description |
| --- | --- | --- |
| [html] | <code>string</code> | html to insert into dom |

<a name="module_Quantdom..Quantdom+text"></a>

#### quantdom.text([newValue]) ⇒ <code>string</code>
inserts text/replaces text or returns text of an element

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: <code>string</code> - text of first occurence of element  

| Param | Type | Description |
| --- | --- | --- |
| [newValue] | <code>string</code> | text to insert into dom |

<a name="module_Quantdom..Quantdom+val"></a>

#### quantdom.val([newValue]) ⇒ <code>\*</code>
gets a value of first html element or sets a new value of all htmlElements

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: <code>\*</code> - value of first occurence of element  

| Param | Type | Description |
| --- | --- | --- |
| [newValue] | <code>\*</code> | a new value to set |

<a name="module_Quantdom..Quantdom+addClass"></a>

#### quantdom.addClass(className)
add class to selected element(s)

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 

<a name="module_Quantdom..Quantdom+removeClass"></a>

#### quantdom.removeClass(className)
remove a class from selected element(s)

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  

| Param | Type |
| --- | --- |
| className | <code>string</code> | 

<a name="module_Quantdom..Quantdom+css"></a>

#### quantdom.css(prop, [value]) ⇒
set style or returns rulename

**Kind**: instance method of [<code>Quantdom</code>](#module_Quantdom..Quantdom)  
**Returns**: computed style of element  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>string</code> | css property to get or set |
| [value] | <code>\*</code> | value to set styles |

<a name="module_Quantdom..$"></a>

### Quantdom~$(selector) ⇒ <code>Quantdom</code>
initializes Quantdom class in order to use it methods

**Kind**: inner method of [<code>Quantdom</code>](#module_Quantdom)  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>String</code> \| <code>HTMLElement</code> | an DOM element to manipulate |
