const table = document.querySelector('#table')
let number = 1
for (let i = 0; i <= 10; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i <= 10; i++) {
		let td = document.createElement('td');
        td.textContent = '100'
        td.style.fontSize = '40px'
        td.style.textAlign = 'center'
        td.style.border = '2px solid #000000'
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}


 

