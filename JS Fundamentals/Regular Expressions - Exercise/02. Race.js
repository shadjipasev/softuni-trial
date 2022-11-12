function racing(input){
    let regexName = /[A-Z]/gi;
    let regexMeters = /[0-9]/g;

    let names = input.shift().split(", ");

    let result = {};

    for(let line of input){
        if(line !== "end of race"){
            let raceName = line.match(regexName).join("");
            let metersDigit = line.match(regexMeters);
            let distance = 0;
            for(let meter of metersDigit){
              distance += Number(meter);
            }
            
            if(names.includes(raceName)){
                if(result.hasOwnProperty(raceName)){
                    result[raceName] += distance;
                }else{
                    result[raceName] = distance
                }
            }
        }
    }
    let sorted = Object.keys(result).sort((a,b) => result[b] - result[a]);
    console.log(`1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`)

}racing(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])