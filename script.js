//compare two JSON have the same properties without order
 var Obj1 = { "name":"person1", "age":"5" }; 
 var Obj2 = {  "age":"5","name":"person1" }; 
 
 //var Obj2 = {  "age":"30","name":"person2", "no":"123" }; 
     // find keys 
     keyObj1 = Object.keys(Obj1); 
     keyObj2 = Object.keys(Obj2); 
          
     // find values 
     valueObj1 = Object.values(Obj1); 
     valueObj2 = Object.values(Obj2); 
      
     //  length to iterate	 
     if(keyObj1.length == keyObj2.length) { 
         console.log("equal"); 
     } else { 
         console.log("not");
     } 
      
   