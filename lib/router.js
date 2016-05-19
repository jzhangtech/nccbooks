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





