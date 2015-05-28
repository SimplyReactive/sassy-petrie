# sassy-petrie
A package to handle multiple stylesheets in Laravel Elixir and compile with Ruby

## Installation
```
npm install sassy-petrie --save-dev
```

## Usage
```javascript
var elixir = require('laravel-elixir');
require('sassy-petrie');

elixir(function(mix) {
    mix.sassyPetrie(['style1.scss', 'style2.scss']);
});
```

## Default Options
```javascript
mix.sassyPetrie(['style1.scss', 'style2.scss'], {
    sourceMaps: true,
    includeContent: true,
    lineNumbers: true,
    sourceFolder: config.assetsDir + 'sass/',
    outputFolder: './public/css'
});
```

License
----
MIT
