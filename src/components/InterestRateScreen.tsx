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

interface InterestRateScreenProps {
  onBack: () => void;
}

interface InterestItem {
  id: string;
  kind: string;
  deposit: string;
  rate: string;
}

const data: InterestItem[] = [
  { id: "1", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
  { id: "2", kind: "Corporate customers", deposit: "2m", rate: "5.50%" },
  { id: "3", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
  { id: "4", kind: "Corporate customers", deposit: "6m", rate: "2.50%" },
  { id: "5", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
  { id: "6", kind: "Corporate customers", deposit: "8m", rate: "6.50%" },
  { id: "7", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
  { id: "8", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
  { id: "9", kind: "Corporate customers", deposit: "7m", rate: "6.80%" },
  { id: "10", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
];

export default function InterestRateScreen({ onBack }: InterestRateScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Interest rate</Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={[styles.columnHeader, { flex: 2 }]}>Interest kind</Text>
        <Text style={[styles.columnHeader, { flex: 1, textAlign: "center" }]}>Deposit</Text>
        <Text style={[styles.columnHeader, { flex: 1, textAlign: "right" }]}>Rate</Text>
      </View>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {data.map((item) => (
          <View key={item.id} style={styles.row}>
            <Text style={[styles.rowText, { flex: 2, color: "#333333" }]}>{item.kind}</Text>
            <Text style={[styles.rowText, { flex: 1, textAlign: "center", color: "#666666" }]}>
              {item.deposit}
            </Text>
            <Text style={[styles.rowText, { flex: 1, textAlign: "right", color: "#3926C3", fontWeight: "bold" }]}>
              {item.rate}
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
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F5",
    alignItems: "center",
  },
  rowText: {
    fontSize: 14,
  },
});