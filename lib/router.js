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




