import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from '../assets/popupStyles';
import { translate } from '../services/translationService';
import IMAGES from '../assets/images';

export default class StartComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.clearScreen}>
                <View style={styles.startPanel}>
                    <Text style={styles.startPanelTitle}>Boss Hunter</Text>
                    <TouchableOpacity style={styles.startPlayButton}
                        onPress={this.props.onStart}>
                        <Image style={styles.startIcon} resizeMode="contain" source={IMAGES.playIcon} />
                        <Text style={[styles.startText, { color: 'white' }]}>{translate('startGame')}</Text>
                    </TouchableOpacity>
                    <View>
                    <TouchableOpacity style={styles.startButton}
                        onPress={this.props.onRules}>
                        <Text style={styles.startText}>{translate('instructions')}</Text>
                    </TouchableOpacity>    
                    <TouchableOpacity style={styles.startButton}
                        onPress={this.props.onCredits}>
                        <Text style={styles.startText}>{translate('about')}</Text>
                    </TouchableOpacity>                
                    </View>
                </View>
            </View>
        );
    }
}