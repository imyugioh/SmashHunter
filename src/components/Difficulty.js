import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Linking
} from 'react-native';
import styles from '../assets/popupStyles';
import { translate } from '../services/translationService';
import IMAGES from '../assets/images';

export default class LevelComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.clearScreen}>
                <View style={styles.startPanel}>
                    <Text style={styles.panelTitle}>Choose difficulty</Text>
                    <View>
                    <TouchableOpacity style={styles.startButton}
                        onPress={() => this.props.onStart(40)}>
                        <Text style={styles.startText}>{translate('easy')}</Text>
                    </TouchableOpacity>  

                    <TouchableOpacity style={styles.startButton}
                        onPress={() => this.props.onStart(30)}>
                        <Text style={styles.startText}>{translate('medium')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startButton}
                        onPress={() => this.props.onStart(20)}>
                        <Text style={styles.startText}>{translate('hard')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.props.onBack}
                        style={[styles.startButton, { backgroundColor: 'tomato', borderColor: 'white' }]}>
                        <Image style={styles.startIcon} resizeMode="contain" source={IMAGES.backIcon} />
                        <Text style={[styles.startText, { color: 'white' }]}>{translate('back')}</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}