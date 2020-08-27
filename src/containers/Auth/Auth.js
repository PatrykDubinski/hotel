import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import Input from '../../components/UI/Input/Input';

class Auth extends Component{

    componentDidMount(){
        if(this.props.authRedirectPath !== '/~303147/build/'){
            this.props.onSetAuthRedirectPath();
        }
    }

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Adres email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
    
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
    
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
    
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
    
        return isValid;
    }

    inputChangedHandler = (e, ctrlName) => {
        const updatedControls = {
            ...this.state.controls,
            [ctrlName]: {
                ...this.state.controls[ctrlName],
                value: e.target.value,
                valid: this.checkValidity(e.target.value, this.state.controls[ctrlName].validation),
                touched: true
            }
        }
        this.setState({
            controls: updatedControls
        })
    }

    switchAuthMode = (e) => {
        e.preventDefault();
        console.log(this.state);
        
        this.setState(prevState => {
            return {
                isSignUp: !prevState.isSignUp
            }
        })
    }

    submitHandler = e => {
        e.preventDefault();        
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }

    render(){
        const formElements = [];
        for(let key in this.state.controls){
            formElements.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElements.map(el => (
            <Input 
                key={el.id}
                elementType={el.config.elementType}
                elementConfig={el.config.elementConfig}
                value={el.config.value}
                invalid={!el.config.valid}
                shouldValidate={el.config.validation}
                touched={el.config.touched}
                changed={(e) => this.inputChangedHandler(e, el.id)} />
        ))

        let errorMessage = null;

        if(this.props.error){
            errorMessage = (<div style={{width: '80%', margin: '20px auto 0 auto'}}>
                <p style={{textAlign: 'center', color: 'red', fontWeight: 'bold'}}>{this.props.error.message}</p>
            </div>
            );
        }
        
        let authRedirect = null;
        if(this.props.isAuthenticated){
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <React.Fragment>
                <div className={classes.Auth}>
                    {authRedirect}
                    {errorMessage}
                    <form onSubmit={this.submitHandler}>
                        <div className={classes.Inputs}>
                            {form}
                        </div>
                       
                        <div>
                            <button className={classes.ContinueBtn}>{this.state.isSignUp ? 'Sign up' : 'Log in'}</button>
                            <button onClick={this.switchAuthMode} className={classes.Signup}>CHANGE TO {this.state.isSignUp ? 'Log in' : 'Sign up'}</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return{
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.token !== null,
        authRedirectPath: state.authRedirectPath,
        booking: state.booking
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/~303147/build/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);