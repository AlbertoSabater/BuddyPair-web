'use strict';

// Declare app level module which depends on filters, and services

angular.module('BuddyPairApp', ['BuddyPairApp.controllers', 'BuddyPairApp.services', 'ngRoute', 'satellizer', 'chart.js', 'ui.select', 'ngSanitize', 'datamaps'])
  .config(function ($routeProvider, $locationProvider, $authProvider, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
    $routeProvider
/*      .when('/profile', {
        templateUrl: '/partials/profile',
        controller: 'ProfileCtrl',
        activetab: 'profile'
      })*/
      .when('/erasmus', {
        templateUrl: '/partials/erasmusList',
        controller: 'ErasmusListCtrl',
        activetab: 'erasmusList'
      })
      .when('/erasmus/new', {
        templateUrl: '/partials/erasmusForm',
        controller: 'NewErasmusCtrl',
        activetab: 'newErasmus'
      })
      .when('/erasmus/:id', {
        templateUrl: '/partials/erasmusProfile',
        controller: 'ErasmusCtrl',
        activetab: 'erasmusList'
      })
      .when('/erasmus/:id/edit', {
        templateUrl: '/partials/erasmusForm',
        controller: 'EditErasmusCtrl',
        activetab: 'editErasmus'
      })
      .when('/peers', {
        templateUrl: '/partials/peerList',
        controller: 'PeerListCtrl',
        activetab: 'peerList'
      })
      .when('/peers/new', {
        templateUrl: '/partials/peerForm',
        controller: 'NewPeerCtrl',
        activetab: 'newPeer'
      })
      .when('/peer/:id', {
        templateUrl: '/partials/peerProfile',
        controller: 'PeerCtrl',
        activetab: 'peerList'
      })
      .when('/peer/:id/edit', {
        templateUrl: '/partials/peerForm',
        controller: 'EditPeerCtrl',
        activetab: 'editPeer'
      })
      .otherwise({
        templateUrl: '/partials/stats',
        controller: 'StatsCtrl',
        redirectTo: '/',
        activetab: 'index'
      });

    $locationProvider.html5Mode(true);

    $authProvider.google({
      clientId: '83414652329-0ji7glc5i4ep5lvlohue7ne3ktga7gg2.apps.googleusercontent.com',
    });
  });

angular.module('BuddyPairApp.controllers', []);
angular.module('BuddyPairApp.services', []);
