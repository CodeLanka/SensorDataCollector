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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SensorIcon from '../component/SensorIcon';
import ListItem from '../component/ListItem';
import Divider from '../component/Divider';

import {
    openSelectorAction,
    closeSelectorAction,
    levelOneChangeAction,
    levelTwoChangeAction,
    levelThreeChangeAction,
    levelFourChangeAction,
} from '../actions/selectorActions';

// TODO: Break divider into a component
class HomeScreen extends React.Component {
    state = {
        levelOneData: [
            { value: null, label: 'Please select transpotation method' },
            { value: 'TRAIN', label: 'Train' },
            { value: 'BUS', label: 'Bus' },
            { value: 'WALKING', label: 'Walking' },
            { value: 'PERSONAL', label: 'Car/Personal vehicle' },
            { value: 'BIKE', label: 'Bike' },
            { value: 'BICYCLE', label: 'Bicycle' },
            { value: 'OTHER', label: 'Other' },
        ],
        levelTwoData: {
            TRAIN: [
                { value: null, label: 'Please select train type' },
                { value: 'EXPRESS', label: 'Express' },
                { value: 'SLOW', label: 'Slow' },
                { value: 'INTERCITY', label: 'Intercity' },
            ],
            ROAD: [
                { value: null, label: 'Please select road type' },
                { value: 'HIGHWAY', label: 'Highway' },
                { value: 'CARPET', label: 'Carpet road' },
                { value: 'LOW_MAINTAINANCE', label: 'Road with low maintainance' },
                { value: 'GRAVEL', label: 'Gravel road' },
                { value: 'PATH', label: 'Path' },
            ],
        },
        levelThreeData: {
            POSSITION: [
                { value: null, label: 'Please select possition type' },
                { value: 'SITTING', label: 'Sitting' },
                { value: 'STANDING', label: 'Standing' },
            ],
            CONDITION: [
                { value: null, label: 'Please select condition type' },
                { value: 'BRANDNEW', label: 'Brandnew' },
                { value: 'OLD', label: 'Old(10+ years)' },
            ],
            ROLE: [
                { value: null, label: 'Please select role' },
                { value: 'RIDER', label: 'rider' },
                { value: 'PASSENGER', label: 'passenger' },
            ],
        },
        levelFourData: {
            CLASS: [
                { value: null, label: 'Please select class' },
                { value: 'FIRST_CLASS', label: '1st class' },
                { value: 'SECOND_CLASS', label: '2nd class' },
                { value: 'THIRD_CLASS', label: '3rd class' },
            ],
            TYPE: [
                { value: null, label: 'Please select type of bus' },
                { value: 'HIGHWAY', label: 'Highway bus' },
                { value: 'INTERCITY', label: 'Intercity' },
                { value: 'SEMI_LUXURY', label: 'Semi luxury' },
                { value: 'NORMAL', label: 'Normal' },
                { value: 'DOUBLE_DECKER', label: 'Double decker' },
                { value: 'ONE_DOOR', label: 'One door bus' },
            ],
            MANFATURING_COUNTRY: [
                { value: null, label: 'Please select manufacturing country' },
                { value: 'JAPAN', label: 'Japan' },
                { value: 'INDIA', label: 'India' },
                { value: 'OTHER', label: 'Other' },
            ],
        },
    };

    static propTypes = {
        visibleLabelSelector: PropTypes.bool.isRequired,
        openSelector: PropTypes.func.isRequired,
        closeSelector: PropTypes.func.isRequired,
        levelOneChange: PropTypes.func.isRequired,
        levelTwoChange: PropTypes.func.isRequired,
        levelThreeChange: PropTypes.func.isRequired,
        levelFourChange: PropTypes.func.isRequired,
        selectedLevelOneType: PropTypes.string,
        selectedLevelTwoType: PropTypes.string,
        selectedLevelThreeType: PropTypes.string,
        selectedLevelFourType: PropTypes.string,
    }

    levelOneList = () => {
        const { levelOneData } = this.state;
        return levelOneData.map(obj => <Picker.Item label={obj.label} value={obj.value} key={obj.value} />);
    }

    levelTwoList = () => {
        const { levelTwoData } = this.state;
        const { selectedLevelOneType } = this.props;
        if (selectedLevelOneType === 'TRAIN') {
            return levelTwoData.TRAIN.map(obj => <Picker.Item label={obj.label} value={obj.value} key={obj.value} />);
        }
        return levelTwoData.ROAD.map(obj => <Picker.Item label={obj.label} value={obj.value} key={obj.value} />);
    }

