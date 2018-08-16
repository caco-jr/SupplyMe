import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel } from '@models/user.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.scss']
})
export class FormAComponent implements OnInit {
  eanPesquisa: FormGroup;

  @Output()
  eanFeedback = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) {
    this.eanPesquisa = this.createFormGroupWithBuilder(this.formBuilder);
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      ean: ['']
    });
  }

  onSubmit() {
    // Unindo em um novo objeto, os dados preenchidos no Formulário com o já existente do usuário.
    const result = Object.assign({}, this.eanPesquisa.value);

    this.appService.getEAN(result.ean);
    this.eanFeedback.emit(true);
  }

  ngOnInit() {}
}
