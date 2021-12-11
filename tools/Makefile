NODE_VERSION := v16.13.1
NG_VERSION := 13.1.1

clear:
	rm -rf ./node

node:
	mkdir node
	wget -O node.tar.xz https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-linux-x64.tar.xz
	tar -xJvf node.tar.xz -C ./node --strip-components=1
	rm node.tar.xz
	mkdir node/.npm-global
	npm config set prefix "${PWD}/node/.npm-global"

npm:
	npm install -g \
		@angular/cli@${NG_VERSION}

install: node npm
