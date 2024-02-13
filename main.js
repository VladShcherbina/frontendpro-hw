const table = document.querySelector('#table')
for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	
	for (let j = 1; j <= 10; j++) {
		let td = document.createElement('td');
        td.textContent = j + (i * 10)
        td.style.fontSize = '40px'
        td.style.textAlign = 'center' 
        td.style.border = '2px solid #000000'
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}


 

