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
        case prefix+'FSTAT':
            search('fsstat');
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
          
	  case prefix + 'RESETPAC':
          search('reset');
        break;
        case prefix + 'RESETBELT':
            search('resetbelt');
          break;
          case prefix + 'RESETFS':
            search('resetfs');
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
                case 'pacspawn': 
                if(database[i].capeSlots<1 || database[i].cape < 1 ){
                    database[i].cape = Math.floor(Math.random() * 4 + 1);
                    database[i].capeSlots = 7;
                    message.channel.send("GACHAPON BESTOWED A  " + "[ "+database[i].cape+" ]" + " ATK PAC!");

         }
                
                else  if(database[i].capeSlots>=1 && database[i].capeSlots <= 6){
                    message.channel.send("You still have to finish your current PAC");
                    
                }
                else message.channel.send("GACHAPON BESTOWED A  " + "[ "+database[i].cape+" ]" + " ATK PAC!");
                break;
                case 'pacstat': message.channel.send("Pac is Currently: [ " + database[i].cape + " ] WeaponAttack " + "\nSlots Remaining: [ " + database[i].capeSlots+" ]"); break;
                case 'capeChaos': 
                if(database[i].capeSlots<1 || database[i].cape < 1 ){
                    message.channel.send("$pac to spawn another pac");
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
                           
                            message.channel.send("PAC DIED; FEELS GEORGE");
                           
                           break;

                       }


               }
                         else {
                         database[i].capeSlots--;
                         message.channel.send("Scroll Failed!\n" +  "Slots Remaining: [ " + database[i].capeSlots+" ]"+"\nWeaponAttack:[ "+database[i].cape+" ]");
                          }

                       if(database[i].capeSlots < 1 ){
                           
                            message.channel.send("\nFinal Result: " +"[ "+ database[i].cape+" ] WeaponAttack");
                           
                           
                           break;
                       }

                    break;   

               case 'reset':
                   message.channel.send("Cape has been reset!");
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
                case 'spawnfs': if(database[i].fSlots<1 || database[i].f < 1 ){
                    database[i].f= 2;
                    database[i].fSlots = 7;
                    message.channel.send("NICE JOB MAKING A FACE STOMPER WITH:  " + "[ "+ database[i].f +" ]" + " ATK!");

                        }
                else  if(database[i].fSlots>=1 && database[i].fSlots <= 6){
                    message.channel.send("You still have to finish your current Face Stompes");
                    
                }
                else message.channel.send("NICE JOB MAKING A FACE STOMPER WITH:  " + "[ "+ database[i].f +" ]" + " ATK!");
                break; 
                case 'fsstat': message.channel.send("Face Stompers Are Currently: [ " + database[i].f + " ] WeaponAttack " + "\nSlots Remaining: [ " + database[i].fSlots+" ]"); 
                break;
                case 'fsChaos': 
                    var randomINT = Math.floor(Math.random() * 11);
                    if(database[i].fSlots<1 || database[i].f < 1 ){
                        message.channel.send("$fs to spawn another Face Stomper");
                        break;
                    }
                   if(randomINT <= 6){ 

                       scrollValue = Math.floor(Math.random() * 11 - 5);
                       oldValue = database[i].f;
                       
                       database[i].f += scrollValue;
                       database[i].fSlots--;
                       message.channel.send("Success! Your Chaos Rolled a: " + "[ "+scrollValue+" ]" + "\nTotal WeaponAttack is now: "+"[ " + database[i].f+" ]" + "\nSlots Left: "+"[ " + database[i].fSlots+" ]");

                       if(database[i].f < 1){
                           message.channel.send("NICE JOB WASTING 900M LOL!");
                         
                           break;

                       }


               }
                         else {
                         database[i].fSlots--;
                         message.channel.send("Scroll Failed!\n" +  "Slots Remaining: [ " + database[i].fSlots+" ]"+"\nWeaponAttack:[ "+database[i].f+" ]");
                          }

                       if(database[i].fSlots < 1){
                           message.channel.send("\nFinal Result: " +"[ "+ database[i].f+" ] WeaponAttack ]");
                       
                           break;
                       }
                       break;

               case 'resetfs':
                   message.channel.send("Face Stompers has been reset!");
                   database[i].f = 2;
                   database[i].fSlots = 7;
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
                    
                }
                else  message.channel.send("NEST PQ BESTOWED A  " + "[ "+database[i].belt+" ]" + " ATK IMMORTAL PHARAOH BELT!");
                break;
                case 'beltstat': message.channel.send("Belt is Currently: [ " + database[i].belt + " ] WeaponAttack " + "\nSlots Remaining: [ " + database[i].beltSlots+" ]"); break;
                case 'beltChaos': 
                    var randomINT = Math.floor(Math.random() * 11);
                    if(database[i].beltSlots<1 || database[i].belt < 1 ){
                        message.channel.send("$belt to spawn another Belt");
                        break;
                    }
                   if(randomINT <= 6){ 

                       scrollValue = Math.floor(Math.random() * 11 - 5);
                       oldValue = database[i].belt;
                       
                       database[i].belt += scrollValue;
                       database[i].beltSlots--;
                       message.channel.send("Success! Your Chaos Rolled a: " + "[ "+scrollValue+" ]" + "\nTotal WeaponAttack is now: "+"[ " + database[i].belt+" ]" + "\nSlots Left: "+"[ " + database[i].beltSlots+" ]");

                       if(database[i].belt < 1){
                           message.channel.send("BELT DIED; FEELS GEORGE ]");
                           break;

                       }


               }
                         else {
                         database[i].beltSlots--;
                         message.channel.send("Scroll Failed!\n" +  "Slots Remaining: [ " + database[i].beltSlots+" ]"+"\nWeaponAttack:[ "+database[i].belt+" ]");
                          }

                       if(database[i].beltSlots < 1){
                           message.channel.send("\nFinal Result: " +"[ "+ database[i].belt+" ] WeaponAttack");
                           break;
                       }
                       break;

               case 'resetbelt':
                   message.channel.send("Belt has been reset!");
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
}





bot.on('ready', () => {

  console.log(bot.username + ' is operational!');
});

bot.login("NzE4NTg1NjUzMTA5MTk0ODIy.XtrBfA.BrAJKqR9Ye_kBVzkL0QSdYFM-lU");
