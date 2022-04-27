const pets = [
  {
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    // imageUrl:
      // "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    // imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
  },
// }
//     name: "Whiskers",
//     color: "Yellow",
//     specialSkill: "Can prove he is a real man by drinking whiskey.",
//     type: "dino",
//     imageUrl:
//       "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
//   },
//   {
//     name: "Coco",
//     color: "Black",
//     specialSkill: "Burps minimally.",
//     type: "dog",
//     imageUrl:
//       "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
//   },
//   {
//     name: "Spooky",
//     color: "Brown",
//     specialSkill: "Comfortable in the outdoors for up to eight hours.",
//     type: "cat",
//     imageUrl:
//       "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
//   },
//   {
//     name: "Tiger",
//     color: "Black",
//     specialSkill: "Can read (but cannot understand) Hebrew.",
//     type: "dog",
//     imageUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
//   },
//   {
//     name: "Oreo",
//     color: "Yellow",
//     specialSkill: "Able to stop chewing ice or whistling on request.",
//     type: "cat",
//     imageUrl:
//       "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
//   },
//   {
//     name: "Ginger",
//     color: "Grey",
//     specialSkill: "Comfortable in the outdoors for up to eight hours.",
//     type: "dino",
//     imageUrl:
//       "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg",
//   },
//   {
//     name: "Sassy",
//     color: "Brown",
//     specialSkill: "Adept at talking self and others out of fights.",
//     type: "cat",
//     imageUrl:
//       "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
//   },
//   {
//     name: "Sammy",
//     color: "Blue",
//     specialSkill: "Listens attentively to boring stories.",
//     type: "cat",
//     imageUrl:
//       "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
//   },
//   {
//     name: "Coco",
//     color: "Orange",
//     specialSkill: "Can be around food without staring creepily at it.",
//     type: "dino",
//     imageUrl:
//       "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600",
//   },
//   {
//     name: "Buster",
//     color: "Green",
//     specialSkill: "Does not use excessive acronyms.",
//     type: "dog",
//     imageUrl:
//       "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
//   },
//   {
//     name: "Chester",
//     color: "Red",
//     specialSkill:
//       "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
//     type: "dog",
//     imageUrl:
//       "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
//   },
//   {
//     name: "Samantha",
//     color: "Brown",
//     specialSkill: "Always up for dessert.",
//     type: "cat",
//     imageUrl:
//       "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
//   },
//   {
//     name: "Coco",
//     color: "Red",
//     specialSkill: "Burps minimally.",
//     type: "cat",
//     imageUrl:
//       "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
//   },
//   {
//     name: "Smokey",
//     color: "Brown",
//     specialSkill: "Drives at a safe rate of speed in snow or rain.",
//     type: "dino",
//     imageUrl:
//       "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg",
//   },
//   {
//     name: "Muffin",
//     color: "Yellow",
//     specialSkill:
//       "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
//     type: "cat",
//     imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg",
//   },
//   {
//     name: "Salem",
//     color: "Brown",
//     specialSkill: "Proficient in air guitar",
//     type: "dino",
//     imageUrl:
//       "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg",
//   },
//   {
//     name: "Callie",
//     color: "Blue",
//     specialSkill: "Listens attentively to boring stories.",
//     type: "dog",
//     imageUrl:
//       "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg",
//   },
//   {
//     name: "Spooky",
//     color: "Black",
//     specialSkill: "Uses litter box at appropriate hours.",
//     type: "cat",
//     imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg",
//   },
//   {
//     name: "Miss kitty",
//     color: "Red",
//     specialSkill: "Owns a Nintendo Power Glove.",
//     type: "dino",
//     imageUrl:
//       "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715",
//   },
//   {
//     name: "Snuggles",
//     color: "Orange",
//     specialSkill: "Is comfortable with jokes about his receding hairline.",
//     type: "cat",
//     imageUrl:
//       "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg",
//   },
//   {
//     name: "Buddy",
//     color: "Red",
//     specialSkill: "Enjoys fine wine.",
//     type: "dog",
//     imageUrl:
//       "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
//   },
//   {
//     name: "George",
//     color: "Brown",
//     specialSkill:
//       "Participates in karaoke but does not force others to go out to karaoke.",
//     type: "dog",
//     imageUrl:
//       "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg",
//   },
//   {
//     name: "Salem",
//     color: "Red",
//     specialSkill: "Knows the words to 4 rap songs.",
//     type: "cat",
//     imageUrl:
//       "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg",
//   },
//   {
//     name: "Bubba",
//     color: "Yellow",
//     specialSkill: "Cleans himself.",
//     type: "dog",
//     imageUrl:
//       "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
//   },
//   {
//     name: "Chloe",
//     color: "Green",
//     specialSkill: "Admits he is wrong",
//     type: "dino",
//     imageUrl:
//       "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
//   },
//   {
//     name: "Nala",
//     color: "Purple",
//     specialSkill: "Dances when he has to.",
//     type: "cat",
//     imageUrl:
//       "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
//   },
//   {
//     name: "Oscar",
//     color: "Green",
//     specialSkill:
//       "Gives hugs with appropriate pressure and for the right length of time.",
//     type: "cat",
//     imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
//   },
//   {
//     name: "Lucy",
//     color: "Red",
//     specialSkill: "Doesn’t get weirded out by the word “moist.”",
//     type: "dino",
//     imageUrl:
//       "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119",
//   },
];

