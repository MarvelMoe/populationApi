
function popSearch(){
 var searchName  = document.getElementById("searchName").value
 var searchAge = document.getElementById("searchAge").value
document.getElementById("results").innerHTML = ""

 $.ajax({
url: 'http://api.population.io/1.0/population/' + searchName + '/' + searchAge +  '/',
dataType: "json",



 success: function(data) {
		
	for (var i = 0 ; i < data.length ; i++) {
 		 var newData = data[i]

  document.getElementById('results').innerHTML += 
  "<h1>Population: " + newData.total + "</h1>" + 
  "<h2> Age: " + newData.age+ " </h2>"  + 
  "<h2> Males: " + newData.males + " </h2>"  + 
  "<h2> Females: " + newData.females + " </h2>" +
  "<h2> Year: " + newData.year + " </h2>"  + "<hr>"

			
     }
 },
 type: "GET"
  })
  x = document.getElementById("searchAge").value
  z= document.getElementById("searchName").value

 if (isNaN(x)) {
    alert("Please put in a number")
      return;
  }
  if ((z) === (z).toLowerCase() || (z) === (z).toUpperCase()) {
    alert("Please make sure the first letter is only capitalized")
      return;
  }
}

var x = document.getElementById("calculate")
x.addEventListener("click", popSearch, false)
$('.container').addClass('animated zoomIn');