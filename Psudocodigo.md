#Obtener los datos y sumarlos
    CREATE una funcion que reciba el array con los datos a sumar
    GET tomar los datos dentro del array
    EVALUATE evaluar el array y obtener el dato que no sea numero
    EVALUATE evaluar los primero valores antes del signo que no es numero

    #1 opcion
        buscar la posicion del signo y en base a esa posicion obtener los valores a la derecha y a la izquierda

    # 2 opcion
        -crear 3 variables, value 1, value 2, y sign
        -usar el reduce e ir concatenando los valores en la variable velue 1
        -cuando encuentre un signo, obtener ese signo y almacenarlo en la variable sign
        -asignar el valor de mi variable inicial a la variable  value 2 y setear la variable value 1 a 0
        -Al continuar el reduce este concatenara los valores de nuevo en la variable value 1

        finalmente hago la operacion con el valor de  value1 y value 2 depdiendo del signo
    #3 opcion
        -Convertir un rray en cadena y cortar la cadena con el signo y evaluar las 2 partes que obtuve

#Calcular la accion a realizar
    EVALUATE cada vez que se ingresa un valor evaluar el array con la funcion
    EVALUATE cuando exista un signo dentro del array realizar la operacion de suma resta etc

#Crear funcion que me reemplace el valor a mostrar y crear funcion que me reemplce el valor del array