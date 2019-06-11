import React, { Component } from 'react';
import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial
} from "@expo/vector-icons";


export class Icon extends Component {
  constructor(props) {
    super(props);    
  }

  componentDidMount(){
      if(this.props.type){
          this.setIcon(this.props.type)
      }
  }

  componentWillMount(){
      this.props.type && this.setIcon(this.props.type);
  }

  setIcon(iconType){
    switch(iconType){
        case "AntDesign": this.icon = AntDesign; break;
        case "Entypo": this.icon = Entypo; break;
        case "EvilIcons": this.icon = EvilIcons; break;
        case "Feather": this.icon = Feather; break;
        case "FontAwesome": this.icon = FontAwesome; break;
        case "Foundation": this.icon = Foundation; break;
        case "Ionicons": this.icon = Ionicons; break;
        case "MaterialCommunityIcons": this.icon = MaterialCommunityIcons; break;
        case "MaterialIcons": this.icon = MaterialIcons; break;
        case "Octicons": this.icon = Octicons; break;
        case "SimpleLineIcons": this.icon = SimpleLineIcons; break;
        case "Zocial": this.icon = Zocial; break;
        default:
            this.icon = Ionicons;
    }
  }

    render() {
        return (
            <this.icon {...this.props} />
        );
    }
}
