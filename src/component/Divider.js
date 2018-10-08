import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ListItem extends React.Component {
    render() {
        const { dividerContainer, dividerText } = styles;
        const { title } = this.props;

        return (
            <View style={dividerContainer}>
                <Text style={dividerText}>{title}</Text>
            </View>
        );
    }
}

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    dividerContainer: {
        backgroundColor: '#808080',
        padding: 5,
    },
    dividerText: {
        color: '#fff',
    },
});
