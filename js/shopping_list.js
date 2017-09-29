
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

  removeItem(slitem) {
    if(slitem instanceof ShoppingListItem){
      var found = this.items.findIndex(slitem);
      this.items.splice(found, 1, slitem);
    }else if(slitem === null){
      this.items.pop()
    }else{
      throw new Error('nope nope nope');
    }
  }

  render() {

    return `<ul>[ ${ShoppingListItem.render()} ]</ul>`
  }


}

