import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Bounce, toast } from 'react-toastify'

const VerifyCode = () => {
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate()

    let mySchema = Yup.object({
        resetCode: Yup.string().required("Code is required"),
    })

    let formik = useFormik({
        initialValues: {
            resetCode: "",
        },
        validationSchema: mySchema,
        onSubmit: (values) => {
            verifyCode(values)
        }
    },)

    async function verifyCode(values) {
        setLoading(true)
        await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", values).then((res) => {
            setMessage(res.data.message)
            setLoading(false)
            toast(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
            navigate("/updatepassword")
        }).catch((err) => {
            setError(err.response.data.message)
            setLoading(false)
            toast(err.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
        })
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center ">Code Verification</h2>

                    <form className="space-y-4 my-9" onSubmit={formik.handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Enter the code</label>
                            <input
                                type="text"
                                id="resetCode"
                                name="resetCode"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.resetCode}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="OTP"
                            />
                        </div>
                        {formik.errors.resetCode && formik.touched.resetCode ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">
                            {formik.errors.resetCode}
                        </div> : ""}


                        <button disabled={loading} type='submit' className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">

                            {loading ? <FontAwesomeIcon icon={faSpinner} spin size="2x" color="white" /> : "Verify"}
                        </button>

                        {message ? <div className="p-</button>4 mb-4 text-sm text-green-800 rounded-lg bg-green-50  dark:text-green-400" role="alert">
                            {message}
                        </div> : ""}
                        {error ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">
                            {error}
                        </div> : ""}
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Back to sign in?
                        <NavLink to='/login' className="text-indigo-600 hover:text-indigo-500 font-medium">  Sign In</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyCode
