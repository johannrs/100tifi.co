import Header from '../templates/Header';
import Home from '../pages/Home';
import Characters from '../pages/Character';
import error404 from '../pages/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    // se pone :id porque va a ser dinamico, nos va a llevar al personaje que le pidamos
    '/:id': Characters,
    '/contact': 'Contact',
}

// Creamos el router

const router = async () => {
    // se usa el NULL para que lo ponga en caso que no encuentre el ID
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    
    // lo que vamos a hacer es obtener el ID y mandarselo a resolveroutes para que me diga a quien se lo debo mandar
    let hash = getHash();
    let route = await resolveRoutes(hash)
    // ahora vamos a comparar el valor de la ruta obtenida con los valores de las rutas que ya tenemos en la constante routes arriba
    let render = routes[route] ? routes[route] : error404;
    content.innerHTML = await render ();
}

export default router;