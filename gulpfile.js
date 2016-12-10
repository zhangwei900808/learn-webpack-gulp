var gulp = require("gulp");
var gulp_concat = require('gulp-concat');
var gulp_uglify = require('gulp-uglify');
var gulp_webpack = require("gulp-webpack");
var webpack = require('webpack');
var webpack_config = require('./webpack.config.js')

gulp.task('first', function () {

  //gulp文件写入到指定文件夹
  // gulp.src(['1.js','2.js'])
  //     .pipe(gulp.dest('./build/js'));
  // gulp.src(['*.css'])
  //     .pipe(gulp.dest('./build/css'));

  //gulp-concat文件合并
  // gulp.src(['1.js','2.js'])
  //     .pipe(gulp_concat('main.js'))
  //     .pipe(gulp.dest('./build/js'));

  //gulp-uglify文件压缩(先合并再压缩)
  // gulp.src(['1.js','2.js'])
  //     .pipe(gulp_concat('main.js'))
  //     .pipe(gulp_uglify())
  //     .pipe(gulp.dest('./build/js'));

  // gulp.src(['test.js'])
  //     //这里的第一个参数表示webpack的配置文件，第2个是原装webpack，如果这2个都不加的话，默认使用gulp-webpack里面的webpack和默认配置
  //     .pipe(gulp_webpack(webpack_config,webpack))
  //     .pipe(gulp_uglify())
  //     .pipe(gulp.dest('./build/js'));
});

var gulp_template = require('gulp-template');
gulp.task('template', function () {
  gulp.src('index.html')
    .pipe(gulp_template({
      "age": 18
    }))
    .pipe(gulp.dest('./build/html'))
});

gulp.task('build-js', function () {
  gulp_webpack(webpack_config, webpack)
    .pipe(gulp.dest('./build/js'))
})

// gulp.task('run',['build-js'],function(){
//     gulp.src(['./src/tpl/*.html'])
//     .pipe(gulp.dest('./build/html'))
// })

gulp.task('config', function () {
  var fs = require('fs');
  var root = './src/modules/';
  var config = {};
  var get_m = fs.readdirSync(root);

  get_m.forEach(function (m) {
    var get_m_files = fs.readdirSync(root + m);
    var getRet = get_m_files.map(function (jsfile) {
      return root + m + '/' + jsfile;
    })
    config[m] = getRet;
  })
  webpack_config.entry = config;
})

gulp.task('run', ['config'], function () {
  webpack(webpack_config, function (err, state) {
    //todo:
  })
})

var gulp_sass = require('gulp-sass');
gulp.task('sass',function(){
  gulp.src('./mycss/index.scss')
  .pipe(gulp_sass())
  .pipe(gulp.dest('./mycss'))
})
