// static


class Counter {
//   count : number = 0;
   static count : number = 0;

//   increment (){
  static increment (){
    // return (this.count = this.count + 1);
    return (Counter.count = Counter.count + 1);
  }

//   decrement (){
   static decrement (){
    // return (this.count = this.count - 1);
    return (Counter.count = Counter.count - 1);
  }

}


// const instance1 = new Counter();

// console.log(instance1.increment())


console.log(Counter.increment())