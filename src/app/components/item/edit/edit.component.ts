import {Component, OnInit} from '@angular/core';
import {Item} from "../../../interfaces/item";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../../services/item/item.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  item: Item = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: ""
  };
  isSubmitting: boolean = false;

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

  editItem(){
    this.isSubmitting = true;
    this.itemService.updateItem(this.item)
      .then(response=>{
        this.isSubmitting = false;
        Swal.fire({
          icon: 'success',
          title: 'Item updated successfully',
          showConfirmButton: false,
          timer: 1500
        })
        return response.data;
      })
      .catch(error=>{
        this.isSubmitting = false;
        Swal.fire({
          icon: 'error',
          title: 'Some error occurred',
          showConfirmButton: false,
          timer: 1500
        })
        return error;
      });
  }

}
