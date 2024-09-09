import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Adjust the path as necessary
import { AppLayoutComponent } from './layout/app.layout.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component'; // Adjust the path as necessary
export const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'tasks', component: TarefasComponent}
        ]
    },
];
