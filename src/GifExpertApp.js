import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


const GifExpertApp = () => {

    const [category, setCategories] = useState(['One Punch'])

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />

        <hr/>
        
        <ol>
            {
                category.map( category=>(
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ) )
            }
        </ol>
        </>
    )
}

export default GifExpertApp
