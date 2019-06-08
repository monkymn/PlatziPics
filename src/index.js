'use strinct'

//Importar Librerias
import  {app, BrowserWindow} from  'electron'
import devtools from './devtools.js'

if(process.env.NODE_ENV === 'developtment'){
    devtools()
}

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