import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { ButtonModule } from 'primeng/components/button/button';
//import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { AppLoginComponent } from './app-login/app-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    
    SegurancaRoutingModule
  ],
  declarations: [AppLoginComponent]
})
export class SegurancaModule { }
