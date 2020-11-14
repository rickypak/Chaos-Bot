const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone:false});

bot.username = ('PataBot'); //bot name, change if you hate rappies :(

var database = [];

bot.on("message", message =>{

	var prefix = '$';
	var input = message.content.toUpperCase();

	switch(input){ //input is the discord message content.

	case prefix + 'PAC':
        search('pacspawn');
        break;
    case prefix+'PSTAT':
        search('pacstat');
        break;
    case prefix+'BELT':
       search('beltspawn');
        break;
    case prefix+'BSTAT':
        search('beltstat');
        break;
    case prefix+'FS':
        search('spawnfs');
        break;
    case prefix+'RED':
        search('redspawn');
        break;
    case prefix+'BLUE':
        search('bluespawn');
        break;
    case prefix+'SPEC':
        search('specspawn');
        break;

    case prefix+'FSTAT':
        search('fsstat');
        break;
    case prefix+'REDSTAT':
        search('rexstat');
        break;
    case prefix+'BLUESTAT':
        search('bstat');
        break;
    case prefix+'SPECSTAT':
        search('specstat');
        break;

	case prefix + 'CS':
          search('capeChaos');
          break;
    case prefix +'CSB':
        search('beltChaos');
        break;
    case  prefix+'CSF':
        search('fsChaos');
        break;
    case prefix+'CSR':
        search('redChaos');
        break;
    case prefix+'CB':
        search('blueChaos');
        break;
    case prefix+'CSP':
        search('specChaos');
        break;
          
	case prefix + 'RESETPAC':
        search('reset');
        break;
    case prefix + 'RESETBELT':
        search('resetbelt');
         break;
    case prefix + 'RESETFS':
        search('resetfs');
        break;
    case prefix+'RESETRED':
        search('redreset');
        break;
    case prefix+'RESETBLUE':
        search('bluereset');
        break;
    case prefix+'RESETSPEC':
        search('specreset');
        break;
	    default:
	  	}

function search(mode){
    for(var i = 0 ; i <= database.length; i++){
        //At final index of loop, if there are no ID matches, the following code makes a new entry in the array.
        if(i == database.length ){
            database.push(new ID(message.author.id)); 
            console.log("New user detected, concstructing ID: " + message.author.id);
           }
                   
       //Checks entire array for a matching ID.
        if(database[i].idnumber == message.author.id){

           switch(mode){
               case 'specspawn': 
               
               if(database[i].specSlots<1 || (database[i].spec1 < 1 && database[i].spec2 < 1)){
                   
                   database[i].spec1 = Math.floor(Math.random() * 1 + 1);
                   database[i].spec2 = Math.floor(Math.random() * 1 + 1);
                   database[i].specSlots = 5;
                   message.channel.send("YOU FOUND SPECTRUM GOGGLES!\nSTR  " + "[ "+database[i].spec1+" ]\nDEX [ "+database[i].spec2+" ]");
                 
                   

               }
               
               
               else  if(database[i].specSlots>=1 && database[i].specSlots <= 4){
                   message.channel.send("You still have to finish your current spec goggles");
                   message.channel.send({files: ["./equips/spec.png"]});
                   
               }
               else message.channel.send("YOU FOUND SPECTRUM GOGGLES!\nSTR  " + "[ "+database[i].spec1+" ]\nDEX [ "+database[i].spec2+" ]");
               message.channel.send({files: ["./equips/spec.png"]});
               database[i].specExist=true;
               break;

               case 'specstat': message.channel.send("STR: [ " + database[i].spec1 + " ]" + "\nDEX: [ "+database[i].spec2 + " ] "+
               "\nSlots Remaining: [ " + database[i].specSlots+" ]"); break;
               case 'specChaos': 
               
               if(database[i].specExist==false){
                   message.channel.send("$spec to spawn a Spec"); 
                   message.channel.send({files: ["./equips/spec.png"]});break;
               }else 
                
               message.channel.send(message.author.username );
               
               if(database[i].specSlots<1 || (database[i].spec1 < 1 && database[i].spec2 < 1)){
                   message.channel.send("$spec to spawn another Spec");
                   message.channel.send({files: ["./equips/spec.png"]});
                   break;
               }
                   var randomINT = Math.floor(Math.random() * 11);
                   
                   
                  if(randomINT <= 6){ 
                   scrollValue = Math.floor(Math.random() * 11 - 5);
                   scrollValue2 = Math.floor(Math.random() * 11 - 5);
                      if(database[i].spec1 > 0  ){
                       
                       database[i].spec1 += scrollValue;
                      }
                      if(database[i].spec2 > 0 ){
                       
                       database[i].spec2 += scrollValue2;
                      }

                     
                      database[i].specSlots--;
                    
                    if(database[i].spec1>0 && database[i].spec2>0){
                        /*message.channel.send({files: ["./equips/chaos.png"]});*/
                       message.channel.send("Success!\nYour Chaos Rolled a: " + "[ "+scrollValue+" ]"  + "[ "+scrollValue2+" ]" +  "\nSTR is now: "
                       +"[ " + database[i].spec1+" ]\nDEX is now: " +"[ " + database[i].spec2+" ]" +"\nSlots Left: "+"[ " + database[i].specSlots+" ]");
                    }
                    else if(database[i].spec1 <= 0 && database[i].spec2>0){
                        
                           database[i].spec1=0;
                           scrollValue=0;
                           /*message.channel.send({files: ["./equips/chaos.png"]});*/
                           message.channel.send("Success!\nYour Chaos Rolled a: " + "[ - ]"  + "[ "+scrollValue2+" ]" +  "\nSTR is now: "
                           +"[ " + database[i].spec1+" ]\nDEX is now: " +"[ " + database[i].spec2+" ]" +"\nSlots Left: "+"[ " + database[i].specSlots+" ]");
                       
                       /*message.channel.send("Success!\nYour Chaos Rolled a: "  + "[ "+scrollValue2+" ]" +  "\nSTR is now: "
                       +"[ " + database[i].red1 +" ]\nDex is now: " +"[ " + database[i].red2+" ]" +"\nSlots Left: "+"[ " + database[i].redSlots+" ]");*/
                    }
                    else if( database[i].spec1>0 && database[i].spec2 <= 0){
                       database[i].spec2=0;
                       scrollValue2=0;
                      /* message.channel.send({files: ["./equips/chaos.png"]});*/
                       message.channel.send("Success!\nYour Chaos Rolled a: " + "[ "+scrollValue+" ]"  + "[ - ]" +  "\nSTR is now: "
                       +"[ " + database[i].spec1+" ]\nDEX is now: " +"[ " + database[i].spec2+" ]" +"\nSlots Left: "+"[ " + database[i].specSlots+" ]");
                       /*message.channel.send("Success!\nYour Chaos Rolled a: " + "[ "+scrollValue+" ]"   +  "\nSTR is now: "
                       +"[ " + database[i].red1+" ]\nDex is now: " +"[ " +database[i].red2+" ]" +"\nSlots Left: "+"[ " + database[i].redSlots+" ]");*/
                    }
                     
                      
                   if(database[i].spec1<=0 && database[i].spec2<=0){
                   /* message.channel.send({files: ["./equips/chaos.png"]});*/
                       message.channel.send("Success!\nDEX is now: "
                       +"[ " + database[i].spec1+" ]\nLUK is now: " +"[ " + 0 +" ]" +"\nSlots Left: "+"[ " + database[i].specSlots+" ]");
                       
                   message.channel.send("Spec Died; Blame George <:scrungecry:692440114927894601> ");
                   break;
               }
           
                    if(database[i].specSlots ==0  && database[i].spec1 == 0 ){
                          
                       message.channel.send("\nFinal Result STR: " +"[ "+ 0+" ] " +"DEX: [ "+ database[i].spec2+" ]");
                       message.channel.send({files: ["./equips/spec.png"]});
                       message.channel.send("YOU LOST STR <:steveChamp:692459558278266890> ");
                      
                      break;
                  }
                  if(database[i].specSlots ==0  && database[i].spec2 == 0 ){
                   message.channel.send("\nFinal Result STR: " +"[ "+ database[i].spec1+" ] " +"DEX: [ "+ 0+" ]");
                   message.channel.send({files: ["./equips/spec.png"]});
                   message.channel.send("YOU LOST DEX <:steveChamp:692459558278266890> ");
                   break;
                  }


                   }
                        else {
                        database[i].specSlots--;
                        message.channel.send("Scroll Failed! <:heavybreathing:720793529458360441>");
                        message.channel.send("Slot Left: [ "+ database[i].specSlots + " ]");
                        
                         }

                      if(database[i].specSlots <=0  ){
                          
                           message.channel.send("\nFinal Result STR: " +"[ "+ database[i].spec1+" ] " +"DEX: [ "+ database[i].spec2+" ]");
                           
                          
                          
                          break;
                      }

                   break;   

              case 'specreset':
                  message.channel.send("specs has been reset!");
                  message.channel.send({files: ["./equips/spec.png"]});
                  database[i].red1 = Math.floor(Math.random() * 1 + 1);
                  database[i].red2 = Math.floor(Math.random() * 1 + 1);
                  database[i].redSlots = 7;
                  break;


           }
           console.log("Existing user found at index " + i + "User ID: " + message.author.id);
           break;
		}
	}/*End of Specs Function*/ 
	

   for(var i = 0 ; i <= database.length; i++){
        //At final index of loop, if there are no ID matches, the following code makes a new entry in the array.
        if(i == database.length ){
             database.push(new ID(message.author.id)); 
             console.log("New user detected, concstructing ID: " + message.author.id);
 
            }
                    
        //Checks entire array for a matching ID.
         if(database[i].idnumber == message.author.id){

            switch(mode){
                case 'redspawn': 
                if(database[i].redSlots<1 || (database[i].red1 < 1 && database[i].red2 < 1)){
                    database[i].red1 = Math.floor(Math.random() * 3 + 2);
                    database[i].red2 = Math.floor(Math.random() * 3 + 2);
                    database[i].redSlots = 7;
                   
                    message.channel.send("YOU FOUND RED REX EARRINGS!\nSTR  " + "[ "+database[i].red1+" ]\nDEX [ "+database[i].red2+" ]");
                    break;

                }
                
                
                else  if(database[i].redSlots>=1 && database[i].redSlots <= 6){
                    message.channel.send("You still have to finish your current earrings");
                    message.channel.send({files: ["./equips/red.png"]});
                    break;
                    
                }
                else message.channel.send("YOU FOUND RED REX EARRINGS!\nSTR  " + "[ "+database[i].red1+" ]\nDEX [ "+database[i].red2+" ]");
                message.channel.send({files: ["./equips/red.png"]});
                database[i].redExist=true;
                break;

                case 'rexstat': message.channel.send("STR: [ " + database[i].red1 + " ]" + "\nDEX: [ "+database[i].red2 + " ] "+
                "\nSlots Remaining: [ " + database[i].redSlots+" ]"); break;
                case 'redChaos': 
                if(database[i].redExist==false){
                    message.channel.send("$red to spawn your earrings");
                    message.channel.send({files: ["./equips/red.png"]});
                    break;
                }
                else
                message.channel.send(message.author.username );
                if(database[i].redSlots<1 || (database[i].red1 < 1 && database[i].red2 < 1)){
                    message.channel.send("$red to spawn another rex earring");
                    message.channel.send({files: ["./equips/red.png"]});
                    break;
                }
                    var randomINT = Math.floor(Math.random() * 11);
                    
                    
                   if(randomINT <= 6){ 
                    scrollValue = Math.floor(Math.random() * 11 - 5);
                    scrollValue2 = Math.floor(Math.random() * 11 - 5);
                       if(database[i].red1 > 0  ){
                        
                        database[i].red1 += scrollValue;
                       }
                       if(database[i].red2 > 0 ){
                        
                        database[i].red2 += scrollValue2;
                       }

                      
                       database[i].redSlots--;
                     
                     if(database[i].red1>0 && database[i].red2>0){
                       /* message.channel.send({files: ["./equips/chaos.png"]});*/
                        message.channel.send("Success!\nYour Chaos Rolled a: " + "[ "+scrollValue+" ]"  + "[ "+scrollValue2+" ]" +  "\nSTR is now: "
                        +"[ " + database[i].red1+" ]\nDex is now: " +"[ " + database[i].red2+" ]" +"\nSlots Left: "+"[ " + database[i].redSlots+" ]");
                     }
                     else if(database[i].red1 <= 0 && database[i].red2>0){
                         
                            database[i].red1=0;
                          /*  message.channel.send({files: ["./equips/chaos.png"]});*/
                            message.channel.send("Success!\nYour Chaos Rolled a: " + "[ - ]"  + "[ "+scrollValue2+" ]" +  "\nSTR is now: "
                            +"[ " + database[i].red1+" ]\nDex is now: " +"[ " + database[i].red2+" ]" +"\nSlots Left: "+"[ " + database[i].redSlots+" ]");
                        
                        /*message.channel.send("Success!\nYour Chaos Rolled a: "  + "[ "+scrollValue2+" ]" +  "\nSTR is now: "
                        +"[ " + database[i].red1 +" ]\nDex is now: " +"[ " + database[i].red2+" ]" +"\nSlots Left: "+"[ " + database[i].redSlots+" ]");*/
                     }
                     else if( database[i].red1>0 && database[i].red2 <= 0){
                        database[i].red2=0;
                       /* message.channel.send({files: ["./equips/chaos.png"]});*/
                        message.channel.send("Success!\nYour Chaos Rolled a: " + "[ "+scrollValue+" ]"  + "[ - ]" +  "\nSTR is now: "
                        +"[ " + database[i].red1+" ]\nDex is now: " +"[ " + database[i].red2+" ]" +"\nSlots Left: "+"[ " + database[i].redSlots+" ]");
                        /*message.channel.send("Success!\nYour Chaos Rolled a: " + "[ "+scrollValue+" ]"   +  "\nSTR is now: "
                        +"[ " + database[i].red1+" ]\nDex is now: " +"[ " +database[i].red2+" ]" +"\nSlots Left: "+"[ " + database[i].redSlots+" ]");*/
                     }
                      
                       
                     if(database[i].red1<=0 && database[i].red2<=0){
                       /* message.channel.send({files: ["./equips/chaos.png"]});*/
                        message.channel.send("Success!\nSTR is now: "
                        +"[ " + 0 +" ]\nDex is now: " +"[ " + 0+" ]" +"\nSlots Left: "+"[ " + database[i].redSlots+" ]");
                       
                    message.channel.send("Rex Died; Blame George <:scrungecry:692440114927894601> ");
                    break;
                }
            
                     if(database[i].redSlots ==0  && database[i].red1 == 0 ){
                           
                        message.channel.send("\nFinal Result STR: " +"[ "+ 0+" ] " +"DEX: [ "+ database[i].red2+" ]");
                        message.channel.send({files: ["./equips/red.png"]});
                        message.channel.send("YOU LOST STR <:steveChamp:692459558278266890> ");
                       
                       break;
                   }
                   if(database[i].redSlots ==0  && database[i].red2 == 0 ){
                    message.channel.send("\nFinal Result STR: " +"[ "+ database[i].red1+" ] " +"DEX: [ "+ 0+" ]");
                    message.channel.send({files: ["./equips/red.png"]});
                    message.channel.send("YOU LOST DEX <:steveChamp:692459558278266890> ");
                    break;
                   }


                    }
                         else {
                         database[i].redSlots--;
                         message.channel.send({files: ["./equips/chaos.png"]});
                         message.channel.send("Scroll Failed! <:heavybreathing:720793529458360441>");
                         message.channel.send("Slot Left: [ "+ database[i].redSlots + " ]");

                          }

                       if(database[i].redSlots ==0  ){
                           
                            message.channel.send("\nFinal Result STR: " +"[ "+ database[i].red1+" ] " +"DEX: [ "+ database[i].red2+" ]");
                           
                           
                           
                           break;
                       }

                    break;   

               case 'redreset':
                   message.channel.send("Red Rex Earrings has been reset!");
                   message.channel.send({files: ["./equips/red.png"]});
                   database[i].red1 = Math.floor(Math.random() * 3 + 2);
                   database[i].red2 = Math.floor(Math.random() * 3 + 2);
                   database[i].redSlots = 7;
                   break;


            }
            console.log("Existing user found at index " + i + "User ID: " + message.author.id);
            break;

        }
	}/*End of Rex Function*/ 
	for(var i = 0 ; i <= database.length; i++){
	if(i == database.length ){
		database.push(new ID(message.author.id)); 
		console.log("New user detected, concstructing ID: " + message.author.id);

	   }
			   
	if(database[i].idnumber == message.author.id){

	   switch(mode){
		   case 'bluespawn': 
		   
           if(database[i].blueSlots<1 || (database[i].blue=1 < 1 || database[i].blue2 < 1)){
            database[i].blue1 = Math.floor(Math.random() * 3 + 2);
            database[i].blue2 = Math.floor(Math.random() * 3 + 2);
            database[i].blueSlots = 7;
           
            message.channel.send("YOU FOUND BLUE REX EARRINGS!\nDEX  " + "[ "+database[i].blue1+" ]\nLUK [ "+database[i].blue2+" ]");
            break;

        }
        
        
        if(database[i].blueSlots>=1 && database[i].blueSlots <= 6){
            message.channel.send("You still have to finish your current earrings");
            message.channel.send({files: ["./equips/blue.png"]});
            break;
            
        }
        else 
        
        message.channel.send("YOU FOUND BLUE REX EARRINGS!\nDEX  " + "[ "+database[i].blue1+" ]\nLUK [ "+database[i].blue2+" ]");
        message.channel.send({files: ["./equips/blue.png"]});
        database[i].blueExist=true;
        break;

		   case 'bstat': message.channel.send("DEX: [ " + database[i].blue1 + " ]" + "\nLUK: [ "+database[i].blue2 + " ] "+
		   "\nSlots Remaining: [ " + database[i].blueSlots+" ]"); break;

		   case 'blueChaos': 
		   if(database[i].blueExist==false){
               message.channel.send("$blue to spawn your earrings");
               message.channel.send({files: ["./equips/blue.png"]});
			   break;
		   }
		   else
		   message.channel.send(message.author.username );
		   if(database[i].blueSlots<1 || (database[i].blue1 < 1 && database[i].blue2 < 1)){
               message.channel.send("$blue to spawn another rex earring");
               message.channel.send({files: ["./equips/blue.png"]});
			   break;
		   }else
			   var randomINT = Math.floor(Math.random() * 11);
			   
			   
			  if(randomINT <= 6){ 
			   scrollValue = Math.floor(Math.random() * 11 - 5);
			   scrollValue2 = Math.floor(Math.random() * 11 - 5);
				  if(database[i].blue1 > 0  ){
				   
				   database[i].blue1 += scrollValue;
				  }
				  if(database[i].blue2 > 0 ){
				   
				   database[i].blue2 += scrollValue2;
				  }

				 
				  database[i].blueSlots--;
				
				if(database[i].blue1>0 && database[i].blue2>0){
                   /* message.channel.send({files: ["./equips/chaos.png"]});*/
				   message.channel.send("Success!\nYour Chaos Rolled a: " + "[ "+scrollValue+" ]"  + "[ "+scrollValue2+" ]" +  "\nDEX is now: "
				   +"[ " + database[i].blue1+" ]\nLUK is now: " +"[ " + database[i].blue2+" ]" +"\nSlots Left: "+"[ " + database[i].blueSlots+" ]");
				}
				else if(database[i].blue1 <= 0 && database[i].blue2>0){
					
					   database[i].blue1=0;
					   scrollValue=0;
					  /* message.channel.send({files: ["./equips/chaos.png"]});*/
					   message.channel.send("Success!\nYour Chaos Rolled a: " + "[ - ]"  + "[ "+scrollValue2+" ]" +  "\nDEX is now: "
					   +"[ " + database[i].blue1+" ]\nLUK is now: " +"[ " + database[i].blue2+" ]" +"\nSlots Left: "+"[ " + database[i].blueSlots+" ]");
				   
				   /*message.channel.send("Success!\nYour Chaos Rolled a: "  + "[ "+scrollValue2+" ]" +  "\nSTR is now: "
				   +"[ " + database[i].red1 +" ]\nDex is now: " +"[ " + database[i].red2+" ]" +"\nSlots Left: "+"[ " + database[i].redSlots+" ]");*/
				}
				else if( database[i].blue1>0 && database[i].blue2 <= 0){
				   database[i].blue2=0;
				   scrollValue2=0;
				  /* message.channel.send({files: ["./equips/chaos.png"]});*/
				   message.channel.send("Success!\nYour Chaos Rolled a: " + "[ "+scrollValue+" ]"  + "[ - ]" +  "\nDEX is now: "
				   +"[ " + database[i].blue1+" ]\nLUK is now: " +"[ " + database[i].blue2+" ]" +"\nSlots Left: "+"[ " + database[i].blueSlots+" ]");
				   /*message.channel.send("Success!\nYour Chaos Rolled a: " + "[ "+scrollValue+" ]"   +  "\nSTR is now: "
				   +"[ " + database[i].red1+" ]\nDex is now: " +"[ " +database[i].red2+" ]" +"\nSlots Left: "+"[ " + database[i].redSlots+" ]");*/
				}
				 
				  
			   if(database[i].blue1<=0 && database[i].blue2<=0){
               /* message.channel.send({files: ["./equips/chaos.png"]});*/
				   message.channel.send("Success!\nDEX is now: "
                   +"[ " + database[i].blue1+" ]\nLUK is now: " +"[ " + 0 +" ]" +"\nSlots Left: "+"[ " + 0 +" ]");
                   
			   message.channel.send("Rex Died; Blame George <:scrungecry:692440114927894601> ");
			   break;
		   }
	   
				if(database[i].blueSlots ==0  && database[i].blue1 == 0 ){
					  
                   message.channel.send("\nFinal Result DEX: " +"[ "+ 0+" ] " +"LUK: [ "+ database[i].blue2+" ]");
                   message.channel.send({files: ["./equips/blue.png"]});
				   message.channel.send("YOU LOST DEX <:steveChamp:692459558278266890> ");
				  
				  break;
			  }
			  if(database[i].blueSlots ==0  && database[i].blue2 == 0 ){
               message.channel.send("\nFinal Result DEX: " +"[ "+ database[i].blue1+" ] " +"LUK: [ "+ 0+" ]");
               message.channel.send({files: ["./equips/blue.png"]});
			   message.channel.send("YOU LOST LUK <:steveChamp:692459558278266890> ");
			   break;
			  }


			   }
					else {
                    database[i].blueSlots--;
                    message.channel.send({files: ["./equips/chaos.png"]});
					message.channel.send("Scroll Failed! <:heavybreathing:720793529458360441>");
					message.channel.send("Slot Left: [ "+ database[i].blueSlots + " ]");

					 }

				  if(database[i].blueSlots ==0  ){
					  
                       message.channel.send("\nFinal Result DEX: " +"[ "+ database[i].blue1+" ] " +"LUK: [ "+ database[i].blue2+" ]");
                       
					  
					  
					  break;
				  }

			   break;   

		  case 'bluereset':
              message.channel.send("Blue Rex Earrings has been reset!");
              message.channel.send({files: ["./equips/blue.png"]});
			  database[i].blue1 = Math.floor(Math.random() * 3 + 2);
			  database[i].blue2 = Math.floor(Math.random() * 3 + 2);
			  database[i].blueSlots = 7;
			  break;
	   }
	   break;
   }
}/*End of Blue Rex Function*/ 


    for(var i = 0 ; i <= database.length; i++){
        //At final index of loop, if there are no ID matches, the following code makes a new entry in the array.
        if(i == database.length ){
             database.push(new ID(message.author.id)); 
             console.log("New user detected, concstructing ID: " + message.author.id);
 
            }
                    
        //Checks entire array for a matching ID.
         if(database[i].idnumber == message.author.id){

            switch(mode){
                case 'pacspawn': 
                
                if(database[i].capeSlots<1 || database[i].cape < 1 ){
                    database[i].cape = Math.floor(Math.random() * 4 + 1);
                    database[i].capeSlots = 7;
                    
                    message.channel.send("GACHAPON BESTOWED A  " + "[ "+database[i].cape+" ]" + " ATK PAC!");
                    

         }
                
                else  if(database[i].capeSlots>=1 && database[i].capeSlots <= 6){
                    message.channel.send({files: ["./equips/pac.png"]});
                    message.channel.send("You still have to finish your current PAC");
                    
                }
                else message.channel.send("GACHAPON BESTOWED A  " + "[ "+database[i].cape+" ]" + " ATK PAC!");
                message.channel.send({files: ["./equips/pac.png"]});
                database[i].pacExist=true;
                break;
                case 'pacstat':
                    message.channel.send({files: ["./equips/pac.png"]});
                     message.channel.send("Pac is Currently: [ " + database[i].cape + " ] WeaponAttack " + "\nSlots Remaining: [ " + database[i].capeSlots+" ]"); 
                
                break;
                case 'capeChaos': 
                if(database[i].pacExist==false){
                    message.channel.send("$pac to spawn your pac");
                    message.channel.send({files: ["./equips/pac.png"]});
                    break;
                }else
                message.channel.send(message.author.username );
                if(database[i].capeSlots<1 || database[i].cape < 1 ){
                    message.channel.send("$pac to spawn another pac");
                    message.channel.send({files: ["./equips/pac.png"]});
                    break;
                }
        
                    var randomINT = Math.floor(Math.random() * 11);
                    
                    
                   if(randomINT <= 6){ 

                       scrollValue = Math.floor(Math.random() * 11 - 5);
                       oldValue = database[i].cape;
                       
                       database[i].cape += scrollValue;
                       database[i].capeSlots--;
                       
                       message.channel.send("Success! Your Chaos Rolled a: " + "[ "+scrollValue+" ]" + "\nTotal WeaponAttack is now: "+"[ " + database[i].cape+" ]" + "\nSlots Left: "+"[ " + database[i].capeSlots+" ]");
                        
                       if(database[i].cape < 1 ){

                            
                            message.channel.send("PAC DIED; FEELS GEORGE <:scrungeblush:692439525535908001>");
                           
                           break;

                       }


               }
                         else {
                         database[i].capeSlots--;
                         message.channel.send("Scroll Failed! <:heavybreathing:720793529458360441>");
                         message.channel.send({files: ["./equips/chaos.png"]});
                         message.channel.send("Slot Left: [ "+ database[i].capeSlots + " ]");
                          }

                       if(database[i].capeSlots < 1 ){
                           
                            message.channel.send("\nFinal Result: " +"[ "+ database[i].cape+" ] WeaponAttack");
                            
                           
                           
                           break;
                       }

                    break;   

               case 'reset':
                   message.channel.send("Cape has been reset!");
                   message.channel.send({files: ["./equips/pac.png"]});
                   database[i].cape = Math.floor(Math.random() * 4 + 1);
                   database[i].capeSlots = 7;
                   break;


            }
            console.log("Existing user found at index " + i + "User ID: " + message.author.id);
            break;

        }
    }/*End of Pac Function*/ 

    for(var i = 0 ; i <= database.length; i++){
        //At final index of loop, if there are no ID matches, the following code makes a new entry in the array.
        if(i == database.length){
             database.push(new ID(message.author.id));
             console.log("New user detected, concstructing ID: " + message.author.id);
             break;
                     }
        //Checks entire array for a matching ID.
       if(database[i].idnumber == message.author.id){
            switch(mode){
                case 'spawnfs': 
                
                if(database[i].fSlots< 1 || database[i].f < 1 ){
                    database[i].f= 2;
                    database[i].fSlots = 7;
                    message.channel.send("NICE JOB MAKING A FACE STOMPER WITH:  " + "[ "+ database[i].f +" ]" + " ATK!");
                  

                    }
                else  if((database[i].fSlots>=1 && database[i].fSlots <= 6) || (database[i].fSlots>=0 && database[i].fSlots <= 6)){
                    message.channel.send("You still have to finish your current Face Stompes");
                    message.channel.send({files: ["./equips/Facestompers.png"]});
                    
                }
                else 
                
                message.channel.send("NICE JOB MAKING A FACE STOMPER WITH:  " + "[ "+ database[i].f +" ]" + " ATK!");
                message.channel.send({files: ["./equips/Facestompers.png"]});
                database[i].fsExist=true;
                
                break; 
                case 'fsstat': message.channel.send("Face Stompers Are Currently: [ " + database[i].f + " ] WeaponAttack " + "\nSlots Remaining: [ " + database[i].fSlots+" ]"); 
                break;
                case 'fsChaos': 
                if(database[i].fsExist==false){
                    message.channel.send("$fs to spawn your Face Stompers");
                    message.channel.send({files: ["./equips/Facestompers.png"]});
                    break;
                }else
                message.channel.send(message.author.username );
                    var randomINT = Math.floor(Math.random() * 11);
                    if(database[i].fSlots<1 || database[i].f < 2 ){
                        message.channel.send("$fs to spawn another Face Stomper");
                        message.channel.send({files: ["./equips/Facestompers.png"]});
                    }
                   if(randomINT <= 6){ 

                       scrollValue = Math.floor(Math.random() * 11 - 5);
                       oldValue = database[i].f;
                       
                       database[i].f += scrollValue;
                       database[i].fSlots--;
                       
                       message.channel.send("Success! Your Chaos Rolled a: " + "[ "+scrollValue+" ]" + "\nTotal WeaponAttack is now: "+"[ " + database[i].f+" ]" + "\nSlots Left: "+"[ " + database[i].fSlots+" ]");

                       if(database[i].f < 1){
                           message.channel.send("NICE JOB WASTING 900M LOL! <:scrungeblush:692439525535908001>");
                           
                           break;

                       }


               }
                         else {
                         database[i].fSlots--;
                         message.channel.send({files: ["./equips/chaos.png"]});
                         message.channel.send("Scroll Failed! <:heavybreathing:720793529458360441>");
                         message.channel.send("Slot Left: [ "+ database[i].fSlots + " ]");
                         
                          }

                       if(database[i].fSlots < 1){
                           message.channel.send("\nFinal Result: " +"[ "+ database[i].f+" ] WeaponAttack ");
                           
                       
                           break;
                       }
                       break;

               case 'resetfs':
                   message.channel.send("Face Stompers has been reset!");
                   database[i].f = 2;
                   database[i].fSlots = 7;
                   message.channel.send({files: ["./equips/Facestompers.png"]});
                   break;


            }
            console.log("Existing user found at index " + i + "User ID: " + message.author.id);
            break;

        }
    }/*End of FaceStompers function */
    for(var i = 0 ; i <= database.length; i++){
        //At final index of loop, if there are no ID matches, the following code makes a new entry in the array.
        if(i == database.length){
             database.push(new ID(message.author.id));   
             console.log("New user detected, concstructing ID: " + message.author.id);
             break;
                     }
        //Checks entire array for a matching ID.
         if(database[i].idnumber == message.author.id){
            switch(mode){
                case 'beltspawn':                
                if(database[i].beltSlots<1 || database[i].belt < 1 ){
                    database[i].belt = 1;
                    database[i].beltSlots = 5;
                   
                    message.channel.send("NEST PQ BESTOWED A  " + "[ "+database[i].belt+" ]" + " ATK IMMORTAL PHARAOH BELT!");
                    


         }
                
                else  if(database[i].beltSlots>=1 && database[i].beltSlots <= 4){
                    message.channel.send("You still have to finish your current BELT");
                    message.channel.send({files: ["./equips/immortal.png"]});
                    
                }
                else  message.channel.send("NEST PQ BESTOWED A  " + "[ "+database[i].belt+" ]" + " ATK IMMORTAL PHARAOH BELT!");
                message.channel.send({files: ["./equips/immortal.png"]});
                database[i].beltExist=true;
                break;
                case 'beltstat': message.channel.send("Belt is Currently: [ " + database[i].belt + " ] WeaponAttack " + "\nSlots Remaining: [ " + database[i].beltSlots+" ]"); break;
                case 'beltChaos': 
                if(database[i].beltExist == false){
                    message.channel.send("$belt to spawn your belt");
                    message.channel.send({files: ["./equips/immortal.png"]});
                    break;
                }else
                message.channel.send(message.author.username );
                    var randomINT = Math.floor(Math.random() * 11);
                    if(database[i].beltSlots<1 || database[i].belt < 1 ){
                        message.channel.send("$belt to spawn another Belt");
                        message.channel.send({files: ["./equips/immortal.png"]});
                        break;
                    }
                   if(randomINT <= 6){ 

                       scrollValue = Math.floor(Math.random() * 11 - 5);
                       oldValue = database[i].belt;
                       
                       database[i].belt += scrollValue;
                       database[i].beltSlots--;
                       /*message.channel.send({files: ["./equips/chaos.png"]});*/
                       message.channel.send("Success! Your Chaos Rolled a: " + "[ "+scrollValue+" ]" + "\nTotal WeaponAttack is now: "+"[ " + database[i].belt+" ]" + "\nSlots Left: "+"[ " + database[i].beltSlots+" ]");

                       if(database[i].belt < 1){
                           
                           message.channel.send("BELT DIED; FEELS GEORGE <:scrungeblush:692439525535908001> ");
                           
                           break;

                       }


               }
                         else {
                         database[i].beltSlots--;
                         message.channel.send({files: ["./equips/chaos.png"]});
                         message.channel.send("Scroll Failed! <:heavybreathing:720793529458360441>");
                         message.channel.send("Slot Left: [ "+ database[i].beltSlots + " ]");
                          }

                       if(database[i].beltSlots < 1){
                           message.channel.send("\nFinal Result: " +"[ "+ database[i].belt+" ] WeaponAttack");
                          
                           break;
                       }
                       break;

               case 'resetbelt':
                   message.channel.send("Belt has been reset!");
                   message.channel.send({files: ["./equips/immortal.png"]});
                   database[i].belt = 1;
                   database[i].beltSlots = 5;
                   break;


            }
            console.log("Existing user found at index " + i + "User ID: " + message.author.id);
            break;

        }
    }/*End of Belt Function*/ 
}


})

