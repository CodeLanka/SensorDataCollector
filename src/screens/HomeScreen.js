import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
};

// TODO: Break divider into a component
export default class HomeScreen extends React.Component {
    render() {
        const {
            container,
            actionContainer,
            sensorContainer,
            detailContainer,
            dividerText,
            dividerContainer,
            actionButtonContainer,
            actionButton,
            actionButtonText,
            sensorIconContainer,
            sensorIcon,
            icon,
            iconText,
            detailListContainer,
            listItem,
            listLabel,
            listValue,
        } = styles;
        return (
            <View style={container}>
                <View style={actionContainer}>
                    <View style={actionButtonContainer}>
                        <TouchableOpacity style={actionButton}>
                            <Text style={actionButtonText}>START</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={sensorContainer}>
                    <View style={dividerContainer}>
                        <Text style={dividerText}>Active sensors</Text>
                    </View>
                    <View style={sensorIconContainer}>
                        <View style={sensorIcon}>
                            <Image
                                style={icon}
                                source={require('../../assets/images/compass-gary-100.png')}
                            />
                            <Text style={iconText}>Compass</Text>
                        </View>
                        <View style={sensorIcon}>
                            <Image
                                style={icon}
                                source={require('../../assets/images/gyroscope-green-100.png')}
                            />
                            <Text style={iconText}>Accelerometer & Gyroscope</Text>
                        </View>
                        <View style={sensorIcon}>
                            <Image
                                style={icon}
                                source={require('../../assets/images/gps-green-100.png')}
                            />
                            <Text style={iconText}>GPS</Text>
                        </View>
                        <View style={sensorIcon}>
                            <Image
                                style={icon}
                                source={require('../../assets/images/proximity-green-100.png')}
                            />
                            <Text style={iconText}>Proximity</Text>
                        </View>
                    </View>
                    <View style={detailContainer}>
                        <View style={dividerContainer}>
                            <Text style={dividerText}>Other informations</Text>
                        </View>
                        <View style={detailListContainer}>
                            <View style={listItem}>
                                <Text style={listLabel}>Current status</Text>
                                <Text style={listValue}>N/A</Text>
                            </View>
                            <View style={listItem}>
                                <Text style={listLabel}>Device type</Text>
                                <Text style={listValue}>Nexus 5X</Text>
                            </View>
                            <View style={listItem}>
                                <Text style={listLabel}>Operating system</Text>
                                <Text style={listValue}>Android 8.1.0</Text>
                            </View>
                            <View style={listItem}>
                                <Text style={listLabel}>Identification code</Text>
                                <Text style={listValue}>GDG_TESTERS</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    actionContainer: {
        flex: 1,
        backgroundColor: '#16a085',
        paddingTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sensorContainer: {
        flex: 2,
    },
    detailContainer: {
    },
    dividerContainer: {
        backgroundColor: '#808080',
        padding: 5,
    },
    dividerText: {
        color: '#fff',
    },
    actionButtonContainer: {
        height: 100,
        width: 250,
        backgroundColor: '#008080',
        borderRadius: 50,
    },
    actionButton: {
        flex: 1,
        backgroundColor: '#12806a',
        justifyContent: 'center',
        borderRadius: 50,
    },
    actionButtonText: {
        fontSize: 38,
        textAlign: 'center',
        color: '#fff',
    },
    sensorIconContainer: {
        flexDirection: 'row',
    },
    sensorIcon: {
        flex: 1,
        padding: 10,
    },
    icon: {
        width: (dimensions.width - 10) / 4,
        resizeMode: 'contain',
    },
    iconText: {
        textAlign: 'center',
    },
    detailListContainer: {
        padding: 5,
    },
    listItem: {
        flexDirection: 'row',
        paddingVertical: 5,
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 1,
    },
    listLabel: {
        flex: 1,
    },
    listValue: {
        flex: 1,
    },
});
