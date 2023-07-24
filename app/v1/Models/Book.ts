import { Model } from 'axe-api';
import isLogged from '../Middlewares/isLogged';

class Book extends Model {
  get middlewares() {
    return [isLogged];
  }
  get fillable() {
    return ['name', 'author', 'price'];
  }

  get validations() {
    return {
      name: 'required|min:3|max:255',
      author: 'required|min:2|max:50',
      price: 'required|numeric'
    };
  }
}

export default Book;
