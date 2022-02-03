 var business = 100;
 var minister = 150;
 var army = 300;


 if( business > minister && business > army ){
    console.log("Business is bigger");
 }else if( minister > business && minister > army ){
    console.log("Minister is bigger");
 }else if( army > business && minister < army ){
    console.log("Army is bigger");
 }
 console.log("\n");

 var max = Math.max(business, minister, army);
 console.log("Large is" + max);