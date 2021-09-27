import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElement'

const SignIn = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to='/'>DD</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required></FormInput>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required></FormInput>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>    
            </Container>            
        </div>
    )
}

export default SignIn;
