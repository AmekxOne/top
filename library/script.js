let modal = document.getElementById("modal");
let btn = document.querySelector("#btn");
let test = document.querySelector("#test");

btn.addEventListener("click", () => {
    modal.classList.toggle('hidden');
})

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.classList.toggle('hidden');
    }
})