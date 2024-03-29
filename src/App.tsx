import './App.css';
import { useState } from 'react';

import logoImg from './assets/logo.png';


export default function App() {
  const [textoFrase, setTextoFrase] = useState<string>('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ]
    },
    {
      id: 2,
      nome: 'Bom dia',
      frases: [
        'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!', 
      'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!', 
      'Escreva em seu coração: todo dia é o melhor dia do ano.',
      'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.',

      ]
    }
  ];

  function trocarCategoriaFrase(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);
    setTextoFrase(
      `"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`
    );
  }


  return(
    <div className='container'>
        <img src={logoImg}
              alt="Logo do Projeto"
              className='logo'
         />

         <h2 className='title'>Categorias</h2>

         <section className='categoryArea'>
            {allFrases.map((item, index) => (
              <button key={item.id} 
                className='categoryButton'
                style={{ 
                  borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
                  borderColor: '#1fa4db',

                 }}

                 onClick={ () => trocarCategoriaFrase(index) }
                >
                {item.nome}
              </button>
            ))}
         </section>

         <button className='buttonFrase' onClick={gerarFrase}>Gerar Frase</button>

         {textoFrase.length > 0 && <p className='textoFrase'>{textoFrase}</p>}

    </div>
  );
}