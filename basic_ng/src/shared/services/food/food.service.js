class FoodService {

    constructor($http) {
        this.api = $http;
    }

    fetch() {
        console.log('called fetch');
    }

}

// Angular DI
FoodService.$inject = ['$http'];

export default FoodService;
