let counter = document.getElementById("impresionMovie")
// let imgp = document.getElementById("imgpeli")


class Movie {
  
    

  constructor(title,img, actor, releaseYear, nacionality, genre) {
      
      this.img=`<img src ="${img}" >`;
      this.title = title;
      this.actor=actor;
      this.releaseYear = releaseYear;
      this.nacionality = nacionality;
      this.genre = genre;
      this.disp=true;

  
  }
  toTextVideo() {
      let res = ""
      for (let atribute in this) {
          if (typeof this[atribute] == "string" || typeof this[atribute] == "number" || typeof this[atribute] == "boolean") {
              res = res + "<b>" +atribute +"</b>" + ":  " + this[atribute] + "<br>";
          }
      }
      return res;
  }
}
class Videoteca{
    
     
  constructor(name,films){
      this.name=name;
      this.films=films;

     
}
toText(){
  let res = ""
  let arr=this.films;
  for (let atribute in arr) {
      if (typeof arr[atribute] == "string" || typeof arr[atribute] == "number" || typeof arr[atribute] == "boolean" || typeof arr[atribute] == "object") {
          counter.innerHTML += `<p> ${arr[atribute].toTextVideo()} </p>`
          
          
      }
  } 
  return counter;
}


addFilm(movie1){
  this.films.push(movie1);
}


//IMBD
writeJSON(name){

  let videotk = JSON.stringify(this)
  return fs.writeFileSync(name, videotk)

}

instanciaImbd(name){

  let  fileData = fs.readFileSync(name);

  return JSON.parse(fileData);
  }
}

let title = document.getElementById("title");
let img = document.getElementById("img");
let actor = document.getElementById("actor");
let releaseYear = document.getElementById("releaseYear");
let nacionality = document.getElementById("nacionality");
let genre = document.getElementById("genre");
let boton = document.getElementById("boton1");

let movie1 = new Movie("2Tontos y medio","https://pics.filmaffinity.com/X-902988465-mmed.jpg" ,1998, "EEUU", "Comedia")
let movie2 = new Movie("Perdidos en Bollywood", "https://pics.filmaffinity.com/Uncharted-417211360-large.jpg", 2015, "India", "Comedia")
let movie3 = new Movie("India y Juan", "https://pics.filmaffinity.com/En_busca_del_arca_perdida-504157092-large.jpg" ,2001, "UK", "Accion")
let movie4 = new Movie("The Scranton","https://pics.filmaffinity.com/The_Office_Serie_de_TV-467777498-large.jpg", 2005, "EEUU", "Drama")
let movie5 = new Movie("Vida de Michael Scott", "https://pics.filmaffinity.com/Virgen_a_los_40-395870064-large.jpg", 2007,  "EEUU", "Comedia")
let movie6 = new Movie("Dunder Mifflin","https://pics.filmaffinity.com/The_Office_Serie_de_TV-246675517-large.jpg", 2012, "EEUU", "Terror")

let videotk = new Videoteca("Videoclub",[movie1,movie2,movie3,movie4,movie5,movie6])

// let impJs = document.getAnimations("impJs");
// let arrD=[];

// let impjavita = document.getElementById("javita")
// console.log(boton1)
function darAlta(){


    let title = title.value;
    let img = img.value;
    let actor = actor.value;
    let releaseYear = releaseYear.value;
    let nacionality = nacionality.value;
    let genre=genre.value;

    let nMovie = new Movie(title,img,actor,releaseYear,nacionality,genre);
  videotk.films.push(nMovie);
    


}

