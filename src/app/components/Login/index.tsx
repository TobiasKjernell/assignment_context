import LoginForm from "../LoginForm";

const Login = () => {
  
   return <div className="bg-[url(/login.webp)] flex flex-col grow">
        <h1 className="hidden lg:block text-white text-8xl text-center p-5 font-(family-name:--font-style-script)">The Tasteless Kitchen</h1>
        <div className="grow flex items-center justify-center lg:mb-20">
            <LoginForm />
        </div>
    </div>
    
}
export default Login;   