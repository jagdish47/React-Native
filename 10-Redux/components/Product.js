import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { products } from "../productData";
import { addToCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

export default function Product() {
  const dispatch = useDispatch();

  const handleProduct = (product) => {
    console.log("Product", product);
    dispatch(addToCart(product));
  };

  const handleProductRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <ScrollView style={styles.container}>
      {products.map((product) => {
        const colorCode = product.image.split("/")[4];

        return (
          <View style={styles.card} key={product.id}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <Text style={styles.category}>{product.category}</Text>
            <View style={{ flexDirection: "row", margin: 2 }}>
              <Button
                onPress={() => handleProduct(product)}
                style={styles.btn}
                title="+"
                color={`#${colorCode}`}
              />
              <Button
                onPress={() => handleProductRemove(product)}
                style={styles.btn}
                title="-"
                color={`#${colorCode}`}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btn: { width: 20, fontSize: 2 },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    width: 100,
    height: 160,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 6,
    color: "#888",
    marginBottom: 5,
  },
  category: {
    fontSize: 6,
    color: "#888",
  },
});
