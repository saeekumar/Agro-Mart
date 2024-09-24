import { Component } from '@angular/core';

@Component({
  selector: 'app-seeds',
  templateUrl: './seeds.component.html',
  styleUrls: ['./seeds.component.css']
})
export class SeedsComponent {
seedItem:any;
seeds:any[]=[
  {
    title:"SAAHO TAMATO SEEDS",
    category:"Sygenta",
    ruppee:350,
    orgRuppee:700,
    img:"https://cdn.shopify.com/s/files/1/0722/2059/products/Sahoo.jpg?v=1671198625&width=256",
  },
  {
    title:"SYNGENTA IVORY WHITE SEEDS",
    category:"Sygenta",
    ruppee:350,
    orgRuppee:700,
    img:"https://cdn.shopify.com/s/files/1/0722/2059/files/10-syngenta-hybrid-ivory-white-radish-seeds-10-gram-seeds-original-imagmkkdfwd6qcaq.webp?v=1691043353&width=256"
  },
  {
    title:"SURABHI CORIANDER SEEDS",
    category:"NAMDHARI SEEDS",
    ruppee:350,
    orgRuppee:700,
    img:"https://cdn.shopify.com/s/files/1/0722/2059/products/CORIANDAR-NS-SURABHI-500-GM.jpg?v=1680156641&width=256"
  },
  {
    title:"CAULIFLOWER SEEDS",
    category:"NAMDHARI SEEDS",
    ruppee:350,
    orgRuppee:700,
    img:"https://cdn.shopify.com/s/files/1/0722/2059/products/Artboard1copy10_1_c44f6287-ec5e-426f-931f-d6a0d97cda76.webp?v=1675448136&width=256"
  },
  {
    title:"212 F1 HYBRID BRINJAL SEEDS",
    category:"VNR",
    ruppee:350,
    orgRuppee:700,
    img:"https://cdn.shopify.com/s/files/1/0722/2059/files/14_128680d2-bb12-4cfd-8376-f9c2872b128f.webp?v=1689403884&width=256",
    
  },

];

selectQuantity(item:any){
   this.seedItem=item;
   console.log(this.seedItem)
}
}
