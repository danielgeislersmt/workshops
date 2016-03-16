class FoodPageCtrl {

  /**
   * Constructor for FoodPageCtrl
   */
  constructor(foodService, $mdToast) {
    this.foodlist = [];
    this.$mdToast = $mdToast;
    foodService.fetch().then((resp) => {
        this.foodlist = resp.data;
    });

    // Search
    this.search = {
        name: ''
    };
  }

  addForm() {
      console.log('add form');

      this.$mdToast.show(
          this.$mdToast.simple()
              .textContent('Food has beed added successfully!')
              .position("top right")
              .hideDelay(3000)
      );
  }

}

FoodPageCtrl.$inject = ['FoodService', '$mdToast'];

export default FoodPageCtrl;