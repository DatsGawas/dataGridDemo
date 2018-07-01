import {Component, EventEmitter, Input, Output} from "@angular/core";
/**
 * Created by dattaram on 1/7/18.
 */

@Component({
  selector: 'form-component',
  template: `
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">First Name</label>
        <input [(ngModel)]="data.firstname" name="data.firstname" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First name">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Last Name</label>
        <input type="text" [(ngModel)]="data.lastname" name="data.lastname" class="form-control" id="exampleInputPassword1" placeholder="Last name ">
      </div>
      <button type="submit" class="btn btn-primary" (click)="onSaveClick()">Save</button>
    </form>
  `,
})
export class FormComponent {

  @Input() data: any;

  @Output() onShowChange: any = new EventEmitter<any>();

  onSaveClick() {
    this.onShowChange.emit(false);
  }

}
