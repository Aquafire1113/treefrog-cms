var PRACTICE_SERVICE = (function(){

    var _db;
    var _currentPageID;

    var _initFirebase = function(callback){
        firebase
        .auth()
        .signInAnonymously()
        .then(function(result){
            console.log("connected to firebase");
            _db = firebase.firestore();
            callback();
        })
    }

    var _addData = function(navName, callback){
        let fakePageData = {
            navName: navName,
            content: '<h1>HELLO</h1>',
            subNavs:[]
        };

        _db.collection('Pages')
        .add(fakePageData)
        .then(function(docRef){
            // console.log("Document written with id: " + docRef.id)
            callback("New Navigation added");
        })
        .catch(function(error){
            // console.log("Error adding document. " + error)
            callback("Navigation failed to add.")
        })
    };

    var _checkPages = function(mainNavName, callback) {
        var pages = _db.collection("Pages");
        pages
          .where("navName", "==", mainNavName)
          .get()
          .then(function(querySnapshot) {
            console.log("querySnapshot ", querySnapshot.empty);
            if (querySnapshot.empty) {
              _addData(mainNavName, callback);
            } else {
              callback("Duplicate");
            }
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      };

      var _getAllData = function(callback){
        _db.collection('Pages').get()
        .then(function(querySnapshot){
          callback(querySnapshot)
        })
      }

    return{
        initFirebase: _initFirebase,
        addData: _addData,
        checkPages: _checkPages,
        getAllData: _getAllData
    }

})();