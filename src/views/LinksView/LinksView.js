import React, { Component } from 'react';
import Steps from '../../components/Steps/Steps';
import FormLinks from '../../components/Links/FormLinks/FormLinks';
import LinksContainer from '../../components/Links/LinksContainer/LinksContainer';
import ChangeLayout from '../../components/ChangeLayout/ChangeLayout';
import Textarea from '../../components/FormElements/Textarea/Textarea';
import nextPage from '../../helpers/nextPage';
import infoContext from '../../context/infoContext';
import style from './LinksView.module.scss';

class EducationView extends Component {
    state = {
        counter: 0,
        linksTitle: {
            value: '',
            error: true,
        },
        url: {
            value: '',
            error: true,
        },
        clause: {
            value: '',
            error: false,
        },
        links: [],
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

        const linksItem = {
            count: this.state.counter,
            title: this.state.linksTitle.value,
            url: this.state.url.value,
        };

        this.setState({ counter: this.state.counter + 1 });

        if (!this.errorChecker()) {
            this.setState(prevState => ({
                links: [...prevState.links, linksItem],
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
            links: this.state.links.filter(linksItem => {
                return (
                    linksItem.count !== Number.parseInt(event.target.value, 10)
                );
            }),
        });
    };

    render() {
        return (
            <infoContext.Consumer>
                {update => (
                    <div>
                        <Steps current={6} />
                        <div className={style.wrapper}>
                            <div className={style.insideWrapper}>
                                <div>
                                    <FormLinks
                                        onChangeHandler={this.handleChange}
                                        onSubmitHandler={this.handleSubmit}
                                    />
                                    <div className={style.bottomForm}>
                                        <Textarea
                                            describe="CV clause"
                                            id="clause"
                                            onChangeHandler={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <LinksContainer
                                    links={this.state.links}
                                    handleDelete={this.handleDelete}
                                />
                            </div>
                            <div className={style.change}>
                                <ChangeLayout />
                            </div>
                            <div className={style.buttonWrapper}>
                                <button
                                    onClick={() => {
                                        update('links', this.state.links);
                                        update(
                                            'clause',
                                            this.state.clause.value,
                                        );
                                        nextPage(this.props, '/export');
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
