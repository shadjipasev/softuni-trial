function leaving(input){
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let apartSize = w * h * l;
    sumCushion = 0;
    
    let isSpaceFull = false;
    
    

    while(command !== "Done"){
      let  deliveredCushion = Number(input[command]);
      sumCushion += deliveredCushion
      
      if(sumCushion > apartSize){
          isSpaceFull = true;
          break;
      }else{
          command++
      }
      
      
        
    }
    
    console.log(sumCushion);


} leaving (["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

