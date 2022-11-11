function library(input){

    let bookShelf = input.shift().split("&");
    

    /* console.log(bookShelf) */

    for(let commands of input){
        let tokens = commands.split(" | ");
        /* console.log(tokens); */

        let currentCommands = tokens[0];
        let currentBook = tokens[1];
        let bookTwo = tokens[2];

        if(currentCommands === "Add Book"){

            let indexOfBook = bookShelf.indexOf(currentBook)
            
            if(indexOfBook == -1){
                bookShelf.unshift(currentBook);
            }/* else{
               break;  
            } */
            
            /* console.log(bookShelf) */
        }else if(currentCommands === "Take Book"){
            let indexOfBook = bookShelf.indexOf(currentBook);

            if(indexOfBook !== -1){
                bookShelf.splice(indexOfBook,1)
            }/* else{
                break;
            } */
            
            /* console.log(bookShelf) */
        }else if(currentCommands === "Swap Books"){
            let indexOfBook = bookShelf.indexOf(currentBook);
            let indexOfBookTwo = bookShelf.indexOf(bookTwo);

            if(indexOfBook !== -1 && indexOfBookTwo !== -1){
                bookShelf.splice(indexOfBook,1,bookTwo);
                bookShelf.splice(indexOfBookTwo,1,currentBook);

            }/* else{
                break;
            } */
            /* console.log(bookShelf); */
        }else if(currentCommands === "Insert Book"){
            let indexOfBook = bookShelf.indexOf(currentBook);
            if(indexOfBook === -1){
                bookShelf.push(currentBook);
            }

        }else if(currentCommands === "Check Book"){
            let index = Number(currentBook);
            let bookToSee = bookShelf[index];
           if(index < bookShelf.length) {
               console.log(bookToSee)
           } 

        }else if(currentCommands === "Done"){
            break;
        }

    }
    
    console.log(bookShelf.join(", "))



}
/* library(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"]) */
/* library(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"]) */
/* library(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"]) */
library(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
   "Insert Book | Alice's Adventures in Wonderland",
   "Done"])


