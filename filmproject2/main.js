const filmForm = document.getElementById("movieform");
const filmName = document.getElementById("name");
const filmDirector = document.getElementById("director");
const filmLink = document.getElementById("link");
const filmList = document.getElementById("films");
const cardBodySecond = document.querySelectorAll(".card-body")[1];

//console.log(filmForm);

eventListeners();

function eventListeners(){
    filmForm.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",loadAllFilms);
    filmList.addEventListener("click",deleteMovie);
    cardBodySecond.addEventListener("click",clearAll);
}

function clearAll(e){
    // console.log(e.target);
    if(e.target.id === "clear-all"){
        UI.clearAllFromUI();
        Storage.clearAllFromStorage();
    }
}

function  deleteMovie(e){
    //console.log(e.target);
    if(e.target.className === "fa-sharp fa-solid fa-delete-left" ){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target);
    }
}

function loadAllFilms(e){
    // console.log(e);
    const filmsfromstorage = Storage.getFilmsFromStorage();
    for(let i=0; i < filmsfromstorage.length ; i++){
        //console.log(filmsfromstorage[i]);
        UI.addToUI(filmsfromstorage[i]);
    }
}

function addFilm(e){
    //console.log(e);
    const name = filmName.value.trim();
    const director = filmDirector.value.trim();
    const link = filmLink.value;
    //console.log(name,director,link);
    if(name === "" || director === "" || link === ""){
        UI.showAlert("secondary","A field cannot be empty!");
    }
    else{
        const newFilm = new Film(name,director,link);
        UI.addToUI(newFilm);
        UI.clearAllInputs(filmName,filmDirector,filmLink);
        Storage.addFilmToStorage(newFilm);
        UI.showAlert("success","The film has been added!");
    }
    e.preventDefault();
}

