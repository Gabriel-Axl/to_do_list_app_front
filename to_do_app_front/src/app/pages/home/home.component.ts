import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Tarefa } from '../../shared/models';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule, TableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private service:ApiService) { }

  ngOnInit() {
    this.listarTarefas();
  }

  listarTarefas(){
    this.service.listarTarefas().subscribe((response) => {
      console.log('Tarefas', response);
      for(let tarefa of response){
        let novaTarefa: Tarefa = {
          id: tarefa.id,
          titulo: tarefa.titulo,
          dataInicio: this.formatarData(tarefa.data_criacao),
          dataConclusao: this.formatarData(tarefa.data_conclusao)
        }
        this.tarefas.push(novaTarefa);
      }
    })
  }

  deletarTarefa(tarefa: Tarefa) {
    console.log('Deletar tarefa', tarefa.id);
    this.service.deletarTarefa(tarefa.id).subscribe((response ) => {
      console.log('Tarefa deletada', response);
    })
    this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
  }

  formatarData(data: string): string {
    let dataFormatada = new Date(data);
    let dataStr = dataFormatada.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    let horaStr = dataFormatada.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return `${dataStr} ${horaStr}`;
}
}
