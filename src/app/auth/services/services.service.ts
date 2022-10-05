import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   //Observable permite tener un tiempo de respuesta      
   verificacion() {
    console.log(localStorage.getItem('id'));

    if (localStorage.getItem('id')) {
      return true;
    } else {
      return false;
    }
    
  }

  login(id: any){
    //Almacenamos el datos con localstorage y set item 
    localStorage.setItem('id', id);
  }

  logout(){
    //Borramos todos los datos con localstorage y clear
    localStorage.clear();
  }
}
