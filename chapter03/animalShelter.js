const Queue = require('./utils/Queue');

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
    this.allAnimalsQueue = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'dog') {
      this.dogQueue.add(animal);
    } else {
      this.catQueue.add(animal);
    }

    this.allAnimalsQueue.add(animal);
  }

  dequeueAny() {
    if (this.allAnimalsQueue.peek().type === 'dog') {
      this.dogQueue.remove();
    } else {
      this.catQueue.remove();
    }

    return this.allAnimalsQueue.remove();
  }

  dequeueDog() {
    this.dogQueue.remove();
    if (this.allAnimalsQueue.peek().type === 'dog') {
      return this.allAnimalsQueue.remove();
    } else {
      const tempQueue = new Queue();
      let isFirstDogFound = true;
      console.log(this.allAnimalsQueue);
      while (!this.allAnimalsQueue.isEmpty()) {
        if (this.allAnimalsQueue.peek().type === 'dog' && isFirstDogFound) {
          console.log(tempQueue);
          break;
        } else {
          tempQueue.add(this.allAnimalsQueue.remove());
          break;
        }
      }
      console.log(tempQueue);
    }
  }

  dequeueCat() {}
}

const animalShelter = new AnimalShelter();
animalShelter.enqueue({ type: 'cat', name: 'peanuts' });
animalShelter.enqueue({ type: 'dog', name: 'machi' });
animalShelter.dequeueDog();

// console.log(animalShelter.allAnimalsQueue);
// animalShelter.enqueue({ type: 'dog', name: 'daisy' });
// animalShelter.enqueue({ type: 'dog', name: 'miso' });
// animalShelter.enqueue({ type: 'cat', name: 'dada' });
// animalShelter.enqueue({ type: 'cat', name: 'xiaoxiao' });

// console.log(animalShelter.allAnimalsQueue);
