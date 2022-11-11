function softUniReception(input) {

    let worker1 = Number(input[0]);
    let worker2 = Number(input[1]);
    let worker3 = Number(input[2]);
    let sumOfWorkers = worker1 + worker2 + worker3;
    let time = 0;


    let students = Number(input[3]);

    while(students > 0){
        time++;
        students -= sumOfWorkers;

        if(time % 4 == 0){
            students += sumOfWorkers;
        }
    }

    console.log(`Time needed: ${time}h.`)




} softUniReception(['5', '6', '4', '20'])