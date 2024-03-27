import { Injectable } from '@angular/core';
import { Item } from '../../interfaces/item';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAllItems(): Promise<any> {
    return axios.get('/api/v1/items/all');
  }

  getItemDetail(id: number): Promise<any> {
    return axios.get(`/api/v1/items/${id}`);
  }

  /**
  createItem(item: Item): Promise<Item> {
    return axios.post('/api/v1/items', item)
      .then(response => response.data);
  }
  */
  createItem(request:any): Promise<any> {
    let item = {
      name: request.title,
      description: request.description
    }
    return axios.post('/api/v1/items/add', item)
      .then(response => response.data);
  }

  updateItem(item: Item): Promise<any> {
    return axios.put(`/api/v1/items/${item.id}/update`, item)
      .then(response => response.data);
  }

  deleteItem (id: number): Promise<any>{
    return axios.delete(`/api/v1/items/delete?id=${id}`);
  }

}
