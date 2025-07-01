import Button from '@/components/Shared/Button';
import { colors } from '@/constants/colors';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface IFormData {
  email: string;
  password: string;
  fullName?: string;
}

type FormType = 'login' | 'register';
interface IFormProps {
  onFormSubmit: (formData: IFormData) => void;
  type: FormType;
}
const Form = ({ onFormSubmit, type }: IFormProps) => {
  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: '',
    fullName: ''
  });

  const btnText = type === 'register' ? 'Register' : 'Sign In';
  const handleBtnSubmit = () => {
    onFormSubmit(formData);
  };

  const handleInputChange = (field: keyof IFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.inputContainer}>
      {type === 'register' && <TextInput
        placeholder='Full name'
        onChangeText={handleInputChange('fullName')}
        placeholderTextColor={colors.MID_GRAY}
        style={styles.textInput}
      />}
      <TextInput
        placeholder='email'
        onChangeText={handleInputChange('email')}
        placeholderTextColor={colors.MID_GRAY}
        style={styles.textInput}
      />
      <TextInput
        placeholder='Password'
        onChangeText={handleInputChange('password')}
        placeholderTextColor={colors.MID_GRAY}
        secureTextEntry={true}
        style={styles.textInput}
      />
      <Button text={btnText} onPress={handleBtnSubmit} style={styles.btnRegister} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
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
});