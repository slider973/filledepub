import React, { useState} from "react";
import { InboxOutlined } from '@ant-design/icons';
import * as PropTypes from "prop-types";
import {Field, Formik} from "formik";
import addData from "../../firebase/addData";
import {useAuthContext} from "../../core/auth/AuthContext";
import {
    Box,
    Button,
    FormControl,
    Grid,
    Hidden,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {talentOptions} from "../../share/talent-options";
import {yearsOfExperience} from "../../share/yearsOfExperience";
import {software} from "../../share/software";
import {languages} from "../../share/languages";
import {levelOfSoftware} from "../../share/level-of-software";
import {leveOfLanguages} from "../../share/leve-of-languages";
import {vertical} from "../../share/vertical";
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import firebase_app from "../../firebase/config";
import { message, Upload } from 'antd';
const { Dragger } = Upload;


function Title(props) {
    return <Grid item xs={2} sm={4} md={4}>
        <Hidden only={["md", "lg", "xl"]}>
            <Typography variant="h6" align="center">
                {props.title}
            </Typography>
        </Hidden>
        <Hidden only={["sm", "xs"]}>
            <Typography variant="h6" align="left">
                {props.title}
            </Typography>
        </Hidden>
    </Grid>;
}



function FormTalentEditResumeBaseDetail(props) {
    const auth = useAuthContext();
    const storage = getStorage(firebase_app);
    const [downloadUrls, setDownloadUrls] = useState([]);
    const [initialResumeValue] = useState({

        talent1: '',
        talent2: '',
        yearsOfExperience1: '',
        yearsOfExperience2: '',
        tjm1: '',
        tjm2: '',
        reference1: '',
        reference2: '',
        rewards1: '',
        rewards2: '',
        software1: '',
        software2: '',
        languages1: '',
        languages2: '',
        vertical1: '',
        vertical2: '',

    });

    const uploadProps = {
        name: 'file',
        multiple: true,
        customRequest: async ({ file, onSuccess, onError }) => {
            try {
                const fileRef = ref(storage, `${auth.user.uid}/${file.name}`);
                await uploadBytes(fileRef, file);
                const downloadUrl = await getDownloadURL(fileRef);
                onSuccess(downloadUrl, file);
                setDownloadUrls([...downloadUrls, downloadUrl]);
                message.success(`${file.name} a été téléchargé avec succès.`);
            } catch (error) {
                onError(error);
                message.error(`le téléchargement du fichier ${file.name} a échoué.`);
            }
        },
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
        },
        onDrop(e) {
            //TODO a faire la fonction pour supprimer
            console.log('Dropped files', e.dataTransfer.files);
        },
    };


    return <Formik
        initialValues={initialResumeValue}
        validate={values => {
            // const errors = {};
            // if (!values.email) {
            //     errors.email = 'Required';
            // } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            // ) {
            //     errors.email = 'Invalid email address';
            // }
            // return errors;
        }}
        onSubmit={async (values, {setSubmitting}) => {

            try {
                await addData('talents', auth.user.uid, {
                    resume: {
                        basicInfo: values,
                        files: downloadUrls
                    }
                })
                props.setStep(1)
            } catch (e) {
                console.error("Error adding document: ", e);
            }

            setSubmitting(false);

        }}
    >
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="edit-profile-form profile-form  mb-60">
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={{xs: 1, md: 2}} columns={{xs: 2, sm: 4, md: 12}} display="flex"
                          justifyContent="center" alignItems="center">

                        {/*Talent*/}
                        <Title title={"Vos talents ?"}/>
                        <Grid item xs={2} sm={4} md={4}>
                            <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                <InputLabel id="demo-simple-select-label-talent1">Talent</InputLabel>
                                <Field
                                    as={Select}
                                    labelId="demo-simple-select-label-talent1"
                                    id="demo-simple-select-talent1"
                                    value={values.talent1}
                                    label="Talent"
                                    onChange={handleChange}
                                    name="talent1"
                                    style={{width: '100%'}}
                                >
                                    {
                                        talentOptions.map((item, index) => {
                                            return <MenuItem value={item.value}
                                                             key={`talent_options_${index}`}>{item.label}</MenuItem>
                                        })
                                    }
                                </Field>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Box width={"100%"}>
                                <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                    <InputLabel id="demo-simple-select-label-talent2">Talent</InputLabel>
                                    <Field
                                        as={Select}
                                        labelId="demo-simple-select-label-talent2"
                                        id="demo-simple-select-talent2"
                                        value={values.talent2}
                                        label="Talent"
                                        onChange={handleChange}
                                        name="talent2"
                                    >
                                        {
                                            talentOptions.map(
                                                (item, index) => {
                                                    return <MenuItem value={item.value}
                                                                     key={`talent_options_${index}`}>{item.label}</MenuItem>
                                                })
                                        }
                                    </Field>
                                </FormControl>
                            </Box>
                        </Grid>
                        {/*Années d'expérience*/}
                        <Title title={"Années d'expérience"}/>
                        <Grid item xs={2} sm={4} md={4}>
                            <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                <InputLabel id="demo-simple-select-label-yearsOfExperience1">Années d'expérience</InputLabel>
                                <Field
                                    as={Select}
                                    labelId="demo-simple-select-label-yearsOfExperience1"
                                    id="demo-simple-select-yearsOfExperience1"
                                    value={values.yearsOfExperience1}
                                    label="Experience"
                                    onChange={handleChange}
                                    name="yearsOfExperience1"
                                    style={{width: '100%'}}
                                >
                                    {
                                        yearsOfExperience.map((item, index) => {
                                            return <MenuItem value={item.value}
                                                             key={`year_of_experience_options_experience1_${index}`}>{item.label}</MenuItem>
                                        })
                                    }
                                </Field>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Box width={"100%"}>
                                <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                    <InputLabel id="demo-simple-select-label-yearsOfExperience2">Années d'expérience</InputLabel>
                                    <Field
                                        as={Select}
                                        labelId="demo-simple-select-label-yearsOfExperience2"
                                        id="demo-simple-select-yearsOfExperience2"
                                        value={values.yearsOfExperience2}
                                        label="Experience"
                                        onChange={handleChange}
                                        name="yearsOfExperience2"
                                    >
                                        {
                                            yearsOfExperience.map(
                                                (item, index) => {
                                                    return <MenuItem value={item.value}
                                                                     key={`year_of_experience_options_experience_2_${index}`}>{item.label}</MenuItem>
                                                })
                                        }
                                    </Field>
                                </FormControl>
                            </Box>
                        </Grid>
                        {/* end of Années d'expérience*/}
                        {/*Tarif Journalier Moyen (TJM)*/}
                        <Title title={"Tarif Journalier Moyen (TJM)"}/>
                        <Grid item xs={2} sm={4} md={4}>
                            <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                <TextField
                                    fullWidth
                                    id="tjm1"
                                    name="tjm1"
                                    placeholder="Tarif Journalier Moyen (TJM)"
                                    value={values.tjm1}
                                    onChange={handleChange}
                                    error={touched.tjm1 && Boolean(errors.tjm1)}
                                    helperText={touched.tjm1 && errors.tjm1}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Box width={"100%"}>
                                <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                    <TextField
                                        fullWidth
                                        id="tjm2"
                                        name="tjm2"
                                        placeholder="Tarif Journalier Moyen (TJM)"
                                        value={values.tjm2}
                                        onChange={handleChange}
                                        error={touched.tjm2 && Boolean(errors.tjm2)}
                                        helperText={touched.tjm2 && errors.tjm2}
                                    />
                                </FormControl>
                            </Box>
                        </Grid>
                        {/* end of Tarif Journalier Moyen (TJM)*/}


                        {/*Référence(s)*/}
                        <Title title={"Référence(s)"}/>
                        <Grid item xs={2} sm={4} md={4}>
                            <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                <TextField
                                    fullWidth
                                    id="reference1"
                                    name="reference1"
                                    placeholder="Référence(s)"
                                    value={values.reference1}
                                    onChange={handleChange}
                                    error={touched.reference1 && Boolean(errors.reference1)}
                                    helperText={touched.reference1 && errors.reference1}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Box width={"100%"}>
                                <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                    <TextField
                                        fullWidth
                                        id="reference2"
                                        name="reference2"
                                        placeholder="Référence(s)"
                                        value={values.reference2}
                                        onChange={handleChange}
                                        error={touched.reference2 && Boolean(errors.reference2)}
                                        helperText={touched.reference2 && errors.reference2}
                                    />
                                </FormControl>
                            </Box>
                        </Grid>
                        {/* end of Référence(s)*/}



                        {/*Récompense(s) / Prix*/}
                        <Title title={"Récompense(s) / Prix"}/>
                        <Grid item xs={2} sm={4} md={4}>
                            <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                <TextField
                                    fullWidth
                                    id="rewards1"
                                    name="rewards1"
                                    placeholder="Récompense(s) / Prix"
                                    value={values.rewards1}
                                    onChange={handleChange}
                                    error={touched.rewards1 && Boolean(errors.rewards1)}
                                    helperText={touched.rewards1 && errors.rewards1}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Box width={"100%"}>
                                <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                    <TextField
                                        fullWidth
                                        id="rewards2"
                                        name="rewards2"
                                        placeholder="Récompense(s) / Prix"
                                        value={values.rewards2}
                                        onChange={handleChange}
                                        error={touched.rewards2 && Boolean(errors.rewards2)}
                                        helperText={touched.rewards2 && errors.rewards2}
                                    />
                                </FormControl>
                            </Box>
                        </Grid>
                        {/* end of Référence(s)*/}


                        {/*Logiciel(s)*/}
                        <Title title={"Logiciel(s)"}/>
                        <Grid item xs={2} sm={4} md={4}>
                            <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                <InputLabel id="demo-simple-select-label-software1">Logiciel(s)</InputLabel>
                                <Field
                                    as={Select}
                                    labelId="demo-simple-select-label-software1"
                                    id="demo-simple-select-software1"
                                    value={values.software1}
                                    label="Logiciel(s)"
                                    onChange={handleChange}
                                    name="software1"
                                    style={{width: '100%'}}
                                >
                                    {
                                        software.map((item, index) => {
                                            return <MenuItem value={item.value}
                                                             key={`software1_options_${index}`}>{item.label}</MenuItem>
                                        })
                                    }
                                </Field>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Box width={"100%"}>
                                <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                    <InputLabel id="demo-simple-select-label-software2">Logiciel(s)</InputLabel>
                                    <Field
                                        as={Select}
                                        labelId="demo-simple-select-label-software2"
                                        id="demo-simple-select-software2"
                                        value={values.software2}
                                        label="Logiciel(s)"
                                        onChange={handleChange}
                                        name="software2"
                                    >
                                        {
                                            software.map(
                                                (item, index) => {
                                                    return <MenuItem value={item.value}
                                                                     key={`software2_options_${index}`}>{item.label}</MenuItem>
                                                })
                                        }
                                    </Field>
                                </FormControl>
                            </Box>
                        </Grid>
                        {/* end of Logiciel(s)*/}

                        {/*Niveau*/}
                        <Title title={"Niveau"}/>
                        <Grid item xs={2} sm={4} md={4}>
                            <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                <InputLabel id="demo-simple-select-label-level1">Niveau</InputLabel>
                                <Field
                                    as={Select}
                                    labelId="demo-simple-select-label-level1"
                                    id="demo-simple-select-level1"
                                    value={values.level1}
                                    label="Niveau"
                                    onChange={handleChange}
                                    name="level1"
                                    style={{width: '100%'}}
                                >
                                    {
                                        levelOfSoftware.map((item, index) => {
                                            return <MenuItem value={item.value}
                                                             key={`level1_options_${index}`}>{item.label}</MenuItem>
                                        })
                                    }
                                </Field>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Box width={"100%"}>
                                <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                    <InputLabel id="demo-simple-select-label-level2">Niveau</InputLabel>
                                    <Field
                                        as={Select}
                                        labelId="demo-simple-select-label-level2"
                                        id="demo-simple-select-level2"
                                        value={values.level2}
                                        label="Niveau"
                                        onChange={handleChange}
                                        name="level2"
                                    >
                                        {
                                            levelOfSoftware.map(
                                                (item, index) => {
                                                    return <MenuItem value={item.value}
                                                                     key={`languages2_options_${index}`}>{item.label}</MenuItem>
                                                })
                                        }
                                    </Field>
                                </FormControl>
                            </Box>
                        </Grid>
                        {/* end of Niveau */}

                        {/*Langues*/}
                        <Title title={"Langues"}/>
                        <Grid item xs={2} sm={4} md={4}>
                            <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                <InputLabel id="demo-simple-select-label-languages1">Langues</InputLabel>
                                <Field
                                    as={Select}
                                    labelId="demo-simple-select-label-languages1"
                                    id="demo-simple-select-languages1"
                                    value={values.languages1}
                                    label="Langues"
                                    onChange={handleChange}
                                    name="languages1"
                                    style={{width: '100%'}}
                                >
                                    {
                                        languages.map((item, index) => {
                                            return <MenuItem value={item.value}
                                                             key={`languages1_options_${index}`}>{item.label}</MenuItem>
                                        })
                                    }
                                </Field>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Box width={"100%"}>
                                <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                    <InputLabel id="demo-simple-select-label-languages2">Langues</InputLabel>
                                    <Field
                                        as={Select}
                                        labelId="demo-simple-select-label-languages2"
                                        id="demo-simple-select-languages2"
                                        value={values.languages2}
                                        label="Langues"
                                        onChange={handleChange}
                                        name="languages2"
                                    >
                                        {
                                            languages.map(
                                                (item, index) => {
                                                    return <MenuItem value={item.value}
                                                                     key={`languages2_options_${index}`}>{item.label}</MenuItem>
                                                })
                                        }
                                    </Field>
                                </FormControl>
                            </Box>
                        </Grid>
                        {/* end of Langues(s)*/}

                        {/*Niveau*/}
                        <Title title={"Niveau"}/>
                        <Grid item xs={2} sm={4} md={4}>
                            <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                <InputLabel id="demo-simple-select-label-leveOfLanguages1">Niveau</InputLabel>
                                <Field
                                    as={Select}
                                    labelId="demo-simple-select-label-leveOfLanguages1"
                                    id="demo-simple-select-leveOfLanguages1"
                                    value={values.leveOfLanguages1}
                                    label="Niveau"
                                    onChange={handleChange}
                                    name="leveOfLanguages1"
                                    style={{width: '100%'}}
                                >
                                    {
                                        leveOfLanguages.map((item, index) => {
                                            return <MenuItem value={item.value}
                                                             key={`leveOfLanguages1_options_${index}`}>{item.label}</MenuItem>
                                        })
                                    }
                                </Field>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Box width={"100%"}>
                                <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                    <InputLabel id="demo-simple-select-label-leveOfLanguages2">Niveau</InputLabel>
                                    <Field
                                        as={Select}
                                        labelId="demo-simple-select-label-leveOfLanguages2"
                                        id="demo-simple-select-leveOfLanguages2"
                                        value={values.leveOfLanguages2}
                                        label="Niveau"
                                        onChange={handleChange}
                                        name="leveOfLanguages2"
                                    >
                                        {
                                            leveOfLanguages.map(
                                                (item, index) => {
                                                    return <MenuItem value={item.value}
                                                                     key={`leveOfLanguages2_options_${index}`}>{item.label}</MenuItem>
                                                })
                                        }
                                    </Field>
                                </FormControl>
                            </Box>
                        </Grid>
                        {/* end of Niveau */}


                        {/*Verticales qui t'intéresses*/}
                        <Title title={"Verticales qui t'intéresses"}/>
                        <Grid item xs={2} sm={4} md={4}>
                            <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                <InputLabel id="demo-simple-select-label-vertical1">Verticales qui t'intéresses</InputLabel>
                                <Field
                                    as={Select}
                                    labelId="demo-simple-select-label-vertical1"
                                    id="demo-simple-select-vertical1"
                                    value={values.vertical1}
                                    label="vertical1"
                                    onChange={handleChange}
                                    name="vertical1"
                                    style={{width: '100%'}}
                                >
                                    {
                                        vertical.map((item, index) => {
                                            return <MenuItem value={item.value}
                                                             key={`vertical1_options_${index}`}>{item.label}</MenuItem>
                                        })
                                    }
                                </Field>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Box width={"100%"}>
                                <FormControl style={{minWidth: '100%', maxWidth: '100%'}}>
                                    <InputLabel id="demo-simple-select-label-vertical2">Verticales qui t'intéresses</InputLabel>
                                    <Field
                                        as={Select}
                                        labelId="demo-simple-select-label-vertical2"
                                        id="demo-simple-select-vertical2"
                                        value={values.vertical2}
                                        label="vertical2"
                                        onChange={handleChange}
                                        name="vertical2"
                                    >
                                        {
                                            vertical.map(
                                                (item, index) => {
                                                    return <MenuItem value={item.value}
                                                                     key={`vertical2_options_${index}`}>{item.label}</MenuItem>
                                                })
                                        }
                                    </Field>
                                </FormControl>
                            </Box>
                        </Grid>
                        {/* end of Verticales qui t'intéresses */}
                    </Grid>
                    <Box pt={6}>
                        {/*Porfolio*/}
                        <Typography variant="h6" align="center" pb={2}>
                            Portfolio
                        </Typography>
                        <Grid item xs={2} sm={2} md={4}>

                            <Dragger {...uploadProps}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Cliquez ou faites glisser le fichier dans cette zone pour le télécharger.</p>
                                <p className="ant-upload-hint">
                                    Prise en charge du téléchargement unique ou en masse. <br/>
                                    Il est strictement interdit de télécharger des données d'entreprise ou d'autres fichiers interdits.
                                </p>
                            </Dragger>
                        </Grid>
                        {/* end of Porfolio*/}
                    </Box>
                </Box>
                <Box width={"100%"} textAligne={"center"} justifyContent="center" display="flex" pt={5}>
                    <Button onClick={handleSubmit}  variant="contained" disableElevation  style={{ color: 'white'}} >
                        Valider
                    </Button>
                </Box>
            </form>
        )}
    </Formik>
}
export default FormTalentEditResumeBaseDetail;
FormTalentEditResumeBaseDetail.propTypes = {
    onDrop: PropTypes.func,
    onDragOver: PropTypes.func,
    onClick: PropTypes.func,
    image: PropTypes.string,
    onChange: PropTypes.func,
    ref: PropTypes.any
};
