import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";

interface ChangePasswordProps {
  onBack: () => void;
}

export default function ChangePasswordScreen({ onBack }: ChangePasswordProps) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields!");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "New passwords do not match!");
      return;
    }
    Alert.alert("Success", "Password changed successfully!", [
      { text: "OK", onPress: onBack },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.headerTitle}>Change Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Current Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter current password"
          placeholderTextColor="#A0A0A5"
          secureTextEntry
          value={oldPassword}
          onChangeText={setOldPassword}
        />

        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          placeholderTextColor="#A0A0A5"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Text style={styles.label}>Confirm New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Re-enter new password"
          placeholderTextColor="#A0A0A5"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3626B8",
  },
  header: {
    height: 110,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backArrow: {
    color: "#FFFFFF",
    fontSize: 32,
    marginRight: 10,
    bottom: 2,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E1E2D",
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E0E0E5",
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    color: "#1E1E2D",
    backgroundColor: "#FAFAFC",
  },
  button: {
    height: 50,
    backgroundColor: "#3626B8",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});