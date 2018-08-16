import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '@models/user.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  accountForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
