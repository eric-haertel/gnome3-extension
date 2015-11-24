/*
 * GUI for setting configuration.
 */
const Gtk = imports.gi.Gtk;

let Extension = imports.misc.extensionUtils.getCurrentExtension();
let Settings = Extension.imports.settings;

function init(){
	log("prefs.init");
}

function buildPrefsWidget() {
	let config = new Settings.Settings();

	log("prefs.buildPrefsWidget=======================================");
	let frame = new Gtk.Box({
		orientation: Gtk.Orientation.VERTICAL,
		border_width: 10
	});

	let label = new Gtk.Label({
			label: "simple label",
			use_markup: true,
		});
	frame.add(label);

	let adjustment = new Gtk.Adjustment({
			lower: 0,
			upper: 200,
			step_increment: 0.05
		});
	let scale = new Gtk.HScale({
			digits:2,
			adjustment: adjustment,
			value_pos: Gtk.PositionType.RIGHT
		});
	
	var oldval = config.amount;
	log("amount old=" + oldval);
	scale.set_value(oldval);
	scale.connect('value-changed', function(sw) {
		var newval = sw.get_value();
		if (newval != oldval) {
			config.amount = newval;
			log("set flake_amount=" + newval);
		}
	});

	frame.add(scale);
	frame.show_all();
	return frame;
}