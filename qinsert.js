var client = require('mongodb').MongoClient; 
var url = 'mongodb://localhost:27017/'; 
client.connect(url,{ useNewUrlParser: true }, function(err,db) 
{     
        var dbo=db.db("test") 
    var cursor = dbo.collection("student").insert({Rollno:12,name:'gayatri',dept:'comp'});     
    cursor.forEach(function (  doc  ) 
    { 
        if(doc!=null) 
        console.log(doc); 
    },function(err)
		   {
		       if(err!=null)
			   console.log("ERROR");
		   });
		 
    db.close(); 
}); 

   
 
