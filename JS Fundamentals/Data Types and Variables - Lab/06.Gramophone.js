function solve(bandName,albumName,songName){

    let rotations = (albumName.length * bandName.length) * songName.length / 2
    
    console.log(`The plate was rotated ${Math.ceil(rotations / 2.5)} times.`)
    
}solve('Black Sabbath', 'Paranoid', 'War Pigs')