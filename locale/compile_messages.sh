#!/bin/bash

for p in *
do
	if [ -d $p ]; then
		echo "found locale directory $p"
		`msgfmt ./${p}/LC_MESSAGES/simple-monitor.po -o ./${p}/LC_MESSAGES/simple-monitor.mo`
	fi
done