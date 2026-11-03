
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Signup from "./src/components/signup";

export default function App() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (page === "signup") {
    return <Signup onBack={() => setPage("login")} />;
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.back}>‹</Text>
          <Text style={styles.headerText}>Вход</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>С возвращением!</Text>
        <Text style={styles.subtitle}>
          Войдите в аккаунт, чтобы продолжить
        </Text>

        <View style={styles.illustration}>
          <Text style={styles.lock}>🔒</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Электронная почта или телефон"
            placeholderTextColor="#AAAAAA"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor="#AAAAAA"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Забыли пароль?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Войти</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signup}>
          <Text style={styles.signupText}>Нет аккаунта?</Text>
          <TouchableOpacity onPress={() => setPage("signup")}>
            <Text style={styles.link}> Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 170,
    backgroundColor: "#3626B8",
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  time: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  back: {
    color: "#FFFFFF",
    fontSize: 30,
    marginRight: 12,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    marginTop: -1,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  title: {
    fontSize: 23,
    fontWeight: "900",
    color: "#3926C3",
  },
  subtitle: {
    fontSize: 12,
    color: "#777777",
    marginTop: 5,
  },
  illustration: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#E9E6FF",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 28,
  },
  lock: {
    fontSize: 38,
  },
  form: {
    gap: 10,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#E0E0E5",
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 13,
    color: "#333333",
  },
  forgot: {
    alignSelf: "flex-end",
  },
  forgotText: {
    fontSize: 11,
    color: "#AAAAAA",
  },
  button: {
    height: 46,
    backgroundColor: "#3926C3",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  signup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 28,
  },
  signupText: {
    fontSize: 11,
    color: "#555555",
  },
  link: {
    fontSize: 11,
    color: "#3926C3",
    fontWeight: "bold",
  },
  bottomLine: {
    width: 105,
    height: 4,
    backgroundColor: "#222222",
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 8,
  },
});

