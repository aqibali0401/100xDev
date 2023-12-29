
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


const xx = new Animal("dog", 4);
console.log("🚀 ~ file: 01-Class.js:14 ~ xx:", xx)
