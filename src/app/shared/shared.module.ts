import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { FontStyleDirective } from './font-style.directive';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [FullNamePipe, FontStyleDirective],
  imports: [CommonModule],

  exports: [FullNamePipe,FontStyleDirective, MatTableModule ],
})
export class SharedModule {}
