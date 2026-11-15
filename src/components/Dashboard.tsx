import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

interface Props {
  onNavigateToSearch?: () => void;
  onNavigateToTransfer?: () => void;
  onNavigateToSettings?: () => void;
  onNavigateToAccountCard?: () => void;
  onNavigateToTransactionReport?: () => void;
  onNavigateToTransactionReport2?: () => void; // <--- 2-ші бет үшін қосылды
}

export default function Dashboard({
  onNavigateToSearch,
  onNavigateToTransfer,
  onNavigateToSettings,
  onNavigateToAccountCard,
  onNavigateToTransactionReport,
}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Push Puttichai 🔔</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.cardName}>John Smith</Text>
          <Text style={styles.cardType}>Amazon Platinium</Text>
          <Text style={styles.cardNumber}>4756 •••• •••• 9018</Text>
          <Text style={styles.cardBalance}>$3,469.52</Text>
        </View>

        {/* Account and Card батырмасы */}
        <TouchableOpacity style={styles.menuItem} onPress={onNavigateToAccountCard}>
          <Text style={styles.menuIcon}>💳</Text>
          <Text style={styles.menuText}>Account and Card</Text>
        </TouchableOpacity>

        {/* Transfer батырмасы */}
        <TouchableOpacity style={styles.menuItem} onPress={onNavigateToTransfer}>
          <Text style={styles.menuIcon}>🔀</Text>
          <Text style={styles.menuText}>Transfer</Text>
        </TouchableOpacity>

        {/* Transaction Report #1 (График) */}
        <TouchableOpacity style={styles.menuItem} onPress={onNavigateToTransactionReport}>
          <Text style={styles.menuIcon}>📊</Text>
          <Text style={styles.menuText}>Transaction Report (Chart)</Text>
        </TouchableOpacity>

      

        <View style={[styles.menuItem, { marginBottom: 30 }]}>
          <Text style={styles.menuIcon}>🏛️</Text>
          <Text style={styles.menuText}>Withdraw</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIconActive}>🏠</Text>
          <Text style={styles.tabTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={onNavigateToSearch}>
          <Text style={styles.tabIcon}>🔍</Text>
          <Text style={styles.tabText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={onNavigateToSettings}>
          <Text style={styles.tabIcon}>⚙️</Text>
          <Text style={styles.tabText}>Settings</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  greeting: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    backgroundColor: "#2B6CB0",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  cardName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardType: {
    color: "#E2E8F0",
    fontSize: 12,
    marginBottom: 12,
  },
  cardNumber: {
    color: "#FFFFFF",
    fontSize: 16,
    letterSpacing: 2,
    marginBottom: 12,
  },
  cardBalance: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F9FD",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 14,
  },
  menuText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2D3748",
  },
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#EFEFEF",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  tabIcon: {
    fontSize: 18,
    color: "#718096",
  },
  tabIconActive: {
    fontSize: 18,
  },
  tabText: {
    fontSize: 12,
    color: "#718096",
    marginTop: 2,
  },
  tabTextActive: {
    fontSize: 12,
    color: "#3626B8",
    fontWeight: "600",
    marginTop: 2,
  },
});