var dataArray = [
    {'id':'1',
    'make':'BMW',
    'model':'C600 SPORT',
    'year': '2013',
    'seats': 5,
    'price': 43,
    'available':true,
    'history': [
        {'from': '2019-02-02','to': '2020-02-04','miles': '22'}]
    },

    {'id':'2',
    'make':'BMW',
    'model':'650I GRAN COUPE',
    'year': '2015',
    'seats': 3,
    'price': 28,
    'available':false,
    'history': [
        {'from': '2019-02-02','to': '2020-02-04','miles': '22'}]
    },

    {'id':'3',
    'make':'KAWASAKI',
    'model':'KLR250',
    'year': '2003',
    'seats': 2,
    'price': 59,
    'available':true,
    'history': [
        {'from': '2019-02-02','to': '2020-02-04','miles': '22'}]
    },

    {'id':'4',
    'make':'VICTORY',
    'model':'VEGAS JACKPOT',
    'year': '2010',
    'seats': 6,
    'price': 54,
    'available':false,
    'history': [
        {'from': '2019-02-02','to': '2020-02-04','miles': '22'}]
    },

    {'id':'5',
    'make':'POLARIS',
    'model':'600 SWITCHBACK ADVENTURE',
    'year': '2014',
    'seats': 4,
    'price': 32,
    'available':true,
    'history': [
        {'from': '2019-02-02','to': '2020-02-04','miles': '22'}]
    },

    {'id':'6',
    'make':'AMERICAN IRONHORSE',
    'model':'CLASSIC CHOP',
    'year': '2008',
    'seats': 6,
    'price': 31,
    'available':true,
    'history': [
        {'from': '2019-02-02','to': '2020-02-04','miles': '22'}]
    },

    {'id':'7',
    'make':'YAMAHA',
    'model':'TW200',
    'year': '2011',
    'seats': 5,
    'price': 21,
    'available':true,
    'history': [
        {'from': '2019-02-02','to': '2020-02-04','miles': '22'}]
    },

    {'id':'8',
    'make':'INTERNATIONAL',
    'model':'4800',
    'year': '2002',
    'seats': 2,
    'price': 36,
    'available':false,
    'history': [
        {'from': '2019-02-02','to': '2020-02-04','miles': '22'}]
    },

    {'id':'9',
    'make':'DODGE',
    'model':'CHARGER',
    'year': '2007',
    'seats': 6,
    'price': 21,
    'available':true,
    'history': [
        {'from': '2019-02-02','to': '2020-02-04','miles': '22'}]
    }
];


buildTable(dataArray)

//On form submit, hide modal
$('#car-form').submit(function(e) {
    //Prevent reloading
    e.preventDefault();

    //Submit Form
    onFormSubmit();

    //Hide Modal
    $('#carModal').modal('hide');
    return false;
});

var selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null){
        insertRecord(formData);    
    }
    else{
        updateRecord(formData)
    }
    resetForm();
    
}

function availableChange(text){
    switch(text){
        case true:
            return "Yes";
        case false:
            return "No";
        case "Yes":
            return true;
        case "No":
            return false;
        default:
            return null;
    }
}

function readFormData(){
    var formData = {};
    formData["id"] = dataArray.length+1;
    formData["make"] = document.getElementById("inputMake").value;
    formData["model"] = document.getElementById("inputModel").value;
    formData["year"] = document.getElementById("inputYear").value;
    formData["seats"] = document.getElementById("inputSeats").value;
    formData["price"] = document.getElementById("inputPrice").value;
    formData["available"] = availableChange(document.getElementById("inputAvailable").value);

    var history = [{'from': '','to': '','miles': ''}];
    history[0].from = document.getElementById("inputFrom").value;
    history[0].to = document.getElementById("inputTo").value; 
    history[0].miles = document.getElementById("inputMiles").value;

    formData["history"] = history;

    return formData;
}

function insertRecord(data){
    
    var table = document.getElementById('rent-table')
    dataArray.push(
    {'id': data.id, 
    'make': data.make, 
    'model':data.model, 
    'year': data.year, 
    'seats': data.seats, 
    'price': data.price, 
    'available': data.available,
    'history': data.history
    })

    buildTable(dataArray);
}

function resetForm() {
    //Reset Form to no Value
    document.getElementById("inputMake").value = "";
    document.getElementById("inputModel").value = "";
    document.getElementById("inputYear").value = "";
    document.getElementById("inputSeats").value = "";
    document.getElementById("inputPrice").value = "";
    document.getElementById("inputAvailable").value = "";
    document.getElementById("inputFrom").value = "";
    document.getElementById("inputTo").value = "";
    document.getElementById("inputMiles").value = "";
    //Clear Selected Row
    selectedRow = null;
}

//Change modal title depending on create or modify
function changeModalTitle(text){
    document.getElementById("form-title").innerHTML = text;
}

