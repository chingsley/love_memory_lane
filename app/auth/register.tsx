import Button from '@/components/Shared/Button';
import Header from '@/components/Shared/Header';
import { colors } from '@/constants/colors';

import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.pageBox}>
      <View style={styles.container}>
        <Header caption='Create An Account' />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Full name'
            onChangeText={(value) => setFullName(value)}
            placeholderTextColor={colors.MID_GRAY}
            style={styles.textInput}
          />
          <TextInput
            placeholder='email'
            onChangeText={(value) => setEmail(value)}
            placeholderTextColor={colors.MID_GRAY}
            style={styles.textInput}
          />
          <TextInput
            placeholder='Password'
            onChangeText={(value) => setPassword(value)}
            placeholderTextColor={colors.MID_GRAY}
            secureTextEntry={true}
            style={styles.textInput}
          />
          <Button text="register" onPress={() => console.log('register')} style={styles.btnRegister} />
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  pageBox: {
    height: '100%'
  },
  container: {
    // borderWidth: 2,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImg: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  inputContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authCaption: {
    fontFamily: 'roboto',
    fontSize: 25,
  },

  textInput: {
    borderWidth: 1,
    borderColor: colors.MID_GRAY,
    width: '100%',
    padding: 20,
    marginTop: 20,
    borderRadius: 8,
    fontFamily: 'roboto',
    fontSize: 18,
  },
  btnRegister: {
    width: '100%',
    marginTop: 20,
  }

});