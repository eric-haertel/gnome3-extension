const Me = imports.misc.extensionUtils.getCurrentExtension();
const ExtensionUtils = imports.misc.extensionUtils;
const Gettext = imports.gettext;
const Domain = Me.metadata['gettext-domain'];


function initTranslation(domain){
	log("SimpleExtension: initTranslation: Domain="+Domain);
	let localeDir = Me.dir.get_child('locale');

	Gettext.bindtextdomain(Domain, localeDir.get_path());
	Gettext.textdomain(Domain);
}

function getText(key){
	return Gettext.domain(Domain).gettext(key);
}
