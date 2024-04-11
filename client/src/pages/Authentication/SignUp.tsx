import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/logo-icon.svg';
import flatpickr from 'flatpickr';

const SignUp = () => {
  // start hook store major
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };
  // end major

  // start gender
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [isGenderSelected, setIsGenderSelected] = useState<boolean>(false);

  const changeTextColorGender = () => {
    setIsGenderSelected(true);
  };
  // end gender

  // start dbo
  useEffect(() => {
    // Init flatpickr
    flatpickr('.form-datepicker', {
      mode: 'single',
      static: true,
      monthSelectorType: 'static',
      dateFormat: 'M j, Y',
      prevArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    });
  }, []);
  // end dbo

  const [FirstName, setFirstName] = useState<string>('');
  const [LastName, setLastName] = useState<string>('');
  const [LatinName, setLatinName] = useState<string>('');
  const [Phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'FirstName':
        setFirstName(value);
        break;
      case 'LastName':
        setLastName(value);
        break;
      case 'LatinName':
        setLatinName(value);
        break;
      case 'Phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    // Validation for first name
    if (!FirstName.trim()) {
      errors.FirstName = 'First name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(FirstName.trim())) {
      errors.FirstName = 'First name can only contain letters and spaces';
    }

    // Validation for last name
    if (!LastName.trim()) {
      errors.LastName = 'Last name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(LastName.trim())) {
      errors.LastName = 'Last name can only contain letters and spaces';
    }

    // Validation for latin name
    if (!LatinName.trim()) {
      errors.LatinName = 'Latin name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(LatinName.trim())) {
      errors.LatinName = 'Latin name can only contain letters and spaces';
    }

    // Validation for email
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (
      !/^[a-zA-Z0-9._%+-]+@(?:gmail|yahoo|outlook)\.com$/i.test(email.trim())
    ) {
      errors.email =
        'Invalid email format or domain (Only Gmail, Yahoo, or Outlook are allowed)';
    }

    // Validation for password
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{6,}/.test(
        password.trim(),
      )
    ) {
      errors.password =
        'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long';
    }

    // Set errors if any
    setErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Submit the form or call an API
      console.log('Form submitted');
    }
  };

  return (
    <>
      <div className="bg-boxdark dark:bg-boxdark flex items-center justify-center">
        <div className="w-full xl:w-[670px] sm:min-h-screen">
          <div className="w-full p-10 sm:p-12.5 xl:p-17.5">
            <div className="flex items-center justify-center mb-2">
              <img src={Logo} alt="Logo" className="w-[40px]" />
            </div>
            <h2 className="mb-5 text-2xl font-bold text-slate-200 text-center dark:text-white sm:text-title-xl2">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit}>
              {/* input first name and last name */}
              <div className="flex w-full gap-0 sm:gap-3 xl:gap-3 flex-col sm:flex-row">
                {/* First Name */}
                <div className="mb-4 w-full">
                  <label className="mb-2.5 block font-medium text-slate-300 dark:text-white">
                    First Name
                  </label>
                  <div className="relative mb-2">
                    <input
                      type="text"
                      name="FirstName"
                      value={FirstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-2.5 pl-6 pr-10 text-white outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                        errors.FirstName ? 'border-red-500' : ''
                      }`}
                    />
                    <span className="absolute right-4 top-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="fill-current"
                        width="22"
                        height="22"
                      >
                        <path
                          opacity="0.5"
                          d="M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  {errors.FirstName && (
                    <span className="text-red-500">{errors.FirstName}</span>
                  )}
                </div>

                {/* Last Name */}
                <div className="mb-4 w-full">
                  <label className="mb-2.5 block font-medium text-slate-300 dark:text-white">
                    Last Name
                  </label>
                  <div className="relative mb-2">
                    <input
                      type="text"
                      name="LastName"
                      value={LastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-2.5 pl-6 pr-10 text-white outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                        errors.LastName ? 'border-red-500' : ''
                      }`}
                    />
                    <span className="absolute right-4 top-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="fill-current"
                        width="22"
                        height="22"
                      >
                        <path
                          opacity="0.5"
                          d="M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  {errors.LastName && (
                    <span className="text-red-500">{errors.LastName}</span>
                  )}
                </div>
              </div>

              {/* input gender and latinName */}
              <div className="flex w-full gap-0 sm:gap-3 xl:gap-3 flex-col sm:flex-row">
                {/* Latin Name */}
                <div className="mb-4 w-full">
                  <label className="mb-2.5 block font-medium text-slate-300 dark:text-white">
                    Latin Name
                  </label>
                  <div className="relative mb-2">
                    <input
                      type="text"
                      name="LatinName"
                      value={LatinName}
                      onChange={handleChange}
                      placeholder="Enter your latin name"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-2.5 pl-6 pr-10 text-white outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                        errors.LatinName ? 'border-red-500' : ''
                      }`}
                    />
                    <span className="absolute right-4 top-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="fill-current"
                        width="22"
                        height="22"
                      >
                        <path
                          opacity="0.5"
                          d="M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  {errors.LatinName && (
                    <span className="text-red-500">{errors.LatinName}</span>
                  )}
                </div>

                {/* Gender */}
                <div className="mb-4 w-full">
                  <label className="mb-2.5 block font-medium text-slate-300">
                    Gender
                  </label>

                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select
                      value={selectedGender}
                      onChange={(e) => {
                        setSelectedGender(e.target.value);
                        changeTextColorGender();
                      }}
                      className={`relative z-20 w-full appearance-none rounded-lg border border-stroke py-2.5 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark bg-[#24303F] dark:focus:border-primary ${
                        isGenderSelected ? 'text-white' : ''
                      }`}
                    >
                      <option value="" disabled className="text-slate-500">
                        Select your gender
                      </option>
                      <option value="USA" className="text-slate-100">
                        Male
                      </option>
                      <option value="UK" className="text-slate-100">
                        Female
                      </option>
                    </select>

                    <span className="absolute top-1/2 right-3 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                  {errors.gender && (
                    <span className="text-red-500">{errors.gender}</span>
                  )}
                </div>
              </div>

              {/* input DOB and POB */}
              <div className="flex w-full gap-0 sm:gap-3 xl:gap-3 flex-col sm:flex-row">
                {/* DOB */}
                <div className="mb-4 w-full">
                  <div>
                    <label className="mb-2.5 block font-medium text-slate-300 dark:text-white">
                      Date picker
                    </label>
                    <div className="relative">
                      <input
                        className="form-datepicker w-full text-white rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-2.5 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        placeholder="mm/dd/yyyy"
                        data-class="flatpickr-right"
                      />

                      <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z"
                            fill="#64748B"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {errors.dob && (
                    <span className="text-red-500">{errors.dob}</span>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-4 w-full">
                  <label className="mb-2.5 block font-medium text-slate-300 dark:text-white">
                    Phone
                  </label>
                  <div className="relative mb-2">
                    <input
                      type="text"
                      name="Phone"
                      value={Phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`w-full rounded-lg border border-stroke bg-transparent py-2.5 pl-6 pr-10 text-white outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                        errors.Phone ? 'border-red-500' : ''
                      }`}
                    />
                    <span className="absolute right-4 top-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="22"
                        height="22"
                        className="fill-current"
                      >
                        <path
                          opacity="0.5"
                          d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  {errors.Phone && (
                    <span className="text-red-500">{errors.Phone}</span>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-slate-300 dark:text-white">
                  Email
                </label>
                <div className="relative mb-1">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full rounded-lg border border-stroke bg-transparent py-2.5 pl-6 pr-10 text-white outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  <span className="absolute right-4 top-3">
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                {errors.email && (
                  <span className=" text-red-500">{errors.email}</span>
                )}
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-slate-300 dark:text-white">
                  Address
                </label>
                <div className="relative mb-1">
                  <input
                    type="text"
                    name="address"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className={`w-full rounded-lg border border-stroke bg-transparent py-2.5 pl-6 pr-10 text-white outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  <span className="absolute right-4 top-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="fill-current"
                      width="22"
                      height="22"
                    >
                      <path
                        opacity="0.5"
                        d="M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"
                      ></path>
                    </svg>
                  </span>
                </div>
                {errors.address && (
                  <span className=" text-red-500">{errors.address}</span>
                )}
              </div>

              {/* POB */}
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-slate-300 dark:text-white">
                  Place Of Birth
                </label>
                <div className="relative mb-1">
                  <input
                    type="text"
                    name="PlaceOfBirth"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your pob"
                    className={`w-full rounded-lg border border-stroke bg-transparent py-2.5 pl-6 pr-10 text-white outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                      errors.PlaceOfBirth ? 'border-red-500' : ''
                    }`}
                  />
                  <span className="absolute right-4 top-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="fill-current"
                      width="22"
                      height="22"
                    >
                      <path
                        opacity="0.5"
                        d="M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"
                      ></path>
                    </svg>
                  </span>
                </div>
                {errors.PlaceOfBirth && (
                  <span className=" text-red-500">{errors.PlaceOfBirth}</span>
                )}
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-slate-300 dark:text-white">
                  Password
                </label>
                <div className="relative mb-1">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="6+ Characters, 1 Capital letter"
                    className={`w-full rounded-lg border border-stroke bg-transparent py-2.5 pl-6 pr-10 text-white outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                  />
                  <span className="absolute right-4 top-3">
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                          fill=""
                        />
                        <path
                          d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                {errors.password && (
                  <span className=" text-red-500">{errors.password}</span>
                )}
              </div>

              {/* Major */}
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-slate-300">
                  {' '}
                  Major{' '}
                </label>

                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select
                    value={selectedOption}
                    onChange={(e) => {
                      setSelectedOption(e.target.value);
                      changeTextColor();
                    }}
                    className={`relative z-20 w-full appearance-none rounded-lg border border-stroke py-2.5 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark bg-[#24303F] dark:focus:border-primary ${
                      isOptionSelected ? 'text-white' : ''
                    }`}
                  >
                    <option value="" disabled className="text-slate-500">
                      Select your subject
                    </option>
                    <option value="USA" className="text-slate-100">
                      USA
                    </option>
                  </select>

                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-slate-300 dark:text-white">
                  Upload Image
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{' '}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              {/* Sign up Button */}
              <div className="mb-5">
                <input
                  type="submit"
                  value="Sign Up"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-2   text-white transition hover:bg-opacity-90"
                />
              </div>

              {/* not have account yet */}
              <div className="mt-6 text-center">
                <p>
                  Already have an account?{' '}
                  <Link to="/auth/signin" className="text-primary">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
