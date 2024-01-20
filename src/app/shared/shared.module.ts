import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { FontStyleDirective } from './font-style.directive';

@NgModule({
  declarations: [FullNamePipe, FontStyleDirective],
  imports: [CommonModule],

  exports: [FullNamePipe,FontStyleDirective ],
})
export class SharedModule {}
