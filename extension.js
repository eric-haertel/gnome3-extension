const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;

let text, button;
let flake;
let isActive = false;

let extension = imports.misc.extensionUtils.getCurrentExtension();
let metadata = extension.metadata;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Translation = Me.imports.translation;

function _hideHello() {
  Main.uiGroup.remove_actor(text);
  text = null;
}

function _toggleSnowFlake(){
  log("SimpleMonitor: _toggleSnowFlake");
  if(isActive){
    _hideSnowFlake();
    isActive = false;
  } else {
    _showSnowFlake();
    isActive = true;
  }
}

function _hideSnowFlake() {
  log("SimpleMonitor: _hideSnowFlake");
  Main.uiGroup.remove_actor(flake);
  flake = null
}

function _showSnowFlake() {
  log("SimpleMonitor: _showSnowFlake");
  flake = new St.Label({ style_class: 'helloworld-label', text: '*' });
  Main.uiGroup.add_actor(flake);
  let monitor = Main.layoutManager.primaryMonitor;
  flake.set_position(monitor.x + Math.floor(monitor.width / 2 ), 0);
  flakeDownwards();
}

function flakeDownwards(){
  let monitor = Main.layoutManager.primaryMonitor;
  Tweener.addTween(flake,
                   { y: monitor.height,
                     x: monitor.width/2,
                     time: 5,
                     transition: "linear",
                     onComplete: flakeUpwards });
}

function flakeUpwards(){
  let monitor = Main.layoutManager.primaryMonitor;
  Tweener.addTween(flake,
                   { y: 0,
                     x: monitor.width/2,
                     time: 5,
                     transition: "linear",
                     onComplete: flakeDownwards });
}

function init(extensionMeta) {
  metadata = extensionMeta;
  log("SimpleMonitor: path: " + metadata.path);

  Translation.initTranslation();
  initStatusBarButton();
}

function enable() {
  log("SimpleMonitor.enable: extension " + metadata.path);
  Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
  Main.panel._rightBox.remove_child(button);
}

function initStatusBarButton() {
    button = new St.Bin({ style_class: 'panel-button',
                        reactive: true,
                        can_focus: true,
                        x_fill: true,
                        y_fill: false,
                        track_hover: true });
  let icon = new St.Icon({ icon_name: 'system-run-symbolic',
                           style_class: 'system-status-icon' });

  button.set_child(icon);
  button.connect('button-press-event', _toggleSnowFlake);
}
