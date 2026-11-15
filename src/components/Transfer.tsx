import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Transfer(props: any) {
  // Храним то, что вводит пользователь
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={styles.screen}>
      {/* Верхняя шапка */}
      <View style={styles.header}>
        <TouchableOpacity onPress={props.onBack}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transfer</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Выбор получателя (быстрые кнопки) */}
        <Text style={styles.label}>Choose beneficiary</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.userCard}
            onPress={() => {
              setName("Emma");
              setCardNumber("4756000011112222");
            }}
          >
            <Text style={styles.emoji}>👩</Text>
            <Text style={styles.userName}>Emma</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.userCard}
            onPress={() => {
              setName("Justin");
              setCardNumber("4756999988887777");
            }}
          >
            <Text style={styles.emoji}>👨</Text>
            <Text style={styles.userName}>Justin</Text>
          </TouchableOpacity>
        </View>

        {/* Поля для ввода */}
        <Text style={styles.label}>Recipient details</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Card number"
          keyboardType="number-pad"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <TextInput
          style={styles.input}
          placeholder="Content"
          value={content}
          onChangeText={setContent}
        />

        {/* Кнопка перехода дальше */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.onNext({ name, cardNumber, amount, content })}
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
    fontSize: 14,
    color: "#888888",
    marginBottom: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 15,
  },
  userCard: {
    width: 85,
    height: 90,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 28,
    marginBottom: 5,
  },
  userName: {
    fontSize: 13,
    fontWeight: "500",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E0E0E5",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 12,
    fontSize: 14,
  },
  button: {
    height: 50,
    backgroundColor: "#3626B8",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});