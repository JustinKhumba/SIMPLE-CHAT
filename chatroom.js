/*function loadMessages() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                document.getElementById('chatbox').innerHTML = xhr.responseText;
            }
        }
    }
    xhr.open('GET', 'get_messages.php', true);
    xhr.send(null);
}

function sendMessage() {
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'save_message.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                document.getElementById('message').value = '';
            }
        }
    }
    xhr.send('user=' + name + '&message=' + message);
}

loadMessages();
setInterval(loadMessages, 1);
*/



        function loadMessages() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        document.getElementById('chatbox').innerHTML = xhr.responseText;
                    }
                }
            }
            xhr.open('GET', 'get_messages.php', true);
            xhr.send(null);
        }

        function sendMessage() {
            var name = document.getElementById('name').value;
            var message = document.getElementById('message').value;
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'save_message.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        document.getElementById('message').value = '';
                    }
                }
            }
            xhr.send('user=' + name + '&message=' + message);
        }

        loadMessages();
        setInterval(loadMessages, 1);
  