let cards=[
    {
        image:"data:image/jpeg;base64,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",
        value:1,
        status:"closed"
    },
    { 
         image:"data:image/jpeg;base64,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",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png",
        value:2,
        status:"closed"
    },
    {
        image:"https://japan-forward.com/wp-content/uploads/2020/02/Lucario-Pokemon-e1582989647541.jpg",
        value:3,
        status:"closed"

    },
    {
        image:"https://japan-forward.com/wp-content/uploads/2020/02/Lucario-Pokemon-e1582989647541.jpg",
        value:3,
        status:"closed"

    },
    {
        image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87a4df4b-6f2b-4a00-9f36-3c58c1430fde/daw7bjv-a585436b-478c-4723-91af-5ddd9b41738d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg3YTRkZjRiLTZmMmItNGEwMC05ZjM2LTNjNThjMTQzMGZkZVwvZGF3N2Jqdi1hNTg1NDM2Yi00NzhjLTQ3MjMtOTFhZi01ZGRkOWI0MTczOGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DomRjmBR87jXctV5EU47ZOeaxX12rSHNhLpXkKGN7qM",
        value:4,
        status:"closed"
    },
    {
        image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87a4df4b-6f2b-4a00-9f36-3c58c1430fde/daw7bjv-a585436b-478c-4723-91af-5ddd9b41738d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg3YTRkZjRiLTZmMmItNGEwMC05ZjM2LTNjNThjMTQzMGZkZVwvZGF3N2Jqdi1hNTg1NDM2Yi00NzhjLTQ3MjMtOTFhZi01ZGRkOWI0MTczOGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DomRjmBR87jXctV5EU47ZOeaxX12rSHNhLpXkKGN7qM",
        value:4,
        status:"closed"
    },
    {
        image:"https://japan-forward.com/wp-content/uploads/2020/02/Garchomp-Pokemon-e1582989477194.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://japan-forward.com/wp-content/uploads/2020/02/Garchomp-Pokemon-e1582989477194.jpg",
        value:5,
        status:"closed"
    },

  
]




// durnsten shuffling alogorithm 

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;



function displayCards(data){

    let cardsString="";

    

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);






let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("game over");
            location.reload();

        }

        
    }

    displayCards(cards);
    
    checkUser()

}
function checkUser() {
    if(score==5) {
        alert("you won");
        location.reload();
    }
}
























