import Button from '@/components/Shared/Button';
import { colors } from '@/constants/colors';
import { FormType } from '@/types/formType';
import { IUserData } from '@/types/user';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';



interface IFormProps {
  onFormSubmit: (formData: IUserData) => void;
  formType: FormType;
}
const Form = ({ onFormSubmit, formType, }: IFormProps) => {
  const [formData, setFormData] = useState<IUserData>({
    email: '',
    password: '',
    fullName: ''
  });
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const btnText = formType === FormType.REGISTER ? 'Register' : 'Sign In';

  const handleBtnSubmit = () => {
    const errors: string[] = [];
    for (const key of Object.keys(formData) as (keyof typeof formData)[]) {
      if (formData[key].trim() === '') {
        errors.push(key);
      }
    }

    setEmptyFields(errors);
    if (formType === FormType.REGISTER && errors.length > 0) {
      return;
    }
    if (
      formType === FormType.LOGIN &&
      (errors.find(f => f === 'password')) ||
      (errors.find(f => f === 'emal'))
    ) {
      return;
    }

    onFormSubmit(formData);
  };

  const handleInputChange = (field: keyof IUserData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isEmpty = (field: string) => emptyFields.find(f => f === field);


  return (
    <View style={styles.inputContainer}>
      {formType === FormType.REGISTER && <TextInput
        placeholder='Full name'
        onChangeText={handleInputChange('fullName')}
        placeholderTextColor={colors.MID_GRAY}
        style={[styles.textInput, isEmpty('fullName') && styles.inputError]}
      />}
      <TextInput
        placeholder='email'
        onChangeText={handleInputChange('email')}
        placeholderTextColor={colors.MID_GRAY}
        style={[styles.textInput, isEmpty('email') && styles.inputError]}
      />
      <TextInput
        placeholder='Password'
        onChangeText={handleInputChange('password')}
        placeholderTextColor={colors.MID_GRAY}
        secureTextEntry={true}
        style={[styles.textInput, isEmpty('password') && styles.inputError]}
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
  inputError: {
    borderColor: 'red',
  },
  btnRegister: {
    width: '100%',
    marginTop: 20,
  },
});