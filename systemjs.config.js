/**
 * This is the SystemJS config needed for
 * -    the impl test pages.
 */

System.config( {
    baseURL: '/',
    transpiler: 'traceur'
} );

System.config( {
    map: {
        handlebars: 'node_modules/handlebars/dist/handlebars.min.js',
        'handlebars-runtime': 'node_modules/handlebars/dist/handlebars.runtime.min.js',
        hbs: 'node_modules/plugin-hbs/hbs.js',
        traceur: 'node_modules/traceur/bin/traceur.js'
    }
} );

