import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import IconFont from '../../components/iconFont/IconFont';
import './NavTab.scss';

class NavTab extends Component {
    static defaultPropTypes = {
    }

    static propTypes = {
        iconType: PropTypes.string.isRequired,
        selectedIconType: PropTypes.string.isRequired,
        navText: PropTypes.string.isRequired,
        navLink: PropTypes.string.isRequired,
    }

    constructor(props) {
      super(props);
    
      this.state = {
         isSelected: false,
      }
    }
    

    handleSwitchTab = event => {
        if (!this.state.isSelected) {
            this.setState({
                isSelected: true,
            });
        }
    }

    render() {
        return (
            <div className="nav-tab" onClick={this.handleSwitchTab}>
                <NavLink className="nav-link" to={this.props.navLink} activeClassName="active-nav-tab">
                    <IconFont
                        className="nav-icon-font"
                        iconType={`#icon-${this.state.isSelected ? this.props.selectedIconType : this.props.iconType}`}
                    />
                    <span className="nav-text">{this.props.navText}</span>
                </NavLink>
            </div>
        )
    }
}


export default NavTab;