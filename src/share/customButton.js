import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function CustomButton(props) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', m: 1 }}>
            <Button
                variant="contained"
                sx={{
                    bgcolor: '#fffff',
                    fontFamily: '"Open Sans"',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'primary.contrastText',
                    textAlign: 'center',
                    lineHeight: '1',
                    borderRadius: '5px',
                    boxShadow: '0px 7px 30px -10px rgba(var(--color_primary_default_rgb), 0.1)',
                    p: '12px 24px',
                    minWidth: '0px',
                    height: 'max-content',
                    flexGrow: '1',
                    my: '10px',
                }}
            >
                {props.message}
            </Button>
        </Box>
    );
}

export default CustomButton;
