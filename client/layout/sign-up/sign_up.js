Template.signUp.events({
  'click #signUpButton': function() {
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('signUp').style.display = 'block';
  }
});

Template.signUp.events({
  'click #signInButton': function() {
    document.getElementById('signIn').style.display = 'block';
    document.getElementById('signUp').style.display = 'none';
  }
});


Template.signIn.events({
  'click #signUpButton': function() {
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('signUp').style.display = 'block';
  }
});

Template.signIn.events({
  'click #signInButton': function() {
    document.getElementById('signIn').style.display = 'block';
    document.getElementById('signUp').style.display = 'none';
  }
});