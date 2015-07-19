var dest = './build';
var src = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    },
    tunnel: true,
    host: 'localhost',
    port: 8080
  },
  styles: {
    src: src + '/style/main.scss',
    watch: [src + '/style/**/*.scss'],
    dest: dest + '/css'
  },
  images: {
    src: src + '/img/**/*.*',
    watch: [src + '/img/**/*.*'],
    dest: dest + '/img'
  },
  html: {
    src: src + '/*.html',
    watch: [src + '/*.html'],
    dest: dest
  },
  fonts: {
    src: src + '/fonts/**/*{eot,ttf,woff,woff2,svg}',
    watch: [src + '/fonts/**/*{eot,ttf,woff,woff2,svg}'],
    dest: dest + '/fonts'
  },
  scripts: {
    src: [
      src + '/js/app/core/core.js',
      src + '/js/app/core/**/*.js',
      src + '/js/app/**/*.js',
      src + '/js/main.js'
    ],
    watch: [
      src + '/js/app/**/*.js',
      src + '/js/main.js'
    ],
    dest: dest + '/js'
  },
  vendor: {
    src: src + '/js/vendor.js',
    watch: [src + '/js/vendor.js'],
    dest: dest + '/js'
  }
};
