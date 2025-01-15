import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from "@react-native-firebase/auth"
import db from "@react-native-firebase/database"
function RegisterForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmedPassword] = useState('');

    const createProfile = async () => {
        db().ref(`/users/${response.user.uid}`).set({email: response.user.email})
    }
    const register = async () => {
        if(email && password){
            try{
                const response = await auth().createUserWithEmailAndPassword(
                    email,
                    password
                )
                if(response.user){
                    await createProfile(response)
                    console.log(response)   
                    Alert.alert("Account created")
                }
            }   catch(e){
                console.log(e)
                Alert.alert("Failed", e.message)
            }         
        }
    }
    return(

        <View>
            <Text style = {styles.title}>Register</Text>
            <TextInput
            style = {styles.input}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            style = {styles.input}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            />
            {/* <TextInput
            style = {styles.input}
            placeholder="confirm password"
            value={confirmPassword}
            onChangeText={setConfirmedPassword}
            /> */}
            <Button title="Register" onPress={register} />
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