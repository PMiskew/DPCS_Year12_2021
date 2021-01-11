function createCard(question, hint) {
	
	const card = `
		<div class="col s12 m6 l4">
			<div class="card blue-grey darken-1">
				<div class="card-content white-text">
					<span class="card-title">${question}</span>
					<p>hint: ${hint}</p>
				</div>
				<div class="card-action">

					<a href="#">This is a link</a>
					<a href="#">This is a link</a>

			</div>
			</div>
		</div>
	`;

	return card

}

var cardDisplay = document.getElementById("cardDisplay")
var questions = firebase.database().ref('Questions/');

questions.on('value', (snapshot) => {

	cardDisplay.innerHTML = "";
	const data = snapshot.val();
	console.log(data)

	for (var key in data) {

		//console.log(data)
		newDiv = document.createElement("div")
		newDiv.innerHTML = createCard(data[key]["question"],data[key]["hint"])
		cardDisplay.appendChild(newDiv)

	}

});


function writeUserData() {
  
  var newPostKey = firebase.database().ref().child('Questions').push().key;
  firebase.database().ref('Questions/' + newPostKey).set({
    question: "qq",
    hint: "hh",
    answer : "aa",
    image: "ii"
  });

}

const submitQuestion = document.querySelector("#submitQuestion")

submitQuestion.addEventListener('submit',(e) => {
	e.preventDefault();
	
	console.log("fish")
	writeUserData()

});



