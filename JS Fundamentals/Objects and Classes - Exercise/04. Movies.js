function solve(input) {

    let movieList = [];

    for (let token of input) {
        if (token.includes("addMovie")) {
            let info = token.split("addMovie");
            let movieName = info[1].trim(); 
            movieList.push( { name: movieName } );
        } else if (token.includes("directedBy")) {
            let info = token.split("directedBy ");
            let name = info[0].trim();
            let director = info[1];
            let movie = movieList.find((ele) => ele.name === name);

            if (movie) {
                movie.director = director;
            }

        } else if (token.includes("onDate")) {
            let info = token.split("onDate ");
            let name = info[0].trim();
            let date = info[1];
            let movie = movieList.find((ele) => ele.name === name);

            if(movie){
                movie.date = date;
            }
        }
    }

    for(let movie of movieList){
        if(movie.name && movie.director && movie.director){
            console.log(JSON.stringify(movie))
        }
    }

} solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])