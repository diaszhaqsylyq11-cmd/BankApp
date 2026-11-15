import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

interface AppInfoProps {
  onBack: () => void;
}

export default function AppInfoScreen({ onBack }: AppInfoProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.headerTitle}>App Info</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.logoSection}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>iB</Text>
          </View>
          <Text style={styles.appName}>iBank Mobile</Text>
          <Text style={styles.appVersion}>Version: 1.0.4 (Build 28)</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>About Application</Text>
          <Text style={styles.infoText}>
            iBank is a secure mobile banking application designed to help you manage your finances, exchange currencies, pay bills, and make instant money transfers easily.
          </Text>
        </View>

        <Text style={styles.footerText}>© 2026 iBank Corp. All rights reserved.</Text>
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
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    alignItems: "center",
  },
  logoSection: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  logoBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#3626B8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E1E2D",
  },
  appVersion: {
    fontSize: 13,
    color: "#8E8E93",
    marginTop: 4,
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#FAFAFC",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E0E0E5",
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1E1E2D",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#555555",
    lineHeight: 20,
  },
  footerText: {
    position: "absolute",
    bottom: 30,
    fontSize: 12,
    color: "#8E8E93",
  },
});