import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a test recipe.', 'https://senterrealtors.com/files/2022/04/favorite-restaurants-1024x684.jpg'),
    new Recipe('Test Recipe', 'This is just a test recipe.', 'https://senterrealtors.com/files/2022/04/favorite-restaurants-1024x684.jpg'),
  ];


  ngOnInit() {

  }
}
