// Phương thức 1: Sử dụng hàm onclick trực tiếp trong HTML
function calculateSum() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const sum = input1 + input2;
    document.getElementById('output1').value = sum;
}

// Phương thức 2: Sử dụng sự kiện "input" trong JavaScript
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output2 = document.getElementById('output2');

input1.addEventListener('input', updateSum);
input2.addEventListener('input', updateSum);

function updateSum() {
    const value1 = parseFloat(input1.value) || 0;
    const value2 = parseFloat(input2.value) || 0;
    const sum = value1 + value2;
    output2.value = sum;
}
