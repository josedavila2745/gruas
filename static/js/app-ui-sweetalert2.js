/*!
 * Your-project-name v1.0.0
 * http://project-homepage.com
 *
 * Copyright (c) 2021 Your Company
 */

var App = (function () {
    'use strict';

    App.uiSweetalert2 = function( ){

      Swal = Swal.mixin({
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-secondary',
        buttonsStyling: false
      });

      $('#swal-basic').click(function(){
        Swal.fire({
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices euismod lobortis.',
          confirmButtonText: 'Proceed',
          showCloseButton: true
        });
        return false;
      });

      $('#swal-title').click(function(){
        Swal.fire({
          title: 'Sweetalert example',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices euismod lobortis.',
          confirmButtonText: 'Proceed',
          showCloseButton: true
        });
        return false;
      });

      $('#swal-icon').click(function(){
        Swal.fire({
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices euismod lobortis.',
          type: 'question',
          confirmButtonText: 'Proceed',
          showCloseButton: true,
          customClass: 'content-text-center'
        });
        return false;
      });

      $('#swal-long').click(function(){
        Swal.fire({
            imageUrl: 'https://placeholder.pics/svg/300x1500',
            imageHeight: 1500,
            imageAlt: 'A tall image',
            confirmButtonText: 'Proceed',
            showCloseButton: true
          });
        return false;
      });

      /*Positions*/
      $('#swal-tr').click(function(){
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Sweetalert example',
            showConfirmButton: false,
            timer: 1500,
            customClass: 'content-header-center'
          });
        return false;
      });

      $('#swal-tl').click(function(){
        Swal.fire({
            position: 'top-start',
            type: 'success',
            title: 'Sweetalert example',
            showConfirmButton: false,
            timer: 1500,
            customClass: 'content-header-center'
          });
        return false;
      });

      $('#swal-bl').click(function(){
        Swal.fire({
            position: 'bottom-start',
            type: 'success',
            title: 'Sweetalert example',
            showConfirmButton: false,
            timer: 1500,
            customClass: 'content-header-center'
          });
        return false;
      });

      $('#swal-br').click(function(){
        Swal.fire({
            position: 'bottom-end',
            type: 'success',
            title: 'Sweetalert example',
            showConfirmButton: false,
            timer: 1500,
            customClass: 'content-header-center'
          });
        return false;
      });

      /*Social Gritters*/
      $('#swal-close').click(function(){
        Swal.fire({
            title: 'Close example',
            type: 'info',
            confirmButtonText: 'Proceed',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:'<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!'
          });
        return false;
      });

      $('#swal-success').click(function(){
        Swal.fire({
            title: 'Custom background.',
            text: 'This is a sweetalert with custom background',
            confirmButtonText: 'Proceed',
            showCloseButton: true,
            showCancelButton: true,
            customClass: 'modal-full-color modal-full-color-success'
          });
        return false;
      });

      $('#swal-primary').click(function(){
        Swal.fire({
            title: 'Custom background.',
            text: 'This is a sweetalert with custom background',
            confirmButtonText: 'Proceed',
            showCloseButton: true,
            showCancelButton: true,
            customClass: 'modal-full-color modal-full-color-primary'
          });
        return false;
      });

      $('#swal-warning').click(function(){
        Swal.fire({
            title: 'Custom background.',
            text: 'This is a sweetalert with custom background',
            confirmButtonText: 'Proceed',
            showCloseButton: true,
            showCancelButton: true,
            customClass: 'modal-full-color modal-full-color-warning'
          });
        return false;
      });

      $('#swal-danger').click(function(){
        Swal.fire({
            title: 'Custom background.',
            text: 'This is a sweetalert with custom background',
            confirmButtonText: 'Proceed',
            showCloseButton: true,
            showCancelButton: true,
            customClass: 'modal-full-color modal-full-color-danger'
          });
        return false;
      });

      $('#swal-dark').click(function(){
        Swal.fire({
            title: 'Custom background.',
            text: 'This is a sweetalert with custom background',
            confirmButtonText: 'Proceed',
            showCloseButton: true,
            showCancelButton: true,
            customClass: 'modal-full-color modal-full-color-dark'
          });
        return false;
      });

      $('#swal-col-success').click(function(){
        Swal.fire({
            title: 'Sweetalert colored header.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices euismod lobortis. Donec fermentum mattis velit id pretium. Suspendisse sed tortor sed diam lobortis tempus at sed lacus. Phasellus semper ex auctor libero scelerisque ultricies.',
            confirmButtonText: 'Proceed',
            confirmButtonClass: 'btn btn-success',
            showCloseButton: true,
            showCancelButton: true,
            customClass: 'colored-header colored-header-success'
          });
        return false;
      });

      $('#swal-col-primary').click(function(){
        Swal.fire({
            title: 'Sweetalert colored header.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices euismod lobortis. Donec fermentum mattis velit id pretium. Suspendisse sed tortor sed diam lobortis tempus at sed lacus. Phasellus semper ex auctor libero scelerisque ultricies.',
            confirmButtonText: 'Proceed',
            showCloseButton: true,
            showCancelButton: true,
            customClass: 'colored-header colored-header-primary'
          });
        return false;
      });

      $('#swal-col-warning').click(function(){
        Swal.fire({
            title: 'Sweetalert colored header.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices euismod lobortis. Donec fermentum mattis velit id pretium. Suspendisse sed tortor sed diam lobortis tempus at sed lacus. Phasellus semper ex auctor libero scelerisque ultricies.',
            confirmButtonText: 'Proceed',
            confirmButtonClass: 'btn btn-warning',
            showCloseButton: true,
            showCancelButton: true,
            customClass: 'colored-header colored-header-warning'
          });
        return false;
      });

      $('#swal-col-danger').click(function(){
        Swal.fire({
            title: 'Sweetalert colored header.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices euismod lobortis. Donec fermentum mattis velit id pretium. Suspendisse sed tortor sed diam lobortis tempus at sed lacus. Phasellus semper ex auctor libero scelerisque ultricies.',
            confirmButtonText: 'Proceed',
            confirmButtonClass: 'btn btn-danger',
            showCloseButton: true,
            showCancelButton: true,
            customClass: 'colored-header colored-header-danger'
          });
        return false;
      });

      $('#swal-col-dark').click(function(){
        Swal.fire({
            title: 'Sweetalert colored header.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices euismod lobortis. Donec fermentum mattis velit id pretium. Suspendisse sed tortor sed diam lobortis tempus at sed lacus. Phasellus semper ex auctor libero scelerisque ultricies.',
            confirmButtonText: 'Proceed',
            confirmButtonClass: 'btn btn-dark',
            showCloseButton: true,
            showCancelButton: true,
            customClass: 'colored-header colored-header-dark'
          });
        return false;
      });

      $('#swal-auto').click(function(){
        var timerInterval = 0;
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <strong></strong> seconds.',
            timer: 2000,
            customClass: 'content-actions-center',
            buttonsStyling: true,
            onOpen: function() {
                swal.showLoading();
                timerInterval = setInterval(function () {
                    swal.getContent().querySelector('strong').textContent = swal.getTimerLeft();
                }, 100);
            },
            onClose: function() {
                clearInterval(timerInterval);
            }
        }).then(function (result) {
            if ( result.dismiss === swal.DismissReason.timer ) {
                console.log('I was closed by the timer');
            }
        });
        return false;
      });

      $('#swal-queue').click(function(){
        Swal.mixin({
          input: 'text',
          confirmButtonText: 'Next &rarr;',
          showCancelButton: true,
          customClass: 'content-header-center content-header-title-left content-actions-left',
          progressSteps: ['1', '2', '3']
        }).queue(['Question 1', 'Question 2', 'Question 3']).then(function (result) {
          if (result.value) {
            Swal.fire({
              title: 'All done!',
              html: 'Your answers: <pre><code>' + JSON.stringify(result.value) + '</code></pre>',
              confirmButtonText: 'Lovely!'
            });
          }
        });
        return false;
      });

      $('#swal-image').click(function(){
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            confirmButtonText: 'Proceed',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image'
          });
        return false;
      });

      $('#swal-html').click(function(){
        Swal.fire({
            title: '<strong>HTML <u>example</u></strong>',
            type: 'info',
            html:
              'You can use <b>bold text</b>, ' +
              '<a href="//github.com">links</a> ' +
              'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            customClass: 'content-text-center'
          });
        return false;
      });

      $('#swal-input').click(function(){
        Swal.fire({
          title: 'Enter anything',
          input: 'text',
          confirmButtonText: 'Proceed',
          showCancelButton: true,
          inputValidator: function(value) {
            return !value && 'You need to write something!';
          }
        });
        return false;
      });

      $('#swal-textarea').click(function(){
        Swal.fire({
          title: 'Enter anything',
          confirmButtonText: 'Proceed',
          input: 'textarea',
          inputPlaceholder: 'Type your message here...',
          showCancelButton: true,
          inputValidator: function(value) {
            return !value && 'You need to write something!';
          }
        });
        return false;
      });

      $('#swal-select').click(function(){
        Swal.fire({
            title: 'Select country',
            confirmButtonText: 'Proceed',
            input: 'select',
            inputOptions: {
                'SRB': 'Serbia',
                'UKR': 'Ukraine',
                'HRV': 'Croatia'
            },
            inputPlaceholder: 'Select country',
            showCancelButton: true
          });
        return false;
      });

      $('#swal-radio').click(function(){
        var inputOptions = {
          '#ff0000': 'Red',
          '#00ff00': 'Green',
          '#0000ff': 'Blue'
        };

        Swal.fire({
          title: 'Select color',
          confirmButtonText: 'Proceed',
          input: 'radio',
          inputOptions: inputOptions,
          inputValidator: function(value) {
            return !value && 'You need to choose something!';
          }
        });
        return false;
      });

      $('#swal-checkbox').click(function(){
        Swal.fire({
          title: 'Terms and conditions',
          confirmButtonText: 'Proceed',
          input: 'checkbox',
          inputValue: 1,
          inputPlaceholder: 'I agree with the terms and conditions',
          inputValidator: function(result) {
            return !result && 'You need to agree with T&C';
          }
        });
        return false;
      });

      $('#swal-file').click(function(){
        Swal.fire({
            title: 'Select image',
            confirmButtonText: 'Proceed',
            input: 'file',
            inputAttributes: {
              'accept': 'image/*',
              'aria-label': 'Upload your profile picture'
            }
          });
        return false;
      });
    };

    return App;
  })(App || {});
