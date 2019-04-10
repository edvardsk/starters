import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import ReactHelmet from 'react-helmet';
import ImmutablePropTypes from 'react-immutable-proptypes';


import TestForm from './TestForm';
import styles from './styles';


@injectSheet(styles)
export default class Test extends PureComponent {
  static propTypes = {
    groups: ImmutablePropTypes.list,
    isOk: PropTypes.bool.isRequired,
    submitValue: PropTypes.func.isRequired,
    submittedValue: PropTypes.string,
    openTestModal: PropTypes.func.isRequired,
    initiateRequest: PropTypes.func,
    cancelRequest: PropTypes.func
  };
  onRequestClick = () => {
    this.props.initiateRequest('Post message');
  };

  onCancelClick = () => {
    this.props.cancelRequest();
  };

  onResetClick = () => {
    this.props.history.push('/reset/:activationLink');
  };

  onTestClick = () => {
      this.props.history.push('/reset/activationLink');
  };

  openModal = () => this.props.openTestModal();

  render() {
    const {
      groups,
      isOk,
      submitValue,
      submittedValue,
      classes
    } = this.props;

    return (
      <div className={classes.container}>
        <ReactHelmet
          title="Test screen"
        />
        <div className={classes.groupsSize}>
          {groups.size}
        </div>
        {
          isOk && <TestForm onSubmit={submitValue} />
        }
        <div>
        </div>
        <div>
          {submittedValue}
        </div>
        <button onClick={this.onRequestClick}>Request</button>
        <button onClick={this.onCancelClick}>Cancel request</button>
        <button onClick={this.openModal}>Open modal</button>
        <button onClick={this.onResetClick}>Reset</button>
        <button onClick={this.onTestClick}>Reset matchpath</button>
      </div>
    );
  }
}
