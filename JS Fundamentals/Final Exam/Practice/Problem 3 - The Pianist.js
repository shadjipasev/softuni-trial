function solve(input) {
  let numberOfPieces = Number(input.shift());

  let playlist = {};

  for (let i = 0; i < numberOfPieces; i++) {
    let tokens = input.shift().split("|");
    let piece = tokens[0];
    let composer = tokens[1];
    let key = tokens[2];

    playlist[piece] = {
      composer,
      key,
    };
  }

  while (input[0] !== "Stop") {
    let tokens = input.shift().split("|");
    let command = tokens[0];
    let piece = tokens[1];
    let composer = tokens[2];
    let key = tokens[3];

    let playlistsS = playlist[piece]

    if (command === "Add") {
      if (!playlist.hasOwnProperty(piece)) {
        playlist[piece] = {
          composer,
          key,
        };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${piece} is already in the collection!`);
      }

    } else if (command === "Remove"){
        if(playlist.hasOwnProperty(piece)){
            delete playlist[piece];
            console.log(`Successfully removed ${piece}!`)
        }else{
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }

    } else if(command === "ChangeKey"){
        if(playlist.hasOwnProperty(piece)){
            playlistsS.key = composer;
            console.log(`Changed the key of ${piece} to ${composer}!`)
            
        }else{
            console.log(`Invalid operation! ${[piece]} does not exist in the collection.`)
        }
    }
  }
  for(let line of Object.entries(playlist)){
      let piece = line[0];
      let obj = line[1];
     console.log(`${piece} -> Composer: ${obj.composer}, Key: ${obj.key}`)
  }
  "{Piece} -> Composer: {composer}, Key: {key}"
}

solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
