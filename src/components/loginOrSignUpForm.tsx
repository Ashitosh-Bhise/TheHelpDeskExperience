import React, { useState, useEffect } from 'react';
import { Toggle, DefaultButton, PrimaryButton, TextField, Stack, initializeIcons, ITextFieldProps } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Link, RouteComponentProps } from "react-router-dom";
initializeIcons();

// interface ILoginProps  {

// }
interface ISignInOrLogin {
    buttonText: string;
    signingUp?: boolean;
    // handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}



// export interface DetailsProps extends RouteComponentProps<{}> {}

const SignUpForm: React.FC<ISignInOrLogin> = (props) => {

    const [userEmail, setEmail] = useState<string>("");
    const [userPassword, setPassword] = useState<string>("");
    // const emailInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {

    }, [])

    const login = () => {
        // props.history.push()

    }

    const _onChange = (ev: React.MouseEvent<HTMLElement>, checked: boolean) => {
        console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
    }

    return (
        <div>
            <form>
                <Stack>
                    <TextField
                        className="loginOrSignUpInput"
                        label="E-mail"
                        description="Please provide a valid E-mail"
                        iconProps={{ iconName: 'NewMail' }}
                    // ref={emailInputRef}
                    // onChange={}
                    // onRenderDescription={this._onRenderDescription}
                    />
                    <TextField
                        className="loginOrSignUpInput"
                        label="Password"
                        description="Password must be 6-10 characters long & contain one capitol letter"
                        iconProps={{ iconName: 'AuthenticatorApp' }}
                    />

                    {props.signingUp ? <Toggle label="Account Type:" inlineLabel onText="Helpdesk user" offText="Team member" onChange={() => _onChange} /> : null}
                    <div className="submitButtonDiv">
                        <Link to="/tickets"><PrimaryButton id="submitSignUp" text={props.buttonText} /></Link>

                    </div>

                </Stack>
            </form>

        </div>
    )
}



export default SignUpForm;