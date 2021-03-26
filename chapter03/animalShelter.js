const Queue = require('./utils/Queue');

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
    this.allAnimalsQueue = new Queue();
  }

  enqueue(animalType) {
    if (animal.type === 'dog') {
      this.dogQueue.enqueue(animal);
    } else if (animal.type === 'cat') {
      this.catQueue.enqueue(animal);
    }

    this.allAnimalsQueue.enqueue(animal);
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
