function easyHTTP() {
    this.http = new XMLHttpRequest();
}

//Make http get requst
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('ERROR: ' + self.http.status);
        }
    }
    this.http.send()
}
//Make http post requst
easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json')
    let self = this;
    this.http.onload = function () {

        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}
//Make http put requst
easyHTTP.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json')
    let self = this;
    this.http.onload = function () {

        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}
//Make http delete requst
easyHTTP.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, 'Post deleted');
        } else {
            callback('ERROR: ' + self.http.status);
        }
    }
    this.http.send()
}
