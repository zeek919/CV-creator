import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../../style/common.css';
import headerIcon from '../../data/headerIcon';
import cvLayout from '../../data/cvLayout';
import dataContext from '../../context/dataContext';
import HomeView from '../HomeView/HomeView';
import LayoutView from '../LayoutView/LayoutView';
import BasicInfoView from '../BasicInfoView/BasicInfoView';
import WorkView from '../WorkView/WorkView';
import EducationView from '../EducationView/EducationView';
import SkillsView from '../SkillsView/SkillsView';
import LinksView from '../LinksView/LinksView';
import ExportView from '../ExportView/ExportView';
import infoContext from '../../context/infoContext';
import personalDataContext from '../../context/personalDataContext';

const icon = {
    headerIcon,
    cvLayout,
};

class Root extends Component {
    state = {};

    updateContext = (box, personalData) => {
        this.setState({ [box]: personalData });
    };

    render() {
        return (
            <dataContext.Provider value={icon}>
                <infoContext.Provider value={this.updateContext}>
                    <personalDataContext.Provider value={this.state}>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/" component={HomeView} />
                                <Route path="/layout" component={LayoutView} />
                                <Route
                                    path="/basic"
                                    component={BasicInfoView}
                                />
                                <Route path="/work" component={WorkView} />
                                <Route
                                    path="/education"
                                    component={EducationView}
                                />
                                <Route path="/skills" component={SkillsView} />
                                <Route path="/links" component={LinksView} />
                                <Route path="/export" component={ExportView} />
                            </Switch>
                        </BrowserRouter>
                    </personalDataContext.Provider>
                </infoContext.Provider>
            </dataContext.Provider>
        );
    }
}

export default Root;
