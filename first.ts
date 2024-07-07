{
  //

  // premetive

  let firstName: string;
  firstName = "John"; // only string value
  console.log(firstName);

  let age: number;
  age = 30; // only number value
  console.log(age);

  let isStudent: boolean;
  isStudent = true; // only boolean value
  console.log(isStudent);

  //   array
  let students: number[];

  // students = [12,234,234,"korim"]            this is wrong

  // must be an number array
  students = [12, 234, 234];
  // wrong argument must be number
  // students.push(true)
  students.push(23);

  let teacher: (string | number)[];

  teacher = [22, "akib", 24, 323];

  function getStudent(name?: string, id?: number) {
    // parameter's type annotation
    // here ? means optional

    return [id];
  }

  getStudent(undefined, 23);

  // Union oparetor
  const hero = (id: number | string) => {
    // here i need to make it conditionaly because id is unknown --- number or string

    if (id === "string") {
      console.log(id, "here string ");
    } else if (id === "number") {
      console.log(id, "here number ");
    }
  };
  hero(23);
  hero("don");

  function getUser(): (string | number)[] {
    return [23, "Alice", "sksoism"];
  }

  function opponent(item: string, item2: number): Array<string | number> {
    return [24, "sakib", 23, "dsidis", 22, 32];
  }


  const yu : ( string | number)[] = []

  yu.push("0",23)
  

  let ruser : [string,number,boolean] 

  ruser = ["lol",23,true]
  
  const kol : readonly(string | number)[] = ["op",32]

  // kol.push("pop",90)   readonly cannot push

  let don: (string | boolean)[] = [];
  // let don1: number[] = [];   its same 
  let don1: Array<number> = [];

  don1.push(22, 232);

  don.push("sakib", true);

  // when using type must be call like pop
  type User = {
    name: string;
    number: number;
    email: string;
    stu?: boolean;
  };
  function pop(user: User): Array<User> {
    const { name, number, email, stu } = user;
    return [
      { name, number, email, stu },
      { name, number, email, stu },
    ];
  }

  pop({ number: 23, name: "sakib", email: "diosks" });

  function yui(d : number) : (string | number) {
    if(d > 6){
      return 23
    }

    return "kokkk"

  }


  // object type 

  type Yp = {name : string; id: number; stu?: boolean}

  // we can use Yp here as a params type
  function obj(x : {name : string; id: number; stu?: boolean}) : object[] {
 
    return [x]
  }

  obj({name : "lolipop", id: 233, stu : true})


  interface Animal {
    name: string,
    cate: boolean,
    id: number
  }

  // const x = "hello" as number;   not possible
  const a = "expr" as any as number;  //this is ok

  let di : "opBro" ;

  // di = "opBrop"  here must value match with type
  di = "opBro"

  // here must alignment value will be 3 of them
  function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
  printText("Hello, world", "left");
  printText("G'day", "center");   

  const qw = (f : string, pop : 10 | 20 | 30)=>{
//....
  }

  qw("lolopop",10)  

  // enum

  enum Seat{
    first = "first",
    second = "hop"
   
  }

  function p(x : Seat) : Seat{
    return x

  }

  p(Seat.first)


























  //
}
