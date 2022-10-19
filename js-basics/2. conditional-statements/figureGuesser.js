function lab1(input){

    let figure = input[0];
    let area = 0

    if (figure === "square"){
       let side = Number(input[1]);
       area = side * side;
       
    }
       else if(figure === "rectangle" ){
       let sideA = Number(input[1]);
       let sideB = Number(input[2]);
       area = sideA * sideB;
       }
      
       else if(figure === "circle"){
       let side = Number(input[1]);
       area = side * side * Math.PI;

       }

       else if(figure === "triangle"){
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = (sideA * sideB) / 2;

       }
       let result = area.toFixed(3);
       console.log(result)
    
    }


lab1(["circle","6","20"]);
