import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Modal,
    Picker,
    Button,
} from 'react-native';

import SensorIcon from '../component/SensorIcon';
import ListItem from '../component/ListItem';
import Divider from '../component/Divider';

// TODO: Break divider into a component
export default class HomeScreen extends React.Component {
    state = {
        modalVisible: false,
        levelOne: null,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const {
            container,
            actionContainer,
            sensorContainer,
            detailContainer,
            actionButtonContainer,
            actionButton,
            actionButtonText,
            sensorIconContainer,
            detailListContainer,
            modalContainer,
            modalInnerContainer,
        } = styles;
        const { modalVisible, levelOne } = this.state;
        return (
            <View style={container}>
                <Modal
                    animationType="slide"
                    transparent
                    visible={modalVisible}
                    onRequestClose={() => { this.setModalVisible(false); }}
                >
                    <View style={modalContainer}>
                        <Divider title="Please select current status" />
                        <View style={modalInnerContainer}>
                            <View style={{ flex: 1 }}>
                                <Picker
                                    selectedValue={levelOne}
                                    onValueChange={itemValue => this.setState({ levelOne: itemValue })}
                                    style={{ height: 40 }}
                                >
                                    <Picker.Item label="Please select transpotation method" value={null} />
                                    <Picker.Item label="Train" value="Train" />
                                    <Picker.Item label="Bus" value="Bus" />
                                    <Picker.Item label="Walking" value="Walking" />
                                    <Picker.Item label="Car/Personal vehicle" value="Personal" />
                                    <Picker.Item label="Bike" value="Bike" />
                                    <Picker.Item label="Bicycle" value="Bicycle" />
                                    <Picker.Item label="Other" value="other" />
                                </Picker>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{ marginLeft: 5 }}>
                                    <Button
                                        onPress={() => this.setModalVisible(!modalVisible)}
                                        title="CANCEL"
                                        color="#5b5b5b"
                                    />
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <Button
                                        onPress={() => this.setModalVisible(!modalVisible)}
                                        title="START"
                                        color="#12806a"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={actionContainer}>
                    <View style={actionButtonContainer}>
                        <TouchableOpacity style={actionButton} onPress={() => { this.setModalVisible(true); }}>
                            <Text style={actionButtonText}>START</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={sensorContainer}>
                    <Divider title="Active sensors" />
                    <View style={sensorIconContainer}>
                        <SensorIcon title="Compass" imagePath={require('../../assets/images/gyroscope-green-100.png')} />
                        <SensorIcon title="Accelerometer & Gyroscope" imagePath={require('../../assets/images/gyroscope-green-100.png')} />
                        <SensorIcon title="GPS" imagePath={require('../../assets/images/gps-green-100.png')} />
                        <SensorIcon title="Proximity" imagePath={require('../../assets/images/proximity-green-100.png')} />
                    </View>
                    <View style={detailContainer}>
                        <Divider title="Other informations" />
                        <View style={detailListContainer}>
                            <ListItem label="Current status" value="N/A" />
                            <ListItem label="Device type" value="Nexus 5X" />
                            <ListItem label="Operating system" value="Android 8.1.0" />
                            <ListItem label="Identification code" value="GDG_TESTERS" />
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
    actionButtonContainer: {
        height: 100,
        width: 250,
        backgroundColor: '#0E6655',
        borderRadius: 50,
    },
    actionButton: {
        flex: 1,
        backgroundColor: '#12806a',
        justifyContent: 'center',
        borderRadius: 50,
        borderColor: '#0E6655',
        borderWidth: 5,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 50,
        shadowOffset: { width: 1, height: 13 },

    },
    actionButtonText: {
        fontSize: 38,
        textAlign: 'center',
        color: '#fff',
    },
    sensorIconContainer: {
        flexDirection: 'row',
    },
    detailListContainer: {
        padding: 5,
    },
    modalContainer: {
        flex: 1,
        marginVertical: 100,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        elevation: 5,
    },
    modalInnerContainer: {
        flex: 1,
        padding: 5,
    },
});
