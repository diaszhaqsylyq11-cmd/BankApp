import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Modal,
  FlatList,
} from "react-native";

interface Props {
  onBack?: () => void;
}

const currencies = [
  { code: "USD", name: "Dollar", rate: 1 },
  { code: "VND", name: "Viet Nam Dong", rate: 25400 },
  { code: "HKD", name: "Hong Kong Dollar", rate: 7.8 },
  { code: "NT$", name: "Taiwan Dollar", rate: 32.5 },
  { code: "J$", name: "Jamaica Dollar", rate: 156 },
  { code: "KRW", name: "KRM", rate: 1122 },
];

export default function ExchangeScreen({ onBack }: Props) {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KRW");

  const [modalVisible, setModalVisible] = useState(false);
  const [activeField, setActiveField] = useState<"from" | "to">("from");

  const getRate = (code: string) => {
    const found = currencies.find((c) => c.code === code);
    return found ? found.rate : 1;
  };

  const handleFromChange = (text: string) => {
    setFromAmount(text);
    const numericValue = parseFloat(text);
    if (isNaN(numericValue)) {
      setToAmount("");
    } else {
      const rateFrom = getRate(fromCurrency);
      const rateTo = getRate(toCurrency);
      // Пересчет через базовую валюту (USD)
      const result = (numericValue / rateFrom) * rateTo;
      setToAmount(result.toFixed(2));
    }
  };

  const openCurrencyModal = (field: "from" | "to") => {
    setActiveField(field);
    setModalVisible(true);
  };

  const selectCurrency = (code: string) => {
    if (activeField === "from") {
      setFromCurrency(code);
    } else {
      setToCurrency(code);
    }
    setModalVisible(false);
    // Пересчитываем заново при смене валюты
    if (fromAmount) {
      handleFromChange(fromAmount);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exchange</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.illustrationCard}>
          <Text style={styles.illustrationEmoji}>💱</Text>
        </View>

        <View style={styles.formCard}>
          {/* From Field */}
          <Text style={styles.label}>From</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Amount"
              placeholderTextColor="#AAAAAA"
              keyboardType="numeric"
              value={fromAmount}
              onChangeText={handleFromChange}
            />
            <TouchableOpacity
              style={styles.currencySelect}
              onPress={() => openCurrencyModal("from")}
            >
              <Text style={styles.currencyText}>{fromCurrency}</Text>
              <Text style={styles.arrowText}> ↕</Text>
            </TouchableOpacity>
          </View>

          {/* Swap Icon */}
          <View style={styles.swapContainer}>
            <TouchableOpacity style={styles.swapButton}>
              <Text style={styles.swapIcon}>⇅</Text>
            </TouchableOpacity>
          </View>

          {/* To Field */}
          <Text style={styles.label}>To</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Amount"
              placeholderTextColor="#AAAAAA"
              keyboardType="numeric"
              value={toAmount}
              editable={false}
            />
            <TouchableOpacity
              style={styles.currencySelect}
              onPress={() => openCurrencyModal("to")}
            >
              <Text style={styles.currencyText}>{toCurrency}</Text>
              <Text style={styles.arrowText}> ↕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rateRow}>
            <Text style={styles.rateLabel}>Currency rate</Text>
            <Text style={styles.rateValue}>
              1 {fromCurrency} = {(getRate(toCurrency) / getRate(fromCurrency)).toFixed(2)} {toCurrency}
            </Text>
          </View>

          <TouchableOpacity style={styles.exchangeButton}>
            <Text style={styles.exchangeButtonText}>Exchange</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Currency Selection Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select the currency</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeModal}>✕</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={currencies}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => selectCurrency(item.code)}
                >
                  <Text style={styles.modalItemText}>
                    {item.code} ({item.name})
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3626B8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  backButton: {
    paddingRight: 12,
    paddingVertical: 4,
  },
  backText: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "300",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#F8F9FD",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: "center",
  },
  illustrationCard: {
    width: "100%",
    height: 120,
    backgroundColor: "#EEF0FF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  illustrationEmoji: {
    fontSize: 48,
  },
  formCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 12,
    color: "#8A92A6",
    marginBottom: 6,
  },
  inputRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E0E0E5",
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 12,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#1A1D1E",
  },
  currencySelect: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#E0E0E5",
  },
  currencyText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3626B8",
  },
  arrowText: {
    fontSize: 12,
    color: "#8A92A6",
  },
  swapContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  swapButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F0F3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  swapIcon: {
    fontSize: 16,
    color: "#3626B8",
  },
  rateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 20,
  },
  rateLabel: {
    fontSize: 13,
    color: "#8A92A6",
  },
  rateValue: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1A1D1E",
  },
  exchangeButton: {
    backgroundColor: "#3626B8",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  exchangeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    maxHeight: 350,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A1D1E",
  },
  closeModal: {
    fontSize: 18,
    color: "#8A92A6",
  },
  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F3FF",
  },
  modalItemText: {
    fontSize: 14,
    color: "#333333",
  },
});