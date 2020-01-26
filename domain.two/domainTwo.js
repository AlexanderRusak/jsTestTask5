

window.onmessage = function (e) {
    let cbf = () => {
        console.log("done");
    }
    var objName = {
        name: "Petya"
    };
    var key = "storage";
    if (e.srcElement.location.pathname !== "/D:/FrontEnd/js%20test%20exercises/task5/domain.two/domain.two.html") {
        return;
    }
    var payload = JSON.parse(e.data);
    switch (payload.method) {
        case 'set':
            try {
                ((payload.obj !== undefined) ?
                    localStorage.setItem(payload.key, JSON.stringify(payload.obj)) :
                    localStorage.setItem(key, JSON.stringify(objName)));
                localStorage.setItem("callback", JSON.stringify(cbf));
                console.log(e)
                console.log("written")
                break;
            } catch (e) {
                console.error(e);
                break;
            }
        case 'get':
            try {
                (payload.key !== this.undefined) ?
                    console.log(localStorage.getItem(payload.key)) :
                    console.log(localStorage.getItem(key));
                break;
            } catch (e) {
                console.error(e);
                break;
            }
        case 'remove':
            try {
                (payload.key !== this.undefined) ?
                    (localStorage.removeItem(payload.key),
                        console.log("removed")) :
                    (this.localStorage.removeItem(key),
                        console.log("removed"))

                break;
            } catch (e) {
                console.error(e);
                break;
            }

    }


};

