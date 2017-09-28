
class ShoppingList {
  constructor(items) {
    this.items = [];
  }

  addItem(sli) {
    if(sli instanceof ShoppingListItem){
    this.items.push(sli);
  }else{
    throw new Error('Whoops! No item added.');
  }
  }

  removeItem() {

  }


}

