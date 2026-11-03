
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

      {/* Шапка */}
      <View style={styles.header}>

        <View style={styles.headerTitle}>
          <Text style={styles.back}>‹</Text>
        </View>
      </View>

      {/* Основная часть */}
      <View style={styles.content}>
        <Text style={styles.title}>С возвращением!</Text>
        <Text style={styles.subtitle}>
          Войдите в свой аккаунт, чтобы продолжить
        </Text>

        <View style={styles.illustration}>
          <Text style={styles.lock}>🔒</Text>
          <View style={styles.greenDot} />
          <View style={styles.redDot} />
          <View style={styles.yellowDot} />
          <View style={styles.blueDot} />
        </View>

        {/* Поля ввода */}
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
            <Text style={styles.forgotText}>
              Забыли пароль?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Войти</Text>
          </TouchableOpacity>
        </View>

        {/* Регистрация */}
        <View style={styles.signup}>
          <Text style={styles.signupText}>
            Нет аккаунта?
          </Text>

          <TouchableOpacity>
            <Text style={styles.signupLink}> Зарегистрироваться</Text>
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
    height: 100,
    backgroundColor: "#3626B8",
    paddingHorizontal: 18,
    paddingTop: 12,
  },

  time: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
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

  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: -1,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 16,
    paddingTop: 15,
  },

  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#3926C3",
  },

  subtitle: {
    fontSize: 13,
    color: "#777777",
    marginTop: 5,
    fontWeight:"bold"
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

  greenDot: {
    position: "absolute",
    left: -10,
    top: 25,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#42D9C0",
  },

  redDot: {
    position: "absolute",
    right: -10,
    top: 10,
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: "#FF456B",
  },

  yellowDot: {
    position: "absolute",
    left: 5,
    bottom: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFB52E",
  },

  blueDot: {
    position: "absolute",
    right: -10,
    bottom: 10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#20A7FF",
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
    fontWeight: "bold"

  },

  forgot: {
    alignSelf: "flex-end",
  },

  forgotText: {
    fontSize: 13,
    color: "#3626B8",
  },

  signInButton: {
    height: 46,
    backgroundColor: "#3926C3",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  signInText: {
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
    fontSize: 13,
    color: "#555555",
  },

  signupLink: {
    fontSize: 13,
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

