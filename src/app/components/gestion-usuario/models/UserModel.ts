export class UserModel {

    ID_Usuario?: number;
    Usuario?: string;
    Id_Perfil?: number;
    Perfil?: string;
    Email?: string;
    Password?: string;

   constructor(id?: number, user?: string, perfil?: number, email?: string, pass?: string){
    this.ID_Usuario = id;
    this.Usuario = user;
    this.Id_Perfil = perfil;
    this.Email = email;
    this.Password = pass;
  }


}
