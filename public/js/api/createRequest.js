/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    xhr.responseType = 'json';
    const xhr = new XMLHttpRequest;
    xhr.open( 'GET', 'https://example.com?mail=ivan@biz.pro&password=odinodin' );
    // xhr.send();
    xhr.onerror = function() {
		console.error('Произошла ошибка при отправке запроса');
		callback(null)
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                try {
                    let response = xhr.response;
                    callback(response);
                } catch (error) {
                    console.error('Произошла ошибка: ', error);
                    callback(null);
                }
            }
        };
        xhr.send(data);
    }
}


