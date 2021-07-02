import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public footerLinks = [
    {
      title: 'A Cidade de Rio Claro',
      path: '/content',
    },
    {
      title: 'Serviços online',
      path: '/content',
    },
    {
      title: 'Boletim Oficial',
      path: '/content',
    },
    {
      title: 'Notícias',
      path: '/content',
    },
    {
      title: 'Portal da Transparência',
      path: '/content',
    },
    {
      title: 'Ouvidoria Online',
      path: '/content',
    },
  ];
}
