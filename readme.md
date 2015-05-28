# sassy-petrie
Compile multiple stylesheets with Ruby SASS

## Installation
```
npm install sassy-petrie --save-dev
```

## Usage
```javascript
var elixir = require('laravel-elixir');
require('sassy-petrie');

elixir(function(mix) {
    mix.sassyPetrie(['style1', 'style2']);
});
```

## Default Options
```javascript
mix.sassyPetrie(['style1', 'style2'], '/path/to/css', {
	sourceMaps: true,
	includeContent: true,
	lineNumbers: true,
	cssFolder: './public/css'
});
```

License
----
MIT
