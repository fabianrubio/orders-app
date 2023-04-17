import {
  Box,
  Button,
  Container,
  FormHelperText,
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import {
  Formik,
  Form,
  Field,
  FieldArray,
  FormikHelpers,
  ErrorMessage,
  FormikErrors,
} from 'formik';
import * as Yup from 'yup';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface DestinationAddress {
  Coordinates: string;
  FirstName: string;
  LastName: string;
  Street: string;
  ZipCode: string;
  State: string;
  City: string;
  Neighbourhood: string;
  ExNumber: string;
  InNumber: string;
  PhoneNumber: string;
}

interface Product {
  Weight: number;
}

export interface OrderFormData {
  DestinationAddress: DestinationAddress;
  Products: Product[];
}

const initialValues: OrderFormData = {
  DestinationAddress: {
    Coordinates: '',
    FirstName: '',
    LastName: '',
    Street: '',
    ZipCode: '',
    State: '',
    City: '',
    Neighbourhood: '',
    ExNumber: '',
    InNumber: '',
    PhoneNumber: '',
  },
  Products: [],
};

const validationSchema = Yup.object().shape({
  DestinationAddress: Yup.object().shape({
    Coordinates: Yup.string().required('Coordinates is a required field'),
    FirstName: Yup.string().required('First Name is a required field'),
    LastName: Yup.string().required('Last Name is a required field'),
    Street: Yup.string().required('Street is a required field'),
    ZipCode: Yup.number().required('Zip code is a required field'),
    State: Yup.string().required('State is a required field'),
    City: Yup.string().required('City is a required field'),
    Neighbourhood: Yup.string().required('Neighbourhood is a required field'),
    ExNumber: Yup.number().required('External number is a required field'),
    InNumber: Yup.number().optional(),
    PhoneNumber: Yup.number().required('Phone number is a required field'),
  }),
  Products: Yup.array()
    .of(
      Yup.object().shape({
        Weight: Yup.number().min(1, 'Weight must be at least 1').required(),
      })
    )
    .min(1, 'At least one product is required'),
});

export interface OrderFormProps {
  /**
   * Submission handler
   */
  onSubmit: (
    values: OrderFormData,
    formikHelpers: FormikHelpers<OrderFormData>
  ) => void | Promise<any>;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleSubmit,
        handleBlur,
      }) => (
        <Container maxWidth='sm'>
          <Box mt={3} mb={3}>
            <Typography variant='h3' gutterBottom>
              New Order
            </Typography>

            <Form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name='DestinationAddress.Coordinates'
                    label='Coordinates'
                    value={values.DestinationAddress.Coordinates}
                    onChange={handleChange}
                    fullWidth
                    onBlur={handleBlur}
                    error={
                      touched.DestinationAddress?.Coordinates &&
                      Boolean(errors.DestinationAddress?.Coordinates)
                    }
                    helperText={
                      touched.DestinationAddress?.Coordinates &&
                      errors.DestinationAddress?.Coordinates
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name='DestinationAddress.FirstName'
                    label='First Name'
                    value={values.DestinationAddress.FirstName}
                    onChange={handleChange}
                    fullWidth
                    onBlur={handleBlur}
                    error={
                      touched.DestinationAddress?.FirstName &&
                      Boolean(errors.DestinationAddress?.FirstName)
                    }
                    helperText={
                      touched.DestinationAddress?.FirstName &&
                      errors.DestinationAddress?.FirstName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name='DestinationAddress.LastName'
                    label='Last Name'
                    value={values.DestinationAddress.LastName}
                    onChange={handleChange}
                    fullWidth
                    onBlur={handleBlur}
                    error={
                      touched.DestinationAddress?.LastName &&
                      Boolean(errors.DestinationAddress?.LastName)
                    }
                    helperText={
                      touched.DestinationAddress?.LastName &&
                      errors.DestinationAddress?.LastName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name='DestinationAddress.PhoneNumber'
                    label='Phone number'
                    value={values.DestinationAddress.PhoneNumber}
                    onChange={handleChange}
                    fullWidth
                    onBlur={handleBlur}
                    error={
                      touched.DestinationAddress?.PhoneNumber &&
                      Boolean(errors.DestinationAddress?.PhoneNumber)
                    }
                    helperText={
                      touched.DestinationAddress?.PhoneNumber &&
                      errors.DestinationAddress?.PhoneNumber
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name='DestinationAddress.Street'
                    label='Street'
                    value={values.DestinationAddress.Street}
                    onChange={handleChange}
                    fullWidth
                    onBlur={handleBlur}
                    error={
                      touched.DestinationAddress?.Street &&
                      Boolean(errors.DestinationAddress?.Street)
                    }
                    helperText={
                      touched.DestinationAddress?.Street &&
                      errors.DestinationAddress?.Street
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name='DestinationAddress.ZipCode'
                    label='Zip Code'
                    value={values.DestinationAddress.ZipCode}
                    onChange={handleChange}
                    fullWidth
                    onBlur={handleBlur}
                    error={
                      touched.DestinationAddress?.ZipCode &&
                      Boolean(errors.DestinationAddress?.ZipCode)
                    }
                    helperText={
                      touched.DestinationAddress?.ZipCode &&
                      errors.DestinationAddress?.ZipCode
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name='DestinationAddress.State'
                    label='State'
                    value={values.DestinationAddress.State}
                    onChange={handleChange}
                    fullWidth
                    onBlur={handleBlur}
                    error={
                      touched.DestinationAddress?.State &&
                      Boolean(errors.DestinationAddress?.State)
                    }
                    helperText={
                      touched.DestinationAddress?.State &&
                      errors.DestinationAddress?.State
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name='DestinationAddress.City'
                    label='City'
                    value={values.DestinationAddress.City}
                    onChange={handleChange}
                    fullWidth
                    onBlur={handleBlur}
                    error={
                      touched.DestinationAddress?.City &&
                      Boolean(errors.DestinationAddress?.City)
                    }
                    helperText={
                      touched.DestinationAddress?.City &&
                      errors.DestinationAddress?.City
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name='DestinationAddress.Neighbourhood'
                    label='Neighbourhood'
                    value={values.DestinationAddress.Neighbourhood}
                    onChange={handleChange}
                    fullWidth
                    onBlur={handleBlur}
                    error={
                      touched.DestinationAddress?.Neighbourhood &&
                      Boolean(errors.DestinationAddress?.Neighbourhood)
                    }
                    helperText={
                      touched.DestinationAddress?.Neighbourhood &&
                      errors.DestinationAddress?.Neighbourhood
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name='DestinationAddress.ExNumber'
                    label='Exterior number'
                    value={values.DestinationAddress.ExNumber}
                    onChange={handleChange}
                    fullWidth
                    onBlur={handleBlur}
                    error={
                      touched.DestinationAddress?.ExNumber &&
                      Boolean(errors.DestinationAddress?.ExNumber)
                    }
                    helperText={
                      touched.DestinationAddress?.ExNumber &&
                      errors.DestinationAddress?.ExNumber
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name='DestinationAddress.InNumber'
                    label='Interior number (optional)'
                    value={values.DestinationAddress.InNumber}
                    onChange={handleChange}
                    fullWidth
                    onBlur={handleBlur}
                    error={
                      touched.DestinationAddress?.InNumber &&
                      Boolean(errors.DestinationAddress?.InNumber)
                    }
                    helperText={
                      touched.DestinationAddress?.InNumber &&
                      errors.DestinationAddress?.InNumber
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <FieldArray name='Products'>
                    {({ push, remove }) => (
                      <List>
                        {values.Products.map((product, index) => (
                          <ListItem key={index}>
                            <Grid container spacing={0}>
                              <Grid item xs={6}>
                                <Field
                                  as={TextField}
                                  fullWidth
                                  label={`Product ${index + 1} weight`}
                                  type='number'
                                  name={`Products[${index}].Weight`}
                                  error={
                                    touched.Products?.[index]?.Weight &&
                                    Boolean(
                                      (
                                        errors.Products?.[
                                          index
                                        ] as FormikErrors<Product>
                                      )?.Weight
                                    )
                                  }
                                  helperText={
                                    touched.Products?.[index]?.Weight &&
                                    (
                                      errors.Products?.[
                                        index
                                      ] as FormikErrors<Product>
                                    )?.Weight
                                  }
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <IconButton
                                  aria-label='delete'
                                  onClick={() => remove(index)}
                                >
                                  <DeleteOutlineIcon />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </ListItem>
                        ))}
                        <ListItem>
                          <Button
                            variant='outlined'
                            onClick={() => push({ Weight: 0 })}
                          >
                            Add product
                          </Button>
                        </ListItem>
                      </List>
                    )}
                  </FieldArray>
                  <ErrorMessage
                    name='Products'
                    render={(msg) =>
                      typeof msg == 'string' ? (
                        <FormHelperText error>{msg}</FormHelperText>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    disabled={isSubmitting}
                    fullWidth
                    disableElevation
                  >
                    Create order
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Box>
        </Container>
      )}
    </Formik>
  );
};

export default OrderForm;
