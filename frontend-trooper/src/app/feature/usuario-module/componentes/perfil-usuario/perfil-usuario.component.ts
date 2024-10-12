import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage, ref, uploadBytes} from '@angular/fire/storage';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {
  constructor(private storage: Storage, private router: Router) {}

  uploadImage($event: any){
    const file = $event.target.files[0];
    console.log(file);


    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
    .then(response => console.log(response))
    .catch(error => console.log(error));

  }



  irANuevoHospedaje() {
    this.router.navigate(['/hospedaje/nuevo']);  
  }
}
