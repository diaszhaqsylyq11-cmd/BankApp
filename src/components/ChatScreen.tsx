import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

interface Props {
  title?: string;
  onBack?: () => void;
}

interface ChatMessage {
  id: string;
  text: string;
  sender: "bank" | "user";
  date?: string;
  highlight?: string;
  highlight2?: string;
}

export default function ChatScreen({ title = "Bank of America", onBack }: Props) {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      date: "8/10/2018",
      text: "Did you attempt transaction on debit card ending in 0000 at Mechan1 in NJ for $1,200?\nReply YES or NO",
      sender: "bank",
    },
    {
      id: "2",
      text: "Yes",
      sender: "user",
    },
    {
      id: "3",
      date: "8/10/2018",
      text: "Bank of America : 256486 is your authorization code which expires in 10 minutes. If you didn't request the code.\nCall : 18009898 for assistance",
      sender: "bank",
    },
    {
      id: "4",
      text: "Thanks!",
      sender: "user",
    },
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: inputText.trim(),
        sender: "user",
      },
    ]);
    setInputText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.chatContainer}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg) => (
            <View key={msg.id}>
              {msg.date && <Text style={styles.dateLabel}>{msg.date}</Text>}
              <View
                style={[
                  styles.bubble,
                  msg.sender === "user" ? styles.userBubble : styles.bankBubble,
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    msg.sender === "user" ? styles.userText : styles.bankText,
                  ]}
                >
                  {msg.text}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            placeholder="Type something...."
            placeholderTextColor="#B0B7C3"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity
            style={[
              styles.sendButton,
              inputText.trim() ? styles.sendButtonActive : null,
            ]}
            onPress={handleSend}
          >
            <Text style={styles.sendIcon}>➔</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F4F7",
  },
  backButton: {
    paddingRight: 12,
    paddingVertical: 4,
  },
  backText: {
    color: "#1A1D1E",
    fontSize: 32,
    fontWeight: "300",
  },
  headerTitle: {
    color: "#1A1D1E",
    fontSize: 19,
    fontWeight: "bold",
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  chatContent: {
    paddingVertical: 16,
  },
  dateLabel: {
    textAlign: "center",
    color: "#9AA2B1",
    fontSize: 12,
    marginVertical: 12,
  },
  bubble: {
    maxWidth: "80%",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    marginBottom: 12,
  },
  bankBubble: {
    backgroundColor: "#F2F3F8",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: "#3626B8",
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  bankText: {
    color: "#2D3748",
  },
  userText: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#F2F4F7",
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 22,
    paddingHorizontal: 16,
    fontSize: 14,
    color: "#1A1D1E",
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F2F3F8",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  sendButtonActive: {
    backgroundColor: "#3626B8",
  },
  sendIcon: {
    color: "#A0AEC0",
    fontSize: 16,
    fontWeight: "bold",
  },
});