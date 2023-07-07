class UI{
    static addToUI(film){
        //console.log(film);
        // <tr>
        //     <td> <img src="" alt="" class = "img-fluid img-thumbnail"></td>
        //     <td></td>
        //     <td></td>
        //     <td> <a href="#" class="d-flex justify-content-center"  id="delete-movie" > <i class="fa-sharp fa-solid fa-delete-left" style="color:red;"></i> </a></td>
        // </tr> 
        const filmList = document.getElementById("films");
        // console.log(filmList);
        // console.log(filmList.innerHTML);
        filmList.innerHTML += `
            <tr>
                <td> <img src="${film.link}" alt="" class = "img-fluid img-thumbnail" style="width:500px;height:auto;"></td>
                <td>${film.name}</td>
                <td>${film.director}</td>
                <td> <a href="#" class="d-flex justify-content-center"  id="delete-movie" > <i class="fa-sharp fa-solid fa-delete-left" style="color:red;"></i> </a></td>
            </tr> 
        `;
    }

    static clearAllInputs(target1,target2,target3){
        target1.value = "";
        target2.value = "";
        target3.value = "";
    }

    static deleteFilmFromUI(target){
        target.parentElement.parentElement.parentElement.remove();
    }

    static clearAllFromUI(){
        const filmList = document.getElementById("films");
        while(filmList.lastElementChild != null ){
            filmList.lastElementChild.remove();
        }
    }

    static showAlert(type,message){
        const firstCardBody = document.querySelectorAll(".card-body")[0];
        const newtext = document.createTextNode(message);
        const newdiv = document.createElement("div");
        newdiv.className = `alert alert-${type}`;
        newdiv.appendChild(newtext);
        firstCardBody.appendChild(newdiv);
        setTimeout(function(){newdiv.remove();},2500);
    }

}