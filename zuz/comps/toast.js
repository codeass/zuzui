import React, { Component } from 'react';
import { 
    View,
    Text,
    Animated,
    Platform
} from 'react-native';
import def from "zuz/vars";

export class Toast extends Component {
    constructor(props) {
        super(props);    
        this.posY = new Animated.Value(-(def.deviceHeight / 2));
        this.timeout = null;
    }

    state = {
        text: "Loading"
    }

    componentDidMount(){
        this.props.onRef && this.props.onRef(this);
    }

    componentWillUnmount(){
        this.props.onRef && this.props.onRef(undefined);
    }

    getPaddingTop(){
        return def.statusBarHeight + 10;
    }

    getTop(){
        return 0;
    }

    show(text, duration){
        var self = this;
        self.timeout && clearTimeout(self.timeout); 
        self.setState({text: text}, () => {
            self.timeout = setTimeout(()=>{ self.hide(); }, duration * 1000);
            Animated.timing(self.posY, {
                toValue: self.getTop(),
                duration: 200
            }).start(()=>{
                console.log(self.state.y);
            });
        });
    }

    hide(){        
        var self = this;
        self.timeout && clearTimeout(self.timeout);
        Animated.timing(self.posY, {
            toValue: -(10000), //-(def.deviceHeight / 2),
            duration: 200
        }).start();
    }

    render() {

        var self = this;

        return (
            <Animated.View style={[
                {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 999999
                },
                {
                    top: self.posY
                }
            ]}>

                <View style={[
                    {
                        backgroundColor: "#000000",
                        padding: 15
                    },
                    {
                        paddingTop: self.getPaddingTop()
                    },
                    self.props.style
                ]}>

                    <Text style={[
                        {
                            color: "white",
                            fontFamily: "font"
                        },
                        {...self.props.textStyle}
                    ]}>{self.state.text}</Text>

                </View>

            </Animated.View>
        );

    }
}
