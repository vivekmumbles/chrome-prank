
// regular expression to see if the user is already on the redirect page.
var pattern = new RegExp("((http)|(https)|(ftp))[:]\/\/(www\.)?(\W*\.)*(comcast)\.(net)(\W)*");

function redirect(tab) {
    // prevents page from constantly being reloaded
    if(pattern.test(tab.url) == false) {
	// where you want to redirect to
	chrome.tabs.update(tab.id, {url: "http://comcast.net"});
    }
}

chrome.webRequest.onBeforeRequest.addListener
(
    function(details)
    {
	return redirect(details);
    },
    
    {
	urls: ["<all_urls>"]
    },

    ["blocking"]
);
