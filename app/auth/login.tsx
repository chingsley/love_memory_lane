import Form from '@/components/Auth/Form';
import LinkToChangeForm from '@/components/Auth/LinkToChangeForm';
import Header from '@/components/Shared/Header';
import { colors } from '@/constants/colors';
import { useRouter } from 'expo-router';

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.pageBox}>
      <View style={styles.container}>
        <Header caption='Sign In' />
        <Form type='login' onFormSubmit={() => console.log('login')} />
        <LinkToChangeForm
          textPrompt="Don't have an account? Click here to register"
          onPress={() => router.push('/auth/register')}
        />
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
  },
  signInLinkPressable: {
    marginTop: 20,
  },
  signInLinkText: {
    color: colors.PURPLE,
    fontFamily: 'roboto',
    fontSize: 20,
  }

});