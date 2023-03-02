import React from 'react'
import '../hoja-de-estilo/Testimonio.css'

function Testimonio (props) {
	return (
		<div className='contenedor-testimonio'>
			<img
				className='imagen-testimonio'
				src={require(`../imagenes/${props.imagen}.png`)}
				alt='Foto de Emma'/>
			<div className='contenedor-texto-testimonio'>
				<p className='nomre-testimonio'>
					<strong>{props.nombre}</strong> en {props.pais}</p>
				<p className='cargo-testimonio'>
					<strong>{props.cargo} </strong> en {props.empresa} </p>
				<p className='texto-testimonio'>"{props.testimonio}"</p>
			</div>
		</div>
	)

}

export default Testimonio;

