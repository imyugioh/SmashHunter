import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Linking,
} from 'react-native';
import styles from '../assets/popupStyles';
import { translate } from '../services/translationService';
import IMAGES from '../assets/images';



export default class CreditsComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.clearScreen}>
                <View style={styles.rulesPanel}>
                    <Text style={styles.panelTitle}>{translate("about")}</Text>
                    <Text style={styles.regularText}>{translate("credit")}</Text>
                    <TouchableOpacity
                        onPress={this.props.onBack}
                        style={[styles.startButton, { backgroundColor: 'tomato', borderColor: 'white' }]}>
                        <Image style={styles.startIcon} resizeMode="contain" source={IMAGES.backIcon} />
                        <Text style={[styles.startText, { color: 'white' }]}>{translate('back')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}