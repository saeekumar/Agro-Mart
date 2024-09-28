import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent {
  products: any[] = [
    {
      title: 'Biovita Liquid Biofertilizer',
      category: 'Pi Industries',
      rupee: 222,
      orgRupee: 371,
      img: 'https://cdn.shopify.com/s/files/1/0722/2059/files/7_acc0c3e3-cdc8-4a84-bd36-e46750a9148b.webp?v=1689403931&width=256',
    },
    {
      title: 'No Virus Bio Viricide',
      category: 'Geolife Agritech India Pvt Ltd',
      rupee: 285,
      orgRupee: 700,
      img: 'https://cdn.shopify.com/s/files/1/0722/2059/files/9_534052a8-8b49-4cce-b4b2-573714ad1dfc.jpg?v=1721486238&width=256',
    },
    {
      title: 'Janatha Seacal',
      category: 'Janatha Agro Products',
      rupee: 345,
      orgRupee: 386,
      img: 'https://cdn.shopify.com/s/files/1/0722/2059/files/Seacalcopy1_1__LahariPeddiReddy.jpg?v=1724393303&width=256',
    },
    {
      title: 'Indofil M-45 Fungicide',
      category: 'Indofil',
      ruppee: 141,
      orgRupee: 41,
      img: 'https://cdn.shopify.com/s/files/1/0722/2059/products/indofil.jpg?v=1680086309&width=256',
    },
    {
      title: 'Janatha Organic Marine..',
      category: 'Janatha Agro Products',
      rupee: 765,
      orgRupee: 850,
      img: 'https://cdn.shopify.com/s/files/1/0722/2059/files/SPL1_LahariPeddiReddy.jpg?v=1724393192&width=256',
    },
  ];
  prod: any[] = [
    {
      title: 'BALWAAN BS-20 KRISHI..',
      category: 'Modish Tractoraurkisan Pvt Ltd',
      rupee: 3500,
      orgRupes : 5000,
      discout:1500,
      img: 'https://cdn.shopify.com/s/files/1/0722/2059/products/1_01aafc8a-9703-4a0a-bd31-ec68c9606248.jpg?v=1680694282&width=256',
    },
    {
      title: 'BALWAAN BS-22 KRISHI..',
      category: 'Modish Tractoraurkisan Pvt Ltd',
      rupee: 3990,
      orgRupes : 1500,
      discout:1010,
      img: 'https://cdn.shopify.com/s/files/1/0722/2059/products/1_f289df75-56d2-43a7-8e58-c004899a1b4d.jpg?v=1682597440&width=256',
    },
    {
      title: 'BALWAAN BS-21 2IN1..',
      category: 'Modish Tractoraurkisan Pvt Ltd',
      rupee: 3550,
      orgRupes : 5000,
      discout:1450,
      img: 'https://cdn.shopify.com/s/files/1/0722/2059/files/1_2489a9ef-d924-4979-9dcd-83a394face29.webp?v=1684479981&width=256',
    },
    {
      title: 'TAPAS PAHALWAAN-101...',
      category: 'Modish Tractoraurkisan Pvt Ltd',
      ruppee: 2579,
      orgRupes : 4999,
      discout:2420,
      img: 'https://cdn.shopify.com/s/files/1/0722/2059/files/TAPASPAHALWAAN-101SINGLEMOTORBATTERYSPRAYER-12X8_PAGE-1.jpg?v=1711095110&width=256',
    },
    {
      title: 'TAPAS PAHALWAAN 102..',
      category: 'Modish Tractoraurkisan Pvt Ltd',
      rupee: 2699,
      orgRupes : 4999,
      discout:2300,
      img: 'https://cdn.shopify.com/s/files/1/0722/2059/files/21316a1d-0fa0-44a9-afc2-def6bd0d5ee4.jpg?v=1708413777&width=256',
      },
    ];
  
  
}