function editRecord(index){
    //Set selected row
    selectedRow = index;

    //Store selected row into array
    var carData = {};
    carData['make'] = dataArray[index].make
    carData['model'] = dataArray[index].model
    carData['year'] = dataArray[index].year
    carData['seats'] = dataArray[index].seats
    carData['price'] = dataArray[index].price
    carData['available'] = availableChange(dataArray[index].available)
    carData['history'] = dataArray[index].history
    
    

    //Array value to Form
    document.getElementById("inputMake").value = carData.make;
    document.getElementById("inputModel").value = carData.model;
    document.getElementById("inputYear").value = carData.year;
    document.getElementById("inputSeats").value = carData.seats;
    document.getElementById("inputPrice").value = carData.price;
    document.getElementById("inputAvailable").value = carData.available;
    document.getElementById("inputFrom").value = carData.history[0].from;
    document.getElementById("inputTo").value = carData.history[0].to;  
    document.getElementById("inputMiles").value = carData.history[0].miles;
}

function viewRent(index){

    var historyData = {};
    historyData['from'] = dataArray[index].history[0].from;
    historyData['to'] = dataArray[index].history[0].to; 
    historyData['miles'] = dataArray[index].history[0].miles;

    var date1 = new Date(historyData.from);
    var date2 = new Date(historyData.to);

    var timeDif = date2.getTime() - date1.getTime();


    var elasped = timeDif/(1000*3600*24);
    var total = elasped * dataArray[index].price;
    var totalVat = total + (total * .21);

    //Array value to Form
    document.getElementById("readFrom").value = historyData.from;
    document.getElementById("readTo").value = historyData.to;
    document.getElementById("readMiles").value = historyData.miles;
    document.getElementById("readRent").value = elasped;
    document.getElementById("readPrice").value = dataArray[index].price;
    document.getElementById("readTotal").value = '$'+total.toFixed(2);
    document.getElementById("readTotalVat").value = '$'+totalVat.toFixed(2);
}

function updateRecord(formData){
    //Update data array with form data
    dataArray[selectedRow].make = formData.make
    dataArray[selectedRow].model = formData.model;
    dataArray[selectedRow].year = formData.year;
    dataArray[selectedRow].seats = formData.seats;
    dataArray[selectedRow].price = formData.price;
    dataArray[selectedRow].available = formData.available;
    dataArray[selectedRow].history = formData.history;

    //Rebuild Table
    buildTable(dataArray);

}

//Delete Record
function deleteRecord(index) {
    dataArray.splice(index,1);

    //Rebuild Array after record deleted
    buildTable(dataArray);
}



//Sort Table Header
$('th').on('click', function(){
    

    //Get data value
    var column = $(this).data('colname')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length);
    

    if(column == "modify")
        return;

    //Sort based on order
    if (order == 'desc'){
        //Sort Array
        dataArray = dataArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        //Change to opposite order
        $(this).data("order","asc");
        //Set new Text
        text = text.split(' ')[0] + ' &#8593';
    }
    else{
        dataArray = dataArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text = text.split(' ')[0] +  ' &#8595';
    }

    //Set HTML text
    $(this).html(text)

    //Rebuild Table
    buildTable(dataArray)

    console.log(text);

    //Create Custom Event
    $('th').trigger('customEvent', column);
})

//Restrict Header Sort to 1
$('th').on('customEvent', function(event, param){
    var column = $(this).data('colname')
    
    //Check if this equal param
    if(column != param){
        var text = $(this).html()
        text = text.split(' ')[0];

        //Set HTML text
        $(this).html(text)
    }
})

function caculate(index){

    dataArray.forEach(element => {
        var daysRented
    });

}


//Build the Table
function buildTable(data){
    //Get Table
    var table = document.getElementById('rent-table')

    //Clear Table
    table.innerHTML = ''

    //Make New Table
    for (var i = 0; i < data.length; i++){

        //Make id
        var colrow = `row-${i+1}`
        var colid = `id-${i+1}`
        var colmake = `make-${i+1}`
        var colmodel = `model-${i+1}`
        var colyear = `year-${i+1}`
        var colseats = `seats-${i+1}`
        var colprice = `price-${i+1}`
        var colavailable = `available-${i+1}`
        var colmodify = `modify-${i+1}`

        //Change row color availablity
        var tablecolor;
        var available;
        if(data[i].available == true){
            tablecolor = "table-success";
            available = "Yes";
        }
        else{
            tablecolor = "table-danger";
            available = "No";
        }
 
        var row = `<tr class ="${colrow}">
                        <td id ="${colid}">${(data[i].id).toString().padStart(2,'0')}</td>
                        <td id ="${colmake}">${data[i].make}</td>
                        <td id ="${colmodel}">${data[i].model}</td>
                        <td id ="${colyear}">${data[i].year}</td>
                        <td id ="${colseats}">${data[i].seats} seated</td>
                        <td id ="${colprice}">$${data[i].price}/day</td>
                        <td class ="${tablecolor}" id ="${colavailable}">${available}</td>
                        <td id ="${colmodify}">
                            <button class="btn btn-primary" onclick="editRecord(${i}); changeModalTitle('Edit Car');" data-toggle="modal" data-target="#carModal" data-toggle="tooltip" title="Edit">
                                <i class="fas fa-edit"></i>
                            </button>

                            <button class="btn btn-warning" onclick="viewRent(${i});"data-toggle="modal" data-target="#rentModal" data-toggle="tooltip" title="Rent History">
                                <i class="fas fa-history"></i>
                            </button>

                            <button class="btn btn-danger " onclick="deleteRecord(${i})" data-toggle="tooltip" title="Delete">
                                <i class="fas fa-times"></i>
                            </button>
                            
                        </td>
                   </tr>`

        table.innerHTML += row
    }
}
