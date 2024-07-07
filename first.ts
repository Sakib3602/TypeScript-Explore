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

  function opponent(item : string, item2: number ) : Array<string | number>{

    return [24,"sakib",23 , "dsidis", 22 ,32]

  }

  let don : (string | boolean)[] = []
  let don1 : number[] = []
  
  don1.push(22,232)

  don.push("sakib" , true)

  type User = {
    name : string,
    number: number,
    email: string,
    stu? : boolean

  }
  function pop(user : User) : object{

    const {name,number,email,stu} = user
    return {name,number,email,stu}

  }
  pop({name: "sakib", number: 23, email : "diosks"})

  //
}
