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
  onSwitchToAccount: () => void;
  onAddCard?: () => void;
}

export default function AccountAndCard2Screen({ onBack, onSwitchToAccount, onAddCard }: Props) {
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
          <TouchableOpacity style={styles.switchTab} onPress={onSwitchToAccount}>
            <Text style={styles.switchText}>Account</Text>
          </TouchableOpacity>
          <View style={[styles.switchTab, styles.activeSwitchTab]}>
            <Text style={[styles.switchText, styles.activeSwitchText]}>Card</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* 1-ші карта */}
          <View style={[styles.bankCard, { backgroundColor: "#2B6CB0" }]}>
            <Text style={styles.cardName}>John Smith[cite: 1]</Text>
            <Text style={styles.cardType}>Amazon Platinum[cite: 1]</Text>
            <Text style={styles.cardNumber}>4756 •••• •••• 9018[cite: 1]</Text>
            <Text style={styles.cardBalance}>$3,469.52[cite: 1]</Text>
          </View>

          {/* 2-ші карта (сары/қызғылт сары түсті Figma-дағы сияқты) */}
          <View style={[styles.bankCard, { backgroundColor: "#D97706" }]}>
            <Text style={styles.cardName}>John Smith[cite: 1]</Text>
            <Text style={styles.cardType}>Amazon Platinum[cite: 1]</Text>
            <Text style={styles.cardNumber}>4756 •••• •••• 9018[cite: 1]</Text>
            <Text style={styles.cardBalance}>$3,469.52[cite: 1]</Text>
          </View>

          {/* Add card батырмасы */}
          <TouchableOpacity style={styles.addButton} onPress={onAddCard}>
            <Text style={styles.addText}>Add card</Text>
          </TouchableOpacity>
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
  bankCard: { borderRadius: 20, padding: 20, marginBottom: 16 },
  cardName: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
  cardType: { color: "#E2E8F0", fontSize: 12, marginBottom: 8 },
  cardNumber: { color: "#FFFFFF", fontSize: 14, letterSpacing: 2, marginBottom: 10 },
  cardBalance: { color: "#FFFFFF", fontSize: 20, fontWeight: "bold" },
  addButton: { height: 50, backgroundColor: "#3626B8", borderRadius: 14, justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 20 },
  addText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});