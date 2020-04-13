'use strict';

const {src, dest, watch, series} = require('gulp'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    minify = require('gulp-minify'),
    tinypng = require('gulp-tinypng-compress'),
    rename = require('gulp-rename');

// Переписать название файла
// npm i gulp-rename

// Static server
// npm install browser-sync gulp --save-dev
function bs() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    watch("./src/*.html").on('change', browserSync.reload);
    watch("./src/css/*.css").on('change', browserSync.reload);
    watch("./src/js/*.js").on('change', browserSync.reload);
}

// Минимизируем CSS 
// npm install gulp-clean-css --save-dev
function buildCSS(done) {
    src('./src/css/**/**.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist/css/'));
    src('./src/css/**/**.css')
        .pipe(dest('dist/css/')); 
    done();
}

// Минимизируем JS
// npm install --save-dev gulp-minify
function buildJS(done) {
    src(['./src/js/**.js', '!js/**.min.js'])
        .pipe(minify({
            ext:{
                src:'.js',
                //min:'.js'
            }
        }))
        .pipe(dest('dist/js/'));
    src('js/**.min.js').pipe(dest('dist/js/'));
    done();
}

// Переносим HTML
function buildHTML(done) {
    src('./src/**.html')
        .pipe(dest('dist/'));
    done();
}

// Переносим PHP
function buildPHP(done) {
    src(['./src/**.php'])
        .pipe(dest('dist/'));
    src('./src/phpmailer/**/**')
        .pipe(dest('dist/phpmailer/'));
    done();
}

// Переносим шрифты 
function buildFonts(done) {
    src('./src/fonts/**/**')
        .pipe(dest('dist/fonts/'));
    done();
}

// Переносим фавиконку 
function buildFavicon(done) {
    src('./src/fonts/**/**')
        .pipe(dest('dist/fonts/'));
    done();
}

// Сжатие картинок 
// npm install gulp-tinypng-compress
function buildImage(done) {
    src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'DBKvpMKHW4vyvpsNh7bq0ZTX0tcDVhr3'
        }))
        .pipe(dest('dist/img/'));
    src('./src/img/**/*.svg')
        .pipe(dest('dist/img/'));
    done();
}


exports.serve = bs;
exports.build = series(buildCSS, buildJS, buildHTML, buildPHP, buildFonts, buildImage, buildFavicon);