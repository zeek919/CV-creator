import React from 'react';
import { Document, Page, View, StyleSheet, Text } from '@react-pdf/renderer';
import personalDataContext from '../../context/personalDataContext';

const style = StyleSheet.create({
    page: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    section: {
        backgroundColor: '#3c3c3c',
    },
});

const PDFDocument = () => (
    <personalDataContext.Consumer>
        {a => (
            <Document>
                <Page size="A4" style={style.page}>
                    <View style={style.section}>
                        <Text>{a.basic.name}</Text>
                        <Text>{a.basic.surname}</Text>
                        <Text>{a.basic.address}</Text>
                        <Text>{a.basic.phone}</Text>
                    </View>
                </Page>
            </Document>
        )}
    </personalDataContext.Consumer>
);

export default PDFDocument;
