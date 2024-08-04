document.getElementById('danceButton').addEventListener('click', function() {
    const potato = document.getElementById('potato');
    potato.classList.toggle('dance');
});

// Add dance effect to the CSS
const style = document.createElement('style');
style.textContent = `
    .dance {
        transform: rotate(20deg) scale(1.1);
    }
`;
document.head.appendChild(style);
