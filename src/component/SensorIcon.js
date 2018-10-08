import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
};

export default class SensorIcon extends React.Component {
    render() {
        const { sensorIcon, icon, iconText } = styles;
        const { title, imagePath } = this.props;

        return (
            <View style={sensorIcon}>
                <Image
                    style={icon}
                    source={imagePath}
                />
                <Text style={iconText}>{title}</Text>
            </View>
        );
    }
}

SensorIcon.propTypes = {
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
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
});
