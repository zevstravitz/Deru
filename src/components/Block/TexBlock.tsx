import React, {useState, useEffect} from 'react'
import katex from 'katex';

type TexBlockProps = {
    id: string
}

const TexBlock: React.FC<TexBlockProps> = (props) => {
    const [tex, setTex] = useState('\\sum + \\frac{3}{4} + 4')

    useEffect(() => {
        let element = document.getElementById(props.id)
        if (element) {
            katex.render(tex, element, {
                throwOnError: false,
                displayMode: true
            });
        }
    }, [tex, props.id])

    return (
        <span id={props.id}>
        </span>
    )
}

export default TexBlock;