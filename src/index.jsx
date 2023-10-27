const { loadPlugin } = require("@babel/core/lib/config/files");
const { component, xml, jid, iqCallee } = require("@xmpp/component");
const debug = require("@xmpp/debug");

const domain = "deepak.hool.org";
const sender = component({
  service: "xmpp://beta.hool.org",
  domain: domain,
  password: "deepak@123!",
});
sender.start();

sender.iqCallee.get(
  "http://jabber.org/protocol/disco#items",
  "query",
  async (ctx) => {
    const fromJID = ctx.stanza.attrs.to;
    const firstname = fromJID.split("@")[0];

    if (fromJID == domain) {
      const games = ["kida", "carddoo", "faeko", "roop", "tricko"];

      return (
        <query xmlns="http://jabber.org/protocol/disco#items">
          <feature var="http://jabber.org/protocol/disco#info" />
          <feature var="http://jabber.org/protocol/disco#items" />
          <item jid="kida@deepak.hool.org" name="kida" />
          <item jid="cardoo@deepak.hool.org" name="cardoo" />
          <item jid="faeko@deepak.hool.org" name="faeko" />
          <item jid="roop@deepak.hool.org" name="roop" />
          <item jid="tricko@deepak.hool.org" name="tricko" />
          <item jid="hool@deepak/.hool.org" name="hool" />
        </query>
      );
    }

    if (firstname === `hool`) {
      const game = {
        name: "hool",
        jid: fromJID,
        maximumPlayers: "4",
        GameType: "board",
        minimumplayer: "4",
        app_available: "yes",
      };
      return (
        <query xmlns="http://jabber.org/protocol/disco#items">
          <feature var="http://jabber.org/protocol/disco#info" />
          <feature var="http://jabber.org/protocol/disco#items" />
          <name>{game.name}</name>
          <maximumPlayers>{game.maximumPlayers}</maximumPlayers>
          <gameType>{game.GameType}</gameType>
          <minPlayer>{game.minimumplayer}</minPlayer>
          <jid>{game.jid}</jid>
        </query>
      );
    }
    if (firstname === `faeko`) {
      const game = {
        name: "faeko",
        maximumPlayers: "6",
        GameType: "card`",
        minimumplayer: "2",
        jid: fromJID,
        app_available: "yes",
      };
      return (
        <query xmlns="http://jabber.org/protocol/disco#items">
          <feature var="http://jabber.org/protocol/disco#info" />
          <feature var="http://jabber.org/protocol/disco#items" />
          <name>{game.name}</name>
          <jid>{game.jid}</jid>
          <maximumPlayers>{game.maximumPlayers}</maximumPlayers>
          <gameType>{game.GameType}</gameType>
          <minPlayer>{game.minimumplayer}</minPlayer>
          <app_available>{game.app_available}</app_available>
        </query>
      );
    }
    if (firstname === `kida`) {
      const game = {
        name: "kida",
        maximumPlayers: "1",
        GameType: "card`",
        minimumplayer: "1",
        jid: fromJID,
        app_available: "yes",
      };
      return (
        <query xmlns="http://jabber.org/protocol/disco#items">
          <feature var="http://jabber.org/protocol/disco#info" />
          <feature var="http://jabber.org/protocol/disco#items" />
          <name>{game.name}</name>
          <jid>{game.jid}</jid>
          <maximumPlayers>{game.maximumPlayers}</maximumPlayers>
          <gameType>{game.GameType}</gameType>
          <minPlayer>{game.minimumplayer}</minPlayer>
          <app_available>{game.app_available}</app_available>
        </query>
      );
    }
    if (firstname === `roop`) {
      const game = {
        name: "roop",
        maximumPlayers: "2",
        GameType: "card`",
        minimumplayer: "2",
        jid: fromJID,
        app_available: "no",
      };
      return (
        <query xmlns="http://jabber.org/protocol/disco#items">
          <feature var="http://jabber.org/protocol/disco#info" />
          <feature var="http://jabber.org/protocol/disco#items" />
          <name>{game.name}</name>
          <jid>{game.jid}</jid>
          <maximumPlayers>{game.maximumPlayers}</maximumPlayers>
          <gameType>{game.GameType}</gameType>
          <minPlayer>{game.minimumplayer}</minPlayer>
          <app_available>{game.app_available}</app_available>
        </query>
      );
    }
  }
);
sender.iqCallee.get(
  "http://jabber.org/protocol/disco#info",
  "query",
  async (ctx) => {
    const to = ctx.stanza.attrs.to;
    console.log(to, "joswa");
    if (to == domain) {
      const list = {
        owner: "amaresh deshpande",
        tittle: "planetHool",
        no_of_palyers: "4",
        game_start_time: "5min",
      };
      return (
        <query xmlns="http://jabber.org/protocol/disco#info">
          <feature var="http://jabber.org/protocol/disco#info" />
          <feature var="http://jabber.org/protocol/disco#items" />
          <owner>{list.owner}</owner>
          <title>{list.tittle}</title>
          <no_of_palyers>{list.no_of_palyers}</no_of_palyers>
          <game_start_time>{list.game_start_time}</game_start_time>
        </query>
      );
    }
  }
);
debug(sender, true);
