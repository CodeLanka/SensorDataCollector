import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ListItem extends React.Component {
    render() {
        const { listItem, listLabel, listValue } = styles;
        const { label, value } = this.props;

        return (
            <View style={listItem}>
                <Text style={listLabel}>{label}</Text>
                <Text style={listValue}>{value}</Text>
            </View>
        );
    }
}

ListItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
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
