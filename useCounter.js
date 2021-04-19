import { useState } from 'react';

// Creamos un hook llamado useCounter el cual tendrá como estado inicial 10, de tal forma que si llamamos a
// useCounter y no especificamos nada entre paréntesis, cogerá como valor inicial el 10.
export const useCounter = ( initialState = 10 ) => {
    
    // Hacemos el setState y le indicamos como valor inicial el initialState.
    const [state, setState] = useState(initialState);

    // Creamos dos funciones, una incrementará y la otra decrementará.
    // Si las llamamos sin especificar nada entre paréntesis, tomarán como valor por defecto el número 1
    // para incrementar o decrementar el número que esté en pantalla.
    // Sin embargo, podemos especificar nosotros un número desde el CounterWithCustomHook llamando a cualquiera de estas funciones como una función callback y asignándole el valor que queremos que aumente o decremente
    // cada vez que toquemos el botón +1 si es para aumentar o -1 para decrementar.
    const increment = ( factor = 1 ) => {
        setState ( state + factor );
    };

    const decrement = ( factor = 1 ) => {
        setState ( state - factor );
    };

    // Y aqui simplemente creamos otra que se llama reset la cual debería volver a poner en pantalla el valor inicial si lo pulsamos.
    // Por tanto, debemos llamar al initialState con el setState.
    const reset = () => {
        setState ( initialState );
    };

    return {
        state,
        increment,
        decrement,
        reset
    };
};
