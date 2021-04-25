import Header from '../templates/Header';
import Home from '../pages/home';
import Characters from '../pages/Character';
import Error404 from '../pages/Error404';
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
    
}

export default router;