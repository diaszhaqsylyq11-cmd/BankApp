import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Confirm(props: any) {
  const [otp, setOtp] = useState("");
  const info = props.data || {}; // Берем данные с прошлой страницы

  return (
    <View style={styles.screen}>
      {/* Верхняя шапка */}
      <View style={styles.header}>
        <TouchableOpacity onPress={props.onBack}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirm</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.label}>From</Text>
        <View style={styles.infoBox}>
          <Text>**** **** 6789</Text>
        </View>

        <Text style={styles.label}>To</Text>
        <View style={styles.infoBox}>
          <Text>{info.name || "Amanda"}</Text>
        </View>

        <Text style={styles.label}>Card number</Text>
        <View style={styles.infoBox}>
          <Text>{info.cardNumber || "0123456789"}</Text>
        </View>

        <Text style={styles.label}>Transaction fee</Text>
        <View style={styles.infoBox}>
          <Text>10$</Text>
        </View>

        <Text style={styles.label}>Content</Text>
        <View style={styles.infoBox}>
          <Text>{info.content || "From Jimy"}</Text>
        </View>

        <Text style={styles.label}>Amount</Text>
        <View style={styles.infoBox}>
          <Text>${info.amount || "1000"}</Text>
        </View>

        {/* Поле для СМС-кода (OTP) */}
        <Text style={styles.label}>Get OTP to verify transaction</Text>
        <View style={styles.otpRow}>
          <TextInput
            style={[styles.input, { flex: 1, marginBottom: 0 }]}
            placeholder="OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />
          <TouchableOpacity
            style={styles.otpButton}
            onPress={() => alert("Ваш код: 6789")}
          >
            <Text style={styles.otpButtonText}>Get OTP</Text>
          </TouchableOpacity>
        </View>

        {/* Финальная кнопка */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert("Перевод успешно выполнен!");
            props.onSuccess();
          }}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  backArrow: {
    fontSize: 32,
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 12,
    color: "#888888",
    marginBottom: 5,
    marginTop: 8,
  },
  infoBox: {
    height: 45,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  otpRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E0E0E5",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  otpButton: {
    width: 100,
    height: 48,
    backgroundColor: "#3626B8",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  otpButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  button: {
    height: 50,
    backgroundColor: "#3626B8",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});