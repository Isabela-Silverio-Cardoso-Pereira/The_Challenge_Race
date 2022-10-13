import {Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from 'react-hook-form'
import {motion} from 'framer-motion'

function Register() {

const NavUnlisted = styled.ul`
    text-decoration: none;
`;
const linkStyle = {
    color: '#fff',
    textDecoration: "none",
}
const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm();
const onSubmit = (values: any) => alert(JSON.stringify(values, null, 2));

    return <>
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <header className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>

            <div className="headline">
                <h1>Cadastro</h1>
            </div>

            <div className="fInputTxt">
                <label htmlFor="inp" className="inpN">
                    <input id="inpN" placeholder="Nome" pattern=".{6,}" required></input>
                    <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                        <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                    </svg>
                </label>

                <label onSubmit={handleSubmit(onSubmit)} htmlFor="inp" className="inpN">
                    <input type="text" id="inpN" placeholder="Email" pattern=".{6,}" required {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
                    {errors.email && <span>Email inválido</span>}
                    <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                        <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                    </svg>
                </label>

                <label htmlFor="inp" className="inpN">
                    <input type="password" id="inpN" placeholder="Senha" pattern=".{6,}" required></input>
                    <svg width="280px" height="18px" viewBox="0 0 280 18" className="border">
                        <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                    </svg>
                </label>

                <div className="btnParent">
                <NavUnlisted>
                    <button className="btn-enter">
                        <Link style={linkStyle} to="/race">
                            Enviar
                        </Link>
                    </button>
                </NavUnlisted>
                </div>
            </div>
        </header>
        <footer>
            <svg className="footerWave waveRegister" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
        </footer>
    </motion.div>
    </>
}

export default Register