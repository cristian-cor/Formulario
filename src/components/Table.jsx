const Table = ({ datos, setDatos }) => {

    const eliminar = (id) => {
    console.log(id)
    const filtrado = datos.filter((item) => item.id !== id)
    setDatos(filtrado)
    }
    
        return (
            <div>
                <table className="table container">
                    <thead>
                        <tr>
                            <th scope="col">nombre</th>
                            <th scope="col">apellido</th>
                            <th scope="col">acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datos.map(({nombre, apellido, id}) =>
                            (<tr key={id}>
                                <td>{nombre}</td>
                                <td>{apellido}</td>
                                <td>
                                    <button className='btn btn-danger' type='button' onClick={ () => eliminar(id)} > Eliminar</button>
                            </td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    
    export default Table
    