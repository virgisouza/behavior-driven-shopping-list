const expect = chai.expect;
const should = chai.should();



describe('ShoppingListItem', function () {

  var sl;
  var shopl;
  var array;

  beforeEach( function () {
    sl = new ShoppingListItem('fern', 'green plant', true);
    shopl = new ShoppingList({name:'grapes'});
    array = [ {name: 'grapes'}, {name: 'bread'}, {name: 'bacon'} ];
  });

  it('should be a function', function () {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a property name', function () {
    sl.should.have.property('name');
  });

  it('should have a property description', function () {
    sl.should.have.property('description');
  });

  it('should have a property is_done', function () {
    sl.should.have.property('is_done');
  });

  describe('ShoppingListItem should have a constructor method', function () {
    it('should have property name', function () {
      sl.should.have.property('name');
    });

    it('should have property description', function () {
      sl.should.have.property('description');
    });

    it('should expect method to set new instances name and description property using arguments passed in', function () {
      expect(sl.name).to.be.equal('fern');
      expect(sl.description).to.equal('green plant');
    })
  });

  describe('ShoppingListItem has method check', function () {
    it('should have property is_done', function () {
      sl.should.have.property('is_done');
    });
    it('should expect is_done to be true ', function () {
      expect(sl.check()).to.be.a('boolean');
      expect(sl.check()).to.equal(true);
    });
  });

  describe('ShoppingListItem has method uncheck', function () {
    it('should have property is_done', function () {
      sl.should.have.property('is_done');
    });
    it('should expect is_done to be false', function () {
      expect(sl.uncheck()).to.be.a('boolean');
      expect(sl.uncheck()).to.equal(false);
    });
  });

  describe('Render method', function () {
    it('should have property is_done', function () {
      sl.should.have.property('is_done');
    });

    it('should have property name', function () {
      sl.should.have.property('name');
    });

    it('should have a property description', function () {
    sl.should.have.property('description');
    });

    it('should construct and return html formatted string', function () {
      expect(sl.render()).to.equal(`<li class="completed_${true}"><span>${'fern'}</span> <span>${'green plant'}</span></li>`);
    });
  });
  ///end of ShoppingListItems test

  describe('ShoppingList', function () {

    it('should be a function', function () {
      expect(ShoppingList).to.be.a('function');
    });

    it('should have proprty items', function () {
      shopl.should.have.property('items');
    });

    it('should have constructor that initializes items to an empty array', function () {
      expect(shopl.items).to.deep.equal([]);
    });
  });

  describe('addItem Method', function () {

    it('addItem should add ShoppingListItem object to items array', function () {
      expect(['grapes']).to.include('grapes');
    });

    it('if item is not a ShoppingListItem object then throw error', function () {
        expect({name: 'fern', description: 'green plant'}).to.include({name: 'fern'});
        expect(function () {shopl.render(); }).to.throw();
    });
  });
  //end of addItem Method

  describe('removeItem Method', function () {

    it('should be a function', function () {
      expect(shopl.removeItem).to.be.a('function');
    });

    it('should be an item currently in items array', function () {
      expect(array).to.include.deep.ordered.members([{name: 'grapes'}]);
    });

    it('removeItem method with no parameters should remove the last item in the items list', function () {
      expect({name: 'grapes'}).to.be.a('object');
      expect(undefined).to.be.undefined
      expect(array).to.not.include([{name: 'bacon'}]);
    });

    it('should throw an error if passing item that is not a ShoppingListItem object', function () {
      expect(array).but.not.include.deep.ordered.members([{name: 'chicken'}]);
      expect(function () { shopl.removeItem(); }).to.throw();
    });

  });
  //end of removeItem Method

  describe('renderMethod', function () {

    it('should be a function', function () {
      expect(shopl.render).to.be.a('function');
    });

    it('should return each item in objects item list array wrapped in <ul> tags', function () {
      expect(sl.render()).to.be.equal(`<ul>[ ${sl.render()}]</ul>`)
    });

  });
  //end of render Method

});