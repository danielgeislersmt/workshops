class FoodService {

    constructor($http) {
        this.api = $http;
        this.url = 'http://private-7363b-smtangularjs.apiary-mock.com/products';
    }

    fetch() {
        return this.api.get(this.url)
    }

    post(data) {
        return this.api.post(this.url, data)
    }
}

// Angular DI
FoodService.$inject = ['$http'];

export default FoodService;
