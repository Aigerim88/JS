// #1 Проверка синтаксиса

let user = {
    name: "John",
    go: function () {alert(this.name)}
};

(user.go)();



// Создайте калькулятор

let calculator = {
    read() { 
        this.a = Number(prompt('a?'))
        this.b = Number(prompt('b?'))
    },
    sum() { return this.a + this.b }, 
    mul() { return this.a * this.b }, 
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );



//   Цепь вызовов
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();


ladder.up().up().down().showStep();

