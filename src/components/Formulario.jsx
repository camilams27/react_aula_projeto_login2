import React from 'react';
import './Formulario.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default function Formulario() {
    function boasVindas(){
        alert("Boas-vindas ~");
    }
    function mensagemEsqueceu(){
        alert("Você esqueceu a senha, que pena! Não posso te ajudar porque tamo sem backend rs");
    }
    function mensagemCriar(){
        alert("Você quer criar conta? você vai, só não agora rs");
    }
  return (
      <div className="container-principal">
            <form>
                <div className="container-left">
                    <img src="https://cdn-icons.flaticon.com/png/512/3406/premium/3406954.png?token=exp=1634601463~hmac=e1f71979f299909a49547eb7af6e3d71" alt="icone-pc" className="imagem" />
                </div>
                <div className="container-right">
                    <h2> Member Login</h2>
                    <div className="email">
                        <FontAwesomeIcon icon="envelope" className="icone" />
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <div  className="senha">
                        <FontAwesomeIcon icon="lock" className="icone"  />
                        <input type="text" id="nome" placeholder="Password" />
                    </div>
                    <button className="botao" onClick={()=>boasVindas()}>
                        LOGIN
                    </button>
                    <p className="esqueceu" onClick={()=>mensagemEsqueceu()}>
                        Forgot Username/Password?
                    </p>
                    <p className="criar">
                        Create your Account <FontAwesomeIcon icon="arrow-right" className="icone-seta" onClick={()=>mensagemCriar()}/>
                    </p>
                </div>
            </form>
        </div>
    );
}
