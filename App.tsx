import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Pusher } from "@pusher/pusher-websocket-react-native";

const pusher = Pusher.getInstance();

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function initializePusherAsync() {
      await pusher.init({
        apiKey: "your-api-key",
        cluster: "your-cluster-of-choice",
      });

      await pusher.connect();
      await pusher.subscribe({
        channelName: "my-channel",
        onEvent: (event) => {
          console.log(JSON.stringify(event));
          setMessage(`${event.eventName}: ${JSON.stringify(event.data)}`);
        },
      });
    }

    initializePusherAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message ? message : "Waiting for message"}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});