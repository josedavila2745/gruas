/*!
 * Your-project-name v1.0.0
 * http://project-homepage.com
 *
 * Copyright (c) 2021 Your Company
 */

var App = (function () {
  'use strict';
  
  App.mailInbox = function( ){
    
    $(".be-select-all input").on('change',function(){
      var checkboxes = $(".email-list").find('input[type="checkbox"]');
      if( $(this).is(':checked') ) {
          checkboxes.prop('checked', true);
      } else {
          checkboxes.prop('checked', false);
      }
    });
    
  };

  return App;
})(App || {});
