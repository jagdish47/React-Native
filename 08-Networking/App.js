import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setApiData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const CardItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="green" />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={apiData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardItem item={item} />}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
});
