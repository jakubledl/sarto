NODE_VERSION := v16.13.1
NG_VERSION := 13.1.1
TYPESCRIPT_VERSION := 4.5.3
TYPESCRIPT_LS_VERSION := 0.8.1

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
		typescript@${TYPESCRIPT_VERSION} \
		typescript-language-server@${TYPESCRIPT_LS_VERSION} \
		@angular/cli@${NG_VERSION}

install: node npm
