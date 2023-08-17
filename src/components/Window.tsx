import WindowBorder from './WindowBorder.tsx'
import WindowTitlebar from './WindowTitlebar.tsx'

function Window() {
    const [light, medium, dark] = ['', '', '']
    console.log(light, medium, dark)

    return (
        <div className="window">
            <WindowBorder />
            <WindowTitlebar />
            <div className="window__content"></div>
        </div>
    )
}

export default Window
