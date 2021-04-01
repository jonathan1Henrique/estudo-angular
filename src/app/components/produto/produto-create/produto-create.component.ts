import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from './../produto.model';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto = new Produto(); 

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
