
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

export default function Signup({
  onBack,
}: {
  onBack: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const register = () => {
    if (!name || !email || !phone || !password) {
      alert("Заполните все поля");
      return;
    }

    if (!accepted) {
      alert("Примите условия использования");
      return;
    }

    alert("Форма заполнена успешно!");
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.time}>9:09</Text>

        <TouchableOpacity
          style={styles.headerTitle}
          onPress={onBack}
        >
          <Text style={styles.back}>‹</Text>
          <Text style={styles.headerText}>Регистрация</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentInner}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Добро пожаловать!</Text>

        <Text style={styles.subtitle}>
          Создайте новый аккаунт
        </Text>

        <View style={styles.illustration}>
          <Text style={styles.person}>👤</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Ваше имя"
            placeholderTextColor="#AAAAAA"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Электронная почта"
            placeholderTextColor="#AAAAAA"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Номер телефона"
            placeholderTextColor="#AAAAAA"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor="#AAAAAA"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.terms}
            onPress={() => setAccepted(!accepted)}
          >
            <View style={styles.checkbox}>
              {accepted && (
                <Text style={styles.check}>✓</Text>
              )}
            </View>

            <Text style={styles.termsText}>
              Я согласен с условиями использования
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={register}
          >
            <Text style={styles.buttonText}>
              Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.login}>
          <Text style={styles.loginText}>
            Уже есть аккаунт?
          </Text>

          <TouchableOpacity onPress={onBack}>
            <Text style={styles.loginLink}> Войти</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
  },
  contentInner: {
    padding: 16,
    paddingBottom: 45,
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
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: "#E9E6FF",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  person: {
    fontSize: 36,
  },
  form: {
    gap: 12,
  },
  input: {
    height: 46,
    borderWidth: 1,
    borderColor: "#E0E0E5",
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 13,
    color: "#333333",
  },
  terms: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginVertical: 5,
  },
  checkbox: {
    width: 19,
    height: 19,
    borderWidth: 1,
    borderColor: "#3926C3",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  check: {
    color: "#3926C3",
    fontWeight: "bold",
  },
  termsText: {
    fontSize: 11,
    color: "#555555",
    flex: 1,
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
    fontSize: 14,
    fontWeight: "bold",
  },
  login: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  loginText: {
    fontSize: 11,
    color: "#555555",
  },
  loginLink: {
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
