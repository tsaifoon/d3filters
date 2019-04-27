// from data.js
var tableData = data;

//"Filter Date submit"
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //empty table
    var table = document.getElementById("ufo-table");
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }

    // Select the input element and get the raw HTML node
    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");

    // Get the value property of the input element
    var dateValue = dateElement.property("value");
    var cityValue = cityElement.property("value");
    var stateValue = stateElement.property("value");
    var countryValue = countryElement.property("value");
    var shapeValue = shapeElement.property("value");

    //check values
    console.log(dateValue);
    console.log(cityValue);
    console.log(stateValue);
    console.log(countryValue);
    console.log(shapeValue);

    //do a filter as a pass, but does not have to end up as going through all.  
    //maybe utilize a overarching variable here?  
    function overallFilter(){
        
    }
    
    //if else way
    var filteredDate = tableData.filter(tableData => tableData.datetime === dateValue);
    if(filteredDate.length > 0){
        filteredDate = filteredDate
    }else filteredDate = tableData;
    var filteredCity = filteredDate.filter(filteredDate => filteredDate.city === cityValue);
    if(filteredCity.length > 0){
        filteredCity = filteredCity
    }else filteredCity = filteredDate;
    var filteredState = filteredCity.filter(filteredCity => filteredCity.state === stateValue);
    if(filteredState.length > 0){
        filteredState = filteredState
    }else filteredState = filteredCity;
    var filteredCountry = filteredState.filter(filteredState => filteredState.country === countryValue);
    if(filteredCountry.length > 0){
        filteredCountry = filteredCountry
    }else filteredCountry = filteredState;
    var filteredShape = filteredCountry.filter(filteredCountry => filteredCountry.shape === shapeValue);
    if(filteredShape.length > 0){
        filteredShape = filteredShape
    }else filteredShape = filteredCountry;

    var tbody = d3.select("tbody");

    filteredShape.forEach(function(tableData) {
        console.log(tableData);
        var row = tbody.append("tr");
        Object.entries(tableData).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the aliens data object
          var cell = row.append("td");
          cell.text(value);
        });
    });                         
    
});
