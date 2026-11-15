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
  onHome?: () => void;
  onSearch?: () => void;
  onSelectChat?: (title: string) => void;
}

const MESSAGES = [
  {
    id: "1",
    title: "Bank of America",
    subtitle: "Bank of America : 256486 is the au...",
    date: "Today",
    icon: "🏛️",
    bgColor: "#3626B8",
  },
  {
    id: "2",
    title: "Account",
    subtitle: "Your account is limited. Please foll...",
    date: "12/10",
    icon: "👤",
    bgColor: "#FF4D6D",
  },
  {
    id: "3",
    title: "Alert",
    subtitle: "Your statement is ready for you to...",
    date: "11/10",
    icon: "📄",
    bgColor: "#2196F3",
  },
  {
    id: "4",
    title: "Paypal",
    subtitle: "Your account has been locked. Ple...",
    date: "10/11",
    icon: "🅿️",
    bgColor: "#FFB703",
  },
  {
    id: "5",
    title: "Withdraw",
    subtitle: "Dear customer, 2987456 is your co...",
    date: "10/12",
    icon: "🏧",
    bgColor: "#2EC4B6",
  },
];

export default function MessageScreen({
  onBack,
  onHome,
  onSearch,
  onSelectChat,
}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Message</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {MESSAGES.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => onSelectChat && onSelectChat(item.title)}
          >
            <View style={[styles.iconBox, { backgroundColor: item.bgColor }]}>
              <Text style={styles.iconText}>{item.icon}</Text>
            </View>

            <View style={styles.textContainer}>
              <View style={styles.topRow}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              <Text style={styles.cardSubtitle} numberOfLines={1}>
                {item.subtitle}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem} onPress={onHome}>
          <Text style={styles.tabIcon}>🏠</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={onSearch}>
          <Text style={styles.tabIcon}>🔍</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
          <Text style={styles.tabIconActive}>✉️</Text>
          <Text style={styles.tabTextActive}>Message</Text>
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
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },
  backButton: {
    paddingRight: 12,
    paddingVertical: 4,
  },
  backText: {
    color: "#1A1D1E",
    fontSize: 32,
    fontWeight: "300",
  },
  headerTitle: {
    color: "#1A1D1E",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 4,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F2F4F7",
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  iconText: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1A1D1E",
  },
  dateText: {
    fontSize: 12,
    color: "#8A92A6",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#8A92A6",
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
    paddingHorizontal: 14,
    paddingVertical: 8,
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
    fontSize: 15,
  },
  tabTextActive: {
    fontSize: 13,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});