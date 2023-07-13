import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema2';
  
    nombre= '';
    email= '';
    mensaje= '';
    verificar= '';
    formulario:any= [];
  
    addFormulario(){
      if (this.verificar === '5') {
      this.formulario.push({
        nombre:this.nombre,
        email:this.email,
        mensaje:this.mensaje,
        verificar:this.verificar
      });
    } else {
      alert('Formulario inválido. La verificación es incorrecta.');
    }
    }
}
