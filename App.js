// // import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import axios from "axios";

const BOT_avatar = require("./assets/images/master.png");

const BOT = {
  _id: 2,
  name: "Master",
  avatar: BOT_avatar,
};

let textyy = "BOTY";

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
    texty: "BOT",
  };

  handleResponse(result) {
    (async () => {
      const FormData = global.FormData;
      const formData = new FormData();
      formData.append("msg", result);
      axios({
        url: "https://sih-dialog-flow.herokuapp.com/",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: "Basic YnJva2VyOmJyb2tlcl8xMjM=",
        },
      })
        .then(function (response) {
          console.log(response.data);
          textyy = response.data;
        })
        .catch(function (error) {
          console.log("error:", error);
        });
    })();

    this.sendBotResponse(textyy);
  }

  sendBotResponse(text) {
    console.log(text);
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

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    let message = messages[0].text;
    console.log(message);
    this.handleResponse(message);
  }

  onQuickReply(quickreply) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, quickreply),
    }));
    let message = quickreply[0].value;
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
