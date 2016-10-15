var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + {
    item: item
  });
})('The most creative minds in Art');

fill;
