import React, { Component } from 'react';
import Steps from '../../components/Steps/Steps';
import FormSkills from '../../components/Skills/FormSkills/FormSkills';
import SkillsContainer from '../../components/Skills/SkillsContainer/SkillsContainer';
import ChangeLayout from '../../components/ChangeLayout/ChangeLayout';
import nextPage from '../../helpers/nextPage';
import infoContext from '../../context/infoContext';
import style from './SkillsView.module.scss';

class EducationView extends Component {
    state = {
        counter: 0,
        name: {
            value: '',
            error: true,
        },
        level: {
            value: '',
            error: false,
        },
        skillDescribe: {
            value: '',
            error: false,
        },
        skills: [],
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

        const skillsItem = {
            count: this.state.counter,
            name: this.state.name.value,
            level: this.state.level.value,
            describe: this.state.skillDescribe.value,
        };

        this.setState({ counter: this.state.counter + 1 });

        if (!this.errorChecker()) {
            this.setState(prevState => ({
                skills: [...prevState.skills, skillsItem],
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
            skills: this.state.skills.filter(educationItem => {
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
                        <Steps current={5} />
                        <div className={style.wrapper}>
                            <div className={style.insideWrapper}>
                                <FormSkills
                                    onChangeHandler={this.handleChange}
                                    onSubmitHandler={this.handleSubmit}
                                />
                                <SkillsContainer
                                    skills={this.state.skills}
                                    handleDelete={this.handleDelete}
                                />
                            </div>
                            <div className={style.change}>
                                <ChangeLayout />
                            </div>
                            <div className={style.buttonWrapper}>
                                <button
                                    onClick={() => {
                                        update('skills', this.state.skills);
                                        nextPage(this.props, '/links');
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
