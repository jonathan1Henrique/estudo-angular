import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    nome: "Lancer",
    marca: "Mit",
    codigoBarra: 1234,
    quantidade: 34

  };

  constructor(private produtoService: ProdutoService,private router : Router) { }

  ngOnInit(): void {
  }

  criarProduto(): void{
    this.produtoService.criar(this.produto).subscribe(() =>{
      this.produtoService.showMessage('Produto criado pode crê ?');
      this.router.navigate(['/produto']);
    })
  }

  cancelar(): void{
    this.router.navigate(['/produto']);
  }

}
