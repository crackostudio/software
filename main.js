const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 850,
    minWidth: 1200,
    minHeight: 750,
    icon: path.join(__dirname, 'logo.ico'), // Tu logo personalizado
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    backgroundColor: '#0a0a0c',
    autoHideMenuBar: true
  });

  // EN LUGAR DE CARGAR UN ARCHIVO LOCAL:
  // Carga la URL de tu servidor en la nube.
  mainWindow.loadURL('https://tu-estudio-de-overlays.vercel.app'); 

  // OPCIONAL: Si el servidor falla por falta de internet, puedes definir un plan B local
  mainWindow.webContents.on('did-fail-load', () => {
    mainWindow.loadFile('index-offline.html');
  });
}

app.whenReady().then(createWindow);