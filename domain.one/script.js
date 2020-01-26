window.onload = function () {
    var sashaName = {
        name: "Sasha"
    };
    var sashaKey = "sashaStorage";



    let localStorageObj = new LocalStorageManipulation();
    let contentWindow = localStorageObj.getWin();
    // set object in domain two
    /*     localStorageObj.localStarageSet(contentWindow, "set");
        localStorageObj.localStarageGetOrRemove(contentWindow, "get");
        localStorageObj.localStarageGetOrRemove(contentWindow, "remove");
        localStorageObj.localStarageGetOrRemove(contentWindow, "get"); */

    // set local object
    localStorageObj.localStarageSet(contentWindow, "set", sashaName, sashaKey);
    /*  localStorageObj.localStarageGetOrRemove(contentWindow, "get", sashaKey);
     localStorageObj.localStarageGetOrRemove(contentWindow, "remove", sashaKey);
     localStorageObj.localStarageGetOrRemove(contentWindow, "get", sashaKey); */
    localStorageObj.localStarageGetOrRemove(contentWindow, "get", "callback");
};
class LocalStorageManipulation {
    getWin() {
        var iframe = document.getElementsByTagName('iframe')[0];
        let win;
        try {
            win = iframe.contentWindow;
        } catch (e) {
            win = iframe.contentWindow;
        }
        return win;
    }
    localStarageSet(win, method, object, objectKey, callBackFunction) {
        win.postMessage(JSON.stringify({ method: method, obj: object, key: objectKey }), "*");
        window.onmessage = function (e) {
            if (e.srcElement.location.pathname !== "/D:/FrontEnd/js%20test%20exercises/task5/domain.one/index.html") {
                return;
            }
        };
    }


}

function callBackFunction() {
    return (isDone) ? console.log("done") : console.log("fail")
}
