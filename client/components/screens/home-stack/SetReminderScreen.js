import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Box } from 'native-base';
import ScheduleCard from '../../cards/ScheduleCard';
import { Entypo } from '@expo/vector-icons';

import { useUser } from '../../contexts/UserContext';

const SetReminderScreen = ({ navigation }) => {
    const { user } = useUser();

    const times = ["08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30"];

    const [from, setFrom] = useState(times[1]);
    const [to, setTo] = useState(times[17]);

    const createRoutine = async () => {
        const url = 'http://192.168.1.92:8080/app/routine/create';
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                to,
                from,
                userId: user.id,
                interval: 30,
                silentMode: false,
                saveForNextTime: false,
                label: "Sultan",
                sound: false,
            })
        });

        if (response.status == 200) {
            navigation.goBack();
        }
        else {
            const responseJsonArray = await response.json();  // Get response text
            console.log(responseJsonArray);
        }
    }

    return (
        <Box style={styles.container} safeAreaTop>
            <Box style={styles.header}>
                <TouchableOpacity style={styles.backLink} onPress={() => {
                    navigation.goBack();
                }}>
                    <Text style={styles.backLinkText}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.heading}>New Task</Text>
            </Box>

            <ScheduleCard
                selectedDays={null}
                setSelectedDays={null}
                checkDays={() => { return }}
                setSelected={() => { return }}
                times={times}
                setFrom={setFrom}
                setTo={setTo}
                to={to}
                from={from}
            />


            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Label</Text>
                    <Entypo name="chevron-right" size={24} color="#F94144" />
                </Box>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SetIntervalScreen')}>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Interval</Text>
                    <Entypo name="chevron-right" size={24} color="#F94144" />
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Sound</Text>
                    <Entypo name="chevron-right" size={24} color="#F94144" />
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Silent Mode</Text>
                    <Text style={styles.cardText}>PH</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity>
                <Box style={styles.card}>
                    <Text style={styles.cardTitle}>Save for next time</Text>
                    <Text style={styles.cardText}>PH</Text>
                </Box>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton} onPress={() => {
                createRoutine();
            }}>
                <Text style={styles.nextButtonText}>Confirm</Text>
            </TouchableOpacity>
        </Box>
    )
}

export default SetReminderScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 34,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
    },
    backLink: {
        position: 'absolute',
        left: 0
    },
    backLinkText: {
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'josefin-regular',

    },
    heading: {
        fontSize: 20,
        fontFamily: 'josefin-semi-bold'
    },
    times: {
        height: '22%',
        backgroundColor: 'rgba(0,0,0,0.04)',
    },
    card: {
        paddingHorizontal: 16,
        paddingBottom: 10,
        paddingTop: 13,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    cardTitle: {
        fontSize: 18,
        fontFamily: 'josefin-regular'
    },
    cardText: {
        color: 'rgba(0,0,0,0.45)',
    },
    nextButton: {
        backgroundColor: '#F94144',
        paddingVertical: 16,
        width: '45%',
        alignSelf: 'center',
        marginTop: 32,
        borderRadius: 24
    },
    nextButtonText: {
        fontSize: 18,
        fontFamily: 'josefin-regular',
        textAlign: 'center',
        color: '#FFFFFF'
    }
})
