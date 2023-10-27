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
const domain = "deepak.hool.org";
const sender = component({
  service: "xmpp://beta.hool.org",
  domain: domain,
  password: "deepak@123!"
});
sender.start();
sender.iqCallee.get("http://jabber.org/protocol/disco#items", "query", async ctx => {
  const fromJID = ctx.stanza.attrs.to;
  const firstname = fromJID.split("@")[0];
  if (fromJID == domain) {
    const games = ["kida", "carddoo", "faeko", "roop", "tricko"];
    return xml("query", {
      xmlns: "http://jabber.org/protocol/disco#items"
    }, xml("feature", {
      var: "http://jabber.org/protocol/disco#info"
    }), xml("feature", {
      var: "http://jabber.org/protocol/disco#items"
    }), xml("item", {
      jid: "kida@deepak.hool.org",
      name: "kida"
    }), xml("item", {
      jid: "cardoo@deepak.hool.org",
      name: "cardoo"
    }), xml("item", {
      jid: "faeko@deepak.hool.org",
      name: "faeko"
    }), xml("item", {
      jid: "roop@deepak.hool.org",
      name: "roop"
    }), xml("item", {
      jid: "tricko@deepak.hool.org",
      name: "tricko"
    }), xml("item", {
      jid: "hool@deepak/.hool.org",
      name: "hool"
    }));
  }
  if (firstname === `hool`) {
    const game = {
      name: "hool",
      jid: fromJID,
      maximumPlayers: "4",
      GameType: "board",
      minimumplayer: "4",
      app_available: "yes"
    };
    return xml("query", {
      xmlns: "http://jabber.org/protocol/disco#items"
    }, xml("feature", {
      var: "http://jabber.org/protocol/disco#info"
    }), xml("feature", {
      var: "http://jabber.org/protocol/disco#items"
    }), xml("name", null, game.name), xml("maximumPlayers", null, game.maximumPlayers), xml("gameType", null, game.GameType), xml("minPlayer", null, game.minimumplayer), xml("jid", null, game.jid));
  }
  if (firstname === `faeko`) {
    const game = {
      name: "faeko",
      maximumPlayers: "6",
      GameType: "card`",
      minimumplayer: "2",
      jid: fromJID,
      app_available: "yes"
    };
    return xml("query", {
      xmlns: "http://jabber.org/protocol/disco#items"
    }, xml("feature", {
      var: "http://jabber.org/protocol/disco#info"
    }), xml("feature", {
      var: "http://jabber.org/protocol/disco#items"
    }), xml("name", null, game.name), xml("jid", null, game.jid), xml("maximumPlayers", null, game.maximumPlayers), xml("gameType", null, game.GameType), xml("minPlayer", null, game.minimumplayer), xml("app_available", null, game.app_available));
  }
  if (firstname === `kida`) {
    const game = {
      name: "kida",
      maximumPlayers: "1",
      GameType: "card`",
      minimumplayer: "1",
      jid: fromJID,
      app_available: "yes"
    };
    return xml("query", {
      xmlns: "http://jabber.org/protocol/disco#items"
    }, xml("feature", {
      var: "http://jabber.org/protocol/disco#info"
    }), xml("feature", {
      var: "http://jabber.org/protocol/disco#items"
    }), xml("name", null, game.name), xml("jid", null, game.jid), xml("maximumPlayers", null, game.maximumPlayers), xml("gameType", null, game.GameType), xml("minPlayer", null, game.minimumplayer), xml("app_available", null, game.app_available));
  }
  if (firstname === `roop`) {
    const game = {
      name: "roop",
      maximumPlayers: "2",
      GameType: "card`",
      minimumplayer: "2",
      jid: fromJID,
      app_available: "no"
    };
    return xml("query", {
      xmlns: "http://jabber.org/protocol/disco#items"
    }, xml("feature", {
      var: "http://jabber.org/protocol/disco#info"
    }), xml("feature", {
      var: "http://jabber.org/protocol/disco#items"
    }), xml("name", null, game.name), xml("jid", null, game.jid), xml("maximumPlayers", null, game.maximumPlayers), xml("gameType", null, game.GameType), xml("minPlayer", null, game.minimumplayer), xml("app_available", null, game.app_available));
  }
});
sender.iqCallee.get("http://jabber.org/protocol/disco#info", "query", async ctx => {
  const to = ctx.stanza.attrs.to;
  console.log(to, "joswa");
  if (to == domain) {
    const list = {
      owner: "amaresh deshpande",
      tittle: "planetHool",
      no_of_palyers: "4",
      game_start_time: "5min"
    };
    return xml("query", {
      xmlns: "http://jabber.org/protocol/disco#info"
    }, xml("feature", {
      var: "http://jabber.org/protocol/disco#info"
    }), xml("feature", {
      var: "http://jabber.org/protocol/disco#items"
    }), xml("owner", null, list.owner), xml("title", null, list.tittle), xml("no_of_palyers", null, list.no_of_palyers), xml("game_start_time", null, list.game_start_time));
  }
});
debug(sender, true);