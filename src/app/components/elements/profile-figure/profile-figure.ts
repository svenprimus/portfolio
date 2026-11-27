import { Component, inject } from '@angular/core';
import { MobileService } from '../../../services/mobile-service';

@Component({
  imports: [],
  selector: 'app-profile-figure',
  styleUrl: './profile-figure.scss',
  templateUrl: './profile-figure.html',
})
export class ProfileFigure {
  mobile = inject(MobileService);
}
