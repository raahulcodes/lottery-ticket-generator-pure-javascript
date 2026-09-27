
let lottery = [];
let ticket = "";
for(let i=0;i<6;i++)
{
    let numbers = Math.floor(Math.random()*49)+1;
    if(!lottery.includes(numbers))
    {
        lottery.push(numbers);
    }
}

    lottery.sort((a,b)=>a-b);


for(let i=0;i<lottery.length;i++)
{
    ticket+=lottery[i];
}

    console.log(lottery);
    console.log(ticket);