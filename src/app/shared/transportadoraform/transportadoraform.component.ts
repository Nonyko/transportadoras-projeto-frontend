import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transportadora } from 'src/app/core/displaycardstransportadoras/transportadora';
import { CidadesestadosService } from './cidadesestados.service';
import { first, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-transportadoraform',
  templateUrl: './transportadoraform.component.html',
  styleUrls: ['./transportadoraform.component.css']
})
export class TransportadoraformComponent implements OnInit, AfterViewInit {

  transportadoraForm: FormGroup;
  listaEstados:any[];
  listaCidades:any[];
  estadoSelecionado;
  @Output() formEmitter: EventEmitter<any> = new EventEmitter();
  constructor(private changeDetector: ChangeDetectorRef, private formBuilder: FormBuilder, private cidadesEstadosService:CidadesestadosService) { }
  
  ngOnInit() {
    this.transportadoraForm = this.createForm();
    this.cidadesEstadosService.getAllEstados().pipe(first()).subscribe(listaEstados => {      
      this.listaEstados = listaEstados;
      this.changedEstadoValue(this.estadoSelecionado);
    });
    
  }

  ngAfterViewInit(): void {
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      id: null,
      nome: ['', [Validators.required, Validators.minLength(4)]],
      codigo: ['', [Validators.required]],
      telefone1: [''],
      telefone2: [''],
      whatsapp: [''],
      email: ['', [Validators.required, Validators.email]],
      modal: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      numero: [null, [Validators.required]]

    })
  }

  submit() {
    if (this.transportadoraForm.valid) {
      this.formEmitter.emit(this.transportadoraForm.value);
    } else {
      throw new Error('formulario invalido');
    }
  }

  fillForm(transportadora: Transportadora) {
    this.transportadoraForm.setValue(transportadora);
    //this.transportadoraForm.get('nome').setValue(transportadora.nome);
    this.estadoSelecionado = transportadora.estado;
    this.changeDetector.detectChanges();
  }

  changedEstadoValue(estadoSigla) {
    this.buscarCidades(this.listaEstados.find(estado => estado.sigla === estadoSigla).id);
  }

  buscarCidades(estadoId) {
    this.cidadesEstadosService.getAllCidadesByEstadoId(estadoId).pipe(debounceTime(300)).subscribe(listaCidades => {
      this.listaCidades = listaCidades;
    })
  }

}
