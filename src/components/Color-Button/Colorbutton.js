// 10-04-2021 TEJAS LADHANI
import React, { useState ,createContext} from 'react'
import { BlockPicker } from 'react-color'
import Tippy from '@tippyjs/react'
export  default function Colorbutton() {
    const [selectedColor, setselectedColor] = useState('#3e64ff');
 
    return (
        <div>
            <Tippy interactive={true} placement={'bottom'} content={

                <BlockPicker
                    color={selectedColor}
                    onChangeComplete={c => setselectedColor(c.hex)}
                />
            }>
                <button className="btn" style={{ backgroundColor: selectedColor }}>Choose Color</button>
            </Tippy>

        </div>

    )
}



// Amazing tutorial @ https://www.youtube.com/watch?v=senxk5FbsJM&list=LL&index=6