class FoodPageCtrl {

  /**
   * Constructor for FoodPageCtrl
   */
  constructor(foodService) {
    this.foodlist = false;

    foodService.fetch().then((resp) => {
        this.foodlist = resp.data;
    });
  }

}

FoodPageCtrl.$inject = ['FoodService'];

export default FoodPageCtrl;