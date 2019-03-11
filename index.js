

 function dwarfRollCall(dwarves){
   var array =[]
   for (var i=0;i<dwarves.length;i++){
     array.push(`${i+1}. ${dwarves[i]} `)
   }
   return array.join("")
 }
 
 //array to string // 
 

function summonCaptainPlanet(planeteerCalls){
 for (let i = 0; i < planeteerCalls.length; i++) {
 planeteerCalls[i] = planeteerCalls[i].toUpperCase() +"!"; {
  }
 }
 return planeteerCalls
  
}

function longPlaneteerCalls(words){
  for(var i=0;i<words.length;i++){
    if (words[i].length>4){
      return true }
      
  }
    return false 

}
 
 function findTheCheese (foods) {
  for(var i=0;i<foods.length;i++){
  if (foods[i]==="cheddar"
  ||foods[i]=="gouda"
  ||foods[i]=="camembert"
  
  ){
    return foods[i]
  } 
}
// if list of ingredients does not include cheese return the string "no cheese!"

return "no cheese!"
}
 
 // words = [ "greg", "apple", "bob"]
 // should return = [ "bob" ]
 // "greg".startsWith("b") return false
 // "bob".startsWith("b") return true
 function wordswithb(words) {
   var array =[]
   for (var i = 0; i < words.length; i++ ) {
      let word = words[i]
      if(word.startWith("b")){
        array.push(words)
      }
   }
   return array
 }
