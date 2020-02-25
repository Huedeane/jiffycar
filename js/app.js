var myArray = [
    {'id':'0001',
     'make':'BMW',
     'model':'C600 SPORT',
     'year': '2013',
     'seats': 5,
     'price': 43,
     'available':true},

    {'id':'0002',
     'make':'BMW',
     'model':'650I GRAN COUPE',
     'year': '2015',
     'seats': 3,
     'price': 28,
     'available':false},

    {'id':'0003',
     'make':'KAWASAKI', 'model':'KLR250',
     'year': '2003',
     'seats': 2,
     'price': 59,
     'available':true},

    {'id':'0004',
     'make':'VICTORY',
     'model':'VEGAS JACKPOT',
     'year': '2010',
     'seats': 6,
     'price': 54,
     'available':false},

    {'id':'0005',
     'make':'POLARIS',
     'model':'600 SWITCHBACK ADVENTURE',
     'year': '2014',
     'seats': 4,
     'price': 32,
     'available':true},

    {'id':'0006',
     'make':'AMERICAN IRONHORSE',
     'model':'CLASSIC CHOP',
     'year': '2008',
     'seats': 6,
     'price': 31,
     'available':true},

    {'id':'0007',
     'make':'YAMAHA',
     'model':'TW200',
     'year': '2011',
     'seats': 5,
     'price': 21,
     'available':true},

    {'id':'0008',
     'make':'INTERNATIONAL',
     'model':'4800',
     'year': '2002',
     'seats': 2,
     'price': 36,
     'available':false},

    {'id':'0009',
     'make':'DODGE',
     'model':'CHARGER',
     'year': '2007',
     'seats': 6,
     'price': 21,
     'available':true},

    {'id':'0010',
     'make':'KAWASAKI',
     'model':'EX650 NINJA 650R',
     'year': '2011',
     'seats': 5,
     'price': 47,
     'available':true},

    {'id':'0011',
     'make':'SKI-DOO',
     'model':'EXPEDITION SPORT 600 ACE',
     'year': '2011',
     'seats': 4,
     'price': 20,
     'available':true},
    {'id':'0012',
     'make':'AUDI',
     'model':'TT QUATTRO',
     'year': '2015',
     'seats': 2,
     'price': 41,
     'available':false},

    {'id':'0013',
     'make':'INTERNATIONAL',
     'model':'8600 TRANSTAR',
     'year': '2009',
     'seats': 4,
     'price': 45, 
    'available':true},

    {'id':'0014',
     'make':'YAMAHA',
     'model':'RX10R APEX',
     'year': '2013',
     'seats': 5,
     'price': 38,
     'available':true},

    {'id':'0015',
     'make':'AMERICAN LAFRANCE',
     'model':'CONDOR',
     'year': '2007',

     'seats': 2,
     'price': 31,
     'available':true},

    {'id':'0016', 
    'make':'YAMAHA', 
    'model':'YFA-1 BREEZE125', 
    'year': '2003', 
    'seats': 5, 
    'price': 40, 
    'available':false},
];


buildTable(myArray)



 $('th').on('click', function(){
     var column = $(this).data('colname')
     var order = $(this).data('order')
     var text = $(this).html()
     text = text.substring(0, text.length - 1);
     
     console.log(text);
     
     
     if (order == 'desc'){
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order","asc");
        text += '&#8593'
     }else{
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text += '&#8595'
     }

    $(this).html(text)
    buildTable(myArray)
    })


   
 
//{'id':'0001', 'make':'BMW', 'model':'C600 SPORT', 'year': '2013', 'seats': , 'price': },
function buildTable(data){
    //Get Table
    var table = document.getElementById('rent-table')

    //Clear Table
    table.innerHTML = ''

    //Make New Table
    for (var i = 0; i < data.length; i++){

        //Make id
        var colid = `id-${i+1}`
        var colmake = `make-${i+1}`
        var colmodel = `model-${i+1}`
        var colyear = `year-${i+1}`
        var colseats = `seats-${i+1}`
        var colprice = `price-${i+1}`
        var colavailable = `available-${i+1}`

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

        var row = `<tr class ="${tablecolor}">
                        <td>${data[i].id}</td>
                        <td>${data[i].make}</td>
                        <td>${data[i].model}</td>
                        <td>${data[i].year}</td>
                        <td>${data[i].seats} seated</td>
                        <td>$${data[i].price}/day</td>
                        <td>${available}</td>
                   </tr>`

        table.innerHTML += row
    }
}
