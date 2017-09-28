
describe('ShoppingListItem', function () {

  var sl;

  beforeEach( function () {
    sl = new ShoppingListItem('foo');

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

  describe('ShoppingListItem constructor', function () {
    it('should have property name', function () {
      sl.should.have.property('name');
    });

    it('should have property description', function () {
      sl.should.have.property('description');
    });
  });

});