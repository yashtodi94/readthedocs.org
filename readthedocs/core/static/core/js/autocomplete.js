!function t(o,e,r){function n(i,c){if(!e[i]){if(!o[i]){var p="function"==typeof require&&require;if(!c&&p)return p(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var a=e[i]={exports:{}};o[i][0].call(a.exports,function(t){var e=o[i][1][t];return n(e?e:t)},a,a.exports,t,o,e,r)}return e[i].exports}for(var u="function"==typeof require&&require,i=0;i<r.length;i++)n(r[i]);return n}({1:[function(t,o,e){function r(t,o){$(t).autocomplete({source:o,minLength:2,open:function(t,o){ac_top=$(".ui-autocomplete").css("top"),$(".ui-autocomplete").css({width:"233px",top:ac_top+10})}})}window.attach_project_autocomplete=r},{}]},{},[1]);