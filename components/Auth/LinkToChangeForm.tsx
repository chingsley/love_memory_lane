import { colors } from '@/constants/colors';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface IL2CFProps {
  textPrompt: string;
  onPress: () => void;
}
const LinkToChangeForm = ({ textPrompt, onPress }: IL2CFProps) => {
  return (
    <Pressable style={styles.signInLinkPressable} onPress={onPress}>
      <Text style={styles.signInLinkText}>
        {textPrompt}
      </Text>
    </Pressable>
  );
};

export default LinkToChangeForm;

const styles = StyleSheet.create({
  signInLinkPressable: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 20,
    // borderWidth: 1,
  },
  signInLinkText: {
    fontFamily: 'roboto-bold',
    fontSize: 18,
    color: colors.PURPLE,
  }
});