import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    imports: [CardComponent]
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  //select = output<string>();

  ngOnInit() {
    if (this.user) {
      console.log(
        'User Component Initialized:',
        this.user.name,
        this.user.avatar
      );
    } else {
      console.log('User Component Initialized: No user data provided');
    }
  }
  get imagePath() {
    return this.user ? 'assets/users/' + this.user.avatar : '';
  }

  onSelectUser() {
    if (this.user) {
      this.select.emit(this.user?.id);
    }
  }
}
