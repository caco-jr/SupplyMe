import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '@models/user.model';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  accountForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {
    this.accountForm = this.createFormGroupWithBuilder(this.formBuilder);
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      nome: [''],
      sobrenome: [''],
      documento: [''],
      dataNascimento: [''],
      email: [''],
      senha: ['']
    });
  }

  onSubmit() {
    // Unindo em um novo objeto, os dados preenchidos no Formulário com o já existente do usuário.
    const result: UserModel = Object.assign({}, this.accountForm.value);

    console.log('====================================');
    console.log(result);
    console.log('====================================');

    this.appService.setUser(result);
    this.router.navigate(['/']);
  }

  ngOnInit() {}
}
