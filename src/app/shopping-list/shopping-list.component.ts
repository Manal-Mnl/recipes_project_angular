import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Test ingredient', 200),
    new Ingredient('Apple', 120),
    new Ingredient('Banana', 350),
  ];

  constructor() {}

  ngOnInit(): void {}
}
