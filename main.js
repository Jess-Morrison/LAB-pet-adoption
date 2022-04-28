const pets = [
  { id: 1,    
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  { id: 2,    
name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSP-R5VQRwkHAClF1BazvhaNHpTNPUXxQQuQ&usqp=CAU",
  },
 { id: 3,
     name: "Whiskers",
     color: "Yellow",
     specialSkill: "Can prove he is a real man by drinking whiskey.",
     type: "dino",
     imageUrl:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGo7-HToNpksy0kUtdvn-sF6p6nf6DUOg3Ui2KMZksDtutmCDwXLfqSJdHnSx9rRUG_jk&usqp=CAU",
   },
   { id: 4,
     name: "Coco",
     color: "Black",
     specialSkill: "Burps minimally.",
     type: "dog",
     imageUrl:
       "https://placedog.net/500",
   },
   { id: 5,
     name: "Spooky",
     color: "Brown",
     specialSkill: "Comfortable in the outdoors for up to eight hours.",
     type: "cat",
     imageUrl:
      "http://placekitten.com/200/200",
   },
   { id: 6,
     name: "Tiger",
     color: "Black",
     specialSkill: "Can read (but cannot understand) Hebrew.",
     type: "dog",
     imageUrl:
       "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
   },
   { id: 7,
     name: "Oreo",
     color: "Yellow",
     specialSkill: "Able to stop chewing ice or whistling on request.",
     type: "cat",
     imageUrl:
       "http://placekitten.com/200/200",
   },
   { id: 8,
     name: "Ginger",
     color: "Grey",
     specialSkill: "Comfortable in the outdoors for up to eight hours.",
     type: "dino",
     imageUrl:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGo7-HToNpksy0kUtdvn-sF6p6nf6DUOg3Ui2KMZksDtutmCDwXLfqSJdHnSx9rRUG_jk&usqp=CAU",
   },
   { id: 9,
     name: "Sassy",
     color: "Brown",
     specialSkill: "Adept at talking self and others out of fights.",
     type: "cat",
     imageUrl:
       "http://placekitten.com/200/200",
   },
   { id: 10,
     name: "Sammy",
     color: "Blue",
     specialSkill: "Listens attentively to boring stories.",
     type: "cat",
     imageUrl:
       "http://placekitten.com/200/200",
   },
   { id: 11,
     name: "Coco",
     color: "Orange",
     specialSkill: "Can be around food without staring creepily at it.",
     type: "dino",
     imageUrl:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSP-R5VQRwkHAClF1BazvhaNHpTNPUXxQQuQ&usqp=CAU",
   },
   { id: 12,
     name: "Buster",
     color: "Green",
     specialSkill: "Does not use excessive acronyms.",
     type: "dog",
     imageUrl:
       "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
   },
   { id: 13,
     name: "Chester",
     color: "Red",
     specialSkill:
       "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
     type: "dog",
     imageUrl:
       "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
   },
   { id: 14,
     name: "Samantha",
     color: "Brown",
     specialSkill: "Always up for dessert.",
     type: "cat",
     imageUrl:
       "http://placekitten.com/200/200",
   },
   { id: 15,
     name: "Coco",
     color: "Red",
     specialSkill: "Burps minimally.",
     type: "cat",
     imageUrl:
       "http://placekitten.com/200/200",
   },
   { id: 16,
     name: "Smokey",
     color: "Brown",
     specialSkill: "Drives at a safe rate of speed in snow or rain.",
     type: "dino",
     imageUrl:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSP-R5VQRwkHAClF1BazvhaNHpTNPUXxQQuQ&usqp=CAU",
   },
   { id: 17,
     name: "Muffin",
     color: "Yellow",
     specialSkill:
       "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
     type: "cat",
     imageUrl: "http://placekitten.com/200/200",
   },
   { id: 18,
     name: "Salem",
     color: "Brown",
     specialSkill: "Proficient in air guitar",
     type: "dino",
     imageUrl:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRfaNd1dXGCvkIIifvy8yyuueaXfqMSyzzA&usqp=CAU",
   },
   { id: 19,
     name: "Callie",
     color: "Blue",
     specialSkill: "Listens attentively to boring stories.",
     type: "dog",
     imageUrl:
       "https://placedog.net/500/500",
   },
   { id: 20,
     name: "Spooky",
     color: "Black",
     specialSkill: "Uses litter box at appropriate hours.",
     type: "cat",
     imageUrl: "http://placekitten.com/200/200",
   },
   { id: 21,
     name: "Miss kitty",
     color: "Red",
     specialSkill: "Owns a Nintendo Power Glove.",
     type: "dino",
     imageUrl:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGo7-HToNpksy0kUtdvn-sF6p6nf6DUOg3Ui2KMZksDtutmCDwXLfqSJdHnSx9rRUG_jk&usqp=CAU",
   },
   { id: 22,
     name: "Snuggles",
     color: "Orange",
     specialSkill: "Is comfortable with jokes about his receding hairline.",
     type: "cat",
     imageUrl:
       "http://placekitten.com/200/200",
   },
   { id: 23,
     name: "Buddy",
     color: "Red",
     specialSkill: "Enjoys fine wine.",
     type: "dog",
     imageUrl:
       "https://placedog.net/500/400",
   },
   { id: 24,
     name: "George",
     color: "Brown",
     specialSkill:
       "Participates in karaoke but does not force others to go out to karaoke.",
     type: "dog",
     imageUrl:
       "https://placedog.net/500/600",
   },
   { id: 25,
     name: "Salem",
     color: "Red",
     specialSkill: "Knows the words to 4 rap songs.",
     type: "cat",
     imageUrl:
       "http://placekitten.com/200/200",
   },
   { id: 26,
     name: "Bubba",
     color: "Yellow",
     specialSkill: "Cleans himself.",
     type: "dog",
     imageUrl:
       "https:www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
   },
   { id: 27,
     name: "Chloe",
     color: "Green",
     specialSkill: "Admits he is wrong",
     type: "dino",
     imageUrl:
       "https:assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
   },
   { id: 28,
     name: "Nala",
     color: "Purple",
     specialSkill: "Dances when he has to.",
     type: "cat",
     imageUrl:
       "http://placekitten.com/200/200",
   },
   { id: 29,
     name: "Oscar",
     color: "Green",
     specialSkill:
       "Gives hugs with appropriate pressure and for the right length of time.",
     type: "cat",
     imageUrl: "http://placekitten.com/200/200",
   },
   { id: 30,
     name: "Lucy",
     color: "Red",
     specialSkill: "Doesn’t get weirded out by the word “moist.”",
     type: "dino",
     imageUrl:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRfaNd1dXGCvkIIifvy8yyuueaXfqMSyzzA&usqp=CAU",
   },
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
        
         <button class="btn btn-danger" id="delete">Delete</button>
       </div>
       <div>
       <footer>${animals.type}</footer>
     </div>`;
     
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
    // const [method,id] = document.querySelector.split(--){
    //   const index = pets.findIndex((taco) => taco.id == parseInt(id))
    // }
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
    
    document.querySelector("#content").addEventListener("click", (e) => {
      if (e.target.id){
        const [id] = e.target.id.split("--");
          const index = pets.findIndex((taco) => taco.id === parseInt(id));
        
       
    
       if (e.target.id.includes("#delete")) {
      pets.splice(index, 1)
      cardsToDom(pets);
       }
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
  
});
}


// Function to start Application
const startApp = () => {
  
  animalBtnModal();
  cardsToDom(pets);
  elButtons(); //always put this last
};

startApp();
