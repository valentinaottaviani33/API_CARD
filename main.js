const btn = document.getElementById("caricaPost");
const loading = document.getElementById("loading");
const container = document.getElementById("container");


btn.addEventListener("click", function(){


    //Mostro lo spinner e svuoto il container(per eventuali refusi di dati )
    loading.style.display = "block";
    container.innerHTML = ""; // svuoto il container innerHtml -> innesta qualcosa in pagina

    //funzione di recupero dati
    fetch("https://jsonplaceholder.typicode.com/posts")

        .then(response => {
            
            if(!response.ok){

                throw new Error("errore nel recupero dei dati");

            }
        return response.json();
         
    })

    .then(data => {

        //nascondo il loader perchè ho i dati
        loading.style.display = "none";

        //mostro solamente i primi 10
        const primiPost = data.slice(0, 9); // ottengo solo i primi 10 post "slice"

        //creo card con bootstrap forEach  un ciclo "per tutti"
        console.log(primiPost)

        primiPost.forEach(post => {


            //CREO GLI ELEMENTI PER LA CARD PER OGNI POST

            const col = document.createElement("div");
            //aggiungo classi bootstrap con .className
            col.className = "col-md-4";

            const card = document.createElement("div");
            //aggiungo classi bootstrap con .className
            card.className = "card shadow-sm h-100";

            const cardBody = document.createElement("div");
            //aggiungo classi bootstrap con .className
            cardBody.className = "card-body";

            const title = document.createElement("h5");
            //aggiungo classi bootstrap con .className
            title.className = "card-title text-primary";
            title.textContent = post.title;

            const text = document.createElement("p");
            //aggiungo classi bootstrap con .className
            text.className = "card-text text-muted";
            text.textContent = post.body;
            
            // AGGIUNGO I CONTENUTI NELLA CARD

            cardBody.appendChild(title);
            cardBody.appendChild(text);
            card.appendChild(cardBody);
            col.appendChild(card);

            //Aggiungo la colonna al container

            container.appendChild(col);


        });
    })
});