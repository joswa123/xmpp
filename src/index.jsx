const { loadPlugin } = require("@babel/core/lib/config/files");
const { component, xml, jid, iqCallee } = require("@xmpp/component");
const debug = require("@xmpp/debug");

const sender = component({
  service: "xmpp://beta.hool.org",
  domain: "deepak.hool.org",
  password: "deepak@123!",
});

sender.start();

// sender.on("stanza", (stanza) => {
//   if (stanza.is("message")) {
//     const fromJID = stanza.attrs.from;

//     const messageBody = stanza.getChildText("body");
//     const fromJIDParts = fromJID.split(" ");
//     const firstWord = fromJIDParts[0];
   
//     if (messageBody) {
//       const responseMessage = ["kida ", "cardoo", "fakeo", "tricko"];
     
     
//       const responseStanza = (
//         <message type="chat" to={fromJID}>
//           <body>{responseMessage}</body>
          
//         </message>
//       );

      
//       sender.send(responseStanza);
//     }
//     if (firstWord === "red") {
//       const game = {
//         maximumPlayers: "4",
//         GameType: "board",
//         minimumplayer: "2",
//         jid: fromJID,
//       };
//       const responseTwo = (
//         <message type="chat" to={fromJID}>
//           <body>{game}</body>
//         </message>
//       );

//       sender.send(responseTwo);
//     }
//   }
// });

// sender.on("error", (err) => {
//   console.error(err);
// });

// const games = ["hool", "fakeo", "roop", "tricko", "hool"];

// sender.iqCallee.get(
//   "http://jabber.org/protocol/disco#info",
//   "query",
//   // async (ctx) => {
//   //   console.log("q clled", ctx);
//   // },

//   async(ctx)=>{
//     if(ctx.stanza.attrs.to === sender.domain)
//     return(
//   <div>
//   {games}
//   console.log(games);

//   </div>
//   )

//   }
// )

// sender.iqCallee.set("http://jabber.org/protocol/mug#owner",
//         "query",
//         (ctx) => {
//           console.log(ctx)
//         })

// sender.on("stanza", async (stanza) => {
//   console.log('joswa',stanza);
//   if (stanza.is("iq")) {
//     let from = stanza.attrs.from;
//     let to = stanza.attrs.to;
//     console.log('HII JOSWA');
//     await sender.send(

//       <message type="chat"from={to} to={from}>
//         <body>kida</body>
//       </message>
//     );
//   }
// });

// sender.on("online", async (address) => {
//   // console.log("online as ", address.toString());

//   await sender.send((
//     <message type="chat" to={address}>
//       <body>hello hool</body>
//     </message>
//   ));

// });

debug(sender, true);
