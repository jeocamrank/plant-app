import React, { useState, useEffect } from "react";
import { Image, StyleSheet, ScrollView, TextInput } from "react-native";
import { Divider, Button, Block, Text, Switch } from "../components";
import { theme, mocks } from "../constants";
import Slider from "@react-native-community/slider";

export default function Settings({ profile }) {
    const [state, setState] = useState({
      budget: 850,
      monthly: 1700,
      notifications: true,
      newsletter: false,
      editing: null,
      profile: {},
    });
  
    useEffect(() => {
      setState({ profile: profile });
    }, [profile]);
  
    const handleEdit = (name, text) => {
      const { profile } = state;
      profile[name] = text;
  
      setState({ ...state, profile });
    };
  
    const toggleEdit = (name) => {
      const { editing } = state;
      setState({ ...state, editing: !editing ? name : null });
    };
  
    const renderEdit = (name) => {
      const { profile, editing } = state;
  
      if (editing === name) {
        return (
          <TextInput
            defaultValue={profile[name]}
            onChangeText={(text) => handleEdit([name], text)}
          />
        );
      }
  
      return <Text bold>{profile[name]}</Text>;
    };
  
    return (
      <Block style={styles.background}>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Settings
          </Text>
          <Button>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>
  
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Username
                </Text>
                {renderEdit('username')}
              </Block>
              <Text
                medium
                secondary
                onPress={() => toggleEdit('username')}
              >
                {state.editing === 'username' ? 'Save' : 'Edit'}
              </Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Location
                </Text>
                {renderEdit('location')}
              </Block>
              <Text
                medium
                secondary
                onPress={() => toggleEdit('location')}
              >
                {state.editing === 'location' ? 'Save' : 'Edit'}
              </Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  E-mail
                </Text>
                <Text bold>{profile.email}</Text>
              </Block>
            </Block>
          </Block>
  
          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
  
          <Block style={styles.sliders}>
            <Block margin={[10, 0]}>
              <Text gray2 style={{ marginBottom: 10 }}>
                Budget
              </Text>
              <Slider
                minimumValue={0}
                maximumValue={1000}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                value={state.budget}
                onValueChange={(value) => setState({ ...state, budget: value })}
              />
              <Text caption gray right>
                $1,000
              </Text>
            </Block>
            <Block margin={[10, 0]}>
              <Text gray2 style={{ marginBottom: 10 }}>
                Monthly Cap
              </Text>
              <Slider
                minimumValue={0}
                maximumValue={5000}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                value={state.monthly}
                onValueChange={(value) => setState({ ...state, monthly: value })}
              />
              <Text caption gray right>
                $5,000
              </Text>
            </Block>
          </Block>
  
          <Divider />
  
          <Block style={styles.toggles}>
            <Block
              row
              center
              space="between"
              style={{ marginBottom: theme.sizes.base * 2 }}
            >
              <Text gray2>Notifications</Text>
              <Switch
                value={state.notifications}
                onValueChange={(value) =>
                  setState({ ...state, notifications: value })
                }
              />
            </Block>
  
            <Block
              row
              center
              space="between"
              style={{ marginBottom: theme.sizes.base * 2 }}
            >
              <Text gray2>Newsletter</Text>
              <Switch
                value={state.newsletter}
                onValueChange={(value) =>
                  setState({ ...state, newsletter: value })
                }
              />
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }

Settings.defaultProps = {
  profile: mocks.profile,
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  inputRow: {
    alignItems: "flex-end",
  },
  sliders: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: theme.colors.secondary,
  },
  toggles: {
    paddingHorizontal: theme.sizes.base * 2,
  },
});
