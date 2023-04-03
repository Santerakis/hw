import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW14.module.css'
import axios from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import {useSearchParams} from 'react-router-dom'

/*
* 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
* 2 - дописать функцию sendQuery в HW14
* 3 - дописать функцию onChangeText в HW14
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW14 в HW5/pages/JuniorPlus
* */

const getTechs = (find: string) => {
    // console.log('dal: ', find)
    return axios
        .get<{ techs: string[] }>(
            'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test2',
            {params: {find}}
        )
        .then(res => res.data)               //я доисал
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
            return {techs: []}              //чтобы не присать потом if
        })
}

const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<string[]>([])

    const sendQuery = (value: string) => {
        setLoading(true)
        getTechs(value)
            .then((res) => {
                // делает студент
                // сохранить пришедшие данные
                //
                // if (res){
                setTechs(res.techs)
                setLoading(false)
                // console.log(res.techs)
                // }
            })
    }

    const onChangeText = (value: string) => {
        // делает студент
        // добавить/заменить значение в квери урла
        // setSearchParams(
        setFind(value)
        setSearchParams({find: value})

    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        // sendQuery(params.find || '')
        setFind(params.find || '')
        // console.log('params: ', params)
        // console.log('searchParams: ', searchParams)
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ))

    return (
        <div id={'hw14'}>
            <div className={s2.hwTitle}>Homework_#14</div>

            <div className={s2.hw}>
                <SuperDebouncedInput
                    id={'hw14-super-debounced-input'}
                    value={find}
                    onChangeText={onChangeText}
                    onDebouncedChange={sendQuery}
                />

                <div id={'hw14-loading'} className={s.loading}>
                    {isLoading ? '...ищем' : <br/>}
                </div>

                {mappedTechs}
            </div>
        </div>
    )
}

export default HW14
