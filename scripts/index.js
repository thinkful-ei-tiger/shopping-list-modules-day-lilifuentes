import item from './item.js';
import store from './store.js'; 
import shoppingList from './shopping-list.js';


const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

store.addItem('bananas');
store.addItem('apples');
store.addItem('rice');

let id = store.items[0].id;

store.findAndDelete(id);
shoppingList.render();


$(main);
