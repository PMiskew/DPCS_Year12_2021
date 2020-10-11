//This is for authentication firebase code
//get data
db.collection('guides').get().then(snapshot => {

    setupGuides(snapshot.docs)
})

//Listen for auth state changes
//Runs when page loads
//ADDED IN VIDEO 8
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User Logged In: ",user)
    }
    else {
        console.log("User Logged out")
    }
});

const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit',(e) => {
    e.preventDefault() //stops page from reloading
    
    const email =  signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    //console.log(email,password)

    //sign up the user 
    //Note: If you use weak passwords it will not work
    //Note: This logs the user in.  Once this runs Firebase assumes logged in. 
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        console.log(cred.user)
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();

    });
});

//log out method
//This is an asyncronous task
//ADDED IN VIDEO 6
const logout = document.querySelector("#logout");
logout.addEventListener('click',(e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    })

});

//login method
//ADDED IN VIDEO 7
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //Get user infromation
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    //Async - Returns a promise
    auth.signInWithEmailAndPassword(email,password).then((cred) => {
        console.log(cred.user)
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();


    });

});