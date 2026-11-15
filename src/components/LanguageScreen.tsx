import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

interface LanguageScreenProps {
  onBack: () => void;
}

export default function LanguageScreen({ onBack }: LanguageScreenProps) {
  const [selectedLang, setSelectedLang] = useState("en");

  const languages = [
    { id: "en", title: "English", subtitle: "English" },
    { id: "ru", title: "Русский", subtitle: "Russian" },
    { id: "kk", title: "Қазақша", subtitle: "Kazakh" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.headerTitle}>Language</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.id}
            style={[
              styles.langItem,
              selectedLang === lang.id && styles.selectedItem,
            ]}
            onPress={() => setSelectedLang(lang.id)}
          >
            <View>
              <Text style={styles.langTitle}>{lang.title}</Text>
              <Text style={styles.langSubtitle}>{lang.subtitle}</Text>
            </View>
            <View
              style={[
                styles.radioOuter,
                selectedLang === lang.id && styles.radioOuterActive,
              ]}
            >
              {selectedLang === lang.id && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        ))}
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
    height: 110,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backArrow: {
    color: "#FFFFFF",
    fontSize: 32,
    marginRight: 10,
    bottom: 2,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
  },
  langItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E0E0E5",
    marginBottom: 12,
    backgroundColor: "#FAFAFC",
  },
  selectedItem: {
    borderColor: "#3626B8",
    backgroundColor: "#F2F0FF",
  },
  langTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E1E2D",
  },
  langSubtitle: {
    fontSize: 12,
    color: "#8E8E93",
    marginTop: 2,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#C7C7CC",
    justifyContent: "center",
    alignItems: "center",
  },
  radioOuterActive: {
    borderColor: "#3626B8",
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#3626B8",
  },
});