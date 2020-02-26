var dataArray = [
    {'id':'1',
     'make':'BMW',
     'model':'C600 SPORT',
     'year': '2013',
     'seats': 5,
     'price': 43,
     'available':true},

    {'id':'2',
     'make':'BMW',
     'model':'650I GRAN COUPE',
     'year': '2015',
     'seats': 3,
     'price': 28,
     'available':false},

    {'id':'3',
     'make':'KAWASAKI', 'model':'KLR250',
     'year': '2003',
     'seats': 2,
     'price': 59,
     'available':true},

    {'id':'4',
     'make':'VICTORY',
     'model':'VEGAS JACKPOT',
     'year': '2010',
     'seats': 6,
     'price': 54,
     'available':false},

    {'id':'5',
     'make':'POLARIS',
     'model':'600 SWITCHBACK ADVENTURE',
     'year': '2014',
     'seats': 4,
     'price': 32,
     'available':true},

    {'id':'6',
     'make':'AMERICAN IRONHORSE',
     'model':'CLASSIC CHOP',
     'year': '2008',
     'seats': 6,
     'price': 31,
     'available':true},

    {'id':'7',
     'make':'YAMAHA',
     'model':'TW200',
     'year': '2011',
     'seats': 5,
     'price': 21,
     'available':true},

    {'id':'8',
     'make':'INTERNATIONAL',
     'model':'4800',
     'year': '2002',
     'seats': 2,
     'price': 36,
     'available':false},

    {'id':'9',
     'make':'DODGE',
     'model':'CHARGER',
     'year': '2007',
     'seats': 6,
     'price': 21,
     'available':true},

    {'id':'10',
     'make':'KAWASAKI',
     'model':'EX650 NINJA 650R',
     'year': '2011',
     'seats': 5,
     'price': 47,
     'available':true},

    {'id':'11',
     'make':'SKI-DOO',
     'model':'EXPEDITION SPORT 600 ACE',
     'year': '2011',
     'seats': 4,
     'price': 20,
     'available':true},
    {'id':'12',
     'make':'AUDI',
     'model':'TT QUATTRO',
     'year': '2015',
     'seats': 2,
     'price': 41,
     'available':false},

    {'id':'13',
     'make':'INTERNATIONAL',
     'model':'8600 TRANSTAR',
     'year': '2009',
     'seats': 4,
     'price': 45, 
    'available':true},

    {'id':'14',
     'make':'YAMAHA',
     'model':'RX10R APEX',
     'year': '2013',
     'seats': 5,
     'price': 38,
     'available':true},

    {'id':'15',
     'make':'AMERICAN LAFRANCE',
     'model':'CONDOR',
     'year': '2007',

     'seats': 2,
     'price': 31,
     'available':true},

    {'id':'16', 
    'make':'YAMAHA', 
    'model':'YFA-1 BREEZE125', 
    'year': '2003', 
    'seats': 5, 
    'price': 40, 
    'available':false},
];


buildTable(dataArray)


var selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null){
        insertRecord(formData);
        resetForm();
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
    formData["available"] = document.getElementById("inputAvailable").value;
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
    'available':data.available
    })

    buildTable(dataArray);
}

function resetForm(type) {
    document.getElementById("inputMake").value = "";
    document.getElementById("inputModel").value = "";
    document.getElementById("inputYear").value = "";
    document.getElementById("inputSeats").value = "";
    document.getElementById("inputPrice").value = "";
    document.getElementById("inputAvailable").value = "";
}

function changeModalTitle(text){
    console.log(text);
    document.getElementById("form-title").innerHTML = text;
}

function editRecord(index){
    var carData = {};
    carData['make'] = dataArray[index].make
    carData['make'] = dataArray[index].model
    carData['make'] = dataArray[index].year
    carData['make'] = dataArray[index].seats
    carData['make'] = dataArray[index].price
     ;

    var available;
        if(dataArray[index].available == true)
        carData['available'] = "Yes";
        else
        carData['available'] = "No";
        

    document.getElementById("inputMake").value = make;
    document.getElementById("inputModel").value = model;
    document.getElementById("inputYear").value = year;
    document.getElementById("inputSeats").value = seats;
    document.getElementById("inputPrice").value = price;
    document.getElementById("inputAvailable").value = available;
}

function updateRecord(index){
    var make = dataArray[index].make
    var model = dataArray[index].model
    var year = dataArray[index].year
    var seats = dataArray[index].seats
    var price = dataArray[index].price
    var available;

    var available;
        if(dataArray[index].available == true)
            available = "Yes";
        else
            available = "No";
}

function deleteRecord(index) {
    dataArray.splice(index,1);
    
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

        var row = `<tr class ="${tablecolor} ${colrow}">
                        <td id ="${colid}">${data[i].id}</td>
                        <td id ="${colmake}">${data[i].make}</td>
                        <td id ="${colmodel}">${data[i].model}</td>
                        <td id ="${colyear}">${data[i].year}</td>
                        <td id ="${colseats}">${data[i].seats} seated</td>
                        <td id ="${colprice}">$${data[i].price}/day</td>
                        <td id ="${colavailable}">${available}</td>
                        <td id ="${colmodify}">
                            <button class="btn btn-primary" onclick="editRecord(${i}); changeModalTitle('Edit Car');" data-toggle="modal" data-target="#mymodal">Edit</button>
                            <button class="btn btn-danger" onclick="deleteRecord(${i}) ">Delete</button>
                        </td>
                   </tr>`

        table.innerHTML += row
    }
}
