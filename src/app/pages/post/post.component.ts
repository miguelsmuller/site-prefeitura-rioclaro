import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  public galleryImage = [
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903681/pmrc-site/galeria/1200_jxwh4n.WebP',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903657/pmrc-site/galeria/1500_nfq648.WebP',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903626/pmrc-site/galeria/1500_wvy79r.WebP',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903608/pmrc-site/galeria/1300_ksu1iw.WebP',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903589/pmrc-site/galeria/1400_mlrhdq.WebP',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903572/pmrc-site/galeria/1250_vmgjsd.WebP',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903550/pmrc-site/galeria/1400_xyfwig.WebP',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903526/pmrc-site/galeria/1350_obhpbr.WebP',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903511/pmrc-site/galeria/1400_vlqil9.WebP',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903493/pmrc-site/galeria/1420_txzujm.WebP',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903480/pmrc-site/galeria/1400_si43js.WebP',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/v1621903452/pmrc-site/galeria/1350_cofb3g.WebP',
      alt: '',
    },
  ];

  public relatedPublications = [
    {
      category: 'Saúde',
      title: 'Prefeitura vai coibir blocos de carnaval irregulares',
      date: '14 de Dezembro de 2018',
    },
    {
      category: 'Ordem Pública',
      title: 'Escola de Governo e Gestão terá 15 cursos no primeiro trimestre de 2019',
      date: '04 de Janeiro de 2019',
    },
    {
      category: 'Saúde',
      title: 'Certificado de Microempreendedor servirá como alvará de funcionamento na cidade',
      date: '10 de Outubro de 2019',
    },
  ];
}
