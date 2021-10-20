import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

const LoginScreen = ({ navigation }) => {
    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.image}></Box>

            <Text style={styles.h1}>Log In</Text>
            <Text style={styles.text}>Don't forget to take a break!</Text>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} />
            <Text style={styles.forgotPassword}>Forgot password?</Text>

            <TouchableOpacity style={styles.loginButton} onPress={() => {
                // Logic to log in
                
                // So that user cannot get back to this page once navigated to the onboarding stack
                navigation.replace("Onboarding");
                navigation.navigate("Onboarding");
            }}>
                <Text style={styles.loginButtonText}>
                    Login
                </Text>
            </TouchableOpacity>

            <View style={styles.signupInfo}>
                <Text style={styles.signupText}>Do not have an account?</Text>

                <TouchableOpacity onPress={() => {
                    // So that user cannot get back to this screen after navigating to the onboarding stack
                    navigation.navigate("Signup");
                }}>
                    <Text style={styles.signupLink}>
                        Signup here.
                    </Text>
                </TouchableOpacity>
            </View>
        </Box>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 8,
        paddingTop: 68,
        flex: 1,
    },
    image: {
        height: '25%',
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginBottom: 32,
    },
    h1: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 8
    },
    text: {
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        marginBottom: 32
    },
    input: {
        padding: 16,
        backgroundColor: 'rgba(0,0,0,0.05)',
        fontSize: 18,
        marginBottom: 16
    },
    forgotPassword: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "right",
        marginBottom: 32,
    },
    loginButton: {
        backgroundColor: "rgba(0,0,0,0.1)",
        paddingVertical: 16,
        width: "45%",
        alignSelf: "center",
    },
    loginButtonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400',
    },
    signupInfo: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    signupText: {
        fontSize: 16,
    },
    signupLink: {
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 2
    }
})
