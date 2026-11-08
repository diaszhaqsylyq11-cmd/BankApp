import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

// Описываем пропсы для связи с главным экраном App.tsx
interface ForgotPasswordProps {
  onBackToLogin: () => void;
}

export default function ForgotPassword({ onBackToLogin }: ForgotPasswordProps) {
  // Хранилища для данных всей страницы
  const [phone, setPhone] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Функция сохранения всей формы
  const handleSave = () => {
    if (!phone || !code || !newPassword || !confirmPassword) {
      alert("Пожалуйста, заполните все поля на странице!");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    alert("Пароль успешно изменен!");
    onBackToLogin(); // Возвращаем пользователя на экран входа
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Верхняя шапка */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackToLogin}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Forgot & Change Password</Text>
      </View>

      {/* Скролл, чтобы все поля были доступны при открытой клавиатуре */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* ШАГ 1: Телефон */}
        <View style={styles.card}>
          <Text style={styles.label}>1. Type your phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="(+84) 0398829xxx"
            placeholderTextColor="#CCCCCC"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <Text style={styles.infoText}>
            We texted you a code to verify your phone number
          </Text>
        </View>

        {/* ШАГ 2: Проверочный код */}
        <View style={styles.card}>
          <Text style={styles.label}>2. Type a code</Text>
          <View style={styles.codeRow}>
            <TextInput
              style={[styles.input, { flex: 1, marginBottom: 0 }]}
              placeholder="Code"
              placeholderTextColor="#CCCCCC"
              keyboardType="number-pad"
              maxLength={6}
              value={code}
              onChangeText={(text) => setCode(text)}
            />
            <TouchableOpacity style={styles.resendButton}>
              <Text style={styles.resendText}>Resend</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.expiryText}>
            This code will expired 10 minutes after this message.
          </Text>
        </View>

        {/* ШАГ 3: Ввод новых паролей */}
        <View style={styles.card}>
          <Text style={styles.label}>3. Type your new password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="••••••••••••"
            placeholderTextColor="#CCCCCC"
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />

          <Text style={styles.label}>Confirm password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="••••••••••••"
            placeholderTextColor="#CCCCCC"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>

        {/* Финальная общая кнопка для всей страницы */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA", // Легкий серый фон для карточек-шагов
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  backArrow: {
    fontSize: 32,
    marginRight: 12,
    color: "#000000",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  scrollContent: {
    padding: 16,
    gap: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EAEAEA",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E0E0E5",
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    color: "#333333",
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  codeRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 10,
  },
  resendButton: {
    width: 100,
    height: 48,
    backgroundColor: "#2C14DD",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  resendText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  infoText: {
    fontSize: 12,
    color: "#777777",
    marginTop: 6,
  },
  expiryText: {
    fontSize: 12,
    color: "#FFA500",
    marginTop: 6,
  },
  saveButton: {
    height: 52,
    backgroundColor: "#3926C3",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});