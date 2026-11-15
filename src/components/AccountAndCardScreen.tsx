import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

interface Props {
  onBack: () => void;
  onSwitchToCard: () => void;
}

export default function AccountAndCard1Screen({ onBack, onSwitchToCard }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.headerTitle}>Account and card[cite: 1]</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Ауыстырғыш */}
        <View style={styles.tabSwitchContainer}>
          <View style={[styles.switchTab, styles.activeSwitchTab]}>
            <Text style={[styles.switchText, styles.activeSwitchText]}>Account</Text>
          </View>
          <TouchableOpacity style={styles.switchTab} onPress={onSwitchToCard}>
            <Text style={styles.switchText}>Card</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Профиль */}
          <View style={styles.profileSection}>
            <View style={styles.avatarBox}>
              <Text style={styles.avatarText}>PP</Text>
            </View>
            <Text style={styles.profileName}>Push Puttichai[cite: 1]</Text>
          </View>

          {[
            { id: "1", name: "Account 1", balance: "$20,000", branch: "New York" },
            { id: "2", name: "Account 2", balance: "$12,000", branch: "New York" },
            { id: "3", name: "Account 3", balance: "$230,000", branch: "New York" },
          ].map(acc => (
            <View key={acc.id} style={styles.accountItem}>
              <View style={styles.accRowTop}>
                <Text style={styles.accTitle}>{acc.name}</Text>
                <Text style={styles.accNumber}>1900 8988 1234</Text>
              </View>
              <View style={styles.accRowBottom}>
                <View>
                  <Text style={styles.subLabel}>Available balance</Text>
                  <Text style={styles.accBalance}>{acc.balance}</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.subLabel}>Branch</Text>
                  <Text style={styles.branchName}>{acc.branch}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#3626B8" },
  header: { height: 110, paddingHorizontal: 20, justifyContent: "center" },
  backButton: { flexDirection: "row", alignItems: "center" },
  backArrow: { color: "#FFFFFF", fontSize: 32, marginRight: 10, bottom: 2 },
  headerTitle: { color: "#FFFFFF", fontSize: 20, fontWeight: "bold" },
  content: { flex: 1, backgroundColor: "#FFFFFF", borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
  tabSwitchContainer: { flexDirection: "row", backgroundColor: "#F2F2F7", borderRadius: 14, padding: 4, marginBottom: 20 },
  switchTab: { flex: 1, paddingVertical: 10, alignItems: "center", borderRadius: 10 },
  activeSwitchTab: { backgroundColor: "#3626B8" },
  switchText: { fontSize: 14, fontWeight: "600", color: "#8E8E93" },
  activeSwitchText: { color: "#FFFFFF" },
  profileSection: { alignItems: "center", marginBottom: 20 },
  avatarBox: { width: 60, height: 60, borderRadius: 30, backgroundColor: "#E9E6FF", justifyContent: "center", alignItems: "center", marginBottom: 6 },
  avatarText: { fontSize: 20, fontWeight: "bold", color: "#3626B8" },
  profileName: { fontSize: 16, fontWeight: "bold", color: "#1E1E2D" },
  accountItem: { backgroundColor: "#FAFAFC", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#E0E0E5", marginBottom: 12 },
  accRowTop: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  accTitle: { fontSize: 15, fontWeight: "bold", color: "#1E1E2D" },
  accNumber: { fontSize: 13, color: "#8E8E93" },
  accRowBottom: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  subLabel: { fontSize: 11, color: "#8E8E93" },
  accBalance: { fontSize: 16, fontWeight: "bold", color: "#3626B8", marginTop: 2 },
  branchName: { fontSize: 13, fontWeight: "600", color: "#3626B8", marginTop: 2 },
});