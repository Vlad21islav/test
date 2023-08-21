function randint(max) {
  return Math.floor(Math.random() * max);
}

const color = (...kind) => {
  const colors = {
    info: `\x1b[0;${kind}m`
  };
  const color = colors.info;
  return (s) => {
    console.log(color + s);
  };
};



const find = (basket, name) => {
  let otv = ''
  for (const key in basket) {
    const items = basket[key];
    for (const item of items){
      if (item.name === name) otv += `${item.price}, `;
    }
  }
  return otv
};

const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
    { name: 'Mouse', price: 100 },
    { name: 'Laptop', price: 1520 },
  ],
  Textile: [
    { name: 'Bag', price: 50 },
    { name: 'Mouse pad', price: 50 },
    { name: 'Laptop', price: 1400 },
],
};

for (i of purchase.Electronics) {
    console.log(`name ${i.name}, price ${i.price}`)
}

const result = find(purchase, 'Laptop');
console.log(result);

good_nums = [1, 3, 4, 9, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 90, 91, 92, 93, 94, 95, 96, 97, 100]

for (let i = 0; i < good_nums.length; i++) {
    console.log(`\x1b[0;${good_nums[i]}m` + 'hello', good_nums[i])
}

const generateKey = (alphabet) => {
  const max = alphabet.length;
  return (length) => {
    let key = '';
    for (let i = 0; i < length;i++) {
      const index = Math.floor(Math.random() * max);
      key = key + alphabet[index]
    }
    console.log(key);
  };
};

generateKey('159236159236az')('159236159236az'.length)

color(42)('hello world')

const person = {
  name: '',
  age: '',
  phone: '',
  logInfo: function(job = '') {
    console.group(`${this.name}'s info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`phone is ${this.phone}`)
    if (job !== '') console.log(`job is ${job}`)
    console.groupEnd()
  }
}

const Vlad = {
  name: 'Vladislav',
  age: '13',
  phone: '*-***-***-**-**'
}

person.logInfo.call(Vlad)

function bind(person, log) {
  log.apply(person, [log])
}

function logPerson() {
  console.log(`person: ${this.name},\n${this.age},\n${this.job}`)
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 19, job: 'SMM'}

bind(person2, logPerson)

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
} 

sleep(2000).then(() => console.log('hello1'))
console.log('hello2')

class Animal {
  static type = 'ANIMAL'

  constructor(options) {
    this.name = options.name
    this.hasTail = options.hasTail
  }

  voice() {
    console.log("I'm animal")
  }

}

class Cat extends Animal {
  static type = 'CAT'

  constructor(options) {
    super(options)
    this.color = options.color
  }

  voice() {
    super.voice()
    console.log("I'm cat")
  }

}

const cat = new Cat({
  name: 'Cat',
  hasTail: true,
  color: 'black'
})

const myNamber = 42

localStorage.setItem('number', myNamber.toString())
console.log(localStorage.getItem('number'))

