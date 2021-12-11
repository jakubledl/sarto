#!/bin/sh

NODE_VERSION=v16.13.1

# Install node
mkdir node
wget -O node.tar.xz https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-linux-x64.tar.xz
tar -xJvf node.tar.xz -C ./node --strip-components=1
rm node.tar.xz
