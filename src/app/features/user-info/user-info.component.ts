import { Component, OnInit } from '@angular/core';
import { PROFILE_PHOTO_SRC } from '../../core/utils/constants';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/interfaces/user';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent implements OnInit {
  default_profile_photo = PROFILE_PHOTO_SRC;
  userInfo!: User;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.userInfo = this.authService.getUserData();
  }
}
