import { StyleSheet, View, Image } from "react-native";
import { Text, TextInput, Button, Appbar, Drawer } from "react-native-paper";
import Logo from "../../../assets/icon.png";
import { useState } from "react";

export default function Home({ navigation }) {
  const [active, setActive] = useState("");
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="bell" onPress={() => {}} />
        <Appbar.Content />
        <Image
          source={Logo}
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
            marginRight: 10,
          }}
        />
      </Appbar.Header>
      <View style={styles.container}>
        <Text
          variant="headlineSmall"
          style={{ color: "#909090", fontWeight: 700 }}
        >
          Bem Vindo,
        </Text>
        <Text variant="headlineMedium" style={{ fontWeight: 700 }}>
          ThiagoAciole
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
