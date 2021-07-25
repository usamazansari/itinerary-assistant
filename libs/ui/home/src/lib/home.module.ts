import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { ShellComponent } from './components/shell/shell.component';

const declarations = [ShellComponent];

const imports = [CommonModule, HomeRoutingModule];

const exports = [...declarations];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...exports]
})
export class HomeModule {}
