import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Signup from "./src/components/signup";
import ForgotPassword from "./src/components/ForgotPassword";
import Dashboard from "./src/components/Dashboard";
import SearchScreen from "./src/components/SearchScreen";
import BranchScreen from "./src/components/BranchScreen";

export default function App() {
  const [page, setPage] = useState<string>("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  if (page === "branch") {
    return <BranchScreen onBack={() => setPage("search")} />;
  }

  if (page === "search") {
    return (
      <SearchScreen
        onBack={() => setPage("login")}
        onSelectBranch={() => setPage("branch")}
        onHome={() => setPage("login")}
      />
    );
  }

  if (page === "dashboard") {
    return <Dashboard />;
  }

  if (page === "signup") {
    return <Signup onBack={() => setPage("login")} />;
  }

  if (page === "forgot") {
    return <ForgotPassword onBackToLogin={() => setPage("login")} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.back}>‹</Text>
          <Text style={styles.headerText}>Вход</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>С возвращением!</Text>
        <Text style={styles.subtitle}>Войдите в аккаунт, чтобы продолжить</Text>

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
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor="#AAAAAA"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.forgot} onPress={() => setPage("forgot")}>
            <Text style={styles.forgotText}>Забыли пароль?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => setPage("search")}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3626B8",
  },
  header: {
    height: 120,
    backgroundColor: "#3626B8",
    paddingHorizontal: 18,
    justifyContent: "center",
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    color: "#FFFFFF",
    fontSize: 34,
    marginRight: 12,
    bottom: 2,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: "#FFFFFF",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#3926C3",
  },
  subtitle: {
    fontSize: 13,
    color: "#777777",
    marginTop: 6,
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
    fontSize: 40,
  },
  form: {
    gap: 14,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E0E0E5",
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    color: "#333333",
  },
  forgot: {
    alignSelf: "flex-end",
    paddingVertical: 4,
  },
  forgotText: {
    fontSize: 12,
    color: "#AAAAAA",
  },
  button: {
    height: 48,
    backgroundColor: "#3926C3",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
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
  link: {
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
    position: "absolute",
    bottom: 0,
  },
});