import './App.css';

import logoImg from './assets/logo.png';


export default function App() {
  return(
    <div className='container'>
        <img src={logoImg}
              alt="Logo do Projeto"
              className='logo'
         />

         <h2 className='title'>Categorias</h2>

         <section className='categoryArea'>
            <button className='categoryButton'>Motivação</button>
            <button className='categoryButton'>Bem Estar</button>
         </section>

         <button className='buttonFrase'>Gerar Frase</button>

         <p className='textoFrase'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse perspiciatis, dicta et exercitationem distinctio ipsa? Nostrum praesentium itaque assumenda magnam cupiditate at excepturi perspiciatis amet, maxime neque iusto blanditiis?
         </p>

    </div>
  );
}