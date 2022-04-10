const {
    task,
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const size = require('gulp-size');

// js channel
function jsBuildChannel(srcPath) {
    src(srcPath).pipe(terser({
        mangle: {
            toplevel: true,
            properties: true
        }
    })).pipe(rename('quantdom.min.js')).pipe(size({showFiles: true})).pipe(dest('dist'))
}

// build js task
task('build', async () => {
    jsBuildChannel('src/*.js');
});
