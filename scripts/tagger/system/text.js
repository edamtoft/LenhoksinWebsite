"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol?"symbol":typeof r};define([],function(){function r(r){if("string"!=typeof r)return JSON.stringify(r);var t=Array.isArray(arguments[1])?arguments[1]:arguments,n=Array.isArray(arguments[1])?0:1;return r.replace(o,function(r,e){if(isNaN(parseInt(e)))return"object"!==_typeof(t[n])?"":t[n][e].toString()||"";var o=parseInt(e);if(o+n>=t.length)return"";var i=t[o+n];return"undefined"==typeof i||null===i?"":"string"!=typeof i&&"number"!=typeof i?JSON.stringify(i):i.toString()})}function t(t){var n=[];for(var e in t)n.push(r("{0}={1}",encodeURIComponent(e),encodeURIComponent(t[e])));return n.join("&")}function n(r){r||(r=window.location.search),r=r.replace(/^\?/,"");var t={},n=r.split("&");for(var e in n){var o=n[e].split("=");if(2===o.length){var i=decodeURIComponent(o[0]),a=decodeURIComponent(o[1]);t[i]=a}}return t}function e(r){for(var t=r.split(/[\W]+/),n=t[0],e=n.toLowerCase(),o=1;o<t.length;o++){var i=t[o][0].toUpperCase()+t[o].substring(1).toLowerCase();e+=i}return e}var o=/{([^}]+)}/g;return{from:r,toQuery:t,fromQuery:n,camelCase:e}});