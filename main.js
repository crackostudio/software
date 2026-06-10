const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    // 1. Iniciamos con tamaños base por si el usuario la desmaximiza
    width: 1400,
    height: 850,
    minWidth: 1200,
    minHeight: 750,
    
    // 2. IMPORTANTE: Arranca oculta para evitar el efecto visual de "estiramiento"
    show: false, 
    
    icon: path.join(__dirname, 'logo.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    backgroundColor: '#0a0a0c',
    autoHideMenuBar: true // Oculta los menús de texto antiguos (File, Edit...), dejando la ventana limpia
  });

  // 3. Le ordenamos a Windows que la maximice elegantemente a pantalla completa útil
  mainWindow.maximize();
  
  // 4. Ahora que ya ocupa todo el monitor (respetando tu barra de tareas), la mostramos
  mainWindow.show();

  // Carga tu servidor o archivo local
  mainWindow.loadURL('https://softwarecracko.vercel.app/'); 
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});