import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.screen}>
      
      {/* 1. СИНЯЯ ШАПКА ПОЛЬЗОВАТЕЛЯ */}
      <View style={styles.topHeader}>
        <Text style={styles.userName}>Hi, Push Puttichai 🔔</Text>
      </View>

      {/* 2. СИНЯЯ БАНКОВСКАЯ КАРТА */}
      <View style={styles.bankCard}>
        <Text style={styles.cardTextBold}>John Smith</Text>
        <Text style={styles.cardTextSmall}>Amazon Platinium</Text>
        <Text style={styles.cardTextMedium}>4756  ••••  ••••  9018</Text>
        <Text style={styles.cardTextBold}>$3.469.52</Text>
      </View>

      {/* 3. ПРОСТОЙ СПИСОК КНОПОК МЕНЮ (3 штуки для примера) */}
      <View style={styles.menuBox}>
        
        <TouchableOpacity style={styles.menuRow}>
          <Text style={styles.menuIcon}>💳</Text>
          <Text style={styles.menuText}>Account and Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow}>
          <Text style={styles.menuIcon}>🔀</Text>
          <Text style={styles.menuText}>Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow}>
          <Text style={styles.menuIcon}>🏛️</Text>
          <Text style={styles.menuText}>Withdraw</Text>
        </TouchableOpacity>

      </View>

      {/* 4. НИЖНЕЕ МЕНЮ (ПАНЕЛЬ НАВИГАЦИИ) */}
      <View style={styles.bottomBar}>
        <Text style={styles.activeTab}>🏠 Home</Text>
        <Text style={styles.grayTab}>🔍 Search</Text>
        <Text style={styles.grayTab}>⚙️ Settings</Text>
      </View>

    </View>
  );
}

// САМЫЕ ПРОСТЫЕ СТИЛИ (ПОДПИСАН КАЖДЫЙ БЛОК)
const styles = StyleSheet.create({
  // Главный контейнер всего экрана
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  // Синяя верхняя панель
  topHeader: {
    backgroundColor: "#3626B8",
    padding: 20,
    paddingTop: 50,
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  // Блок банковской карты
  bankCard: {
    backgroundColor: "#1A73E8",
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
  cardTextBold: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardTextMedium: {
    color: "#FFFFFF",
    fontSize: 16,
    marginVertical: 10,
  },
  cardTextSmall: {
    color: "#E8F0FE",
    fontSize: 12,
  },
  // Контейнер для кнопок меню
  menuBox: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  // Одна строка меню (кнопка)
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
  },
  // Нижняя плашка меню
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
  },
  activeTab: {
    color: "#3626B8",
    fontWeight: "bold",
  },
  grayTab: {
    color: "#888888",
  },
});