document.getElementById("button").addEventListener("click", getRandomJoke);

function getRandomJoke(e) {
    let inputValue = document.getElementById("numberinput").value;
    const xhr = new XMLHttpRequest(); 
    xhr.open("GET", `http://api.icndb.com/jokes/random/${inputValue}`, true); 

   xhr.onload = function() {
    if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        let finalJoke = ""; 
        if (response.type === "success") {
            response.value.forEach(function(joke) {
                finalJoke+= `<li>${joke.joke} </li>`
            });
        }else {
            finalJoke+= `<li style="color:red;">Something is wrong with the code or server</li>`;
        } 
        document.querySelector(".jokes").innerHTML = finalJoke;
    }
   }

    xhr.send();



    e.preventDefault();
}