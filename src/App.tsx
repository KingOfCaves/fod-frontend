import Window from './components/Window.tsx';
import { useMemo, useState } from 'react';

import crashDanceGIF from './assets/1637673020446.gif';
import palettes from './data/palettes.json';
import { nanoid } from 'nanoid';

function App() {
    const [currentPalette, setCurrentPalette] = useState(8);

    const colors = useMemo(() => {
        console.log(currentPalette);
        return palettes[currentPalette]['colors'];
    }, [currentPalette]);

    return (
        <>
            <div id="display">
                {colors.map((color, i) => (
                    <div
                        key={`color_${i}(${color})`}
                        style={{ backgroundColor: color }}
                    ></div>
                ))}
            </div>

            <select
                value={currentPalette}
                onChange={(e) => {
                    setCurrentPalette(+e.currentTarget.value);
                }}
            >
                {palettes.map((palette, i) => (
                    <option
                        key={palette.name}
                        value={i}
                    >
                        {palette.name}
                    </option>
                ))}
            </select>
            <Window
                uid={nanoid()}
                title={'cra.sh'}
                engraved={true}
                color={colors[0]}
            >
                <img src={crashDanceGIF} />
            </Window>
            <Window
                uid={nanoid()}
                color={colors[3]}
            >
                <img src={crashDanceGIF} />
            </Window>
        </>
    );
}

export default App;
