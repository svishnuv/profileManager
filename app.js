(function() {

  angular.module('profileManager', []);

  angular.module('profileManager').controller('MainCtrl', MainController);

  function MainController() {
    var mctrl = this;

    mctrl.people=[];

    mctrl.addPerson = function() {
      mctrl.newPerson.id = mctrl.people.length + 1;
      mctrl.people.push(mctrl.newPerson);
      console.log(mctrl)
      mctrl.newPerson = null;
    };

    mctrl.resetForm = function(){
      mctrl.newPerson = null;
    };

    mctrl.uploadImage = function(){
      //Implementation for Image Upload 
      /*File Read > IE 10*/
    };
    

    mctrl.editPerson = function(){
      mctrl.newPerson = this.newPerson;
    };
    
    mctrl.deletePerson = function(index) {
      mctrl.people.splice(index, 1);
      console.log(mctrl.people);
    };

  }


})();