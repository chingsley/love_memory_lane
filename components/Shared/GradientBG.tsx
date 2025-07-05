import { colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

const GradientBG = ({ children, style }: { children: ReactNode; style: Object; }) => {
  return (
    <LinearGradient
      colors={[colors.PURPLE, colors.PURPLE]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 1, y: 0 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBG;

const styles = StyleSheet.create({
});