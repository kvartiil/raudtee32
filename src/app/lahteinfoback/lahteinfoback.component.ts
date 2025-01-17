import { Component, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';
import { sektorid } from '../lahteinfo/sectors';
import { koostis } from './koosnemine';

//import { products } from '../products';

@Component({
  selector: 'lahteinfoback-component',
  templateUrl: './lahteinfoback.component.html',
  styleUrls: ['./lahteinfoback.component.scss']
})
export class LahteinfobackComponent implements OnInit{


  title = "Siin on toodud ära informatsioon analüüsitava kaasuse kohta...";
  content1 = "Ettevõtte põhitegevusala (EMTAK): ";
  content2 = "Sinu ettevõtte puhul võeti aluseks tegevussektor: ";
  content3 = "Sellesse sektorisse on analüüsil paigutatud järgmised tegevusalad: ";
  content4 = "Ettevõtte suurusgrupp: ";
  content5 = "Ettevõtte tegevuspiirkond (maakond): ";
  content6 = "Majandusaasta aruande aasta, millel prognoosid põhinevad: ";

  content1a: string;
  content1b: string;
  sectorNo: string;
  elujouEnnustus: string;
  elujouEnnustus2: string;
  elujouEnnustus3: string;

  constructor() { 
    this.content1a = JSON.stringify(xtee.EMTAK);
    this.content1b = this.content1+this.content1a;
    this.sectorNo = JSON.stringify(xtee.sektorNo);
    this.elujouEnnustus = localStorage.getItem("ennustusElujoud");
  }

  hinnangElujoule: string;

  annaHinnangElujoule() {

    this.hinnangElujoule = "laheda elujõulisusega"
    //this.elujouEnnustus2 = localStorage.getItem("ennustusElujoud");
    //this.elujouEnnustus3 = "0";

    if (this.elujouEnnustus == '1') {
      this.hinnangElujoule = "kõrge elujõulisusega"
    }
    else if (this.elujouEnnustus == '0') {
      this.hinnangElujoule = "madala elujõulisusega"
    }
    return this.hinnangElujoule;
  }
  
  sektorArray: any = [];
  oigeSektor: any;

  keerukam() {
    for (let key in sektorid) {
      if (sektorid.hasOwnProperty(key)) {
        this.sektorArray.push(sektorid[key]);
      }
    }
        this.oigeSektor= this.sektorArray.filter(e=>{
        return e.sektorNo === this.sectorNo;
      
    })
   
  }

  koostisArray: any = [];
  oigeSector: any;

  koostis() {
    for (let key in koostis) {
      if (koostis.hasOwnProperty(key)) {
        this.koostisArray.push(koostis[key]);
      }
    }
        this.oigeSector= this.koostisArray.filter(e=>{
        return e.sektorNo === this.sectorNo;
      
    })
    
  }

  ngOnInit() {

    this.keerukam();
    this.koostis();

  }


}