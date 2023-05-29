import FormTalentProfile from "../../Forms/FormTalentEditResume/FormTalentProfile";
import React, {useState} from "react";
import {Box, Container, Typography} from "@mui/material";
import {withAuth} from "../../hoc/withAuth";
import FormTalentEditResumeBaseDetail from "../../Forms/FormTalentEditResume/FormTalentEditResumeBaseDetail";
import FormTalentFacturation from "../../Forms/FormTalentEditResume/FormTalentFacturation";

const OnboardingTalent = (props) => {
    const [step, setStep] = useState(0)
    return (
        <div>
            <Container maxWidth="md">

                {
                    step === 0 && (
                        <>
                            <Typography variant="h5" fontWeight={600} pt={5} align="center">Questionnaire d'onboarding</Typography>
                            <Box pt={5}>
                                <Box pb={5}>
                                    <Typography variant="h6" fontWeight={600} align="center">Faisons connaissance</Typography>
                                </Box>
                                <FormTalentEditResumeBaseDetail setStep={setStep} />
                            </Box>
                        </>

                    )
                    ||
                    step === 1 && (
                        <>
                            <Box>
                                <FormTalentFacturation uid={props.uid} userType={props.userType} setStep={setStep}/>
                            </Box>
                        </>
                    )
                    ||
                    step === 2 && (
                        <Box pt={5}>
                            <FormTalentProfile uid={props.uid} userType={props.userType} setStep={setStep}/>
                        </Box>
                    )
                }
            </Container>
        </div>
    )
}

export default withAuth(OnboardingTalent)