/*!
 * Your-project-name v1.0.0
 * http://project-homepage.com
 *
 * Copyright (c) 2021 Your Company
 */

var App = (function () {
  'use strict';
  
  App.loaders = function( ){

    //Show loading class toggle
    function toggleLoader(){
      $('.toggle-loading').on('click',function(){
        var parent = $(this).parents('.widget, .card');

        if( parent.length ){
          parent.addClass('be-loading-active');

          setTimeout(function(){
            parent.removeClass('be-loading-active');
          }, 3000);
        }
      });
    }


    //Loader show
    toggleLoader();

  };

  return App;
})(App || {});
