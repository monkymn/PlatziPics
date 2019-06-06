'use strinct'

//Importar Librerias
const {app, BrowserWindow} = require ('electron')



app.on('ready', () => {
    let win = new BrowserWindow({
        center: true,
        show:false
    })

    win.once('ready-to-show', () =>{
        win.show()
    })

    win.on('closed', () => {
        win = null
        app.quit()
    })

    win.loadURL(`file://${__dirname}/renderer/index.html`)
})

app.on('before-quit', () => {
    console.log('cerrando aplicacion..')
})