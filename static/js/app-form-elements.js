/*!
 * Your-project-name v1.0.0
 * http://project-homepage.com
 *
 * Copyright (c) 2021 Your Company
 */

var App = (function () {
  'use strict';

  App.formElements = function( ){

    //Js Code
    $(".datetimepicker").datetimepicker({
    	autoclose: true,
    	componentIcon: '.mdi.mdi-calendar',
    	navIcons:{
    		rightIcon: 'mdi mdi-chevron-right',
    		leftIcon: 'mdi mdi-chevron-left'
    	}
    });

    //Select2
    $(".select2").select2({
      width: '100%',
      placeholder: 'Select a state'
    });

    //Select2 tags
    $(".tags").select2({tags: true, width: '100%'});

    //Bootstrap Slider
    $('.bslider').bootstrapSlider();

    // File input
    $( '.inputfile' ).each( function(){
      var $input   = $( this ),
        $label   = $input.next( 'label' ),
        labelVal = $label.html();

      $input.on( 'change', function( e )
      {
        var fileName = '';

        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else if( e.target.value )
          fileName = e.target.value.split( '\\' ).pop();

        if( fileName )
          $label.find( 'span' ).html( fileName );
        else
          $label.html( labelVal );
      });
    });

    // Custom input file
    bsCustomFileInput.init();
  };

  return App;
})(App || {});
