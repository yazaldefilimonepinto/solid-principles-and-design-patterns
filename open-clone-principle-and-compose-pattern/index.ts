// UseCases
class SaveUserController{
  constructor(
    private validator : Validate
  ){}

  add (){
    this.validator.valide();
  }
}

//Protocols
interface Validate {
  valide:() => void;
}

//Implemetation
class  UserEmailValidade implements Validate{
  valide(): void{

  }
}

//Implemetation
class  UserPasswordValidade implements Validate{
  valide(): void{

  }
}


//Design Composer
class UserValidadeCompose implements Validate {
  constructor(
    private userEmailValidade:UserEmailValidade,
    private userPasswordValidate:UserPasswordValidade
  ){}

  valide(): void{
    this.userEmailValidade.valide()
    this.userPasswordValidate.valide()
  }
}




const userPasswordValidate = new UserPasswordValidade();

const userEmailValidate = new UserEmailValidade();


//  Compose Pattern
const userValidadeCompose = new UserValidadeCompose(userEmailValidate, userPasswordValidate);

//  Open Clone Principle
const controller = new SaveUserController(userValidadeCompose);
