const gulp = require('gulp');
const rimraf = require('rimraf');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const clean = (done) => {
    rimraf('dist/*', done);
};
exports.clean = clean;

const ts = () => {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest('dist/js'));
};
exports.ts = ts;

const copy = (done) => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css'));
    done();
};
exports.copy = copy;

const build = gulp.series(
    clean,
    gulp.parallel(ts, copy),
);
exports.build = build;
exports.default = build;

// *** dev ***

const browserSyncOption = {
    port: 8080,
    server: {
        baseDir: './dist/',
        index: 'index.html',
    },
    reloadOnRestart: true,
};
const browsersync = (done) => {
    browserSync.init(browserSyncOption);
    done();
}

const watch = () => {
    const browserReload = (done) => {
        browserSync.reload();
        done();
    };
    gulp.watch('src/ts/*.ts', gulp.series(ts, browserReload));
    gulp.watch(['src/*.html', 'src/css/*.css'], gulp.series(copy, browserReload));
};
exports.watch = watch;

const dev = gulp.series(
    build,
    browsersync,
    watch
);
exports.dev = dev;
