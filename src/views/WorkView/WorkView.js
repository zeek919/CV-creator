import React, { Component } from 'react';
import Steps from '../../components/Steps/Steps';
import FormWork from '../../components/Work/FormWork/FormWork';
import ChangeLayout from '../../components/ChangeLayout/ChangeLayout';
import WorkContainer from '../../components/Work/WorkContainer/WorkContainer';
import nextPage from '../../helpers/nextPage';
import infoContext from '../../context/infoContext';
import style from './WorkView.module.scss';

class WorkView extends Component {
    state = {
        counter: 0,
        place: {
            value: '',
            error: true,
        },
        startInYear: {
            value: 'January',
            error: false,
        },
        startInMonth: {
            value: 1970,
            error: false,
        },
        endInYear: {
            value: 'January',
            error: false,
        },
        endInMonth: {
            value: 1970,
            error: false,
        },
        describe: {
            value: '',
        },
        work: [],
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

        const job = {
            count: this.state.counter,
            place: this.state.place.value,
            startInYear: this.state.startInYear.value,
            startInMonth: this.state.startInMonth.value,
            endInYear: this.state.endInYear.value,
            endInMonth: this.state.endInMonth.value,
            describe: this.state.describe.value,
        };

        this.setState({ counter: this.state.counter + 1 });

        if (!this.errorChecker()) {
            this.setState(prevState => ({ work: [...prevState.work, job] }));
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
            work: this.state.work.filter(job => {
                return job.count !== Number.parseInt(event.target.value, 10);
            }),
        });
    };

    render() {
        return (
            <infoContext.Consumer>
                {update => (
                    <div>
                        <Steps current={3} />
                        <div className={style.wrapper}>
                            <div className={style.insideWrapper}>
                                <FormWork
                                    onChangeHandler={this.handleChange}
                                    onSubmitHandler={this.handleSubmit}
                                />
                                <WorkContainer
                                    jobs={this.state.work}
                                    handleDelete={this.handleDelete}
                                />
                            </div>
                            <div className={style.change}>
                                <ChangeLayout />
                            </div>
                        </div>
                        <div className={style.buttonWrapper}>
                            <button
                                onClick={() => {
                                    update('work', this.state.work);
                                    nextPage(this.props, '/education');
                                }}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </infoContext.Consumer>
        );
    }
}
export default WorkView;
