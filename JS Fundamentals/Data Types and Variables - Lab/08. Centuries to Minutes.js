function solve(centuries){

    let centuriesInYears = (centuries * 100);
    let yearsInDays = Math.trunc(centuriesInYears * 365.2422);
    let daysInHours = (yearsInDays * 24);
    let hoursInMinutes = (daysInHours * 60);

    console.log(`${centuries} centuries = ${centuriesInYears} years = ${yearsInDays} days = ${daysInHours} hours = ${hoursInMinutes} minutes`)

    

}solve(1)
solve(5)