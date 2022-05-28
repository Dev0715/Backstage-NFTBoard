import { useEffect, useState } from 'react';
import { withCookies, useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';
import { validateEmail } from '../../../utils';
import { login, verifyEmail } from '../../../helper/auth';
import { useToasts } from 'react-toast-notifications'
import { useUserContext } from '../../../context/UserContext';
import * as queryString from 'query-string';
import EmailVerifyMoal from '../../../components/custom_modals/email_verify_modal';

const PageSignin = (props: any) => {

    const [cookies, setCookie] = useCookies();
    const {userInfo} = useUserContext();
    const navigate = useNavigate();
    const {loading, setLoading, setMessage, setModal} = useAppContext();
    const [emailVerify, setEmailVerify] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [validations, setValidations] = useState({
        email: '',
        password: ''
    })
    const { addToast } = useToasts();

    useEffect(() => {
        const params = queryString.parse(window.location.search);
        if (params.email_verify && !emailVerify) {
            const code = params.email_verify;
            
            setLoading(true);
            setEmailVerify(false);

            verifyEmail({code: code}).then(res => {
                if (res.success) {
                    setLoading(false);
                    setModal({open: true, children: <EmailVerifyMoal />}); return;
                    // navigate('/signin');
                } else {
                    setLoading(false);
                    addToast('verification failed', {appearance: 'error', autoDismiss: true});
                    navigate('/signin');
                }
            }).catch(err => {
                setLoading(false);
                addToast('verification failed', {appearance: 'error', autoDismiss: true});
                navigate('/signin');
            })
        }
    }, [emailVerify])

    //// already login then go to home page
    useEffect(() => {
        if (userInfo) navigate('/');
    }, [userInfo])


    const handleChange = (prop: any, value: any) => {
        setValidations(prevState => ({ ...prevState, [prop]: '' }));
        setValues({ ...values, [prop]: value });
    };

    const handleLogin = () => {
        if (!checkvalidations()) return;
    
        setLoading(true);

        login(values).then(res => {
            setLoading(false);         
            if (res.success) {
                setCookie('userInfo', JSON.stringify(res.data));
                navigate('/');
            } else {
                addToast(res.message, {appearance: 'error', autoDismiss: true});    
            }
            
        }).catch(error => {
            setLoading(false);
            addToast('Login failed', {appearance: 'error', autoDismiss: true});
        })
    };

    const checkvalidations = () => {
        if (values.email === '') {
          setValidations({ email: 'has-empty', password: '' });
          return false;
        } else if (!validateEmail(values.email)) {
          setValidations({ email: 'has-danger', password: '' });
          return false;
        } else if (values.password === '') {
          setValidations({ email: '', password: 'has-empty' });
          return false;
        } else {
          setValidations({ email: '', password: '' });
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
                                <h4 className="card-title mt-5">Sign in to NFT Dashboard</h4>
                            </div>
                            <div className="auth-form card">
                                <div className="card-body">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-12 mb-3">
                                                <label className="form-label">Email</label>
                                                <input name="email" type="text" className="form-control" value={values.email} placeholder="Email" onChange={e => handleChange('email', e.target.value)} />
                                                {validations.email == 'has-empty' ? (<span className='text-error'>Email Required*</span>) : ''}
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="form-label">Password</label>
                                                <input name="password" type="password" className="form-control" value={values.password} placeholder="Password" onChange={e => handleChange('password', e.target.value)} onKeyUp={e => e.keyCode === 13 && handleLogin()} />
                                                {validations.password == 'has-empty' ? (<span className='text-error'>Password Required*</span>) : ''}
                                            </div>
                                            <div className="col-6">
                                                <div className="form-check">
                                                    <input name="acceptTerms" type="checkbox" className="form-check-input " defaultValue="" />
                                                    <label className="form-check-label">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="col-6 text-end">
                                                <Link to="/reset">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div className="mt-3 d-grid gap-2"><button type="button" className="btn btn-primary mr-2" onClick={handleLogin}>Sign
                                            In</button></div>
                                    </form>
                                    <p className="mt-3 mb-0">Don't have an account?
                                        <Link to="/signup" className="text-primary">Sign up</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="privacy-link">
                                <Link to="/signin">Have an issue with 2-factor authentication?</Link><br />
                                <Link to="/signin">Privacy Policy</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PageSignin;
