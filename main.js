'use strict';

const electron = require('electron');
// Application life cycle module
const app = electron.app;
// Browser window creation module
const BrowserWindow = electron.BrowserWindow;

require('electron-reload')('index.js');

// Global reference to main window object
let mainWindow;

function createWindow() {
  // Create new browser window
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // Load index.html from app
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open dev tools
  mainWindow.webContents.openDevTools();

  // Close window event
  mainWindow.on('closed', function() {
    // Deference all windows
    mainWindow = null;
  });
}

// Create window after electron initialization
app.on('ready', createWindow);

// Quit app when windows are closed
app.on('window-all-closed', function() {
  // OS X apps stay active until user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', function() {
  // OS X app recreates window when dock icon is clicked
  if (mainWindow === null) {
    createWindow();
  }
});
