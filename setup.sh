#!/bin/bash
set -e
cd "$(dirname "$0")"

# todos
installPackages() {
	pnpm i
}

setupHooks(){
	hooksPath="./.githooks"
	git config core.hooksPath "$hooksPath"
	chmod 775 "$hooksPath"/*
}

# Main
installPackages
setupHooks
