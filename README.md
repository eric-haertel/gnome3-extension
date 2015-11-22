Gnome 3 extension
=================

Description
-----------
I wana see what Gnome3 extensions can do.

Installaiton
------------
1. Checkout
1. set link to ~/.local/share/gnome-shel/extensions
  + ln -s gnome3-extension ~/.local/share/gnome-shell/extensions/simple-extension@eric.haertel
  + The name of extention directory must be equal to the extension UUID
1. 

Links
-----
+ https://extensions.gnome.org/
+ https://wiki.gnome.org/Projects/GnomeShell/Extensions#Writing_an_extension

Milestones
----------
1. Template for extensions
  1. Translation
  1. Add icon with menu to status bar
  1. Configuration

Development
-----------
### Debugging
1. See log messages: terminal -> journalctl /usr/bin/gnome-session -f -o cat
1. LookingGlass: Alt+F2 -> lg