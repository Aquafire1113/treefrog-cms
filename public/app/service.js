var SERVICE = (function(){

    document.addEventListener("DOMContentLoaded", function() {   
    //  firebase.auth().onAuthStateChanged(user => {});  firebase.database().ref('/contacts').on('value', snapshot => {});  firebase.firestore().collection('contacts'); firebase.messaging().requestPermission().then(() => { }); firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });

    try {
         let app = firebase.app();
          let features = ["auth", "database", "messaging", "storage"].filter( feature => typeof app[feature] === "function" 
          );  
    } catch (e) { console.error(e); 
        
        } 
    });

    var _db;

    var _initFirebase = function(){
        firebase
        .auth()
        .signInAnonymously()
        .then(function(result){
            console.log("Connected"); 
            _db = firebase.firestore(); 
            // _addContact();
        });
    }

    // var _addContact = function(){
    //     let data = {fName: "New", lName: "Person"};

    //     _db.collection('pages')
    //     .add(data)
    //     .then(function(docRef){ 
    //         // console.log('Document written with ID: ', docRef.id);
    //         _returnData();
    //     }).catch(function(error){ 
    //         console.error('Error adding document: ', error); 
    //     });
    // }

    var _returnData = function(fakeData){
        _db.collection('pages')
        .get()
        .then(function(querySnapshot){ 
            querySnapshot.forEach(function(doc){  
                }); 
            });
    };

    var _checkMainNavName = function(newNavName, callback){

        var pages = _db.collection('pages');

        pages
        .get()
        .then(function(querySnapshot){
            console.log("got something", querySnapshot.empty)
            if(querySnapshot.empty){
                callback(newNavName);
            }else{
                console.log(
                _db.collection('pages').where("navName", "==", newNavName))
            }
        })
        .catch(function(error){
            console.log("Error: ", error.message);
        })

    //     _db.collection('pages').where("navName", "==", mainNavName)
    //     .get()
    //     .then(function(querySnapshot){
    //         querySnapshot.forEach(function(doc){
    //             consotle.log("Got something", doc.id, '=>', doc.data())
    //         })
    //     .catch(function(error){
    //         console.log('Error getting documents', error);
    //     })
    //     });
    }

    var _getGetStartedContent = function(){
        let contentString = `
        <h1>Treefrog CMS</h1>
        <p>This is the screen where you will create your navigation and page content</p>
        <p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p>
        <p>Once you create either a nav or sub-nav, a text editor will pop up and you will be allowed to create your page content.</p>
        <div class='mainNavModal'>
        <h1>Treefrog CMS</h1>
        <p>Now that you have your navigation set you can now create your content. Below you will see your navigation name and a text editor. Create your content in the text editor and then click on "Save page Info". Once you have done that click on the "PREVIEW SITE" link to see what your web page looks like.</p>

        <b><span> Nav > <span class="navName"></span></span></b>

        <div id="editor">

        </div>

        <span class='btn btn-dark savePage'>Save Page Info</span>

        <div class='displayPage'>
        
        </div>
        
        </div> 
        <div class="modal">
            <div class="clickBox"></div>
            <div class="alert-box"></div>
        </div> 
        
        `;

        return contentString;
    }

    var _getCreateNavButton = function(){
        let buttonString = `
        
        <span class="btn btn-dark nav-modal">Create Main Nav</span>
        <span class="btn btn-dark">Create Sub-Nav</span>
        
        `;

        return buttonString;
    }

    var _getHomeContent = function(){
        let homeString = `
        
        <h1>Welcome to the Treefrog CMS</h1>
        <p>
          Here you will create your content for your webpages. You won't be able
          to create all page elements but only the content for the page.
        </p>

        <p>
          You must first create the navigation. Once you have the navigation
          created you can add page content and publish the page. You can even
          add sub navigation as well.
        </p>

        <p>
          Your fist step is to click on the Add Navigation link and add your
          first navigation link.
        </p>
        
        `;

        return homeString;
    }

    var _getHomeStartButton = function(){
        let startButtonString = `
        
        <span id="get-started" class="btn btn-dark get-started">Get Started</span>
        
        `;
        return startButtonString;
    }

    var _modalContent = function(){
        let modalString = `
        <h1>Use this box to create Navigation Links</h1>
        <p>You can create main navigation and sub navigation. To create a sub-navigation you will need to first select a main nav and then create the sub-nav.</p>
        <p>Using the text box below, enter the name of your main navigation.</p>
        <input class='linkInput' type="text" value=""/>
        <div>
        <span id="createMainNav" class="btn btn-light get-started createLink">Create Main Nav</span>

        <span class="btn btn-light cancel">Cancel</span>
        </div>
        `;
        return modalString;
    }

    return {
        initFirebase: _initFirebase,
        getGetStartedContent: _getGetStartedContent,
        getCreateNavButton: _getCreateNavButton,
        getHomeContent: _getHomeContent,
        getHomeStartButton:_getHomeStartButton,
        modalContent: _modalContent,
        checkMainNavName: _checkMainNavName,
        returnData: _returnData
    }

})();