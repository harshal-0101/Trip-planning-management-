import React from "react";
import * as Components from './Components';
import './Login.css'

function Login() {
    const [signIn, toggle] = React.useState(true);
     return(
        <div>
        <div className="SignIn-SignUp-container">
             <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form method="post">
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Name' name="Username" />
                     <Components.Input type='email' placeholder='Email' name="Email"/>
                     <Components.Input type='password' placeholder='Password' name="Password" />
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form method="post">
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' placeholder='Email' name="Email" />
                      <Components.Input type='password' placeholder='Password' name="Password" />
                      <div className="show-PWD"><input type="checkbox" /><p>Show Password</p></div>
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sigin In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
        </div>
        </div>
     )
}

export default Login;
