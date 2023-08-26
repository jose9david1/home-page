import React from 'react'
import '../hoja-de-estilo/Testimonio.css'


class Testimonio extends React.Component {
	render() {
		return (
			<div className='contenedor-testimonio'>
				<img
					className='imagen-testimonio'
					src={require(`../imagenes/${this.props.imagen}.png`)}
					alt={`Foto de ${this.props.nombre}`} />
				<div className='contenedor-texto-testimonio'>
					<p className='nomre-testimonio'>
						<strong>{this.props.nombre}</strong> en {this.props.pais}</p>
					<p className='cargo-testimonio'>
						<strong>{this.props.cargo} </strong> en {this.props.empresa} </p>
					<p className='texto-testimonio'>"{this.props.testimonio}"</p>
				</div>
			</div>
		)

	}
}


export default Testimonio;

