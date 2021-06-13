import React, { useState } from 'react';
import uniqueid from 'uniqueid';

const ListadoNombres = () => {

    const [ nombre , setNombre ] = useState('');
    const [ listanombres , setListaNombres ] = useState([]);

    const addNombre = ( event ) => { 
        event.preventDefault();

        const nuevaPersona = {
            id: uniqueid(),
            nombre
        }

        setListaNombres( [ ...listanombres , nuevaPersona ] );
        setNombre('');
    }

    const deleteNombre = ( id ) =>{
        const auxArray = listanombres.filter( item => item.id !== id );
        setListaNombres( auxArray );
    }


    return(
        <div>
            <h2 className="text-center">Aplicación CRUD básica</h2>
            <div className="row">
                <div className="col">
                    <h4 className="text-center">Listado de nombres</h4>
                    <ul className="list-group p-3">
                        {
                            listanombres.map( item => 
                                <li key="{item.id}" className="list-group-item d-flex justify-content-between"> 
                                    { item.nombre } 
                                    <button className="btn btn-danger"
                                            onClick={ () => deleteNombre( item.id ) }
                                    >Borrar</button>
                                </li> 
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h4 className="text-center">Añadir nombre</h4>
                    <form action="#" onSubmit={ ( event ) => addNombre( event ) } className="form-group">
                        <input  type="text"
                                className="form-control my-3"
                                placeholder="Introduzca el nombre"
                                value={nombre}
                                onChange={ ( event ) => { setNombre( event.target.value ) } }
                        />
                        <input  type="submit" 
                                className="form-control btn btn-info btn-block" 
                                value="Registrar nombre"
                        />
                    </form>
                </div>
            </div>
        </div>
    )

}

export default ListadoNombres;