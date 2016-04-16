angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('collectionsCtrl', function($scope) {
	$scope.tags = [
		{category:'All'},
		{category:'Bowtie'},
		{category: 'Dress'},
		{category: 'Pants'},
		{category: 'Watches'},
		{category:'Earrings'},
		{category: 'Rings'},
		{category: 'Jewlery'},
		{category: 'Shoes'},
		{category:'Socks'},
		{category: 'Shorts'},
		{category: 'Hats'}
  ];

  $scope.images = [
    { id: 1, tag: 'Bowtie', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
    { id: 2, tag: 'Dress', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
    { id: 3, tag: 'Pants', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
    { id: 4, tag: 'Hats', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
    { id: 5, tag: 'Bowtie', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
    { id: 6, tag: 'Dress', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
    { id: 7, tag: 'Pants', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
    { id: 8, tag: 'Hats', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
    { id: 9, tag: 'Bowtie', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
    { id: 10, tag: 'Dress', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
    { id: 11, tag: 'Pants', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
    { id: 12, tag: 'Hats', path: '9i7mzFKNSYWoNKo8W22Q_42.jpg', image: '' },
  ];

})

.controller('profileCtrl', function($scope) {

})

.controller('addNewItemCtrl', function($scope) {

})