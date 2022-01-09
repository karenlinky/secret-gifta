import React from 'react'
import { Form, useFormikContext } from "formik";
import Text from '../functionalComponents/text/Text';
import TextBox from '../functionalComponents/textBox/TextBox';
import ValidatedField from '../functionalComponents/validatedField/ValidatedField';
import DateSelector from '../functionalComponents/dateSelector/DateSelector';
import EditGiftas from './EditGiftas';
import TextDescribe from '../functionalComponents/text/TextDescribe';
import './eventDetailPage.css'

const EditEventForm = () => {
    const { values, setFieldValue } = useFormikContext();

    return (
        <Form autoComplete="off">
            <div className={"eventDetailSection eventDetailSectionSameLine"}>
                <div>
                    <Text className={"eventDetailSectionHeader"}>Event Name</Text>
                </div>
                <div>
                    <TextDescribe>Give your event a name to help identify your event.</TextDescribe>
                </div>
                <div className={"eventDetailSectionContent"}>
                    <ValidatedField
                        as={TextBox}
                        name={"name"}
                        placeholder={"Name"}
                    />
                </div>
            </div>
            <div className={"eventDetailSection eventDetailSectionSameLine"}>
                <div>
                    <Text className={"eventDetailSectionHeader"}>Date</Text>
                </div>
                <div>
                    <TextDescribe>What day will the gift-exchange event occur?</TextDescribe>
                </div>
                <div className={"eventDetailSectionContent"}>
                    <ValidatedField
                        as={DateSelector}
                        name={'date'}
                        selected={values.date}
                        onChange={(date) => setFieldValue('date', date)}
                        minDate={new Date()}
                    />
                </div>
            </div>
            <div className={"eventDetailSection eventDetailSectionSameLine"}>
                <div>
                    <Text className={"eventDetailSectionHeader"}>Gift Value Range</Text>
                </div>
                <div>
                    <TextDescribe>How much should each gift be?</TextDescribe>
                </div>
                <div className={"eventDetailSectionContent"}>
                    <ValidatedField
                        as={TextBox}
                        name={'min'}
                        placeholder={"Min"}
                        className={'fieldShort'}
                        type={'number'}
                    />
                    <Text className={'giftValueSeparator'}>to</Text>
                    <ValidatedField
                        as={TextBox}
                        name={'max'}
                        placeholder={"Max"}
                        className={'fieldShort'}
                        type={'number'}
                    />
                </div>
            </div>
            <div className={"eventDetailSection"}>
                <div>
                    <Text className={"eventDetailSectionHeader"}>Participants</Text>
                </div>
                <div>
                    <TextDescribe>Add participants by searching their username.<br/>Remove participants by clicking on their name.</TextDescribe>
                </div>
                <div className={"eventDetailSectionContent"}>
                    <EditGiftas giftas={values.giftas} setFieldValue={setFieldValue} />
                </div>
            </div>
            <div className={"eventDetailSection"}>
                <div>
                    <Text className={"eventDetailSectionHeader"}>Number of gifts</Text>
                </div>
                <div>
                    <TextDescribe>How many gifts are each participants giving out?</TextDescribe>
                </div>
                <div className={"eventDetailSectionContent"}>
                <ValidatedField
                        as={TextBox}
                        name={'number'}
                        placeholder={"#"}
                        className={'fieldShort'}
                        type={'number'}
                    />
                </div>
            </div>
        </Form>
    )
}

export default EditEventForm
