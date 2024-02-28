const table = document.querySelector('#myTable')
let isTrue = true

for(i = 0; i < 3; i++) {
    let tr = document.createElement('tr');

    for(j = 0; j < 3; j++) {
        let td = document.createElement('td');
        td.style.fontSize = '40px'
        td.style.textAlign = 'center' 
        td.style.border = '2px solid #000000'
        td.style.width = '400px'
        td.style.height = '300px'
		tr.appendChild(td);
        td.addEventListener('click', () => {
            if(isTrue) {
                td.textContent = 'X'
                // isTrue = false 
            } else {
                td.textContent = 'O'
                // isTrue = true
            }
            // isTrue = !isTrue
        })
        
    }
    

    table.appendChild(tr);
}

