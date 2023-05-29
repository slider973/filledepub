import * as PropTypes from "prop-types";
import React, {useState} from "react";
import {Box, Button, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {useFormik} from "formik";
import Questionnaire from "../../components/candidates/Questionnaire";
import {
    groupeQuestion1,
    groupeQuestion2,
    groupeQuestion3,
    groupeQuestion4,
    groupeQuestion5,
    groupeQuestion6,
    groupeQuestion7
} from "./GroupeQuestion";
import addData from "../../firebase/addData";
import {useRouter} from "next/router";

const components = {
    DropdownIndicator: null,
    IndicatorsContainer: () => null,
};


const getInitialValues = () => {
    const allQuestions = [
        ...groupeQuestion1,
        ...groupeQuestion2,
        ...groupeQuestion3,
        ...groupeQuestion4,
        ...groupeQuestion5,
        ...groupeQuestion6,
        ...groupeQuestion7,
    ];

    return allQuestions.reduce((acc, question, index) => {

        acc[question.question.idQuestion] = {
            question: question.question.name,
            answers: ""
        }

        return acc;
    }, {})
};




function FormTalentProfile(props) {
    const router = useRouter();
    const uid = props.uid;

    const [formValues, setFormValues] = useState({
        ...getInitialValues(),
    });
    const handleChange = (event, answer) => {
        if (event.target.checked) {
            setFormValues({
                            ...formValues,
                            [event.target.name]: {
                                ...formValues[event.target.name],
                                answers: answer
                            }
                        });
            return;
        }
        setFormValues({
            ...formValues,
            [event.target.name]: {
                ...formValues[event.target.name],
                answers: ""
            }
        });
    };
    const formik = useFormik({
        initialValues: {
            ...getInitialValues(),
        },
        onSubmit: (values, {setSubmitting }) => {
            console.log("je valide avec c est donner:", formValues)
            let answersMbt = [];
            for (let key in formValues) {
                answersMbt.push(formValues[key]);
            }
            addData("talents", uid, {
                answersMbt
            }).then(
                () => {
                    setSubmitting(false);
                    return router.push("/breif")
                }
            )
           // alert(JSON.stringify(values, null, 2));
        },
    });

    const steps = ['1', '2', '3','4','5','6','7'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };


    return <form className="edit-profile-form profile-form  mb-60" onSubmit={formik.handleSubmit} >
        <Box mb={5} textAlign="center">
            <Typography variant="h6">
                Quelle est la réponse (A ou B) qui exprime le mieux ta manière habituelle d’agir
                ?</Typography>
        </Box>

        <Box sx={{width: '100%'}}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}></StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{mt: 2, mb: 1}}>
                        Le onboarding est terminé !
                    </Typography>
                    {/*<Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>*/}
                    {/*    <Box sx={{flex: '1 1 auto'}}/>*/}
                    {/*    <Button>Reset</Button>*/}
                    {/*</Box>*/}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {
                        activeStep === 0 && <Questionnaire questions={groupeQuestion1} handleChange={handleChange} formValues={formValues}/> ||
                        activeStep === 1 && <Questionnaire questions={groupeQuestion2} handleChange={handleChange} formValues={formValues}/> ||
                        activeStep === 2 && <Questionnaire questions={groupeQuestion3} handleChange={handleChange} formValues={formValues}/> ||
                        activeStep === 3 && <Questionnaire questions={groupeQuestion4} handleChange={handleChange} formValues={formValues}/> ||
                        activeStep === 4 && <Questionnaire questions={groupeQuestion5} handleChange={handleChange} formValues={formValues}/> ||
                        activeStep === 5 && <Questionnaire questions={groupeQuestion6} handleChange={handleChange} formValues={formValues}/> ||
                        activeStep === 6 && <Questionnaire questions={groupeQuestion7} handleChange={handleChange} formValues={formValues}/>
                    }
                    <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{mr: 1}}
                        >
                            Retour
                        </Button>
                        <Box sx={{flex: '1 1 auto'}}/>
                        {/*{isStepOptional(activeStep) && (*/}
                        {/*    <Button color="inherit" onClick={handleSkip} sx={{mr: 1}}>*/}
                        {/*        Passer*/}
                        {/*    </Button>*/}
                        {/*)}*/}
                        {
                            activeStep === steps.length - 1 ?
                                <Button onClick={formik.handleSubmit} >
                                    Valider
                                </Button>
                                :
                                <Button onClick={handleNext} >
                                    Suivant
                                </Button>

                        }

                    </Box>
                </React.Fragment>
            )}
        </Box>
    </form>


}

export default FormTalentProfile;

FormTalentProfile.propTypes = {
    selected: PropTypes.any,
    onChange: PropTypes.func,
    inputValue: PropTypes.string,
    styles: PropTypes.shape({
        multiValueLabel: PropTypes.func,
        multiValueRemove: PropTypes.func,
        control: PropTypes.func,
        ValueContainer: PropTypes.func,
        menu: PropTypes.func,
        multiValue: PropTypes.func
    }),
    onChange1: PropTypes.func,
    onInputChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.any)
};
