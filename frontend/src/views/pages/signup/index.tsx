import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import SignupSuccessMoal from '../../../components/custom_modals/signup_success_modal';
import { useAppContext } from '../../../context/AppContext';
import { useUserContext } from '../../../context/UserContext';
import { signup } from '../../../helper/auth';
import { validateEmail } from '../../../utils';

const PageSignup = (props: any) => {

    const { userInfo } = useUserContext();
    const navigate = useNavigate();
    const { setLoading, setMessage, setModal } = useAppContext();
    const { addToast } = useToasts();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [validations, setValidations] = useState({
        name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        if (userInfo) navigate('/');
    }, [userInfo])

    const handleChange = (prop: any, value: any) => {
        setValidations(prevState => ({ ...prevState, [prop]: '' }));
        setValues({ ...values, [prop]: value });
    };

    const handleSignup = () => {
        if (!checkvalidations()) return;

        setLoading(true);

        signup(values).then(res => {
            setLoading(false);
            if (res.success) {
                setModal({ open: true, children: <SignupSuccessMoal /> }); return;
                // addToast('Register success. Email was sent. Please verify your email', {appearance: 'success', autoDismiss: true});
            } else {
                addToast(res.message, { appearance: 'error', autoDismiss: true });
            }

        }).catch(error => {
            setLoading(false);
            addToast('failed', { appearance: 'error', autoDismiss: true });
        })
    };

    const checkvalidations = () => {
        if (values.name === '') {
            setValidations({ name: 'has-empty', email: '', password: '' });
            return false;
        } else if (values.email === '') {
            setValidations({ name: '', email: 'has-empty', password: '' });
            return false;
        } else if (!validateEmail(values.email)) {
            setValidations({ name: '', email: 'has-danger', password: '' });
            return false;
        } else if (values.password === '') {
            setValidations({ name: '', email: '', password: 'has-empty' });
            return false;
        } else {
            setValidations({ name: '', email: '', password: '' });
        }

        return true;
    };

    return (
        <main className='main'>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-4">
                                <Link to='/'>
                                    <img src="./images/logoi.png" alt="" />
                                </Link>
                                <h4 className="card-title mt-5">Sign up to NFT Dashboard</h4>
                            </div>
                            <div className="auth-form card">
                                <div className="card-body">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-12 mb-3">
                                                <label className="form-label">Full Name</label>
                                                <input name="fullName" type="text" className="form-control" defaultValue=""
                                                    value={values.name}
                                                    onChange={e => handleChange('name', e.target.value)}
                                                />
                                                {validations.name == 'has-empty' ? (<span className='text-error'>Name Required*</span>) : ''}
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="form-label">Email</label>
                                                <input name="email" type="text" className="form-control" defaultValue=""
                                                    value={values.email}
                                                    onChange={e => handleChange('email', e.target.value)}
                                                />
                                                {validations.email == 'has-empty' ? (<span className='text-error'>Email Required*</span>) : ''}
                                                {validations.email == 'has-danger' ? (<span className='text-error'>Input Correct Format*</span>) : ''}
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="form-label">Password</label>
                                                <input name="password" type="password" className="form-control" defaultValue=""
                                                    value={values.password}
                                                    onChange={e => handleChange('password', e.target.value)}
                                                />
                                                {validations.password == 'has-empty' ? (<span className='text-error'>Password Required*</span>) : ''}
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input name="acceptTerms" type="checkbox" className="form-check-input " defaultValue="false" />
                                                    <label className="form-check-label">I
                                                        certify that I am 18 years of age or older, and agree to the
                                                        <a href="#" className="text-primary"> User Agreement</a> and
                                                        <a href="#" className="text-primary"> Privacy Policy</a>.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 d-grid gap-2">
                                            <button type="button" className="btn btn-primary mr-2" onClick={handleSignup}>Sign Up</button></div>
                                    </form>
                                    <div className="text-center">
                                        <p className="mt-3 mb-0">
                                            <Link to="/signin" className="text-primary">Sign in</Link>
                                            to your account
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="privacy-link">
                                <a href="./signup">Have an issue with 2-factor authentication?</a>
                                <br />
                                <a href="./signup">Privacy Policy</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PageSignup;
