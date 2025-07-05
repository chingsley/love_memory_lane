import { colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from './BackButton';

interface IHeaderProps {
  caption: string;
  showBackButton?: boolean;
}
const Header = ({ caption, showBackButton }: IHeaderProps) => {
  return (
    <View style={styles.linearGradientBox}>
      <LinearGradient
        colors={[colors.PINK, colors.PURPLE]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        {showBackButton && <BackButton style={styles.backArrow} color={colors.WHITE} />}
        <Text style={styles.pageCaption}>{caption}</Text>
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  linearGradientBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 120,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  pageCaption: {
    fontFamily: 'roboto-bold',
    fontSize: 25,
    color: colors.WHITE,
  },
  backArrow: {
    position: 'absolute',
    left: 0,
    padding: 15,
    marginLeft: 5,
  }
});