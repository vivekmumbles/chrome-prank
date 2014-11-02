
/*regular expression to see if the user is already on the redirect page.*/
var pattern = new RegExp("((http)|(https)|(ftp))[:]\/\/(www\.)?(\W*\.)*(vivekmumbles)\.(com)(\W)*");

function redirect(tab)
{
    if(pattern.test(tab.url) == false) //prevengs page from constantly being reloaded
    {
	chrome.tabs.update(tab.id, {url: "http://vivekmumbles.com"});  //where you want to redirect to
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
