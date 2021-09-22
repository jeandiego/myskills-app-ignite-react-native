import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./Button";


export function EmptyContent() {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>You haven't added any skills yet. Type an ability of yours and tap the button</Text>
      <Text style={[styles.emptyText, { color: "#A370F7", marginTop: 16}]}>Add Skill</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1E25",
    padding : 16,
    borderRadius: 8,
    justifyContent: "center",
  },
  emptyText: {
    color: "#555",
    fontSize: 18,
    textAlign: "center",
  }
})