import DatePicker from "react-datepicker";
import CreatableSelect from "react-select/creatable";
import * as PropTypes from "prop-types";
import React from "react";
import {Box, Button, Checkbox, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {label} from "yet-another-react-lightbox/core";
import {useFormik} from "formik";
import Questionnaire from "../../components/candidates/Questionnaire";

const components = {
    DropdownIndicator: null,
    IndicatorsContainer: () => null,
};

const groupeQuestion1 = [
    {
        question:
            "Lorsque tu commences un grand projet qui doit être rendu dans une semaine",
        answers: [
            "Prends-tu le temps de faire une liste des différentes choses à réaliser et de l’ordre dans lequel elles doivent être effectuées ?",
            "Tu te lances immédiatement ?",
        ],
    }, {
        question:
            "Es-tu plus susceptible de faire :",
        answers: [
            "Des éloges ?",
            "Des reproches ?",
        ],

    },
    {
        question:
            "En général, tu :",
        answers: [
            "Exprime librement tes sentiments ?",
            "Garde tes sentiments pour toi ?",
        ],

    }, {
        question:
            "Lorsque ce que tu dois faire est prévu depuis longtemps, tu :",
        answers: [
            "Apprécie de pouvoir t'organiser en conséquence ?",
            "Trouve cela désagréable d’être ainsi lié ?",
        ],

    }, {
        question:
            "Penses-tu que c’est un plus grand défaut d’être :",
        answers: [
            "Antipathique ?",
            "Déraisonnable ?",
        ],

    }
    , {
        question:
            "Lorsque des inconnus te remarquent :",
        answers: [
            "Tu te sents mal à l’aise ?",
            "Cela ne te déranges du tout ?",
        ],

    },
    {
        question:
            "Si tu étais sur le point d'accomplir une tâche, à quel argument serais-tu le plus sensible ?",
        answers: [
            "C’est ce qu'on attend vraiment de toi ?",
            "C’est ce qui te semble le plus logique ?",
        ],

    },
];

function FormTalentProfile(props) {
    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const steps = ['Groupe de question 1', 'Groupe de question 2', 'Groupe de question 3'];
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


    return <form className="edit-profile-form profile-form  mb-60">
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
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{mt: 2, mb: 1}}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                        <Box sx={{flex: '1 1 auto'}}/>
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {
                        activeStep === 0 && <Questionnaire questions={groupeQuestion1}/>
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
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{mr: 1}}>
                                Passer
                            </Button>
                        )}

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
                        </Button>
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
