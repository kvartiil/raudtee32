import { Component, VERSION, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';

@Component({
  selector: 'graafelastneli',
  templateUrl: './graafelastneli.component.html',
  styleUrls: [ './graafelastneli.component.scss' ]
})
export class GraafElastNeliComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;





  ngOnInit(): void {
    

    this.options = {
  
      title: [
        {
          text: 'Mudelite tulemused',
          left: 'center'
        }
      ],
      polar: {
        radius: [30, '80%']
      },
      radiusAxis: {
        max: 1
      },
      angleAxis: {
        type: 'category',
        data: ['elujouMudel', 'elastsusMudel', 'majandusMudel', 'raudteeMudel'],
        startAngle: 75
      },
      tooltip: {
        trigger: 'item',
       confine: true,
      // formatter: function(params, callback) {
      //  return  "Sinu maakonnas " + params.value + "vaattta" + params.value[1] + "veel" + params.value[0] + "nimeke" + params.seriesName + "lsdjk aldkj aldkdfj aldfjk ldkj asdlfjk aldfj dlfkj aldfkj aldfj as";
      //  }, 
       //trigger: 'axis',
       // axisPointer: {
       //   type: 'shadow'

       // }
       formatter: "<span style='font-weight: 400; font-size: 18px; color: #005AA3'> Sinu {b} näitab tulemust: {c} </span>"+ "<br>" + "<span style='font-size: 12px; color: red; font-style: italic'>1 tähendab, et mudel hindas kõrgelt; 0 tähendab, et mudel hindas madalalt </span>"

      },
      series: {
        type: 'bar',
        data: [1, 1, 0, 1],
        coordinateSystem: 'polar',
        label: {
          show: true,
          position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
          formatter: '{b}: {c}'
        }
      },
      animation: true
      
  
  
    };
    } 
}