//Constructor blueprint for all discord users accessing data.
function ID(IDnumber){	//IDnumber is message.author.id passed into this function and into this.idnumber, which gives it a label for referencing.
	this.idnumber = IDnumber;
	this.cape = Math.floor(Math.random() * 4 + 1);
	this.capeSlots = 7;
	this.belt = 1;
	this.beltSlots = 5;
	this.f = 2;
    this.fSlots = 7;
    this.red1=Math.floor(Math.random() * 3 + 2);
    this.red2=Math.floor(Math.random() * 3 + 2);
    this.redSlots=7;
    this.blue1=Math.floor(Math.random() * 3 + 2);
    this.blue2=Math.floor(Math.random() * 3 + 2);
    this.blueSlots=7;
    this.spec1=Math.floor(Math.random() * 1 + 1);
    this.spec2=Math.floor(Math.random() * 1 + 1);
    this.specSlots=5;
    this.pacExist=false;
    this.beltExist=false;
    this.fsExist=false;
    this.redExist=false;
    this.blueExist=false;
    this.specExist=false;
}





bot.on('ready', () => {

  console.log(bot.username + ' is operational!');
});

bot.login("NzE4NTg1NjUzMTA5MTk0ODIy.XuQAzw.8EdpACxO_yO_xV3Jp9xcPpczLKY");
