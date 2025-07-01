// components / Shared / Button.tsx
import { colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  ActivityIndicator, GestureResponderEvent,
  StyleSheet, Text,
  TouchableOpacity, View
} from 'react-native';

type BtnStyleType = 'primary' | 'delete' | undefined;

interface ButtonProps {
  text: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  loading?: boolean;
  type?: BtnStyleType;
  outline?: true;
  disabled?: boolean;
  style?: Object;
}
const Button = ({ onPress, text, loading, disabled, style }: ButtonProps) => {
  return (
    <View style={style}>
      <TouchableOpacity
        onPress={onPress}
        disabled={loading || disabled}
      >
        <LinearGradient
          colors={[colors.PINK, colors.PURPLE]}
          start={{ x: 0, y: 1 }}  // Bottom-left
          end={{ x: 1, y: 0 }}    // Top-right
          style={styles.btnRegister}
        >
          {
            loading ?
              <ActivityIndicator size={'small'} color={colors.WHITE} />
              :
              <Text style={styles.buttonText}>{text}</Text>
          }
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};




const styles = StyleSheet.create({
  btnRegister: {
    width: '100%',
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;