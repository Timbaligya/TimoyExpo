import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Register" color="Grey" style={{ marginRight: 110, marginLeft: 110, color: "black" }} onPress={() => alert("Bee Movie")}/>
      <Button title="Login" color="Grey" style={{ marginRight: 110, marginLeft: 110, color: "black" }} onPress={() => alert("According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
