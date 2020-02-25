// BUDGET CONTROLLER
var budgetController = (function(){


})();

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        
    }



})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        var input, newItem;
        
        // 1. Get the field input data
        input = UICtrl.getInput();        
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and update budget
            updateBudget();
            
            // 6. Calculate and update percentages
            updatePercentages();
        }
    };


})(budgetController, UIController);


var rental = function(id, year, make, model, seat, price, ){
    this.id = id;
    this.year = year;
    this.make = make;
    this.model = model;
    this.seat = seat;
    this.price = price;
};







var rentalData = [
    {
        'id':'124578', 
        'year': '2011', 
        'make':'lotus', 
        'model':'evora', 
        'seat':'5',
        'price':'10', 
        'history':[
            {'dateFrom': '9/27', 'dateTo': '9/30', 'daysRented': '3', 'milesDriven': '47815',  }
        ]
    },




]