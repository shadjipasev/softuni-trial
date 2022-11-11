function solve(location){

    let props = Object.keys(location);

    for (count of props){

        console.log(`${count} -> ${location[count]}`)
    }


}solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)