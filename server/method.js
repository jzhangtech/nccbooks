Meteor.methods({
	'textbook-insert':function(textbook){
        Textbooks.insert(textbook);

    }
})



/*,function(error,result){ 
        		if(result){
        			return "success";
        		}else{
        			return error;
        		}
        	}*/