import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import InputText from '../FormElements/InputText/InputText';
import Textarea from '../FormElements/Textarea/Textarea';
import infoContext from '../../context/infoContext';
import style from './FormBasic.module.scss';

class FormBasic extends Component {
    state = {
        name: {
            value: '',
            error: true,
        },
        surname: {
            value: '',
            error: true,
        },
        address: {
            value: '',
            error: true,
        },
        phone: {
            value: '',
            error: true,
        },
        email: {
            value: '',
            error: true,
        },
        objective: {
            value: '',
        },
    };

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    handleChange = event => {
        const EvValue = event.target.value;
        this.setState({ [event.target.id]: EvValue });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (!this.errorChecker()) {
            const { history } = this.props;
            history.push('/work');
        }
    };

    errorChecker = () => {
        let errorCheck = false;
        Object.keys(this.state).forEach(element => {
            const error = this.state[element].error;
            if (error) {
                errorCheck = true;
            }
        });
        return errorCheck;
    };

    render() {
        return (
            <infoContext.Consumer>
                {update => (
                    <div className={style.wrapper}>
                        <h1>Basic Information</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <InputText
                                    id={'name'}
                                    describe={'Name*'}
                                    onChangeHandler={this.handleChange}
                                />
                                <InputText
                                    id={'surname'}
                                    describe={'Surname*'}
                                    onChangeHandler={this.handleChange}
                                />
                                <Textarea
                                    id={'address'}
                                    describe={'Address*'}
                                    onChangeHandler={this.handleChange}
                                />
                                <input type="file"></input>
                            </div>
                            <div>
                                <InputText
                                    id={'phone'}
                                    describe={'Phone*'}
                                    onChangeHandler={this.handleChange}
                                />
                                <InputText
                                    id={'email'}
                                    describe={'E-mail* '}
                                    onChangeHandler={this.handleChange}
                                />
                                <Textarea
                                    id={'objective'}
                                    describe={'Objective'}
                                    onChangeHandler={this.handleChange}
                                />
                            </div>
                            <div className={style.btnWrapper}>
                                <input
                                    type="submit"
                                    value="Next"
                                    onClick={() => update('basic', this.state)}
                                ></input>
                            </div>
                        </form>
                    </div>
                )}
            </infoContext.Consumer>
        );
    }
}

export default withRouter(FormBasic);
