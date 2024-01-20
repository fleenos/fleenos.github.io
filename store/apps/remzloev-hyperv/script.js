var WindowID

window.addEventListener('message', function (event) {
    if (event.data.startsWith('YourID-')) {
        WindowID = Number(event.data.replace('YourID-', ''))
        /* Установка заголовка */ sendToTop('SetWindowHeader' + WindowID + '|' + $('title').html())  
        /* Установка иконки    */ sendToTop('SetWindowIcon' + WindowID + '|' + '../mods/apps/okna-testdesktopapp/icon.png')        
    }
})

function killWindow () { // Функция закрывает окно
    sendToTop('KillWindow_' + WindowID)
}
