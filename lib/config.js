var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      Router.go('/index');
      
    }
    if (state === "signUp") {
      Router.go('/index');
    }
  }
};

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: false,
    forbidClientAccountCreation: false,
    overrideLoginErrors:false,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: false,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    //hooks
    onSubmitHook: mySubmitFunc,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',
    
    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
}); 

