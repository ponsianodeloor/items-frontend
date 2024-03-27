import {Component, OnInit} from '@angular/core';
import {Item} from "../../../interfaces/item";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../../services/item/item.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  item: Item = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: ""
  };

  constructor(
    public itemService: ItemService,
    private route: ActivatedRoute
  ) {
    this.item = {
      id: this.route.snapshot.params['id'],
      name: '',
      description: '',
      price: 0,
      image: "",
    }
  }

  ngOnInit(): void {
    this.itemService.getItemDetail(this.route.snapshot.params['id'])
      .then((response) => {
        this.item = response.data;
      })
      .catch(error => {
        return error;
      });
  }

}
