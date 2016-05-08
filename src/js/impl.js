import helloWorldTemplate from '../templates/hello-world.hbs!';

document.getElementById( 'app' ).innerHTML = helloWorldTemplate({ name: 'World' });