import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import { Entypo } from '@expo/vector-icons';

import GoalWorkspaceList from '../../lists/GoalWorkspaceList';

const OnboardingScreen3 = ({ navigation }) => {
    const data =[
        { text: "I don't have a fixed working schedule", id: 1 }
    ]

    return (
        <Box style={styles.container} safeAreaTop>

            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <Entypo name="chevron-left" size={24} color="black" style={styles.backLink} />
            </TouchableOpacity>

            <Text style={styles.h1}>Your Schedule is:</Text>
            <Text style={styles.text}>You can change this anytime</Text>

            <View style={styles.schedule}></View>

            <Text style={styles.or}>Or</Text>

            <GoalWorkspaceList data={data} />

            <TouchableOpacity style={styles.startButton} onPress={() => {
                navigation.replace("AppStack")
                navigation.navigate("AppStack")
            }}>
                <Text style={styles.startButtonText}>Get Started</Text>
            </TouchableOpacity>

        </Box>


    )
}

export default OnboardingScreen3

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 34,
        flex: 1,
    },
    backLink: {
        marginTop: 16,
        marginBottom: 25
    },
    h1: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 8
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        marginBottom: 32
    },
    schedule: {
        height: "35%",
        backgroundColor: 'rgba(0,0,0,0.05)',
        marginBottom: 24,
    },
    or: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8
    },
    flexEndView: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    startButton: {
        backgroundColor: '#F94144',
        paddingVertical: 16,
        width: '45%',
        marginBottom: 60,
        marginTop: 16,
        height: 48,
        justifyContent: 'center',
        borderRadius: 24,
        alignSelf: 'center'
    },
    startButtonText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    questionNumber: {
        fontSize: 18,
        fontWeight: '600'
    },
})