// Utility Function
const renderToDom = (divId, textToDom) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToDom;
};

// Add cards to DOM
const cardsToDom = (array) => {
  let domString = " ";
  for (const animals of array) {
    domString += `<div class="card" style="width: 18rem;">
        <header>
        <h2>${animals.name}</h2>
       </header>
       <img src="${animals.imageUrl}" class="card-img-top" alt="Photos of Animals"/>
       <div class="card-body">
         <div class="animal-color">${animals.color}</div>
         <p class="card-text">${animals.specialSkill}</p>
        
       </div>
       <footer>${animals.type}</footer>
     </div> ;
     <button class="btn btn-danger" id="delete--${animals.name}">Delete</button>`;
    }
    renderToDom("#content", domString);
};

// Add submit form/ Modal
const animalBtnModal = () => {
  const domString = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add pet 
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="Help a pet find a home!" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
      <div class="form-floating mb-3">
        <input class="form-control form-control-lg" type="text" placeholder="Pet Image" id="image" aria-label="image" required>
        <label for="image">Image (Add a cute pic): </label>
      </div>
  
      <div class="form-floating mb-3">
        <input class="form-control form-control-lg" type="text" placeholder="Name" id="name" aria-label="name" required>
        <label for="name">Name:</label>
      </div>

      <div class="form-floating mb-3">
      <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
      <label for="color">Color:</label>
    </div>
     <div class="form-floating mb-3">
        <input class="form-control form-control-lg" type="text" placeholder="SS" id="specialSkill" aria-label="specialSkill" required>
        <label for="specialSkill">Special Skill:</label>
      </div>
      <div class="form-floating mb-3">
      <input class="form-control form-control-lg" type="text" placeholder="Type" id="type" aria-label="type" required>
      <label for="type">Type of pet:</label>
    </div>
    
    <button type="close" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" value="submit" id="button" class="btn btn-primary">Save changes</button>
    
    
    </div>
    </form>
    </div>
  </div>
</div>`;

  renderToDom("#modalContainer", domString);
};

// // Delete Buttons
// const delButton = ()=> {
//  let domString = `<button type="delete" id= "delete" class='delete-btn'>Delete</button>`;
// };
// renderToDom("#content", domString);


// Event listeners
const elButtons = () => {
  const formModal = new bootstrap.Modal(document.querySelector('#exampleModal'));
  document.querySelector("#buttons").addEventListener("click", (e) => {
    if (e.target.id === "cat") {
      const cats = pets.filter((pet) => pet.type === "cat");
      cardsToDom(cats);
    }

    if (e.target.id === "dog") {
      const dogs = pets.filter((pet) => pet.type === "dog");
      cardsToDom(dogs);
    }
    if (e.target.id === "dino") {
      const dinos = pets.filter((pet) => pet.type === "dino");
      cardsToDom(dinos);
    }
    if (e.target.id === "all") {
      const all = pets.filter((pet) => pet.type !== " ");
      cardsToDom(all);
    }
    if (e.target.id.includes('delete')) {
      console.log("Delete Button Pressed")
      const delete = pets.parse
    }
  });

  
  
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // grab the values from the form inputs and create an object
    // push that object to the data array
    // rerender cards using the cardsOnDom function and pass it the updated data array
    const newPet = {
      name: document.querySelector("#name").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#specialSkill").value,
      type: document.querySelector("#type").value,
      imageUrl: document.querySelector("#image").value
      
    };
    
    pets.push(newPet);
    cardsToDom(pets);
    // Close modal and reset form
    formModal.hide();
    form.reset();
  });
  
};



// Function to start Application
const startApp = () => {
  
  animalBtnModal();
  cardsToDom(pets);
  elButtons(); //always put this last
};

startApp();
