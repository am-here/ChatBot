// import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow";
import { dialogflowConfig } from "./env";
const BOT_avatar = require("./assets/images/master.png");

const BOT = {
  _id: 2,
  name: "Master",
  avatar: BOT_avatar,
};

class App extends Component {
  state = {
    messages: [
      {
        _id: 2,
        text: "Haha!! Just Joking! How can I help you?",
        createdAt: new Date(),
        user: BOT,
      },
      {
        _id: 1,
        text: "Parampara, Pratishtha, Anushasan",
        createdAt: new Date(),
        user: BOT,
      },
    ],
    id: 1,
    name: "",
  };

  // componentDidMount() {
  //   Dialogflow_V2.setConfiguration(
  //     dialogflowConfig.client_email,
  //     dialogflowConfig.private_key,
  //     Dialogflow_V2.LANG_ENGLISH_US,
  //     dialogflowConfig.project_id,
  //     dialogflowConfig.private_key_id,
  //     dialogflowConfig.client_id
  //   );
  // }
  constructor(props) {
    super(props);

    Dialogflow_V2.setConfiguration(
      "appointmentbot@appointmentbot-rfvg.iam.gserviceaccount.com",
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDOGdrpvbiNf8Pt\nGfEgSPp1C8Cr1tongBlYGpD/PwVs/tUyj0679CLs13H09iN3N1HgVCl0+kqXltbr\nKnkgZRGd4M491q8OByIqPsqcRXZrY5S5iPPtO6dy4FKQaP1uU4TYMdNV8MVMz4Fg\n6ZI+jOMA6oZ/SAoJJVtczV8+E2VFnojcvsyNRtBykymB68CUjTc0E4Ow1Bb66009\nBoApznlBm0b6ojYSCUxQqbOER+UCwgj+bnaleyTrlrAvVu+K8WhEU8OIi6QtyygP\nZ5QMzUEkniQ4jqPxjnDy89s8hyDmTu0AwOnz2SwVUCyq5WpTUjrxnurs9qXh+kOT\nxiJ2YTsDAgMBAAECggEAXERX7DeKtRIjSPTJrY3uTlMGHQfxHyjqb7Zo/lQc3jhR\ngrKEaYF41zX2ZteAdiEWbwrOind4yFd3fM1Fb7q/gcIAItAHC40m/umgdAhm5Nmu\nXcdRiH2hz7xcShkuh+MtAEqCFaHV+jaVcajvV0BkaecUckvybjjCp4+rmVM+jcUG\nTDFTMffJjSJNFJq2Az0tNs8wvqnZ/Kr0arKgDRsXrliCHAPs84bMaIK38CMcv/fV\nn5dnGPINpni4KZy6/4iBhzKdZ4buR7+BUFD4BgyEE7p4HLJouzHuXEqXUNlhWSAQ\nnUWegdiNJcQtbCoXJ7Zi8tBo9vuvMtkhhLagPYpi1QKBgQD9oDJgQa7CXIxVvcyb\nBVdgOR/X/avYuzfS9AJxC/vFM40LJMejPvlYNcTUFttBqEPht0nNwEZOof+s5Vv9\nqtExNIAtvF8uBbHzX1XuWTC5kCGESnFzfiSrBKRojO6M7VcbAbjPLsIToGznf0Ea\nx9cSShdMtOWN8q//ooQkCCPPBQKBgQDQB8RsgshS8Gz5WypJv6TA6wq1sjNvw/mR\ngbNG2kK/oTZ8DM5qOJbfBqv2J3NFOiR6GJahOP7Wvs3gkmpYjL7aC//IcFKKgdUu\nh3eNlZdatRNvxMSyTUk0edSdXNDpfq+ni0TsPMfpiGQCDkfXENKn9g9YG0+PypsA\nx5sLzQgwZwKBgAs1GQTH4kEUdd8UFAaFpebKn22b+AwLudvIjJMSRH3iWUk0xt2f\n2sTbG2eD2wx7swQ2ZTyCUpkG75VkTTxYYAYcm81plYsjFUn73IA70Lticxi1cW35\nFQW5nso/8AqqMj8vREtjdZAIdseECAx26DoWrBDnrX0oTD6vn8c31N1BAoGAUmWh\nMXGjsuYz45huaYOU2CzAszMAGJbA9RcwUTIGGizajcvsvjnn2DKmTftWNudOp2Wx\n0+3lUl2E4hxcLvKgbXEvQM7sgpvmOmXBvryvlGgAaNbBKfZetoBC7Ilk3fclz/Dj\nvcZdUGyLYB0T62VoasqVTUqT+to/BtII4WW2hqUCgYEAkUW3JII7CCp/KqhF8CuT\nlgpaMwT8iKcj9lKjutL2lBqOcSmIBdXAYgQjlRyn8gLk20aUwhIXqlShRkrHlHfe\nGZTCv+lMBlBufEe7Ea9mjs90dA80YW9yy6simlIzFPLPK8nYItBe/iMrmcS7juTT\nfs4+4DibV2SdFz+AtywTRtk=\n-----END PRIVATE KEY-----\n",
      Dialogflow_V2.LANG_ENGLISH_US,
      "appointmentbot-rfvg"
    );
    // const permanentContexts = [
    //   {
    //     name: "Auth",
    //     parameters: {
    //       lifespanCount: 100,
    //       AccessToken: dialogflowConfig.client_id,
    //     },
    //   },
    // ];
    // Dialogflow_V2.setPermanentContexts(permanentContexts);
  }

  // Object {
  //   "error": Object {
  //     "code": 401,
  //     "message": "Request had invalid authentication credentials. Expected OAuth 2 access token, login cookie or other valid authentication credential. See https://developers.google.com/identity/sign-in/web/devconsole-project.",
  //     "status": "UNAUTHENTICATED",
  //   },
  // }

  handleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
    // this.sendBotResponse(result);
  }

  sendBotResponse(text) {
    let message = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT,
    };
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, [message]),
    }));
  }

  async onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    let message = messages[0].text;
    await Dialogflow_V2.requestQuery(
      message,
      // (result) => this.handleResponse(result),
      (result) => console.log(result),
      (error) => console.log(error)
    );
  }

  onQuickReply(quickreply) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, quickreply),
    }));
    let message = quickreply[0].value;
    Dialogflow_V2.requestQuery(
      message,
      // (result) => this.handleGoogleResponse(result),
      (result) => console.log(result),
      (error) => console.log(error)
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => this.onSend(message)}
          onQuickReply={(quickreply) => this.onQuickReply(quickreply)}
          user={{ _id: 1 }}
        />
      </View>
    );
  }
}
export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Code Artisans</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
