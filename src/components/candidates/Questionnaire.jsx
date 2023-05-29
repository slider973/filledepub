import React from "react";
import {Box, Typography, Checkbox, FormControlLabel, Divider} from "@mui/material";

const Questionnaire = ({questions, handleChange, formValues}) => {

    return (
        <>
            {questions.map((question, index) => (
                <>
                    <Box pt={2}>
                        <Typography variant="h6" textAlign="start">
                            {question.question.name}

                        </Typography>
                    </Box>
                    <Box
                        key={index}
                        sx={{mt: 2, mb: 1}}
                        display="flex"
                        flexDirection="column"
                        justifyItems="center"
                    >
                        {question.answers.map((answer, answerIndex) => {
                                return (
                                    <>
                                        <FormControlLabel
                                            key={`${index}-${answerIndex}`}
                                            control={
                                                <Checkbox
                                                    inputProps={{
                                                        "aria-label": `Checkbox for question ${index + 1} answer ${
                                                            answerIndex + 1
                                                        }`,
                                                    }}
                                                    name={question.question.idQuestion}
                                                    value={answer.value}
                                                    checked={formValues[question.question.idQuestion]?.answers === answer.value}
                                                    onChange={(event) => handleChange(event, answer.value)}
                                                />
                                            }
                                            label={`${answer.name} (${answer.value})`}
                                            labelPlacement="start"
                                            sx={{justifyContent: "space-between"}}
                                        />
                                    </>
                                )
                            }
                        )}
                    </Box>
                    <Divider variant="middle" maxW/>
                </>
            ))}
        </>
    );
};

export default Questionnaire;
