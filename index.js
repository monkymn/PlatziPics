'use strinct'

//Importar Librerias
const {app, BrowserWindow} = require ('electron')

app.on('ready', () => {
    let win = new BrowserWindow()

    win.on('closed', () => {

        win = null
        app.quit()
    })
})

app.on('before-quit', () => {
    console.log('cerrando aplicacion..')
})