const valorInput = document.getElementById('valor');
const unidadInicialSelect = document.getElementById('unidadInicial');
const unidadFinalSelect = document.getElementById('unidadFinal');
const convertirBtn = document.getElementById('convertir');
const resultadoP = document.getElementById('resultado');

const factoresConversion = {
    km: { m: 1000, cm: 100000, mi: 0.621371, pies: 3280.84, pulgadas: 39370.1 },
    m: { km: 0.001, cm: 100, mi: 0.000621371, pies: 3.28084, pulgadas: 39.3701 },
    // ... y así sucesivamente para todas las unidades
};

convertirBtn.addEventListener('click', () => {
    const valor = parseFloat(valorInput.value);
    const unidadInicial = unidadInicialSelect.value;
    const unidadFinal = unidadFinalSelect.value;

    // Validación adicional: verificar si ambas unidades son diferentes
    if (unidadInicial === unidadFinal) {
        resultadoP.textContent = 'Las unidades inicial y final deben ser diferentes.';
        return;
    }

    if (isNaN(valor)) {
        resultadoP.textContent = 'Ingrese un valor numérico válido.';
        return;
    }

    const resultado = valor * factoresConversion[unidadInicial][unidadFinal];
    resultadoP.textContent = `${valor} ${unidadInicial} = ${resultado.toFixed(2)} ${unidadFinal}`;
});

const modoOscuroBtn = document.getElementById('modoOscuroBtn');
const body = document.body;

modoOscuroBtn.addEventListener('click',   
 () => {
    body.classList.toggle('modo-oscuro');
    if (body.classList.contains('modo-oscuro')) {
        modoOscuroBtn.textContent = 'Modo Claro';
    } else {
        modoOscuroBtn.textContent = 'Modo Oscuro';
    }
});