import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/chat/ai',
  },
  {
    path: 'chat',
    children: [
      {
        path: 'ai',
        loadChildren: () =>
          import('./features/chat/chat.module').then(
            (m) => m.ChatModule,
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
