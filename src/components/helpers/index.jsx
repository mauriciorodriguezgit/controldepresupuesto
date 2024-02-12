export const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}
export const formatearFecha = fecha => {
    let fechaFormateada;

    if (!fecha) {
        // Si no se proporciona una fecha, usa la fecha actual
        fecha = new Date();
    } else {
        // Intenta crear un objeto de fecha a partir de la cadena proporcionada
        const fechaNueva = new Date(fecha);

        // Verificar si la fecha es válida
        if (!isNaN(fechaNueva)) {
            fecha = fechaNueva;
        } else {
            // Si la fecha no es válida, usa la fecha actual
            fecha = new Date();
        }
    }

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };

    fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

    return fechaFormateada;
};
