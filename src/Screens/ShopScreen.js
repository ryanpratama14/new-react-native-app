import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { shopstyle } from "../Styles/ShopStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "../Components/Navigation";

const ShopScreen = ({ navigation, route }) => {
  const params = route.params;
  const [data, setData] = React.useState([
    {
      id: "#1231",
      name: `MacBook Pro M1 13"`,
      price: "1290",
      discount: false,
      src: "https://www.tradeinn.com/f/13787/137870849/apple-macbook-pro-13-m1-8gb-256gb-ssd-%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA.jpg",
    },
    {
      id: "#1111",
      name: `MacBook Air M1 13"`,
      price: "990",
      discount: true,
      src: "https://reviewed-com-res.cloudinary.com/image/fetch/s--pM3BRbA_--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1607081088000/DSC_0877.jpg",
    },
    {
      id: "#1221",
      name: `MacBook 16" M1 Pro`,
      price: "2390",
      discount: true,
      src: "https://ipac31.ru/image/cache/data/product/mac/MacBook%20Pro%2016%202021/macbook-pro-16-silver-2-700x700.png",
    },
  ]);

  const Item = ({ data, index }) => {
    return (
      <View style={shopstyle.itemContainer}>
        <View style={shopstyle.itemDesc}>
          <Text style={shopstyle.itemHeading}>{data?.name}</Text>
          <Text style={shopstyle.itemPrice}>
            {data?.discount && "SALE!"} ${data?.price}
          </Text>
          <TouchableOpacity
            style={{ alignSelf: "start" }}
            onPress={() => {
              navigation.navigate("ShopItem", { data: data });
            }}
            activeOpacity={0.7}
          >
            <View style={shopstyle.btn}>
              <Text style={shopstyle.btnText}>View Details</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: data?.src }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  };

  return (
    <View style={shopstyle.container}>
      <SafeAreaView style={shopstyle.children}>
        <View style={shopstyle.introduction}>
          <Text style={shopstyle.introductionText}>Shopping Time!</Text>
        </View>
        <View style={shopstyle.itemsContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return <Item data={item} index={index} />;
            }}
          />
        </View>
      </SafeAreaView>
      <Navigation navigation={navigation} params={params} active="shop" />
    </View>
  );
};

export default ShopScreen;
