class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
  getAverageRating(){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if(this._ratings.length === 0){
      return null;
    }
    else
    return (this.ratings.reduce(reducer)/this._ratings.length);
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
};

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
   get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}
class CD extends Media {
  constructor(title, artist, songs) {
    super(title); 
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }

}

const mov1 = new Movie('title', 'baka1', 20);
console.log(mov1);
const cd1 = new CD('cd1', 'baka2', ['asd', 'idk', 'lolxd']);
console.log(cd1);
const book1 = new Book('asd', 'asd', 450);
console.log(book1);
book1.addRating(3);
book1.addRating(10);
console.log(book1.getAverageRating());
console.log(book1.isCheckedOut);
book1.toggleCheckOutStatus();
console.log(book1.isCheckedOut);
