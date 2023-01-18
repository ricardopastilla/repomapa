'use strict';
// eslint-disable-next-line no-unused-vars
const config = {
    style: 'mapbox://styles/pastillamx/cl8kmvbac000415mxkpovzpye',
    accessToken: 'pk.eyJ1IjoicGFzdGlsbGFteCIsImEiOiJjbDhoM2hneHowdTE1M29xeGwyNGEwa2Y1In0.KNCloJLO4XmOoEVhZUjuzg',
    CSV: './ubicaciones-pres.csv',
    center: [-102, 24],
    zoom: 4.5,
    title: 'Mapa de Cuidados de México',
    description: 'Morbi sodales ut risus sit amet hendrerit. Integer nec erat accumsan, dignissim tortor quis, facilisis lectus. Donec placerat venenatis turpis a condimentum. Phasellus in mi dignissim, imperdiet leo vitae, pharetra lacus. Cras eget sollicitudin lectus. Vestibulum hendrerit, lectus vitae convallis pellentesque, tortor tellus interdum lacus, sit amet molestie lacus odio sed sem. ',
    sideBarInfo: ['NombreUnidad', 'POBUSn', 'POBUSa', 'POBUSd', 'direccion', 'telefono', 'correoelec', 'sitioweb', 'Inst', 'ConDer', ],
    popupInfo: ['NombreUnidad'],
    filters: [{
        type: 'checkbox',
        title: '',
        columnHeader: 'POBUSn', // Case sensitive - must match spreadsheet entry
        listItems: ['Infancia'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    }, {
        type: 'checkbox',
        title: '',
        columnHeader: 'POBUSa', // Case sensitive - must match spreadsheet entry
        listItems: ['Personas mayores'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    }, {
        type: 'checkbox',
        title: '',
        columnHeader: 'POBUSd', // Case sensitive - must match spreadsheet entry
        listItems: ['Personas con discapacidad'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    }, {
        type: 'dropdown',
        title: 'Sector',
        columnHeader: 'Sector',
        listItems: ['Pública', 'Privada', 'Sociedad civil', ],
    }, {
        type: 'dropdown',
        title: 'Derechohabiencia',
        columnHeader: 'ConDer', // Case sensitive - must match spreadsheet entry
        listItems: ['Acceso sin derechohabiencia', 'Acceso con derechohabiencia', ], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    }, ],
};