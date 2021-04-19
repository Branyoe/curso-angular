// compoente creado
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})



export class TitulosComponent implements OnInit {
  alumnos: Array<any> = [
    {nombre: 'Pablo', apellido: 'Mora'},
    {nombre: 'Pamela', apellido: 'Gonzalez'},
    {nombre: 'Daniel', apellido: 'El Mayate'}
  ]
  img: string = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6a0dc0d2-5fd6-4d7b-ac2a-08a7b2f81bae/de8043k-985d47dd-5da9-49e1-b09d-ec9fc5b300e1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNmEwZGMwZDItNWZkNi00ZDdiLWFjMmEtMDhhN2IyZjgxYmFlXC9kZTgwNDNrLTk4NWQ0N2RkLTVkYTktNDllMS1iMDlkLWVjOWZjNWIzMDBlMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.LtHL8bwXYlJptl-SUXlCxGIu2O9aam77YO0sqA-NEwQ'
  correo: string = '';
  password: string = '';
  password2: string = '';
  divTxt: string = 'Eventos';
  ngMdl: string = '';

  constructor() { }

  ngOnInit(): void {

  }
  mostrarPsw(): void{
    this.password2 = this.password;
  }
  clickDiv(): void{
    this.divTxt = 'Hiciste click'
  }
  dbl():void{
    this.divTxt = 'hiciste doble click'
  }
  ngMdlCg(): void{
    this.divTxt = `"${this.ngMdl}" mediante ngModelChange`;
  }
  inputE(evento: any){
    this.divTxt = `"${evento.target.value}" mediante input`;
  }
  focus(e:any){
    e.srcElement.style.background = 'red';
    this.divTxt = 'focus en un input';
  }
  keyDown(e:any){
    if(e.key === "Enter"){
      e.srcElement.style.background = 'white';
      this.divTxt = 'Keydown: enter';
    }
    
  }
  keyUp(e:any){
    if(e.key === "Enter"){
      e.srcElement.style.background = 'red';
      this.divTxt = 'Keyup: enter';
    }
  }
  mouseEnter(e:any): void{
    e.srcElement.style.height = '110px';
    e.srcElement.style.width = '310px';
  }
  mouseLeave(e:any):void{
    e.srcElement.style.height = "100px";
    e.srcElement.style.width = "300px";
  }
}
