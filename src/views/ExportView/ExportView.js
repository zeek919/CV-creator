import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PDFDocument from '../../components/PDFDocument/PDFDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';
import personalDataContext from '../../context/personalDataContext';
import style from './ExportView.module.scss';

class ExportView extends Component {
    render() {
        return (
            <personalDataContext.Consumer>
                {({ basic }) => (
                    <div className={style.wrapper}>
                        <PDFDownloadLink
                            document={<PDFDocument />}
                            fileName="movielist.pdf"
                            className={style.button}
                        >
                            Export your CV!
                        </PDFDownloadLink>
                        <button onClick={() => console.log(basic.name)}>
                            asdasd
                        </button>
                        <Header />
                    </div>
                )}
            </personalDataContext.Consumer>
        );
    }
}
export default ExportView;
