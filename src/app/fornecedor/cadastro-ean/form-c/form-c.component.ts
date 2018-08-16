import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AppService } from '../../../app.service';
import { UserModel } from '@models/user.model';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.scss']
})
export class FormCComponent implements OnInit {
  accountForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
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
  }

  ngOnInit() {}
}
