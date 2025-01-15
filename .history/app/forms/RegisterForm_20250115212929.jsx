import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { auth, database } from "./FireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const createProfile = async (user) => {
        await set(ref(database, 'users/' + user.uid), {
            email: user.email,
            createdAt: new Date().toISOString()
        });
    };

    const register = async () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            if (response.user) {
                await createProfile(response.user);
                Alert.alert("Registration successful");
            }
        } catch (e) {
            Alert.alert("Registration failed", e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            {loading ? (
                <ActivityIndicator size="large" color="#007AFF" />
            ) : (
                <Button title="Register" onPress={register} />
            )}
        </View>
    );
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