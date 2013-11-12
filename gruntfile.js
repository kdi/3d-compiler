/*
 * 3d-compiler
 * Source: http://github.com/kdi/3d-compiler
 *
 * Created by [Makis Tracend]( [@tracend](http://github.com/tracend) )
 *
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

module.exports = function(grunt) {

grunt.initConfig({
		three_obj: {
			options: {
				minify: true
			},
			dist: {
				src: './input/*/*.obj',
				dest: './output/'
			}
		}
	});


grunt.loadNpmTasks('grunt-3d');

grunt.registerTask('default', ['three_obj']);

}