var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name:'AutoLanguage',
    description: 'The nodejs.org example web server.',
    script: 'E:\\multi_language_tool\\bin\\www',
    nodeOptions: [
        '--harmony',
        '--max_old_space_size=4096'
    ]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
    svc.start();
});

svc.uninstall ();