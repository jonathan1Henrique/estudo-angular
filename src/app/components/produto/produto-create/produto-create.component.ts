import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  constructor(private produtoService: ProdutoService,
    private router : Router) { }

  ngOnInit(): void {
  }

  criarProduto(): void{
    this.produtoService.showMessage('Produto criado pode crê ?');
  }

  cancelar(): void{
    this.router.navigate(['/produto']);
  }

}
