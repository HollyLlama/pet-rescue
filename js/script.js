const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzzzyyzzee`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`Too tired to play.`);
        this.sleep();
      } else {
        console.log(`Yahoo! ${this.name} is ready to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const frank = createPet("Frank", "turtle");

// console.log(sora, clover, baxter, cleo, frank);

// clover.sleep();
// baxter.play();
// console.log(clover);
// console.log(baxter);

clover.isTired = 8;
frank.isTired = 9;

const allPets = [sora, clover, baxter, cleo, frank];
// console.log(allPets);

const showPets = function (petArray) {
  pets.innerHTML = "";
  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
