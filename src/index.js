import router from './routes'

window.addEventListener('load', router);
// con lo siguiente se escucha los cambios en un hash y la logica para cuando carga por primera vez la pagina
window.addEventListener('hashchange', router);