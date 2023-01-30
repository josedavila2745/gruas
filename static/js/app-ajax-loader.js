/*!
 * Your-project-name v1.0.0
 * http://project-homepage.com
 *
 * Copyright (c) 2021 Your Company
 */

var App = (function () {
  'use strict';

  App.ajaxLoader = function( ){

    var mprogress = new Mprogress();
    mprogress.start();
    setTimeout(function(){mprogress.end()}, 3000);

    $('.toggle-loader').click(function(){
    	mprogress.start();
    	setTimeout(function(){mprogress.inc()}, 1000);
    	setTimeout(function(){mprogress.end()}, 3000);
    });
    
  };

  return App;
})(App || {});