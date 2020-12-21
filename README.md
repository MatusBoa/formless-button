# Formless Button

![npm](https://img.shields.io/npm/v/formless-button)

Handle button click as form submit.

## Installation

`npm i formless-button`

## Requirements

In order to work properly, you have to add meta tag with CSRF token into `<head>`

```html
<meta name="csrf-token" content="AAABBBCCCDDDEEE">
```

For Laravel:

```blade
<meta name="csrf-token" content="{{ csrf_token() }}">
```

## Usage

In your JS file just import `FormlessButton.js`, for example

```js
import FormlessButton from "formless-button/FormlessButton";
```

FormlessButton will query `<button>` with `data-method` and `data-url` attributes.

```html
<button data-method="DELETE" data-url="https://example.com/user/44">Delete user</button>
```

Under the hood, FormlessButton will listen for click event, after that FormlessButton will create & submit basic `<form>` with `_token` and `_method` inputs.