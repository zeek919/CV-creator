import React, { Component } from 'react';
import Steps from '../../components/Steps/Steps';
import FormEducation from '../../components/Education/FormEducation/FormEducation';
import ChangeLayout from '../../components/ChangeLayout/ChangeLayout';
import EducationContainer from '../../components/Education/EducationContainer/EducationContainer';
import nextPage from '../../helpers/nextPage';
import infoContext from '../../context/infoContext';
import style from './EducationView.module.scss';

class EducationView extends Component {
    state = {
        counter: 0,
        educationPlace: {
            value: '',
            error: true,
        },
        yearFrom: {
            value: 'January',
            error: false,
        },
        monthFrom: {
            value: 1970,
            error: false,
        },
        yearTo: {
            value: 'January',
            error: false,
        },
        monthTo: {
            value: 1970,
            error: false,
        },
        educationTitle: {
            value: '',
            error: false,
        },
        educationDescribe: {
            value: '',
            error: false,
        },
        education: [],
    };

    handleChange = event => {
        const target = event.target.id;
        const targetValue = event.target.value;

        if (targetValue.length === 0) {
            this.setState({
                [target]: { value: event.target.value, error: true },
            });
        } else {
            this.setState({
                [target]: { value: event.target.value, error: false },
            });
        }
    };

    handleSubmit = event => {
        event.preventDefault();

        const educationItem = {
            count: this.state.counter,
            place: this.state.educationPlace.value,
            startInYear: this.state.yearFrom.value,
            startInMonth: this.state.monthFrom.value,
            endInYear: this.state.yearTo.value,
            endInMonth: this.state.monthTo.value,
            title: this.state.educationTitle.value,
            describe: this.state.educationDescribe.value,
        };

        this.setState({ counter: this.state.counter + 1 });

        if (!this.errorChecker()) {
            this.setState(prevState => ({
                education: [...prevState.education, educationItem],
            }));
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

    handleDelete = event => {
        this.setState({
            education: this.state.education.filter(educationItem => {
                return (
                    educationItem.count !==
                    Number.parseInt(event.target.value, 10)
                );
            }),
        });
    };

    render() {
        return (
            <infoContext.Consumer>
                {update => (
                    <div>
                        <Steps current={4} />
                        <div className={style.wrapper}>
                            <div className={style.insideWrapper}>
                                <FormEducation
                                    onChangeHandler={this.handleChange}
                                    onSubmitHandler={this.handleSubmit}
                                />
                                <EducationContainer
                                    education={this.state.education}
                                    handleDelete={this.handleDelete}
                                />
                            </div>
                            <div className={style.change}>
                                <ChangeLayout />
                            </div>
                            <div className={style.buttonWrapper}>
                                <button
                                    onClick={() => {
                                        update(
                                            'education',
                                            this.state.education,
                                        );
                                        nextPage(this.props, '/skills');
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </infoContext.Consumer>
        );
    }
}

export default EducationView;
