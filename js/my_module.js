export default class MyModule {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hello my name is ${this.name}`;
  }
}
