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
}

export default function TransactionReport1Screen({ onBack }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.headerTitle}>Transaction report</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Карта */}
        <View style={styles.card}>
          <Text style={styles.cardName}>John Smith</Text>
          <Text style={styles.cardType}>Amazon Platinum</Text>
          <Text style={styles.cardNumber}>4756 •••• •••• 9018</Text>
          <Text style={styles.cardBalance}>$3,469.52[cite: 1]</Text>
        </View>

        {/* График мен баланс */}
        <View style={styles.statsCard}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceAmount}>1000 <Text style={styles.currency}>USD</Text></Text>

          <View style={styles.chartContainer}>
            <View style={[styles.bar, { height: 40, backgroundColor: "#3626B8" }]} />
            <View style={[styles.bar, { height: 60, backgroundColor: "#FF3B30" }]} />
            <View style={[styles.bar, { height: 30, backgroundColor: "#3626B8" }]} />
            <View style={[styles.bar, { height: 80, backgroundColor: "#34C759" }]} />
            <View style={[styles.bar, { height: 50, backgroundColor: "#FF3B30" }]} />
            <View style={[styles.bar, { height: 70, backgroundColor: "#3626B8" }]} />
          </View>
          <View style={styles.monthsRow}>
            <Text style={styles.monthText}>Jan</Text>
            <Text style={styles.monthText}>Feb</Text>
            <Text style={styles.monthText}>Mar</Text>
            <Text style={[styles.monthText, { color: "#3626B8", fontWeight: "bold" }]}>Apr</Text>
            <Text style={styles.monthText}>May</Text>
            <Text style={styles.monthText}>Jun</Text>
          </View>
        </View>
      </ScrollView>
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
  card: { backgroundColor: "#2B6CB0", borderRadius: 20, padding: 18, marginBottom: 20 },
  cardName: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
  cardType: { color: "#E2E8F0", fontSize: 12, marginBottom: 8 },
  cardNumber: { color: "#FFFFFF", fontSize: 14, letterSpacing: 2, marginBottom: 10 },
  cardBalance: { color: "#FFFFFF", fontSize: 20, fontWeight: "bold" },
  statsCard: { backgroundColor: "#FAFAFC", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#E0E0E5" },
  balanceLabel: { fontSize: 12, color: "#8E8E93" },
  balanceAmount: { fontSize: 22, fontWeight: "bold", color: "#1E1E2D", marginVertical: 4 },
  currency: { fontSize: 14, color: "#8E8E93", fontWeight: "normal" },
  chartContainer: { flexDirection: "row", justifyContent: "space-around", alignItems: "flex-end", height: 90, marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#E0E0E5", paddingBottom: 5 },
  bar: { width: 12, borderRadius: 6 },
  monthsRow: { flexDirection: "row", justifyContent: "space-around", marginTop: 6 },
  monthText: { fontSize: 12, color: "#8E8E93" },
});