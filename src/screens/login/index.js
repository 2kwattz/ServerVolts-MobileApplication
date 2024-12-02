// HomeScreen.js
import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, Image, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AppContext } from '../../context/AppContext';
import servervoltsLogoImage from '../../../assets/images/logo.png'
import { ScrollView } from 'react-native-gesture-handler';
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function LoginScreen({ navigation }) {

  const { passwordContext, setPasswordContext } = useContext(AppContext)

  const spamEmailDomains = [
    'mailinator.com',
    'guerrillamail.com',
    '10minutemail.com',
    'tempmail.com',
    'discard.email',
    'getnada.com',
    'maildrop.cc',
    'throwawaymail.com',
    'tempmailaddress.com',
    'fakeinbox.com',
    'spamgourmet.com',
    'mytrashmail.com',
    'protonmail.com',
    'yopmail.com',
    'mailnesia.com',
    'sharklasers.com',
    'spamcowboy.com',
    'crazymailing.com',
    'spamex.com',
    'jetable.org',
    'binkmail.com',
    'sogetthis.com'
  ];


  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function LoginOnPress() {
    console.log("Button Pressed");

    // Validate email address
    if (emailAddress.length === 0) {
        showMessage({
            message: "Email Address cannot be empty",
            description: "Please enter a valid Email Address.",
            type: "danger",
            icon: "danger",
            duration: 3000,
        });
        return; // Exit early if email is empty
    }

    if (!emailAddress.includes('@')) {
        showMessage({
            message: "Invalid Email Address",
            description: "Email Address should contain an '@' symbol.",
            type: "danger",
            icon: "danger",
            duration: 5000,
        });
        return; // Exit early if '@' symbol is missing
    }

    if (!emailValidationRegex.test(emailAddress)) {
        showMessage({
            message: "Invalid Email Format",
            description: "Please enter a valid Email Address in the correct format.",
            type: "danger",
            icon: "danger",
            duration: 3000,
        });
        return; // Exit early if email doesn't match the regex format
    }

    // Now, check if email domain is a spam email domain
    const domain = emailAddress.split('@')[1];
    if (spamEmailDomains.includes(domain)) {
        showMessage({
            message: "Spam Email Service Detected",
            description: "You are using a temporary or disposable email provider. Please consider using a more permanent email service.",
            type: "danger",
            icon: "danger",
            duration: 3000,
        });
        return; // Exit early if it's a spam domain
    }

    // Validate password
    if (password.length === 0) {
        showMessage({
            message: "Password cannot be empty",
            description: "Please enter a valid Password.",
            type: "danger",
            icon: "danger",
            duration: 3000,
        });
        return; // Exit early if password is empty
    }

    if (password.length < 6) {
        showMessage({
            message: "Password too short",
            description: "Password cannot be less than 6 characters.",
            type: "danger",
            icon: "danger",
            duration: 3000,
        });
        return; // Exit early if password is too short
    }

    // All validations passed, proceed to the next screen
    navigation.navigate('Home');
}


  useEffect(() => {
    console.log("Change in email address", emailAddress)
  }, [emailAddress])
  console.log("I am in Login screen")
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} contentContainerStyle={styles.bodyWrapper}>


      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <View style={styles.logoSection}>
          <Image source={servervoltsLogoImage} style={{ height: 150, width: 150 }} />
        </View>
        <Text style={styles.textHeading}>ServerVolts</Text>
        <View style={styles.loginForm}>
          <TextInput style={styles.baseInputText} onChangeText={(value) => setEmailAddress(value)} placeholder="Enter email address" />
          <TextInput style={styles.baseInputText} secureTextEntry={true} onChangeText={(value) => setPassword(value)} placeholder="Enter password" />

          <TouchableOpacity onPress={LoginOnPress} style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          {/* </View> */}

        </View>

      </KeyboardAvoidingView>



    </ScrollView>
  );
}
