import React from "react";
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { shopitemstyle } from "../Styles/ShopItemStyle";

const ShopItemScreen = ({ navigation, route }) => {
  const { data } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={shopitemstyle.navigator}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={shopitemstyle.backBtn}>
              <Text style={{ color: "white", fontSize: 20 }}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={shopitemstyle.itemContainer}>
          <Image
            source={{ uri: data?.src }}
            style={{ width: "100%", height: "30%" }}
          />
          <ScrollView>
            <View style={shopitemstyle.descContainer}>
              <Text>Item number: {data.id}</Text>
              <View style={shopitemstyle.titleContainer}>
                <Text style={shopitemstyle.title}>{data.name}</Text>
                <Text style={shopitemstyle.price}>${data.price}</Text>
              </View>
              <Text>
                Apple M1 is a series of ARM-based systems-on-a-chip (SoCs)
                designed by Apple Inc. as a central processing unit (CPU) and
                graphics processing unit (GPU) for its Mac desktops and
                notebooks, and the iPad Pro and iPad Air tablets.[7] The M1 chip
                initiated Apple's third change to the instruction set
                architecture used by Macintosh computers, switching from Intel
                to Apple silicon 14 years after they were switched from PowerPC
                to Intel, and 26 years after the transition from the original
                Motorola 68000 series to PowerPC. At the time of introduction in
                2020, Apple said that the M1 had the world's fastest CPU core
                "in low power silicon" and the world's best CPU performance per
                watt.[7][8] Its successor, Apple M2, was announced on June 6,
                2022 at WWDC. The original M1 chip was introduced in November
                2020, and was followed by the professional-focused M1 Pro and M1
                Max chips in October 2021. The M1 Max is a higher-powered
                version of the M1 Pro, with more GPU cores and memory bandwidth
                and a larger die size. Apple introduced the M1 Ultra in 2022,
                combining two M1 Max chips in one package. These chips differ
                largely in size and the number of functional units: for example,
                while the original M1 has about 16 billion transistors, the M1
                Ultra has 114 billion. Apple's macOS and iPadOS operating
                systems both run on the M1. Initial support for the M1 SoC in
                the Linux kernel was released in version 5.13 on June 27,
                2021.[9] The initial versions of the M1 chips contain an
                architectural defect that permits sandboxed applications to
                exchange data, violating the security model, an issue that has
                been described as "mostly harmless".[10]
              </Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => Alert.alert("Out of stock!")}
        >
          <View
            style={{
              marginTop: "auto",
              width: "100%",
              backgroundColor: "green",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 24,
                fontWeight: 500,
              }}
            >
              Buy Now
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default ShopItemScreen;
