let browser_name; // Browser name
let browser_version; // Browser version

let bad_browsers = ["Opera"]; // Browsers in which errors may occur

window.onload = () => {

    getBrowser();

    for (var i = 0; i < bad_browsers.length; i++) {

        if (bad_browsers[i] == browser_name) {
        
            alert("Please be aware that problems on this website may occur, using your browser ("+browser_name+")")    

        }

    }

};

function getBrowser() { // Simple function to get the version and name of the Browser

    browser_name = navigator.appCodeName;
    browser_version = navigator.appVersion;

}