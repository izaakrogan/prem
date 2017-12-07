import React from 'react';
import type { Children } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Home from '../Home';
import ModalRouter from '../ModalRouter';
import AlertRouter from '../AlertRouter';
import config from '../../config';

export class AppComp extends React.Component {

  componentDidMount() {
    console.log(`@${config('version')}`);
  };

  render() {
    return (
      <div>
        <ModalRouter history={this.props.history}/>
        <div style={this.getStyle()}>
          <Navbar />
          <Home />
          <Footer />
        </div>
      </div>
    );
  };

  getStyle() {
    return {
      position:'absolute',
      zIndex:1,
      bottom:0,
      top:0,
      right:0,
      left:0,
    };
  };
}

export const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps
) => {
  return {
    ...stateProps,
    ...ownProps,
  };
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(AppComp);
