class Storage{
    static addFilmToStorage(film){
        const films = this.getFilmsFromStorage();
        films.push(film);
        localStorage.setItem("films",JSON.stringify(films));
    }
    static getFilmsFromStorage(){
        const films = localStorage.getItem("films");
        if(films === null ){
            return [];
        }
        return JSON.parse(films);
    }

    static deleteFilmFromStorage(target){
        const filmname = target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent;
        const filmlist = this.getFilmsFromStorage();
        const res = [];
        for(let i=0; i < filmlist.length ; i++){
            if(filmlist[i].name === filmname){
                continue;
            }
            res.push(filmlist[i]);
        }
        localStorage.setItem("films",JSON.stringify(res));
    }

    static clearAllFromStorage(){
        localStorage.removeItem("films");
    }
}