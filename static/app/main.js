require(['jquery', 'ckeditor-jquery'], function($) {

  console.log( $('#text-editor').length );

  // initialize ckeditor
  $('#text-editor').ckeditor();

});