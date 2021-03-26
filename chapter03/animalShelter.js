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
    if (this.allAnimalsQueue.peek() === this.dogQueue.peek()) {
      this.dogQueue.remove();
    } else if (this.allAnimalsQueue.peek() === this.catQueue.peek()) {
      this.catQueue.remove();
    }

    return this.allAnimalsQueue.remove();
  }

  dequeueDog() {}

  dequeueCat() {}
}

const animalShelter = new AnimalShelter();
animalShelter.enqueue({ type: 'cat', name: 'peanuts' });
animalShelter.enqueue({ type: 'dog', name: 'machi' });
console.log(animalShelter.allAnimalsQueue);
animalShelter.dequeueDog();
console.log(animalShelter.allAnimalsQueue);

// console.log(animalShelter.allAnimalsQueue);
// animalShelter.enqueue({ type: 'dog', name: 'daisy' });
// animalShelter.enqueue({ type: 'dog', name: 'miso' });
// animalShelter.enqueue({ type: 'cat', name: 'dada' });
// animalShelter.enqueue({ type: 'cat', name: 'xiaoxiao' });

// console.log(animalShelter.allAnimalsQueue);
