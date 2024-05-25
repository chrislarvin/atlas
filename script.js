document.getElementById('fileInput').addEventListener('change', loadHexJSON);

function loadHexJSON(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const data = JSON.parse(e.target.result);
        drawHexMap(data);
    };
    reader.readAsText(file);
}

function drawHexMap(data) {
    const hexmap = document.getElementById('hexmap');
    hexmap.innerHTML = '';
    data.hexes.forEach(hex => {
        const div = document.createElement('div');
        div.className = 'hex';
        div.style.backgroundColor = hex.color || '#66ccff';
        hexmap.appendChild(div);
    });
}
