const expect = chai.expect;
const should = chai.should();



describe('ShoppingListItem', function () {

  var sl;

  beforeEach( function () {
    sl = new ShoppingListItem('fern', 'green plant');

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
      expect(sl.check()).to.equal(true);
    });
  });

  describe('ShoppingListItem has method uncheck', function () {
    it('should have property is_done', function () {
      sl.should.have.property('is_done');
    });
    it('should expect is_done to be false', function () {
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
      expect(sl.render()).to.equal(`<li class="completed_${is_done}"><span>${name}</span> <span>${description}</span></li>`)
    });
  });

});