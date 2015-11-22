const ExtensionUtils = imports.misc.extensionUtils;
const Gettext = imports.gettext;


function initTranslation(domain){
	log("SimpleMonitor: initTranslation");
	let extension = ExtensionUtils.getCurrentExtension();
	let localeDir = extension.dir.get_child('locale');

	Gettext.bindtextdomain("simple-monitor", localeDir.get_path());
	Gettext.textdomain("simple-monitor");
}

function getText(key){
	return Gettext.domain(Me.metadata['gettext-domain']).gettext(key);
}
