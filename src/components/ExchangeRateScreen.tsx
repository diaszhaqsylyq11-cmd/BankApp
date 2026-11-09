import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";

interface ExchangeRateScreenProps {
  onBack: () => void;
}

interface ExchangeItem {
  id: string;
  country: string;
  flag: string;
  buy: string;
  sell: string;
}

const data: ExchangeItem[] = [
  { id: "1", country: "Vietnam", flag: "🇻🇳", buy: "1.403", sell: "1.746" },
  { id: "2", country: "Nicaragua", flag: "🇳🇮", buy: "9.123", sell: "12.09" },
  { id: "3", country: "Korea", flag: "🇰🇷", buy: "3.704", sell: "5.151" },
  { id: "4", country: "Russia", flag: "🇷🇺", buy: "116.0", sell: "144.4" },
  { id: "5", country: "China", flag: "🇨🇳", buy: "1.725", sell: "2.234" },
  { id: "6", country: "Portuguese", flag: "🇵🇹", buy: "1.403", sell: "1.746" },
  { id: "7", country: "Korea", flag: "🇰🇷", buy: "3.454", sell: "4.312" },
  { id: "8", country: "French", flag: "🇫🇷", buy: "23.45", sell: "34.56" },
  { id: "9", country: "Nicaragua", flag: "🇳🇮", buy: "263.1", sell: "300.3" },
  { id: "10", country: "China", flag: "🇨🇳", buy: "1.725", sell: "2.234" },
];

export default function ExchangeRateScreen({ onBack }: ExchangeRateScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Exchange rate</Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={[styles.columnHeader, { flex: 2 }]}>Country</Text>
        <Text style={[styles.columnHeader, { flex: 1, textAlign: "right" }]}>Buy</Text>
        <Text style={[styles.columnHeader, { flex: 1, textAlign: "right" }]}>Sell</Text>
      </View>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {data.map((item) => (
          <View key={item.id} style={styles.row}>
            <View style={[styles.countryContainer, { flex: 2 }]}>
              <Text style={styles.flag}>{item.flag}</Text>
              <Text style={styles.rowText}>{item.country}</Text>
            </View>
            <Text style={[styles.rowText, { flex: 1, textAlign: "right", color: "#333333" }]}>
              {item.buy}
            </Text>
            <Text style={[styles.rowText, { flex: 1, textAlign: "right", color: "#333333" }]}>
              {item.sell}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F5",
  },
  backButton: {
    paddingRight: 10,
  },
  back: {
    fontSize: 30,
    color: "#000000",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  tableHeader: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#FAFAFC",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E5",
  },
  columnHeader: {
    fontSize: 13,
    color: "#888888",
    fontWeight: "600",
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F5",
    alignItems: "center",
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  flag: {
    fontSize: 20,
    marginRight: 10,
  },
  rowText: {
    fontSize: 14,
    color: "#333333",
  },
});