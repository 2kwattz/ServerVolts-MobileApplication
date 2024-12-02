// HomeScreen.js
import React, { useContext } from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AppContext } from '../../context/AppContext';

// Images & Icons

import deploymentIcon from '../../../assets/images/icons/deployment.png';
import cloudStorageIcon from '../../../assets/images/icons/cloudStorage.png';
import streamingIcon from '../../../assets/images/icons/streaming.png';
import cyberSecurityIcon from '../../../assets/images/icons/cybersec.png';
import staticHostingIcon from '../../../assets/images/icons/staticHosting.png';
import iotIcon from '../../../assets/images/icons/iot.png'

export default function HomeScreen({ navigation }) {

        const { passwordContext } = useContext(AppContext)


        console.log("I am in home screen")
        return (
                <View style={styles.bodyWrapper}>
                        <Text style={styles.heading}>Welcome, Username</Text>

                        <Text style={styles.dashboardPara}>Manage Your Server Hosting & Cloud Services. Set up live streaming, manage cloud storage, deploy static websites, and support IoT devices.</Text>

                        <View style={styles.dashboardItemsWrapper}>
                                <TouchableOpacity style={styles.dashboardWrapperItem} onPress={() => navigation.navigate('Deployments')}>
                                        <Image source={deploymentIcon} style={{ height: 33, width: 33 }} />
                                        <Text style={styles.dashboardItemsHeading}>Deployment </Text>
                                </TouchableOpacity>

                                <View style={styles.dashboardWrapperItem}>
                                        <Image source={cloudStorageIcon} style={{ height: 33, width: 33 }} />
                                        <Text style={styles.dashboardItemsHeading}>Cloud Storage </Text>
                                </View>

                                <View style={styles.dashboardWrapperItem}>
                                        <Image source={streamingIcon} style={{ height: 33, width: 33 }} />
                                        <Text style={styles.dashboardItemsHeading}>Streaming </Text>
                                </View>
                                <View style={styles.dashboardWrapperItem}>
                                        <Image source={staticHostingIcon} style={{ height: 33, width: 33 }} />
                                        <Text style={styles.dashboardItemsHeading}>Static Hosting</Text>
                                </View>

                                <View style={styles.dashboardWrapperItem}>
                                        <Image source={iotIcon} style={{ height: 33, width: 33 }} />
                                        <Text style={styles.dashboardItemsHeading}>Manage IoT</Text>
                                </View>

                                <View style={styles.dashboardWrapperItem}>
                                        <Image source={cyberSecurityIcon} style={{ height: 33, width: 33 }} />
                                        <Text style={styles.dashboardItemsHeading}>CyberSec </Text>
                                </View>

                                {/* <View style={styles.dashboardWrapperItem}>
                                        <Image source={iotIcon} style={{ height: 33, width: 33 }} />
                                        <Text style={styles.dashboardItemsHeading}>Settings</Text>
                                </View>

                                <View style={styles.dashboardWrapperItem}>
                                        <Image source={cyberSecurityIcon} style={{ height: 33, width: 33 }} />
                                        <Text style={styles.dashboardItemsHeading}>Logout </Text>
                                </View> */}


                        </View>
                        {/* <Text style={{ fontSize: 20 }}> Value of Password from Context {passwordContext} </Text> */}

                </View>
        );
}