    levelThreeList = () => {
        const { levelThreeData } = this.state;
        const { selectedLevelOneType } = this.props;
        if (selectedLevelOneType === 'TRAIN' || selectedLevelOneType === 'BUS') {
            return levelThreeData.POSSITION.map(obj => <Picker.Item label={obj.label} value={obj.value} key={obj.value} />);
        }
        if (selectedLevelOneType === 'PERSONAL') {
            return levelThreeData.CONDITION.map(obj => <Picker.Item label={obj.label} value={obj.value} key={obj.value} />);
        }
        if (selectedLevelOneType === 'BIKE' || selectedLevelOneType === 'BICYCLE') {
            return levelThreeData.ROLE.map(obj => <Picker.Item label={obj.label} value={obj.value} key={obj.value} />);
        }
        return <Picker.Item label="N/A" value={null} />;
    }

    levelFourList = () => {
        const { levelFourData } = this.state;
        const { selectedLevelOneType } = this.props;
        if (selectedLevelOneType === 'TRAIN') {
            return levelFourData.CLASS.map(obj => <Picker.Item label={obj.label} value={obj.value} key={obj.value} />);
        }
        if (selectedLevelOneType === 'BUS') {
            return levelFourData.TYPE.map(obj => <Picker.Item label={obj.label} value={obj.value} key={obj.value} />);
        }
        if (selectedLevelOneType === 'PERSONAL') {
            return levelFourData.MANFATURING_COUNTRY.map(obj => <Picker.Item label={obj.label} value={obj.value} key={obj.value} />);
        }
        return <Picker.Item label="N/A" value={null} />;
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
        const {
            visibleLabelSelector,
            openSelector,
            closeSelector,
            levelOneChange,
            levelTwoChange,
            levelThreeChange,
            levelFourChange,
            selectedLevelOneType,
            selectedLevelTwoType,
            selectedLevelThreeType,
            selectedLevelFourType,
        } = this.props;
        return (
            <View style={container}>
                <Modal
                    animationType="slide"
                    transparent
                    visible={visibleLabelSelector}
                    onRequestClose={() => { this.setModalVisible(false); }}
                >
                    <View style={modalContainer}>
                        <Divider title="Please select current status" />
                        <View style={modalInnerContainer}>
                            <View style={{ flex: 1 }}>
                                <Picker
                                    selectedValue={selectedLevelOneType}
                                    onValueChange={itemValue => levelOneChange(itemValue)}
                                    style={{ height: 40 }}
                                >
                                    {this.levelOneList()}
                                </Picker>
                                {selectedLevelOneType != null && (
                                    <Picker
                                        selectedValue={selectedLevelTwoType}
                                        onValueChange={itemValue => levelTwoChange(itemValue)}
                                        style={{ height: 40 }}
                                    >
                                        {this.levelTwoList()}
                                    </Picker>
                                )}
                                {selectedLevelOneType != null && (
                                    <Picker
                                        selectedValue={selectedLevelThreeType}
                                        onValueChange={itemValue => levelThreeChange(itemValue)}
                                        style={{ height: 40 }}
                                    >
                                        {this.levelThreeList()}
                                    </Picker>
                                )}
                                {selectedLevelOneType != null && (
                                    <Picker
                                        selectedValue={selectedLevelFourType}
                                        onValueChange={itemValue => levelFourChange(itemValue)}
                                        style={{ height: 40 }}
                                    >
                                        {this.levelFourList()}
                                    </Picker>
                                )}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{ marginLeft: 5 }}>
                                    <Button
                                        onPress={() => closeSelector()}
                                        title="CANCEL"
                                        color="#5b5b5b"
                                    />
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <Button
                                        onPress={() => closeSelector()}
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
                        <TouchableOpacity style={actionButton} onPress={() => { openSelector(); }}>
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

function mapStateToProps(state) {
    return {
        visibleLabelSelector: state.modals.visibleLabelSelector,
        selectedLevelOneType: state.lavels.selectedLevelOneType,
        selectedLevelTwoType: state.lavels.selectedLevelTwoType,
        selectedLevelThreeType: state.lavels.selectedLevelThreeType,
        selectedLevelFourType: state.lavels.selectedLevelFourType,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        openSelector: () => dispatch(openSelectorAction()),
        closeSelector: () => dispatch(closeSelectorAction()),
        levelOneChange: payload => dispatch(levelOneChangeAction(payload)),
        levelTwoChange: payload => dispatch(levelTwoChangeAction(payload)),
        levelThreeChange: payload => dispatch(levelThreeChangeAction(payload)),
        levelFourChange: payload => dispatch(levelFourChangeAction(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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
