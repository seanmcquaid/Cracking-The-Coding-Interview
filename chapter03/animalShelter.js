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
    } else if (animal.type === 'cat') {
      this.catQueue.add(animal);
    }

    this.allAnimalsQueue.add(animal);
  }

  dequeueAny() {
    if (this.allAnimalsQueue.peek() === this.dogQueue.peek()) {
      this.dogQueue.remove();
    } else if (this.allAnimalsQueue.peek() === this.catQueue.peek()) {
      this.catQueue.remove();
    }

    return this.allAnimalsQueue.remove();
  }

  dequeueDog() {
    if (this.allAnimalsQueue.peek().type === 'dog') {
      this.dogQueue.remove();
      return this.allAnimalsQueue.remove();
    } else {
      const tempQueue = new Queue();
      let isFirstDogFound = true;
      let removedDog;
      while (!this.allAnimalsQueue.isEmpty()) {
        console.log(this.allAnimalsQueue);

        if (this.allAnimalsQueue.peek().type === 'dog' && isFirstDogFound) {
          isFirstDogFound = false;
          removedDog = this.allAnimalsQueue.peek();
        } else {
          tempQueue.add(this.allAnimalsQueue.remove());
        }
      }

      while (!tempQueue.isEmpty()) {
        this.allAnimalsQueue.add(tempQueue.remove());
      }

      return removedDog;
    }
  }

  dequeueCat() {}
}

const animalShelter = new AnimalShelter();
animalShelter.enqueue({ type: 'cat', name: 'peanuts' });
animalShelter.enqueue({ type: 'dog', name: 'machi' });
animalShelter.dequeueDog();
console.log(animalShelter.allAnimalsQueue);
// animalShelter.enqueue({ type: 'dog', name: 'daisy' });
// animalShelter.enqueue({ type: 'dog', name: 'miso' });
// animalShelter.enqueue({ type: 'cat', name: 'dada' });
// animalShelter.enqueue({ type: 'cat', name: 'xiaoxiao' });

animalShelter.dequeueDog();
// console.log(animalShelter.allAnimalsQueue);
