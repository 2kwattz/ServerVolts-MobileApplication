// HomeScreen.js
import React, { useContext, useState } from 'react';
import {Button, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';


// Images & Icons

import deploymentIcon from '../../../assets/images/icons/deployment.png';
import notFoundImage from '../../../assets/images/general/notfound.png'

export default function DeploymentsScreen({ navigation }) {



    const [deployment, setDeployment] = useState(false)


    console.log("I am in deployment screen")
    return (
        <View style={styles.bodyWrapper}>

            {!deployment || deployment.length === 0 ? <React.Fragment>

                <View style={{flex: 1, flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems:"center"}}>

                    <Image source={notFoundImage} style={styles.notFoundImage} />
                <Text style={styles.notFoundText}> No Deployments Found </Text>

                <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>Create Deployment</Text>
          </TouchableOpacity>
                </View>


            </React.Fragment> :
                <React.Fragment>

                    <Text style={styles.heading}>Welcome, Username</Text>

                    <Text style={styles.dashboardPara}>Manage Your Server Hosting & Cloud Services. Set up live streaming, manage cloud storage, deploy static websites, and support IoT devices.</Text>

                    <View style={styles.dashboardItemsWrapper}>
                        <View style={styles.dashboardWrapperItem}>
                            <Image source={deploymentIcon} style={{ height: 33, width: 33 }} />
                            <Text style={styles.dashboardItemsHeading}>Deployment </Text>
                        </View>

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


                    </View>
                </React.Fragment>}

            {/* <Text style={{ fontSize: 20 }}> Value of Password from Context {passwordContext} </Text> */}

        </View>
    );
}
