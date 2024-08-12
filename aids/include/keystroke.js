// Another top script from fergatronic...
// Questions? contact fergus@fergatronic.com
keyBuffer = "";
var key = new Array();
// define Mudd keystrokes
key['about'] = "http://www.princeton.edu/~fergus/mudd/about.html";
key['acces'] = "http://www.princeton.edu/~fergus/mudd/research/access.html";
key['aids'] = "http://www.princeton.edu/~fergus/mudd/finding_aids";
key['archi'] = "http://www.princeton.edu/~fergus/mudd/finding_aids/archives.html";
key['collec'] = "http://www.princeton.edu/~fergus/mudd/finding_aids/";
key['condu'] = "http://www.princeton.edu/~fergus/mudd/research/";
key['conta'] = "http://www.princeton.edu/~fergus/mudd/contact/";
key['datab'] = "http://www.princeton.edu/~fergus/mudd/databases/";
key['direc'] = "http://www.princeton.edu/~fergus/mudd/research/directions.html";
key['exhibi'] = "http://www.princeton.edu/~rbsc/exhibitions/";
key['find'] = "http://www.princeton.edu/~fergus/mudd/finding_aids";
key['home'] = "http://www.princeton.edu/~fergus/mudd";
key['link'] = "http://www.princeton.edu/~fergus/mudd/links.html";
key['memora'] = "http://www.princeton.edu/~fergus/mudd/databases/memorabilia.html";
key['memori'] = "http://www.princeton.edu/~fergus/mudd/databases/memorial.html";
key['hours'] = "http://www.princeton.edu/~fergus/mudd/research/rules.html";
key['news'] = "http://www.princeton.edu/~fergus/mudd/new/";
key['policy'] = "http://www.princeton.edu/~fergus/mudd/finding_aids/holdings.html";
key['public'] = "http://www.princeton.edu/~fergus/mudd/finding_aids/holdings.html";
key['resear'] = "http://www.princeton.edu/~fergus/mudd/research/";
key['rules'] = "http://www.princeton.edu/~fergus/mudd/research/rules.html";
key['thesi'] = "http://www.princeton.edu/~fergus/mudd/thesis/";
key['trans'] = "http://www.princeton.edu/~rbsc/research/transmit.html";
key['univer'] = "http://www.princeton.edu/~fergus/mudd/finding_aids/archives.html";
key['@'] = "mailto:mudd@princeton.edu?Subject=Ahoy%20there%20Librarians!";
// define RBSC keystrokes
key['catal'] = "http://www.princeton.edu/~rbsc/databases/";
key['citat'] = "http://www.princeton.edu/~rbsc/research/forms.html";
key['depar'] = "http://www.princeton.edu/~rbsc/department/";
key['form'] = "http://www.princeton.edu/~rbsc/research/forms.html";
key['graph'] = "http://www.princeton.edu/~rbsc/department/graphicarts";
key['manu'] = "http://www.princeton.edu/~rbsc/department/manuscripts/";
key['masc'] = "http://www.princeton.edu/~rbsc/databases/masc.html";
key['maps'] = "http://www.princeton.edu/~rbsc/department/maps/";
key['mudd'] = "http://www.princeton.edu/~mudd/";
key['new '] = "http://www.princeton.edu/~rbsc/new/";
key['nota'] = "http://www.princeton.edu/~rbsc/new/";
key['numis'] = "http://www.princeton.edu/~rbsc/department/numismatics/";
key['photo'] = "http://www.princeton.edu/~rbsc/research/photodup.html";
key['rare'] = "http://www.princeton.edu/~rbsc/department/rarebooks/";
key['right'] = "http://www.princeton.edu/~rbsc/research/rights.html";
key['schei'] = "http://www.princeton.edu/~rbsc/department/scheide";
key['sear'] = "http://libweb.princeton.edu/search_this_site.html";
key['trav'] = "http://www.princeton.edu/~rbsc/research/travel.html";
key['tuto'] = "http://www.princeton.edu/~rbsc/research/tutorial/";
key['west'] = "http://www.princeton.edu/~rbsc/department/western/";
key['rbsc'] = "http://www.princeton.edu/~rbsc";
// define library keystrokes
key['fellows'] = "http://libweb.princeton.edu/friends/fr.fellowships.html";
key['frien'] = "http://libweb.princeton.edu/friends/";
key['libr'] = "http://libweb.princeton.edu/"
key['main'] = "http://catalog.princeton.edu";
key['port'] = "http://libserv3.princeton.edu/rbsc2/portfolio/portfolio.html";
key['visit'] = "http://libweb.princeton.edu/friends/fr.fellowships.html";
// define PU keystrokes
key['puhome'] = "http://www.princeton.edu";
// and lets not forget
key['boyo'] = "mailto:fergus@fergatronic.com?Subject=Bloody%20Idiot";

function getKeySite(keyStroke) {
isNetscape=(document.layers);
eventChooser = (isNetscape) ? keyStroke.which : event.keyCode;
which = String.fromCharCode(eventChooser).toLowerCase();
keyBuffer += which;
window.status = "Proceed directly to '" + keyBuffer + "'";
for (var i in key) if (keyBuffer == i) {
window.location = key[i];
keyBuffer = ""; // clear buffer
}
var matches = 0;
var kbLength = keyBuffer.length;
for (var i in key) if (keyBuffer == i.substr(0,kbLength)) matches++;
if (matches == 0)  {
window.status = "No match on '" + keyBuffer + "'.";
keyBuffer = "";// clear buffer
   }
}
document.onkeypress = getKeySite; 
