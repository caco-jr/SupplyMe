import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { UserModel } from '@models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: UserModel;
  nome = '';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.user = this.appService.getUser();

    if (this.user) {
      this.nome = this.user.nome;
    }
  }
}
