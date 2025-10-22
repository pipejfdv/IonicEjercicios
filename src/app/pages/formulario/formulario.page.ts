import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonInput, IonButton, IonCheckbox, NgFor, NgIf]
})
export class FormularioPage implements OnInit {

  ciudades = ["Bogotá", "Medellin", "Cali", "Bucaramanga", "Santa Marta", "Cartagena"];
  private fb = inject(FormBuilder);

  formularioRegistro:FormGroup;

  constructor() { }

  ngOnInit() {
    this.creacionFormulario();
  }

  guardar(){

  }

  creacionFormulario(){
    this.formularioRegistro = this.fb.group({
      primerNombre:['', [
        Validators.required, 
        Validators.max(25), 
        Validators.minLength(3)]],
      segundoNombre:['', [
        Validators.max(25), 
        Validators.minLength(3)]],
      primerApellido:['', [
        Validators.required,
        Validators.max(20),
        Validators.minLength(10)]],
      segundoApellido:['', [
        Validators.minLength(10),
        Validators.max(20)]],
      edad:[null,[
        Validators.required,
        Validators.min(18)]],
      ciudad:['seleccionar',[
        Validators.required]],
      terminos:[false,[
        Validators.requiredTrue
      ]]
    })
  }

}
