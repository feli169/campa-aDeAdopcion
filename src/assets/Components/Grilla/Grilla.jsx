import React from 'react'
import MyCard from '../MyCard/MyCard'


const Grilla = () => {
    return (
        <div>
            <h4 className='text-center mb-4'>Ven a conoser nuestra manada y adopta un compañero</h4>

            <div className='container'>
                <div className='row'>
                    <MyCard
                        titulo='Princi'
                        descripcion='No doptas una mascotas, adoptas un compañero'
                        foto='https://placedog.net/950'
                        colorBack="warning"
                        colorFont='dark' />

                    <MyCard
                        titulo='Puchi'
                        descripcion='No doptas una mascotas, adoptas un compañero'
                        foto='https://placedog.net/500'
                        colorBack="dark"
                        colorFont='info' />

                    <MyCard
                        titulo='Loki'
                        descripcion='No doptas una mascotas, adoptas un compañero'
                        foto='https://placedog.net/750'
                        colorBack="success"
                        colorFont='Light' />

                    <MyCard
                        titulo='Lukas'
                        descripcion='No doptas una mascotas, adoptas un compañero'
                        foto='https://placedog.net/800'
                        colorBack="Light"
                        colorFont='primary' />

                    <MyCard
                        titulo='Romita'
                        descripcion='No doptas una mascotas, adoptas un compañero'
                        foto='https://placedog.net/600'
                        colorBack="danger"
                        colorFont='light' />

                    <MyCard
                        titulo='Francia'
                        descripcion='No doptas una mascotas, adoptas un compañero'
                        foto='https://placedog.net/785'
                        colorBack="dark"
                        colorFont='light' />

                </div>
            </div>

        </div>
    )
}

export default Grilla
