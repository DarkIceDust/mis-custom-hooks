import { useState, useEffect, useRef } from 'react'

// Nos creamos nuestro hook useFetch que sirve para hacer peticiones HTTP.
export const useFetch = ( url ) => {
    
    // Un useFetch siempre tiene un setState, asi que lo creamos, con una serie de elementos.
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    // *No hacer caso a isMounted ni a este useEffect si no estás con el ejercicio RealExampleRef.js.*
    // Este isMounted nos servirá para tener en cuenta si el componente está montado o no.
    const isMounted = useRef(true);
    // Y el useEffect nos servirá para que cuando nosotros le demos al botón Show/Hide por segunda vez,
    // es decir, que haga un hide, que se guarde la información, entonces le dirá a React que el componente está desmontado.
    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    }, [])

    // Tambien nos creamos un useEffect para hacer la petición HTTP. Además hay que indicarle que debe realizar este efecto cuando cambie el url.
    useEffect(() => {
        
        // Pongo aquí un setState ya que sirve para que cuando le demos al botón de Siguiente quote, aparezca de nuevo el loading.
        setState({
            data: null,
            loading: true,
            error: null
        })
        
        fetch ( url )
                .then ( resp => resp.json() )
                .then ( data => {

                    //*No hacer caso a este setTimeout, solo sirve para hacer pruebas con el RealExampleRef.js.*
                    // Lo utilizamos para ver que ocurre si le damos al botón Show/Hide antes de que termine de cargar las frases.
                    // Si no añadimos el isMounted, nos dará un error.
                    // setTimeout(() => {
                    //     // Hacemos un if para valorar si está montado. Si lo está, actualizará el setState. Si no, mostrará el mensaje 'setState no se llamó' por pantalla.
                    //     if ( isMounted.current ) {
                    //         // Y actualizamos el setState.
                    //         setState({
                    //             loading: false,
                    //             error: null,
                    //             data: data
                    //         })
                    //     } else {
                    //         console.log('setState no se llamó')
                    //     }
                    // }, 4000);


                    // setState({
                    //     loading: false,
                    //     error: null,
                    //     data: data
                    // })

                })
                .catch( () => {
                    setState({
                        data: null,
                        loading: false,
                        error: 'No se pudo cargar la info'
                    })
                })
    }, [url])

    return state;
};
