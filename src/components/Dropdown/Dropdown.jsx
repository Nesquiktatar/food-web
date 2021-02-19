import React, {Component} from 'react';
import s from './Dropdown.module.css'

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false}
    }

    toggleState() {
        this.setState({isOpened: !this.state.isOpened})
    }

    render() {
        let dropdown;
        if (this.state.isOpened) {
            dropdown = this.props.dropdown;
        }

        return (
            <div onMouseOver={this.toggleState.bind(this)} className={s.navbarButton}>
                {this.props.buttonName}
                <div>{dropdown}</div>
            </div>
        )
    }
}

export default Dropdown;

