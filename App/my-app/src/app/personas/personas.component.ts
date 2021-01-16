import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})

export class PersonasComponent{
    deshabilitar = false;
    mensaje = 'No se ha agregado ninguna persona'
    titulo = '';
    numero1 = 0;
    numero2 = 0;
    sum = 0;

    agregarPersona(){
        this.mensaje = 'Persona agregada'
    }

    modificarTitulo(event : Event)
    {
        this.titulo =  (<HTMLInputElement> event.target).value
    }

    sumar()
    {
        this.sum = this.numero1 + this.numero2;
    }
}