import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const declarations: never[] = [];

const imports = [CommonModule];
const exports = [...imports, ...declarations];

@NgModule({ imports, declarations, exports })
export class CoreModule {}
