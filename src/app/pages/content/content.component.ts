import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  imageUrl: string = "https://hd2.tudocdn.net/1109660?w=824&h=494";
  description: string = `A NVIDIA lançou oficialmente a GeForce RTX 5090 em 30 de janeiro de 2025, durante o CES 2025, apresentando sua mais recente arquitetura Blackwell.
    
Este modelo topo de linha possui 32 GB de memória GDDR7 ultrarrápida e 21.760 núcleos CUDA, oferecendo desempenho significativamente superior à geração anterior.
    
A RTX 5090 também introduz o DLSS 4, que utiliza IA para aprimorar gráficos e desempenho, proporcionando experiências de jogo mais imersivas.
    
Com preço inicial de US$ 1.999, a RTX 5090 já está disponível para compra, oferecendo aos gamers e criadores de conteúdo uma ferramenta poderosa para elevar seus projetos a novos patamares.`;

  constructor() {}
}
