import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { userlogin } from '../../redux/slices/authslice';

const Login = () => {


    const username = useRef();
    const password = useRef();

    const dispatch = useDispatch();

 const handlesubmit = (e)=>{
    e.preventDefault();
    dispatch(userlogin(username.current.value, password.current.value));
    console.log(username.current.value)

 }

    return (
        <div className="login">
            <div className="innerlogin">
                <section class="h-100 gradient-form">
                    <div class=" py-5 h-100">
                        <div class="">
                            <div class="">
                                <div class="rounded-3 text-black">
                                    <div class=" g-0">
                                        <div class="card loginwidth">
                                            <div class="card-body p-md-5 mx-md-4">

                                                <div class="text-center">
                                           
                                                        <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                                </div>

                                                <form onSubmit={handlesubmit}>
                                                    <p>Please login to your account</p>

                                                    <div class="form-outline mb-4">
                                                        <input type="text" id="form2Example11" class="form-control"
                                                            placeholder="Phone number or email address" ref={username}/>
                                                        <label class="form-label" for="form2Example11">Username</label>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input type="password" id="form2Example22" class="form-control" ref={password}/>
                                                        <label class="form-label" for="form2Example22">Password</label>
                                                    </div>

                                                    <div class="text-end pt-1 mb-5 pb-1">
                                                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log in
                                                            </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login
