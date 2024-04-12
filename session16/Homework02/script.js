const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    if (this.classList.contains('off')) {
        this.textContent = 'ON';
        this.classList.remove('off');
        this.classList.add('on');
    } else {
        this.textContent = 'OFF';
        this.classList.remove('on');
        this.classList.add('off');
    }
});
