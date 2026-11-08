import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";

interface Branch {
  id: string;
  name: string;
  distance: string;
}

interface Props {
  onBack?: () => void;
}

const BRANCHES: Branch[] = [
  { id: "1", name: "Bank 1656 Union Street", distance: "50 m" },
  { id: "2", name: "Bank Secaucus", distance: "1,2 km" },
  { id: "3", name: "Bank 1657 Riverside Drive", distance: "5,3 km" },
  { id: "4", name: "Bank Rutherford", distance: "70m" },
  { id: "5", name: "Bank 1656 Union Street", distance: "30m" },
];

export default function BranchScreen({ onBack }: Props) {
  const [searchQuery, setSearchQuery] = useState<string>("Bank");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.topHeader}>
        <TouchableOpacity 
          onPress={onBack} 
          style={styles.backButton} 
          activeOpacity={0.6}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.userName}>Branch</Text>
      </View>

      <View style={styles.mapArea}>
        <Text style={styles.mapPlaceholder}>[ Карта / Map Area ]</Text>
      </View>

      <View style={styles.bottomCard}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.input}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search..."
            placeholderTextColor="#AAAAAA"
          />
          {searchQuery !== "" && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        <FlatList
          data={BRANCHES}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.branchRow}>
              <View style={styles.branchInfo}>
                <Text style={styles.pinIcon}>📍</Text>
                <Text style={styles.branchName}>{item.name}</Text>
              </View>
              <Text style={styles.distanceText}>{item.distance}</Text>
            </View>
          )}
        />
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
    paddingHorizontal: 10,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
  },
  back: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "300",
    lineHeight: 40,
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  mapArea: {
    flex: 1,
    backgroundColor: "#E4E8EE",
    justifyContent: "center",
    alignItems: "center",
  },
  mapPlaceholder: {
    color: "#7A869A",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomCard: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 20,
    height: "52%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F9FD",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  searchIcon: {
    marginRight: 8,
    fontSize: 14,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#1A1D1E",
  },
  clearIcon: {
    color: "#AAAAAA",
    fontSize: 14,
    padding: 4,
  },
  branchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F7",
  },
  branchInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  pinIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  branchName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2C3E50",
  },
  distanceText: {
    fontSize: 12,
    color: "#AAAAAA",
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