
function TodoEncabezado({ total, completed }) {
    return(
        <h1>     
            Tareas completadas: {completed} de {total} tareas.
        </h1>
    );

}

export { TodoEncabezado };