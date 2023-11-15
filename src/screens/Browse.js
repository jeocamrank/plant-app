import React, { Component, useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");

export default function Browse({ profile, categories, navigation }) {
  const [active, setActive] = useState("Products");
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    // Hiển thị categories khi trang được mở lên
  const filtered = categories.filter((category) =>
      category.tags.includes(active.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [active, categories]);

  
  const handleTab = (tab) => {
    const filtered = categories.filter((category) =>
      category.tags.includes(tab.toLowerCase())
    );
    setActive(tab);
    setFilteredCategories(filtered);
  };

  const renderCategories = () => {
    return filteredCategories.map((category) => (
      <TouchableOpacity
        key={category.name}
        onPress={() => navigation.navigate("Explore", { category })}
      >
        <Card center middle shadow style={styles.category}>
          <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
            <Image source={category.image} />
          </Badge>
          <Text medium height={20}>
            {category.name}
          </Text>
          <Text gray caption>
            {category.count} products
          </Text>
        </Card>
      </TouchableOpacity>
    ));
  };

  const renderTab = (tab) => {
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Block style={{ backgroundColor: "white" }}>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          Browse{" "}
        </Text>
        <Button onPress={() => navigation.navigate('Settings')}>
          <Image source={profile.avatar} style={styles.avatar} />
        </Button>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {["Products", "Inspirations", "Shop"].map((tab) => (
          <TouchableOpacity
            key={`tab-${tab}`}
            onPress={() => handleTab(tab)}
            style={[styles.tab, active === tab ? styles.active : null]}
          >
            <Text
              h2
              medium
              gray={!active === tab}
              secondary={active === tab}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: theme.sizes.base * 2 }}
      >
        <Block flex={false} row space="between" style={styles.categories}>
          {renderCategories()}
        </Block>
      </ScrollView>
    </Block>
  );
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2.2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  category: {
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  },
});
