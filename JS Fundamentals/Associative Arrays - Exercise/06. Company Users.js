function solve(input) {
  let result = {};

  for (let info of input) {
    let [companyName, userNumber] = info.split(" -> ");
    /* console.log(tokens); */

    if (result.hasOwnProperty(companyName) === false) {
      result[companyName] = new Set();
    }

    result[companyName].add(userNumber);
  }

  /* console.log(result); */

  let sorted = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]));

for (let [companyName, userNumber] of sorted) {
      console.log(`${companyName}`);
      
      for(let user of userNumber){
          console.log(`-- ${user}`)
      }
  }

}
solve([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
