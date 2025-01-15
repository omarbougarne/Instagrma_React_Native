import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
function RegisterForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmedPassword] = useState('');

    return(

        <View>
            <Text style = {style.title}>Register</Text>
            <TextInput
            style = {style.input}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            style = {style.input}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            />
            <TextInput
            style = {style.input}
            placeholder="confirm password"
            value={confirmPassword}
            onChangeText={setConfirmedPassword}
            />
        </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default RegisterForm;