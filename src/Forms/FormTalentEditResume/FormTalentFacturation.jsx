import React, {useState} from "react";
import * as PropTypes from "prop-types";
import { Formik} from "formik";
import addData from "../../firebase/addData";
import {useAuthContext} from "../../core/auth/AuthContext";
import {
    Box,
    Button, Checkbox,
    FormControlLabel
    , TextField, Typography,
} from "@mui/material";


function FormTalentFacturation(props) {
    const auth = useAuthContext();
    const [initialResumeValue] = useState({
        name: '',
        iban: '',
        siren: '',
        tva: '',
        paymentAddress: '',
        check: false

    });

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
            alert(JSON.stringify(values, null, 2));
            try {
                await addData('talents', auth.user.uid, {
                    paymentInfos: {
                        ...values,
                    }
                })
                props.setStep(2)
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
            <form onSubmit={handleSubmit} className="edit-profile-form profile-form">
                <Box
                    sx={{
                        backgroundColor: '#FBFBFB',
                        border: '1px solid rgba(163, 162, 162, 0.15)',
                        borderRadius: '10px',
                        padding: '20px',
                        width: '100%',
                        minHeight: '0px',
                        marginBottom: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    <Typography variant="h5" fontWeight="600" align="center">Vos informations de paiement</Typography>

                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <Typography variant="body2" fontWeight="300">Raison Sociale de votre société / Votre
                            nom</Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}

                        />
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <Typography variant="body2" fontWeight="300">IBAN</Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            id="iban"
                            name="iban"
                            value={values.iban}
                            onChange={handleChange}
                            error={touched.iban && Boolean(errors.iban)}
                            helperText={touched.iban && errors.iban}
                        />
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <Typography variant="body2" fontWeight="300">Numéro de SIREN</Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            id="siren"
                            name="siren"
                            value={values.siren}
                            onChange={handleChange}
                            error={touched.siren && Boolean(errors.siren)}
                            helperText={touched.siren && errors.siren}
                        />
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <Typography variant="body2" fontWeight="300">Numéro de TVA Intracommunautaire</Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            id="tva"
                            name="tva"
                            value={values.tva}
                            onChange={handleChange}
                            error={touched.tva && Boolean(errors.tva)}
                            helperText={touched.tva && errors.tva}
                        />
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <Typography variant="body2" fontWeight="300">Adresse de paiement</Typography>
                        <TextField
                            variant="outlined"
                            type="password"
                            size="small"
                            id="paymentAddress"
                            name="paymentAddress"
                            value={values.paymentAddress}
                            onChange={handleChange}
                            error={touched.paymentAddress && Boolean(errors.paymentAddress)}
                            helperText={touched.paymentAddress && errors.paymentAddress}/>
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <FormControlLabel
                            control={<Checkbox/>}
                            label="Vous attestez de l'honnêteté de ces informations"
                            checked={values.check}
                            name="check"
                            onChange={handleChange}
                        />
                    </Box>
                    <Button onClick={handleSubmit} variant="contained"
                            sx={{alignSelf: 'center', width: '100%'}}>Valider</Button>
                </Box>
            </form>
        )}
    </Formik>


}

export default FormTalentFacturation;
FormTalentFacturation.propTypes = {
    onDrop: PropTypes.func,
    onDragOver: PropTypes.func,
    onClick: PropTypes.func,
    image: PropTypes.string,
    onChange: PropTypes.func,
    ref: PropTypes.any
};
