import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@itinerary-assistant/ui/material';

import { FooterContainerComponent } from './components/footer/footer-container/footer-container.component';
import { FooterComponent } from './components/footer/footer-container/footer/footer.component';

import { SidenavContainerComponent } from './components/navigation/sidenav-container/sidenav-container.component';
import { SidenavComponent } from './components/navigation/sidenav-container/sidenav/sidenav.component';

import { ToolbarContainerComponent } from './components/navigation/toolbar-container/toolbar-container.component';
import { ToolbarComponent } from './components/navigation/toolbar-container/toolbar/toolbar.component';
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    FooterContainerComponent,
    FooterComponent,

    SidenavContainerComponent,
    SidenavComponent,

    ToolbarContainerComponent,
    ToolbarComponent,
    ShellComponent
  ],
  exports: [ShellComponent]
})
export class LayoutModule {}
