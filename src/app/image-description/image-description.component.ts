import { Component, OnInit } from '@angular/core';
import {DescriptionCityService} from '../description-city.service';

@Component({
  selector: 'app-image-description',
  templateUrl: './image-description.component.html',
  styleUrls: ['./image-description.component.css']
})
export class ImageDescriptionComponent implements OnInit {

  description:any = "";

  constructor(private _ImageDescService : DescriptionCityService) { }

  ngOnInit(): void {

    this._ImageDescService.getDescription()
      .subscribe(res => {
        console.log(res);
        this.description = res;
      })
  }

}
