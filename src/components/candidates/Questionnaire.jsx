import React, {useState} from "react";
import {Box, Typography, Checkbox, FormControlLabel, Divider} from "@mui/material";

const Questionnaire = ({questions}) => {
    const [checkedQuestions, setCheckedQuestions] = useState([]);

    const handleCheckboxChange = (question, answer, isChecked) => {
        if (isChecked) {
            setCheckedQuestions([
                ...checkedQuestions,
                {question: question.question, answer},
            ]);
        } else {
            setCheckedQuestions(
                checkedQuestions.filter(
                    q => q.question !== question.question || q.answer !== answer
                )
            );
        }
    };

    return (
        <>
            {questions.map((question, index) => (
                <>
                    <Box pt={2}>
                        <Typography variant="h6" textAlign="start">{question.question}</Typography>
                    </Box>
                    <Box key={index} sx={{mt: 2, mb: 1}} display="flex" flexDirection="column" justifyItems="center">
                        {question.answers.map((answer, answerIndex) => (
                            <FormControlLabel
                                key={`${index}-${answerIndex}`}
                                control={
                                    <Checkbox
                                        inputProps={{
                                            "aria-label": `Checkbox for question ${index + 1} answer ${
                                                answerIndex + 1
                                            }`,
                                        }}
                                        onChange={e =>
                                            handleCheckboxChange(question, answer, e.target.checked)
                                        }
                                    />
                                }
                                label={answer}
                                labelPlacement="start"
                                sx={{justifyContent: "space-between"}}
                            />
                        ))}
                    </Box>
                    <Divider variant="middle" maxW />
                </>

            ))}
        </>
    );
};

export default Questionnaire;
