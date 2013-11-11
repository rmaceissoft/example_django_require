// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file.
  deps: ["main"],
  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",
    // Libraries.
    jquery: "../assets/js/libs/jquery",
    'ckeditor-core':'../assets/js/plugins/ckeditor/ckeditor',
    'ckeditor-jquery':'../assets/js/plugins/ckeditor/adapters/jquery'
  },

  shim: {
    "ckeditor-jquery": {
      deps: ['jquery','ckeditor-core']
    }
  }
});
