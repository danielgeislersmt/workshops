import FoodService from './food.service';

describe('FoodService', function() {
  var $httpMock;

  beforeEach(() => {
    $httpMock = {
      get: jasmine.createSpy('$http.get'),
      post: jasmine.createSpy('$http.post')
    };

    this.subject = new FoodService($httpMock);
  });

  it('should be able to get data from API', () => {
    this.subject.fetch();

    expect($httpMock.get).toHaveBeenCalledWith(this.subject.url);
  });

  it('should be able to get data from API', () => {
    this.subject.post('something');

    expect($httpMock.post).toHaveBeenCalledWith(this.subject.url, 'something');
  });

});
