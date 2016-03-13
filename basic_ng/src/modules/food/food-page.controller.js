class FoodPageCtrl {

  /**
   * Constructor for FoodPageCtrl
   */
  constructor(foodService) {
    this.foodlist = [
      { name: 'Pizza peperoni', type: 'pizza', vege: false },
      { name: 'Pizza mascarpone', type: 'pizza', vege: true }
    ];

    foodService.fetch();
  }

}

FoodPageCtrl.$inject = ['FoodService']

export default FoodPageCtrl;
