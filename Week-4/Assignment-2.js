function ajax ( src , callback ) {		
	var xhr = new XMLHttpRequest();	
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var response = JSON.parse(xhr.responseText);	
			render(response);
		};		
	};
	xhr.open('GET', src);
	xhr.send();
}
function render ( data ) {
	console.log(data);
	for(var i = 0; i < data.length; i++){
		var name = document.createElement('li');
		var price = document.createElement('p');
		var description = document.createElement('p');
		name.textContent = 'Name: ' + data[i].name;
		price.textContent =  'Price: ' + data[i].price;
		description.textContent =  'Description: ' + data[i].description;
		document.body.appendChild(name);
		document.body.appendChild(price);
		document.body.appendChild(description);
	}
}
ajax ('products.json',
	function ( response ) {
		render ( response );
	}
); // you should get product information in JSON format and render data in the page 'https://appworks-school.github.io/Remote-Aassigiment-Data/products'
