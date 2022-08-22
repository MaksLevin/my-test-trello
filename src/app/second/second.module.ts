import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from '../second/second.component';

@NgModule({
  declarations: [SecondComponent],
  exports: [SecondComponent],
  imports: [CommonModule],
})
export class SecondModule {}
