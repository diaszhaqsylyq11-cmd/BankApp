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
  onBack?: () => void;
  onSelectBranch?: () => void;
  onHome?: () => void;
}

export default function SearchScreen({ onBack, onSelectBranch, onHome }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.card}
          onPress={onSelectBranch}
          activeOpacity={0.7}
        >
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Branch</Text>
            <Text style={styles.cardSubtitle}>Search for branch</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.cardIcon}>🏦</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Interest rate</Text>
            <Text style={styles.cardSubtitle}>Search for interest rate</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.cardIcon}>📈</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Exchange rate</Text>
            <Text style={styles.cardSubtitle}>Search for exchange rate</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.cardIcon}>💱</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Exchange</Text>
            <Text style={styles.cardSubtitle}>Exchange amount of money</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.cardIcon}>📊</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem} onPress={onHome}>
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
          <Text style={styles.tabIconActive}>🔍</Text>
          <Text style={styles.tabTextActive}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>✉️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>⚙️</Text>
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
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A1D1E",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#8A92A6",
    marginTop: 4,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#F0F3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  cardIcon: {
    fontSize: 20,
  },
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#EFEFEF",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#3626B8",
    flexDirection: "row",
    gap: 6,
  },
  tabIcon: {
    fontSize: 18,
    color: "#8A92A6",
  },
  tabIconActive: {
    fontSize: 16,
  },
  tabText: {
    fontSize: 12,
    color: "#8A92A6",
    marginTop: 2,
  },
  tabTextActive: {
    fontSize: 13,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});