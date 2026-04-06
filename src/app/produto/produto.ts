import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from '../interfaces/produto';

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
    produtos: IProduto[] = [
    {
      id: 1,
      nome: 'Notebook Ultra X14',
      preco: 3899.90,
      descricao: 'Notebook leve, moderno e ideal para estudos, trabalho e navegação diária com ótimo desempenho.',
      emEstoque: true
    },
    {
      id: 2,
      nome: 'Mouse Gamer Precision',
      preco: 149.90,
      descricao: 'Mouse com alta precisão, design ergonômico e resposta rápida para produtividade e jogos.',
      emEstoque: false
    },
    {
      id: 3,
      nome: 'Teclado Mecânico Pro',
      preco: 299.90,
      descricao: 'Teclado mecânico com excelente digitação, estrutura resistente e iluminação elegante.',
      emEstoque: true
    },
    {
      id: 4,
      nome: 'Monitor Full HD 24"',
      preco: 899.90,
      descricao: 'Monitor com ótima qualidade de imagem, tamanho ideal para escritório, estudo e entretenimento.',
      emEstoque: true
    },
    {
      id: 5,
      nome: 'Headset Sound Max',
      preco: 219.90,
      descricao: 'Headset confortável, com som limpo e microfone integrado para chamadas e reuniões.',
      emEstoque: false
    },
    {
      id: 6,
      nome: 'Cadeira Gamer Comfort Plus',
      preco: 1299.90,
      descricao: 'Cadeira ergonômica com ajuste de altura, apoio lombar e acabamento premium, ideal para longas horas de uso com conforto e postura adequada.',
      emEstoque: true
    }
  ];

  constructor(private router: Router) {}

  comprar(id: number): void {
    this.router.navigate(['/produto-detalhe', id]);
  }
}
