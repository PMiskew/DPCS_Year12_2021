const guideList = document.querySelector('.guides');

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const accountsDetails = document.querySelector('.account-details');


const setupUI = (user) => {

  

    if (user) {
       
        db.collection('users').doc(user.uid).get().then( doc => {

        const html = `
        <div>Logged in as ${user.email}</div>
        <div>${doc.data().bio}</div>
        `;

        
        accountsDetails.innerHTML = html;
        })


        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        //toggle UI
        accountsDetails.innerHTML = "NOT LOGGED IN IN YOUR HACKING THE PAGE!";
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
        
    }
}

//setup guides
const setupGuides = (data) => {


    if (data.length) {
        let html = '';

        data.forEach(doc => {
    
            const guide = doc.data();
            console.log(guide)
            //Template String
            const li = `
                <li>
                    <div class = "collapsible-header grey lighten-4">${guide.title}</div>
                    <div class = "collapsible-body white">${guide.content}</div>
                </li>
            `;
            html = html + li
        });
    
        guideList.innerHTML = html;
    

    }
    else {
        guideList.innerHTML = '<h5 class = "center-align">LOGIN TO SEE GUIDES</h5>'
    }
    
}
document.addEventListener('DOMContentLoaded', function() {
   
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
});