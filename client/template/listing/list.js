Template.listform.events({
	'submit form#list_form': function(e,tmp) {
		e.preventDefault();
		var form = $(e.currentTarget); 
	    var name = form.find("#name").val();
	    console.log(name);
	    var subj = form.find('#subj').val();
	    var crseId = form.find('#crseId').val();
	    var price = form.find('#price').val();
	    var contact = form.find('#contact').val();
	    var comments = form.find('#comments').val();

	    var textbook={
	    	name:name,
	    	subj:subj,
	    	crseId:crseId,
	    	price:price,
	    	contact:contact,
	    	comments:comments
	    }


	    Meteor.call('textbook-insert',textbook, function(error,result){
			if(error){
				console.log(error);
			}else{
				$('#list_form').each(function(){
					this.reset();
				});
			}
		});
	}
});


/*,function(error,result){
	    	if(result=="success"){
				document.getElementById("#submit").reset();	
			}
		}*/