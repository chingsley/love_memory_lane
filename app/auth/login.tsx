import Form from '@/components/Auth/Form';
import LinkToChangeForm from '@/components/Auth/LinkToChangeForm';
import Header from '@/components/Shared/Header';
import { colors } from '@/constants/colors';
import { localStorage } from '@/storage';
import { FormType } from '@/types/formType';
import { IUserData } from '@/types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';

const Register = () => {
  const router = useRouter();

  const onLogin = async (userData: Omit<IUserData, 'fullName'>) => {
    const userStr = await AsyncStorage.getItem(userData.email);
    console.log(localStorage.viewAllAsyncStorageData());
    if (!userStr) {
      Alert.alert('Incorrect Email');
      return;
    }

    const user: IUserData = JSON.parse(userStr);
    if (user.password !== userData.password) {
      Alert.alert('Incorrect Password');
      return;
    }

    router.push({
      pathname: '/home',
      params: { userParam: JSON.stringify(user) }
    });
  };

  return (
    <View style={styles.pageBox}>
      <View style={styles.container}>
        <Header caption='Sign In' />
        <Form formType={FormType.LOGIN} onFormSubmit={onLogin} />
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