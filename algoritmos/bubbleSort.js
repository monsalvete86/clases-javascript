let numeros = [5, 3, 8, 4, 2, 9, 11 ,10,  6, 1, 7];
/*
for (let i = numeros.length - 1; i >= 0; i--) {
    
    for(let j = 0; j < i; j++) {
        if(numeros[j] > numeros[j + 1]) {
            const temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}
*/
function selecctionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
        console.log('array en i=', i); 
        console.log(array);
    }
    return array;
}

function swap(array, indexA, indexB) {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}
console.log(selecctionSort(numeros));