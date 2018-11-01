'use strict';

/* eslint-disable no-path-concat, import/no-unresolved */

const { app, BrowserWindow } = require('electron');
const updater                = require('electron-simple-updater');


updater.init({
  checkUpdateOnStart: false,
  autoDownload: false,
  url: 'https://github.com/loneshaana/auto_update/blob/master/updates.json'
});
updater.checkForUpdates();
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
    autoHideMenuBar: true,
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
