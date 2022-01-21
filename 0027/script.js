// №1 Обязателен ли "else"? Ответ: нет, else не обязателен.

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
}

alert(checkAge(15));

function checkAge(age) {
    if (age > 18) {
      return true;
    }
        return confirm('Родители разрешили?');
  }
  
  alert(checkAge(80));



// №2 Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

// Ответ:
  function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
  }

  function checkAge(age) {
    return ( age > 18 ) || confirm("Родители разрешили?");
  }



// №3 Функция min(a, b)

function min(a, b) {
    if ( a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));


// №4 Функция pow(x,n)


let x = Number(prompt("Введите число"));
let n = Number(prompt("Введите степень"));

function pow(x, n) {
    let a = x;
    
    for (let i = 1; i < n; i++) {
        a *= x;
    }
    return a;
}


if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x, n)); 
}


// Перепишите с использованием функции-стрелки

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );

//   Ответ:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => ("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );



    


