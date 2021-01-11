//Firebase config
var firebaseConfig = {
	apiKey: "AIzaSyB-edeq9As3ycnY8zVVL6Qw1ihJiBdf3zs",
	authDomain: "ia-demo-1-cards.firebaseapp.com",
	databaseURL: "https://ia-demo-1-cards-default-rtdb.firebaseio.com",
	projectId: "ia-demo-1-cards",
	storageBucket: "ia-demo-1-cards.appspot.com",
	messagingSenderId: "619007581868",
	appId: "1:619007581868:web:cda7cf83f61bb27e96c909",
	measurementId: "G-ZVJPPPDZSG"
};

//initalize firebase app
firebase.initializeApp(firebaseConfig);

//Materlaize Elements Initialize
document.addEventListener('DOMContentLoaded', function() {

	options = {}
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems, options);

});




