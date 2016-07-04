Router.configure({
	'layoutTemplate':"layout"
});
Router.route('/', {
	name: 'index'
});
Router.route('/signin', {
	name: 'signIn'
});
Router.route('/signup', {
	name: 'signUp'
});

Router.route('/dashboard', {
	name: 'dashboard'
});


Router.route('/textbooks', {
	name: 'textbooks'
});


Router.route('/test', {
	name: 'test'
});





Router.map(function (){
  this.route('query', {
    path: '/textbooks/q=:subject',
    data:function(){
    	var queryObject = {subj:this.params.subject};
      //console.log(queryObject);
    	var queryList = Textbooks.find(queryObject);
    	//console.log(queryList);
    	return queryList;
     }
  });
});




