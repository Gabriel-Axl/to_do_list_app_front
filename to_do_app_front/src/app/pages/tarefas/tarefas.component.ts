import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Tarefa } from '../../shared/models';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router'; // Add this line


@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule,ButtonModule, InputTextModule,  FloatLabelModule, CardModule, ColorPickerModule, InputMaskModule, FormsModule ],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss'
})
export class TarefasComponent {
  dataDiaMes:string = '';
  titulo:string = '';
  dataConclusao:string = '';
  descricao:string = '';

  constructor(private service:ApiService,  private router: Router,){}

  salvarTarefa(){
    let nova_tarefa = {
      titulo: this.titulo,
      descricao: this.descricao,
      data_conclusao: this.dataDiaMes,
    }
    console.log('Nova tarefa', nova_tarefa);
    this.service.salvarTarefa(nova_tarefa).subscribe((response) => {
      console.log('Tarefa salva', response);
      this.router.navigate(['']);
    })
  }
}
