var gulp = require("gulp"), //el optimizador de tareas gulp
	sass = require("gulp-sass"), //el plugin para compilar sass
	plumber = require("gulp-plumber"), //el plugin para que gulp siga trabajando ante un errorx
	browserSync = require("browser-sync").create();


//compila sass
gulp.task("sass",function(){
	gulp.src("assets/sass/**/*.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest("assets/css"));
});

//actualiza el navegador
gulp.task("browserSync",function(){
	browserSync.init({
		startPath: './html',
		server: {
			baseDir: "./"
		}
	});
});

//esta funcion esta para ver sia hay algun cambio realiza las tareas
gulp.task("watch",function(){
	gulp.watch("assets/sass/**/*.scss",["sass"]);
	gulp.watch("assets/sass/**/*.scss").on("change",browserSync.reload);
	gulp.watch("./html/**/*.html").on("change",browserSync.reload);
});

//realiza todas las funciones
gulp.task("default", ["sass","browserSync","watch"]);