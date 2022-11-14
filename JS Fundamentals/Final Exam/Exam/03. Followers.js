function solve(input){

    let res = {};

    for(let line of input){
        let tokens = line.split(": ");
        let command = tokens[0];
        let name = tokens[1];
        let p2 = Number(tokens[2])

        if(command === "Like"){
            if(res.hasOwnProperty(name)){
                res[name] += p2;

            }else{
                res[name] = p2;
            }

        }else if(command === "Comment"){
            if(res.hasOwnProperty(name)){
                res[name] += 1;
            }else{
                res[name] = 1;
            }

        }else if(command === "New follower"){
            if(!res.hasOwnProperty(name)){
                res[name] = 0;
            }

        }else if(command ==="Blocked"){
            if(!res.hasOwnProperty(name)){
                console.log(`${name} doesn't exist.`)
            }else{
                delete res[name];
            }

        }if(command === "Log out"){
            break;
        }
    }

    let counter = 0;
    for(let [name, count] of Object.entries(res)){
        counter++;    
    }
    console.log(`${counter} followers`);
    for(let [name, count] of Object.entries(res)){
        console.log(`${name}: ${count}`)
    }
    
    

   /* "{count} followers
{username}: {likes+comments}
{username}: {likes+comments}
…
{username}: {likes+comments}" */

    
    
}solve(["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])
