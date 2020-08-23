import React from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import { globalStyles } from '../styles/global'
import { Formik } from "formik";
import FlatButton from '../shared/button'

export default function ReviewDetails({addReview}) {

    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                onSubmit={(values,actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={{...globalStyles.input,...styles.formControl}}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />

                        <TextInput
                            multiline
                            style={{...globalStyles.input,...styles.formControl}}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />

                        <TextInput
                            style={{...globalStyles.input,...styles.formControl}}
                            placeholder='Review (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        {/*<Button title='submit' color='maroon' onPress={props.handleSubmit} />*/}
                        <FlatButton text='submit' onPress={props.handleSubmit} />

                    </View>
                )}
            </Formik>
        </View>
    )


}

const styles = StyleSheet.create({
    formControl: {
        marginBottom: 10,
    }
})