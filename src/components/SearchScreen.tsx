import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

interface Props {
  onBack?: () => void;
  onSelectBranch?: () => void;
}

export default function SearchScreen({ onBack, onSelectBranch }: Props) {
  const items = [
    {
      id: "1",
      title: "Branch",
      subtitle: "Search for branch",
      icon: "🏦",
      onPress: onSelectBranch,
    },
    {
      id: "2",
      title: "Interest rate",
      subtitle: "Search for interest rate",
      icon: "📈",
    },
    {
      id: "3",
      title: "Exchange rate",
      subtitle: "Search for exchange rate",
      icon: "💱",
    },
    {
      id: "4",
      title: "Exchange",
      subtitle: "Exchange amount of money",
      icon: "📊",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.topHeader}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={onBack}>
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.userName}>Search</Text>
        </View>
      </View>

      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.listContainer} showsVerticalScrollIndicator={false}>
          {items.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.7}
              onPress={item.onPress}
            >
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Text style={styles.emojiIcon}>{item.icon}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.grayTab}>
            <Text style={styles.grayTabText}>🏠 Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activeTabBtn}>
            <Text style={styles.activeTab}>🔍 Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.grayTab}>
            <Text style={styles.grayTabText}>✉️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.grayTab}>
            <Text style={styles.grayTabText}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomLine} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3626B8",
  },
  topHeader: {
    backgroundColor: "#3626B8",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  back: {
    color: "#FFFFFF",
    fontSize: 34,
    marginRight: 12,
    bottom: 2,
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F0F0F5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A1D1E",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#AAAAAA",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#F8F9FD",
    justifyContent: "center",
    alignItems: "center",
  },
  emojiIcon: {
    fontSize: 22,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
    paddingHorizontal: 10,
  },
  activeTabBtn: {
    backgroundColor: "#3626B8",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeTab: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  grayTab: {
    padding: 10,
  },
  grayTabText: {
    color: "#888888",
    fontSize: 16,
  },
  bottomLine: {
    width: 105,
    height: 4,
    backgroundColor: "#222222",
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 8,
    position: "absolute",
    bottom: 0,
  },
});