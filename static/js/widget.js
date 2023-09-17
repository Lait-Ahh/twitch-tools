document.querySelectorAll('.Input .ColorPicker').forEach(cp => {
    cp.style.backgroundColor = cp.parentElement.querySelector('input').value;
    cp.parentElement.querySelector('input').addEventListener('input', (e) => {
        cp.style.backgroundColor = e.target.value;
    });
});