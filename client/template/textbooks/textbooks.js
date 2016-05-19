Template.searchbooks.created = function() {
   Session.setDefault("query", " ");

};
Template.searchbooks.events({
  'input #subject-query': function(e) {
    var input =  document.getElementById('subject-query').value;
    Session.set("query", input);
  }
});


Template.searchbooks.helpers({
  major:function(){
    //var session=Session.get("query");
    //var query = "/^"+session+"/i";
    var regex = new RegExp(Session.get('query'),'i'); //'i' for case insensitive search
    return Majors.find({name:{$regex: regex}});
  }
});