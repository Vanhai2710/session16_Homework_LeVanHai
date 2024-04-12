document.addEventListener('DOMContentLoaded', function() {
    let newItemInput = document.getElementById('newItem');
    let addItemButton = document.getElementById('addItem');
    let itemList = document.getElementById('itemList');

    newItemInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            this.style.backgroundColor = 'white';
        } else {
            this.style.backgroundColor = 'yellow';
        }
    });

    addItemButton.addEventListener('click', function() {
        let newItemText = newItemInput.value.trim();
        if (newItemText !== '') {
            let newItem = document.createElement('li');
            newItem.textContent = newItemText;
            itemList.appendChild(newItem);
            newItemInput.value = '';
            newItemInput.style.backgroundColor = 'yellow';
        }
    });
});
