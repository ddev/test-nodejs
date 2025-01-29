# test-nodejs
Trival Node.js webserver used exclusively for testing DDEV

This repo is used in DDEV automated testing.

It was created with

`ddev npm install express`

And then the `server.js` was added. `server.js` is a trivial express-based server that handles a couple of URLs for testing.

The .ddev/config.yaml needs this:

```yaml
type: generic
webserver_type: generic

web_extra_exposed_ports:
- name: node-example
  container_port: 3000
  http_port: 80
  https_port: 443

web_extra_daemons:
- name: "node-example"
  command: "node server.js"
  directory: /var/www/html
```
