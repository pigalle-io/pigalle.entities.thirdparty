# API reference of :

An entity to include third party into the Pigalle framework.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_thirdparty-plugin"></a>

### thirdparty-plugin
An plugin to include third party library into the Pigalle framework.

**Example**  
```js
const {ThirdPartyPlugin} = require('@pigalle/entities.thirdparty')

// Prepare the usage of [express](https://expressjs.com/) into a Pigalle application.
const expressEntity = ThirdPartyPlugin.factory('express')

// ... or you can use another name for pluginœ
const expressEntity = ThirdPartyPlugin.factory('http', require('express'))
```

* [thirdparty-plugin](#module_thirdparty-plugin)
    * [~ThirdPartyPlugin](#module_thirdparty-plugin..ThirdPartyPlugin)
        * [new ThirdPartyPlugin(name, [nodeModule])](#new_module_thirdparty-plugin..ThirdPartyPlugin_new)
    * [~PIGALLE_TYPE](#module_thirdparty-plugin..PIGALLE_TYPE) : <code>string</code>

<a name="module_thirdparty-plugin..ThirdPartyPlugin"></a>

#### thirdparty-plugin~ThirdPartyPlugin
A class to use external or third-party library in a Pigalle application.

**Kind**: inner class of [<code>thirdparty-plugin</code>](#module_thirdparty-plugin)  
**Access**: public  
<a name="new_module_thirdparty-plugin..ThirdPartyPlugin_new"></a>

##### new ThirdPartyPlugin(name, [nodeModule])

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of third-party library. |
| [nodeModule] | <code>object</code> | The optional module related to the provided name. |

<a name="module_thirdparty-plugin..PIGALLE_TYPE"></a>

#### thirdparty-plugin~PIGALLE_TYPE : <code>string</code>
The Pigalle type.

**Kind**: inner constant of [<code>thirdparty-plugin</code>](#module_thirdparty-plugin)  
## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Sat, 24 Feb 2018 11:13:06 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
