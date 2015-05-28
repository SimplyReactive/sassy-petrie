var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var elixir = require('laravel-elixir');
var config = require('laravel-elixir').config;
var Notification = require('laravel-elixir/ingredients/commands/Notification');

function extend(defaults, options) {
    var extended = {};
    var prop;
    for (prop in defaults) {
        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
            extended[prop] = defaults[prop];
        }
    }
    for (prop in options) {
        if (Object.prototype.hasOwnProperty.call(options, prop)) {
            extended[prop] = options[prop];
        }
    }
    return extended;
};
function onError(err) {
    console.error('Error', err.message);
    notify.icon = 'icons/fail.png';
    notify.error(err, 'Error on line <%= error.lineNumber %>\n');
    this.emit('end');
};

elixir.extend('sassyPetrie', function (src, options) {
    var notify = new Notification();
    notify.title = 'sassyPetrie';
    notify.icon = 'icons/pass.png';

    var defaults = {
        sourceMaps: true,
        includeContent: true,
        lineNumbers: true,
        sourceFolder: config.assetsDir + 'sass/',
        outputFolder: './public/css'
    };
    options = extend(defaults, options);

    for(var i = 0; i < src.length; i++) {
        gulp.task(src[i], function() {
            this.count = this.count || 0;
            this.count++;
            var name = src[this.count-1];
            var file = options.sourceFolder + name + '.scss';
            var stream = sass(file, {
                sourcemap: options.sourceMaps,
                lineNumbers: options.lineNumbers,
                container: 'gulp-ruby-sass-' + name + Math.random().toString(36).replace(/[^a-z]+/g, '')
            })
            .on('error', onError)
            .pipe(sourcemaps.write('./', {
                includeContent: options.includeContent,
                sourceRoot: options.sourceFolder
            }))
            .pipe(gulp.dest(options.outputFolder))
            .pipe(notify.message('Stylesheet \'' + name + '\' has been compiled.'));
            return stream;
        });
    }

    gulp.task('sassyPetrie', src);
    return this.queueTask('sassyPetrie');
});