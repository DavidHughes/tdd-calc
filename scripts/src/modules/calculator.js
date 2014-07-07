/* globals Utils */
Utils.calculator = (function(Utils, undefined) {
  'use strict';

  return {
    add: function(first, second) {
      return first + second;
    },
    subtract: function(first, second) {
      return first - second;
    }
  };
})(Utils);
