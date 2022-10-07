import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;


  constructor() {
    // this.anuncio = 'O ' + this.nomeProduto + ' está em promoção';
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);
    var variavel1;
    let variavel2;
    const variavel3 : number = 10;
    //var idade = 15;
    //console.log('Minha idade é: ', idade);
    let idadeLet = 20;
    console.log('Minha idade é: ', idadeLet);

    /*
    function imprimeIdade(){
      var idade = 20;
      console.log('Minha idade é: ', idade);
    }
    */


    function imprimeIdade(){
      let idade = 20;
      console.log('Sua idade é: ', idade);
    }

    /*
    function imprimeIdadeFor(){
      for(var idade = 30; idade <= 40; idade++)
      {
        console.log('Idade dentro do for: ', idade);
      }
      console.log('Idade fora do for: ', idade);
    }
    */


    let idade = 16;
    function imprimeIdadeFor(){
      for(let idade = 30; idade <= 40; idade++)
      {
        console.log('Idade dentro do for: ', idade);
      }
      console.log('Idade fora do for: ', idade);
    }

    imprimeIdade();
    imprimeIdadeFor();
  }

  ngOnInit(): void {
  }

}
