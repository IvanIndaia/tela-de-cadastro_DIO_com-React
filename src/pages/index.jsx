import { useState, useEffect, useMemo, useCallback } from 'react'

const Teste = () => {

    const [name, setName] = useState('Ivan Alex')
    const [age, setAge] = useState(32)

    // useMemo = Referência em variáveis (const, var, let).
    // useCallback = Referência de função.

    const handleChangeName = useCallback(() => {
        console.log('Alterou nome')
        setName(prev => prev === 'Ivan Alex' ? 'Juninho' : 'Ivan Alex')
    },[])

    const handleChangeAge = useCallback (() => {
        const newAge = age * 10
        console.log('Age Atual', age, ' -> ', newAge)
        setAge(prev => prev === 32 ? 26 : 32)
    }, [age])



    // const calculo = useMemo(() => {
    //     console.log('Calculou!', age)
    //     return 10 * age
    // }, [age])

    //console.log('Reenderizou', calculo)

    return (
        <div>
            <p>
            Nome: {name}
            </p>
            <br />
            <button onClick={handleChangeName}>Alter NAME</button><br />
            <br />
            <p>
            Idade: {age}
            </p>
            <br />
            <button onClick={handleChangeAge}>Alter AGE</button>
        </div>
    )
}

export { Teste }