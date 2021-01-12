import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
  ],
  exports: [
    NgbModule,
    ToastrModule
  ]
})
export class SharedModule { }
