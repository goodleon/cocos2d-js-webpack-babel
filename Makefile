BINDIR := $(PWD)/node_modules/.bin
WEBPACK := $(BINDIR)/webpack --colors --progress
NPM_INSTALL := npm install --loglevel=error
BABEL_NODE := $(BINDIR)/babel-node

# === CLEAN

clean:
	@rm -rf lib/*
	@mkdir -p lib/

mrproper: clean
	@rm -rf node_modules/

# === INSTALL

install: node_modules/ node_modules/app

node_modules/: package.json
	@$(NPM_INSTALL)
	@touch node_modules/

node_modules/app:
	@ln -sf $(PWD)/src node_modules/app

# === COMMANDS

repl: install
	@$(BABEL_NODE)

watch: clean install webpack.config.js package.json
	@$(WEBPACK) --watch
