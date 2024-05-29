var valuesArray = [];
function getPO(){
	var inputs = document.querySelectorAll("input[id*=PONumber]");
	inputs.forEach(function(input) {
    		valuesArray.push(input.value);
	});
}

function hi(){
	console.log("Hello");
}
