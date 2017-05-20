class Store {

  constructor(){
    this.login = true;
    this.isLogin();
  }

  isLogin(){
    return this.login;
  }

  setLogin(){
    return this.login = true;
  }

}

const store = new Store()
export default store
