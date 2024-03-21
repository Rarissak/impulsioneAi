import React from 'react';
import './depoimentos.css';

function Depoimentos({imagemSrc, nome , nicho , review}) {
    return (
        <>
            <div className='caixa'>
                <div className='caixa_top'>
                    <div className='caixa_top-img'>
                        <img src={imagemSrc} alt="Imagem" />
                    </div>
                    <div className='caixa_top-info'>
                        <p>{nome}</p>
                        <p>{nicho}</p>
                    </div>
                </div>
                <div className='caixa_bottom'>
                    {review}
                </div>
            </div>
        </>
    );
  }

export default Depoimentos;