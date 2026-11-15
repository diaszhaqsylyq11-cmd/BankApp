import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Switch,
} from "react-native";

interface SettingScreenProps {
  onBack: () => void;
  onNavigatePassword: () => void;
  onNavigateLanguage: () => void;
  onNavigateAppInfo: () => void;
  onLogout: () => void;
}

export default function SettingScreen({
  onBack,
  onNavigatePassword,
  onNavigateLanguage,
  onNavigateAppInfo,
  onLogout,
}: SettingScreenProps) {
  const [touchId, setTouchId] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Жоғарғы бөлік */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.headerTitle}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Ақ негізгі контент */}
      <View style={styles.contentWrapper}>
        {/* Профиль аватары мен аты */}
        <View style={styles.profileSection}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>PP</Text>
            <View style={styles.editBadge}>
              <Text style={styles.editIcon}>✎</Text>
            </View>
          </View>
          <Text style={styles.userName}>Push Puttichai</Text>
          <Text style={styles.userPhone}>+1 234 567 890</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.menuList}
        >
          {/* Мәзір элементтері (Ағылшынша) */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={onNavigatePassword}
          >
            <View style={styles.menuLeft}>
              <View style={[styles.iconBox, { backgroundColor: "#EBE8FF" }]}>
                <Text style={styles.menuIcon}>🔒</Text>
              </View>
              <Text style={styles.menuText}>Change Password</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <View style={[styles.iconBox, { backgroundColor: "#E5F6FF" }]}>
                <Text style={styles.menuIcon}>👆</Text>
              </View>
              <Text style={styles.menuText}>Touch ID / Face ID</Text>
            </View>
            <Switch
              value={touchId}
              onValueChange={setTouchId}
              trackColor={{ false: "#E0E0E5", true: "#3626B8" }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <View style={[styles.iconBox, { backgroundColor: "#FFF2E5" }]}>
                <Text style={styles.menuIcon}>🔔</Text>
              </View>
              <Text style={styles.menuText}>Notifications</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: "#E0E0E5", true: "#3626B8" }}
              thumbColor="#FFFFFF"
            />
          </View>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={onNavigateLanguage}
          >
            <View style={styles.menuLeft}>
              <View style={[styles.iconBox, { backgroundColor: "#E8F8F0" }]}>
                <Text style={styles.menuIcon}>🌐</Text>
              </View>
              <Text style={styles.menuText}>Language</Text>
            </View>
            <View style={styles.menuRight}>
              <Text style={styles.valueText}>English</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={onNavigateAppInfo}
          >
            <View style={styles.menuLeft}>
              <View style={[styles.iconBox, { backgroundColor: "#F2F2F7" }]}>
                <Text style={styles.menuIcon}>ℹ️</Text>
              </View>
              <Text style={styles.menuText}>App Info</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <View style={[styles.iconBox, { backgroundColor: "#F2F2F7" }]}>
                <Text style={styles.menuIcon}>📞</Text>
              </View>
              <Text style={styles.menuText}>Support</Text>
            </View>
            <Text style={styles.valueText}>+1 800 555-0199</Text>
          </View>

          {/* Шығу батырмасы */}
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>
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
  contentWrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 22,
  },
  profileSection: {
    alignItems: "center",
    marginTop: -45,
    marginBottom: 20,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#E9E6FF",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3626B8",
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#3626B8",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  editIcon: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E1E2D",
    marginTop: 10,
  },
  userPhone: {
    fontSize: 13,
    color: "#8E8E93",
    marginTop: 2,
  },
  menuList: {
    paddingBottom: 30,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F7",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  menuIcon: {
    fontSize: 16,
  },
  menuText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1E1E2D",
  },
  menuRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  valueText: {
    fontSize: 13,
    color: "#8E8E93",
    marginRight: 6,
  },
  chevron: {
    fontSize: 22,
    color: "#C7C7CC",
  },
  logoutButton: {
    marginTop: 24,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#FFF0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    color: "#FF3B30",
    fontSize: 15,
    fontWeight: "bold",
  },
});