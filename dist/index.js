const {
  loadPlugin
} = require("@babel/core/lib/config/files");
const {
  component,
  xml,
  jid,
  iqCallee
} = require("@xmpp/component");
const debug = require("@xmpp/debug");
const sender = component({
  service: "xmpp://beta.hool.org",
  domain: "deepak.hool.org",
  password: "deepak@123!"
});
sender.start();
debug(sender, true);