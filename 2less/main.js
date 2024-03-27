
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  }
  
  class Student extends User {
    #password;
  
    constructor(name, age, username, password) {
        super(name, age);
        this.username = username;
        this.#password = password;
    }
  
    print(password) {
        if (password === this.#password) {
            console.log(`имя - ${this.name}; возраст ${this.age}; username - ${this.username}`);
        } else {
            console.log('Неверный пароль');
        }
    }
  }
  
  const student1 = new Student('Иван', 20, 'ivan123', 'pass123');
  student1.print('pass123'); 
  student1.print('wrongpass');