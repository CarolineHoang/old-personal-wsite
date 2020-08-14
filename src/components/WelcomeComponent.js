import React, { Component } from 'react';

export default class WelcomeComponent extends Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
    
        };
        
      }

      textEffect($){
            var s,
            spanizeLetters = {
              settings: {
                letters: $('.js-spanize'),
              },
              init: function() {
                s = this.settings;
                this.bindEvents();
              },
              bindEvents: function(){
                s.letters.html(function (i, el) {
                  //spanizeLetters.joinChars();
                  var spanizer = $.trim(el).split("");
                  return '<span>' + spanizer.join('</span><span>') + '</span>';
                });
              },
            };
            spanizeLetters.init();
          }

      render(){
          return (<div></div>)
      }

}