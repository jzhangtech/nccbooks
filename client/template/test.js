//TEST CODE HERE

//  document.getElementById('notInLeague').style.display = 'block';

//{{#if currentUser}}
// !important = Session.set("roomname", e.target.id);

// click event boiler-plate
Template.test.events({
  'click #testbtn': function() {
    event.preventDefault();
    var result = (1,2,3,5);
    var string = "hello";
    var slice = string.indexOf('e');

    console.log(slice);


   }
});

//Template.notifications.onCreated
//keyup event

Template.test.events({
  'keyup #testinput': function() {
   //type test code here
   
  }
});


//helpers
Template.test.helpers({
	test:function(){
		}
});

//session set
 Session.set("key", "value");
 Session.get("key");
 Session.setDefault("key", "value");


// Router.go('/dashboard');

/* White space function
  
  if ($.trim(param) === "" ) {
      return;
    }

   */

/* Dynamic routing-
    complex route with
   name 'authorDetail' that for example
// matches '/authors/1/edit' or '/authors/1' and automatically renders
// template 'authorDetail'
// HINT:
//// get parameter via this.params
//// the part '/edit' is optional because of '?'
this.route('authorDetail', {
  path: '/authors/:_id/edit?'
});


*/