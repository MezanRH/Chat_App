import React from 'react'
import Container from '../component/Container'
import Hadding from '../component/Hadding'
import SubHadding from '../component/SubHadding'
import Paragraph from '../component/Paragraph'
import Input from '../component/Input'
import Button from '../component/Button'
import Image from '../component/Image'
import sidImg from '../assets/login.webp'

const Login = () => {
  return (
    <Container>
      <div className='grid grid-cols-2 gap-4'>
        <div className=" mt-44">
          <Hadding text="Welcome To Chatt."/>
          <SubHadding text="Log In" className=" mt-6"/>
          <Paragraph text="Email" className=" my-6"/>
          <Input placeholder="Enter your email"/>
          <Paragraph text="password" className=" my-6"/>
          <Input placeholder="Enter your password"/>
          <div className='flex justify-between my-5'>
          <div className='flex'>
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 h-5 w-5 focus:ring-blue-500"
            />
            <p className=' ml-2 font-inter'>Remember Me</p>
          </div>
          <div>
            <p className=' text-primary cursor-pointer font-inter'>Forgot Password?</p>
          </div>
          </div>
          <Button text="Login" className=" w-full"/>
          <h4 className='mt-5 font-inter'>Dont’t have an account? <span className=' text-primary font-semibold text-base cursor-pointer'>Sign Up</span></h4>
        </div>
        <div>
          <Image src={sidImg}/>
        </div>
      </div>
    </Container>
  )
}

export default Login